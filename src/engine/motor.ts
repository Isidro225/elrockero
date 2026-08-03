import type {
  Disco,
  EntradaHistorial,
  Evento,
  EventoEnCurso,
  Final,
  Integrante,
  Opcion,
  Partida,
  Resultado,
  ResultadoFinal,
  ResumenAnio,
  Stats,
} from './types'
import { Azar } from './rng'
import {
  aplicarEfectos,
  aplicarStats,
  cumple,
  diferencia,
  faseActual,
  interpolar,
  limitar,
} from './reglas'
import { disparadorDelAnio } from './disparadores'
import { EVENTOS_POR_ID, EVENTOS_SORTEABLES } from '../content/eventos'
import { FINALES, FINAL_POR_DEFECTO } from '../content/finales'
import {
  DECADAS,
  DINERO_BASE,
  EDAD_INICIAL,
  GENEROS,
  NACIONALIDADES,
  ORIGENES,
  ROLES,
  STATS_BASE,
} from '../content/origenes'
import {
  nombreDeBanda,
  nombreDeIntegrante,
  reseniaDeDisco,
  tituloDeDisco,
} from '../content/nombres'

export const VERSION_PARTIDA = 1

// ---------------------------------------------------------------------------
// Creación
// ---------------------------------------------------------------------------

export interface ConfigCreacion {
  apodo: string
  nombre: string
  nacionalidadId: string
  rolId: string
  generoId: string
  decadaId: string
  origenId: string
}

export function nuevaPartida(cfg: ConfigCreacion, semilla = Date.now()): Partida {
  const nacionalidad = NACIONALIDADES.find((o) => o.id === cfg.nacionalidadId) ?? NACIONALIDADES[0]
  const rol = ROLES.find((o) => o.id === cfg.rolId) ?? ROLES[0]
  const genero = GENEROS.find((o) => o.id === cfg.generoId) ?? GENEROS[0]
  const decada = DECADAS.find((o) => o.id === cfg.decadaId) ?? DECADAS[1]
  const origen = ORIGENES.find((o) => o.id === cfg.origenId) ?? ORIGENES[1]

  const elecciones = [nacionalidad, rol, genero, decada, origen]

  let stats: Stats = { ...STATS_BASE }
  let dinero = DINERO_BASE
  const flags: Record<string, number> = {}

  for (const e of elecciones) {
    stats = aplicarStats(stats, e.efectos)
    dinero += e.dinero ?? 0
    for (const f of e.flags ?? []) flags[f] = 1
  }

  const partida: Partida = {
    version: VERSION_PARTIDA,
    semilla,
    rng: semilla,
    fasePartida: 'jugando',
    personaje: {
      nombre: cfg.nombre.trim() || cfg.apodo.trim(),
      apodo: cfg.apodo.trim() || 'Sin Nombre',
      nacionalidad: nacionalidad.nombre,
      rol: rol.nombre,
      genero: genero.nombre,
      decada: Number(decada.id),
      origen: origen.nombre,
    },
    stats,
    dinero,
    edad: EDAD_INICIAL,
    anio: decada.anio,
    anioInicio: decada.anio,
    flags,
    banda: null,
    discografia: [],
    historial: [
      {
        anio: decada.anio,
        edad: EDAD_INICIAL,
        tipo: 'hito',
        titulo: `Empieza todo`,
        detalle: `${cfg.apodo}, ${rol.nombre.toLowerCase()} de ${genero.nombre.toLowerCase()}. ${origen.nombre}.`,
      },
    ],
    eventosVistos: [],
    cola: [],
    agenda: [],
    indiceAgenda: 0,
    resumenAnio: null,
    final: null,
    picoFama: stats.fama,
    aniosAlLimite: 0,
  }

  return abrirAnio(partida)
}

// ---------------------------------------------------------------------------
// Agenda anual
// ---------------------------------------------------------------------------

function cupoAnual(p: Partida): number {
  const fase = faseActual(p)
  if (fase === 'estrellato') return 3
  if (fase === 'ascenso') return 3
  if (fase === 'legado') return 2
  return 2
}

function esRepetible(e: Evento): boolean {
  return e.unico === false
}

/** Arma la agenda del año y devuelve la partida lista para jugar. */
export function abrirAnio(partida: Partida): Partida {
  const azar = new Azar(partida.rng)
  const ids: string[] = []

  const mito = disparadorDelAnio(partida, azar)
  if (mito) ids.push(mito)

  const cola = [...partida.cola]
  while (cola.length > 0 && ids.length < 2) {
    const id = cola.shift()
    if (!id) break
    const ev = EVENTOS_POR_ID[id]
    if (!ev) continue
    if (partida.eventosVistos.includes(id) && !esRepetible(ev)) continue
    ids.push(id)
  }

  const cupo = cupoAnual(partida)
  const disponibles = EVENTOS_SORTEABLES.filter((e) => {
    if (ids.includes(e.id)) return false
    if (!esRepetible(e) && partida.eventosVistos.includes(e.id)) return false
    return cumple(e.requiere, partida, azar)
  })

  const elegidos: Evento[] = []
  const restantes = [...disponibles]
  while (elegidos.length + ids.length < cupo && restantes.length > 0) {
    const elegido = azar.elegirPorPeso(restantes, (e) => e.peso ?? 1)
    if (!elegido) break
    elegidos.push(elegido)
    const i = restantes.indexOf(elegido)
    restantes.splice(i, 1)
    // Evitamos dos eventos de la misma categoría en el mismo año.
    for (let j = restantes.length - 1; j >= 0; j--) {
      if (elegido.categoria && restantes[j].categoria === elegido.categoria) restantes.splice(j, 1)
    }
  }

  const agenda: EventoEnCurso[] = [
    ...ids.map((id) => ({ evento: EVENTOS_POR_ID[id] })),
    ...elegidos.map((e) => ({ evento: e })),
  ].filter((x) => x.evento)

  const siguiente: Partida = {
    ...partida,
    rng: azar.estado,
    cola,
    agenda,
    indiceAgenda: 0,
    resumenAnio: null,
    fasePartida: 'jugando',
  }

  // Un año sin nada que decidir se cierra solo.
  if (agenda.length === 0) return cerrarAnio(siguiente)
  return siguiente
}

// ---------------------------------------------------------------------------
// Resolución de eventos
// ---------------------------------------------------------------------------

export function eventoActual(p: Partida): EventoEnCurso | null {
  return p.agenda[p.indiceAgenda] ?? null
}

export function opcionesDisponibles(p: Partida): Opcion[] {
  return eventoActual(p)?.evento.opciones ?? []
}

function elegirResultado(opcion: Opcion, azar: Azar): Resultado {
  if (opcion.resultados.length === 1) return opcion.resultados[0]
  return azar.elegirPorPeso(opcion.resultados, (r) => r.peso ?? 1) ?? opcion.resultados[0]
}

/** Asegura invariantes derivadas de flags (banda formada, pico de fama, etc.). */
function normalizar(p: Partida, azar: Azar): Partida {
  let salida = p

  const sinBandaActiva =
    !salida.banda || !salida.banda.integrantes.some((i) => i.enBanda && i.vivo)

  if ((salida.flags.quiereBanda ?? 0) > 0 && sinBandaActiva) {
    const integrantes: Integrante[] = []
    const roles = ['guitarra', 'bajo', 'batería', 'teclados'].filter(
      (r) => r !== salida.personaje.rol.toLowerCase(),
    )
    const cuantos = azar.entero(2, 3)
    for (let i = 0; i < cuantos; i++) {
      integrantes.push({
        nombre: nombreDeIntegrante(azar),
        rol: roles[i % roles.length],
        vivo: true,
        enBanda: true,
      })
    }
    const nombre = nombreDeBanda(azar, salida.personaje.genero.toLowerCase())
    const esRefundacion = salida.banda !== null
    salida = {
      ...salida,
      banda: { nombre, formadaEn: salida.anio, integrantes },
      flags: { ...salida.flags, quiereBanda: 0 },
      historial: [
        ...salida.historial,
        {
          anio: salida.anio,
          edad: salida.edad,
          tipo: 'hito',
          titulo: esRefundacion ? 'Banda nueva' : 'Nace la banda',
          detalle: `Se llaman ${nombre}.`,
        },
      ],
    }
  }

  if (salida.stats.fama > salida.picoFama) {
    salida = { ...salida, picoFama: salida.stats.fama }
  }

  return salida
}

export function elegirOpcion(partida: Partida, opcionId: string): Partida {
  const enCurso = eventoActual(partida)
  if (!enCurso || enCurso.resuelto) return partida

  const opcion = enCurso.evento.opciones.find((o) => o.id === opcionId)
  if (!opcion) return partida
  if (opcion.requiere && !cumple(opcion.requiere, partida)) return partida

  const azar = new Azar(partida.rng)
  const resultado = elegirResultado(opcion, azar)

  let salida: Partida = { ...partida, rng: azar.estado }
  salida = aplicarEfectos(salida, resultado.efectos, azar)
  salida.rng = azar.estado

  const historial: EntradaHistorial[] = [
    ...salida.historial,
    {
      anio: salida.anio,
      edad: salida.edad,
      tipo: 'evento',
      titulo: interpolar(enCurso.evento.titulo, salida),
      detalle: interpolar(resultado.texto, salida),
    },
  ]

  if (resultado.efectos?.titular) {
    historial.push({
      anio: salida.anio,
      edad: salida.edad,
      tipo: 'titular',
      titulo: interpolar(resultado.efectos.titular, salida),
    })
  }

  const agenda = salida.agenda.map((item, i) =>
    i === salida.indiceAgenda ? { ...item, resuelto: { opcionId, resultado } } : item,
  )

  salida = {
    ...salida,
    historial,
    agenda,
    eventosVistos: salida.eventosVistos.includes(enCurso.evento.id)
      ? salida.eventosVistos
      : [...salida.eventosVistos, enCurso.evento.id],
  }

  salida = normalizar(salida, azar)
  salida.rng = azar.estado

  if (resultado.efectos?.final) {
    return terminar(salida, resultado.efectos.final)
  }

  return salida
}

/** Avanza al siguiente evento del año o cierra el año. */
export function continuar(partida: Partida): Partida {
  if (partida.fasePartida === 'final') return partida
  if (partida.indiceAgenda < partida.agenda.length - 1) {
    return { ...partida, indiceAgenda: partida.indiceAgenda + 1 }
  }
  return cerrarAnio(partida)
}

// ---------------------------------------------------------------------------
// Cierre de año: economía, discos, desgaste y chequeo de final
// ---------------------------------------------------------------------------

function componerDisco(p: Partida, azar: Azar): Disco {
  const bruto =
    p.stats.talento * 0.32 +
    p.stats.inspiracion * 0.38 +
    p.stats.quimica * 0.14 +
    p.stats.credibilidad * 0.16 +
    azar.entero(-12, 12) -
    (p.stats.adiccion > 65 ? 10 : 0)

  const puntaje = Math.max(5, Math.min(99, Math.round(bruto)))
  const ventas = Math.round(
    (p.stats.fama * 900 + puntaje * 400) * (0.6 + azar.float() * 0.9),
  )

  return {
    titulo: tituloDeDisco(azar, p.personaje.genero.toLowerCase(), p.discografia.length + 1),
    anio: p.anio,
    puntaje,
    ventas,
    resenia: reseniaDeDisco(azar, puntaje),
  }
}

function aniosDesdeUltimoDisco(p: Partida): number {
  if (p.discografia.length === 0) return 99
  return p.anio - p.discografia[p.discografia.length - 1].anio
}

function quiereEditar(p: Partida): boolean {
  if ((p.flags.publicaDisco ?? 0) > 0) return true
  if (!(p.flags.contratoSello ?? 0)) return false
  if (aniosDesdeUltimoDisco(p) < 2) return false
  if (p.stats.inspiracion < 42) return false
  if (p.stats.salud < 15 || p.stats.cordura < 15) return false
  return true
}

export function cerrarAnio(partida: Partida): Partida {
  const azar = new Azar(partida.rng)
  const statsAntes = { ...partida.stats }
  const dineroAntes = partida.dinero
  const lineas: string[] = []
  let p: Partida = { ...partida }

  // --- Disco del año --------------------------------------------------------
  let disco: Disco | null = null
  if (quiereEditar(p)) {
    disco = componerDisco(p, azar)
    const impactoFama = Math.round((disco.puntaje - 45) * 0.5 + p.stats.credibilidad * 0.06)
    p.discografia = [...p.discografia, disco]
    p.stats = aplicarStats(p.stats, {
      fama: Math.max(-8, impactoFama),
      inspiracion: -26,
      credibilidad: Math.round((disco.puntaje - 55) * 0.22),
      quimica: disco.puntaje >= 65 ? 6 : -4,
    })
    p.dinero += Math.round(disco.ventas * 0.9)
    p.flags = { ...p.flags, publicaDisco: 0 }
    p.historial = [
      ...p.historial,
      {
        anio: p.anio,
        edad: p.edad,
        tipo: 'disco',
        titulo: `«${disco.titulo}»`,
        detalle: `${disco.puntaje}/100 · ${disco.ventas.toLocaleString('es-AR')} copias · ${disco.resenia}`,
      },
    ]
    lineas.push(`Editaste «${disco.titulo}». La crítica le puso ${disco.puntaje} de 100.`)
  }

  // --- Economía -------------------------------------------------------------
  const regalias = Math.round(
    p.stats.fama * (1 + p.discografia.length * 0.35) * 72 * (0.8 + azar.float() * 0.5),
  )
  const gastos = Math.round(
    1800 + p.stats.fama * 52 + p.stats.adiccion * 50 + (p.flags.hijo ? 4000 : 0),
  )
  p.dinero += regalias - gastos
  if (regalias > gastos) {
    lineas.push(`Regalías y fechas: +$${(regalias - gastos).toLocaleString('es-AR')}.`)
  } else {
    lineas.push(`El año cerró en rojo: -$${(gastos - regalias).toLocaleString('es-AR')}.`)
  }
  if (p.dinero < 0) lineas.push('Estás endeudado.')

  // --- Desgaste anual -------------------------------------------------------
  // El cuerpo y la cabeza se recuperan solos cuando no hay nada encima. La
  // adicción es lo que rompe esa recuperación, y la edad la va apagando.
  const { adiccion, fama } = p.stats
  const desgasteEdad = p.edad > 34 ? (p.edad - 34) / 6 : 0
  const cuidado = Math.min(
    2,
    (p.flags.tratamiento ?? 0) + (p.flags.sobrio ?? 0) + (p.flags.retirado ?? 0),
  )
  const recuperaCuerpo = adiccion < 25 ? 3 : adiccion < 45 ? 1 : 0
  const recuperaCabeza = (p.flags.brote ?? 0) > 0 ? 0 : adiccion < 30 ? 3 : adiccion < 50 ? 1 : 0

  p.stats = aplicarStats(p.stats, {
    salud: Math.round(recuperaCuerpo + cuidado * 2 - desgasteEdad - adiccion / 14),
    cordura: Math.round(recuperaCabeza + cuidado * 3 - adiccion / 18 - (fama > 85 ? 2 : 0)),
    adiccion: adiccion > 35 ? 2 : adiccion > 15 ? 0 : -2,
    fama: aniosDesdeUltimoDisco(p) >= 3 ? -4 : -1,
    inspiracion: 6,
  })

  if (p.stats.adiccion >= 70) {
    p.aniosAlLimite += 1
    lineas.push('Otro año al límite.')
  }

  if (p.stats.fama > p.picoFama) p.picoFama = p.stats.fama

  // --- Chequeo de final -----------------------------------------------------
  p.rng = azar.estado
  const muerte = chequearMuerte(p, azar)
  p.rng = azar.estado
  if (muerte) return terminar(p, muerte)

  const resumen: ResumenAnio = {
    anio: p.anio,
    edad: p.edad,
    lineas,
    disco,
    cambios: diferencia(statsAntes, p.stats),
    dinero: p.dinero - dineroAntes,
  }

  return { ...p, rng: azar.estado, resumenAnio: resumen, fasePartida: 'resumen' }
}

/** Devuelve el id de un final si la partida tiene que terminar este año. */
function chequearMuerte(p: Partida, azar: Azar): string | null {
  if (p.stats.salud <= 4) return elegirFinalNatural(p, azar)
  if (p.stats.adiccion >= 96) return elegirFinalNatural(p, azar)
  if (p.stats.cordura <= 4) return elegirFinalNatural(p, azar)
  if (p.edad >= 88) return elegirFinalNatural(p, azar)
  if (p.edad >= 66) {
    const riesgo = (p.edad - 64) * 0.008 + (100 - p.stats.salud) * 0.002
    if (azar.chance(riesgo)) return elegirFinalNatural(p, azar)
  }
  return null
}

export function siguienteAnio(partida: Partida): Partida {
  if (partida.fasePartida === 'final') return partida
  const p: Partida = {
    ...partida,
    edad: partida.edad + 1,
    anio: partida.anio + 1,
  }
  return abrirAnio(p)
}

// ---------------------------------------------------------------------------
// Finales
// ---------------------------------------------------------------------------

function elegirFinalNatural(p: Partida, azar: Azar): string {
  const candidatos = FINALES.filter((f) => !f.soloForzado && cumple(f.requiere, p, azar))
  if (candidatos.length === 0) return FINAL_POR_DEFECTO
  const maxPrioridad = Math.max(...candidatos.map((f) => f.prioridad))
  const mejores = candidatos.filter((f) => f.prioridad === maxPrioridad)
  return azar.elegir(mejores).id
}

export function puntajeFinal(p: Partida, final: Final): number {
  const promedioDiscos =
    p.discografia.length > 0
      ? p.discografia.reduce((a, d) => a + d.puntaje, 0) / p.discografia.length
      : 0

  const bonoTono =
    final.tono === 'epico' ? 120 : final.tono === 'agridulce' ? 60 : final.tono === 'misterioso' ? 80 : 0

  const bruto =
    p.picoFama * 4 +
    p.stats.credibilidad * 3 +
    p.discografia.length * 20 +
    promedioDiscos * 2 +
    Math.min(150, Math.max(0, Math.floor(p.dinero / 8000))) +
    Math.max(0, p.edad - 27) * 2 +
    bonoTono

  return Math.max(0, Math.round(bruto))
}

export function rangoDePuntaje(puntaje: number): string {
  if (puntaje >= 1150) return 'Inmortal'
  if (puntaje >= 950) return 'Leyenda'
  if (puntaje >= 750) return 'Estrella'
  if (puntaje >= 550) return 'Nombre propio'
  if (puntaje >= 350) return 'De culto'
  if (puntaje >= 180) return 'Conocido en el barrio'
  return 'Un asterisco'
}

export function terminar(partida: Partida, finalId: string): Partida {
  const final = FINALES.find((f) => f.id === finalId) ?? FINALES.find((f) => f.id === FINAL_POR_DEFECTO)!
  const puntaje = puntajeFinal(partida, final)
  const resultado: ResultadoFinal = {
    final,
    edad: partida.edad,
    anio: partida.anio,
    puntaje,
    rango: rangoDePuntaje(puntaje),
  }

  return {
    ...partida,
    fasePartida: 'final',
    final: resultado,
    historial: [
      ...partida.historial,
      {
        anio: partida.anio,
        edad: partida.edad,
        tipo: 'final',
        titulo: final.titulo,
        detalle: final.epitafio,
      },
    ],
  }
}

// ---------------------------------------------------------------------------
// Utilidades para la UI
// ---------------------------------------------------------------------------

export function textoEvento(p: Partida, evento: Evento): string {
  return interpolar(evento.texto, p)
}

export function tituloEvento(p: Partida, evento: Evento): string {
  return interpolar(evento.titulo, p)
}

export function progresoAnio(p: Partida): { actual: number; total: number } {
  return { actual: Math.min(p.indiceAgenda + 1, p.agenda.length), total: p.agenda.length }
}

export { limitar }
