import type {
  Condicion,
  Efectos,
  Fase,
  Partida,
  StatKey,
  Stats,
} from './types'
import { STAT_KEYS } from './types'
import type { Azar } from './rng'

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

export function limitar(valor: number): number {
  return Math.max(0, Math.min(100, Math.round(valor)))
}

export function statsVacias(): Stats {
  return {
    talento: 0,
    fama: 0,
    salud: 0,
    cordura: 0,
    credibilidad: 0,
    adiccion: 0,
    quimica: 0,
    inspiracion: 0,
  }
}

export function aplicarStats(base: Stats, delta: Partial<Stats>): Stats {
  const salida = { ...base }
  for (const key of STAT_KEYS) {
    const d = delta[key]
    if (typeof d === 'number') salida[key] = limitar(salida[key] + d)
  }
  return salida
}

export function diferencia(antes: Stats, despues: Stats): Partial<Stats> {
  const salida: Partial<Stats> = {}
  for (const key of STAT_KEYS) {
    const d = despues[key] - antes[key]
    if (d !== 0) salida[key] = d
  }
  return salida
}

// ---------------------------------------------------------------------------
// Fase de carrera
// ---------------------------------------------------------------------------

export function faseActual(p: Partida): Fase {
  const { fama } = p.stats
  const discos = p.discografia.length
  if (p.edad >= 45 || (p.edad >= 38 && fama < 45)) return 'legado'
  if (fama >= 75 && discos >= 2) return 'estrellato'
  if (p.edad >= 32 && fama < 60) return 'meseta'
  if (fama >= 35 || discos >= 1) return 'ascenso'
  return 'garaje'
}

// ---------------------------------------------------------------------------
// Condiciones
// ---------------------------------------------------------------------------

export function cumple(cond: Condicion | undefined, p: Partida, azar?: Azar): boolean {
  if (!cond) return true

  if (cond.edadMin !== undefined && p.edad < cond.edadMin) return false
  if (cond.edadMax !== undefined && p.edad > cond.edadMax) return false
  if (cond.anioMin !== undefined && p.anio < cond.anioMin) return false
  if (cond.anioMax !== undefined && p.anio > cond.anioMax) return false
  if (cond.dineroMin !== undefined && p.dinero < cond.dineroMin) return false
  if (cond.dineroMax !== undefined && p.dinero > cond.dineroMax) return false

  if (cond.stats) {
    for (const key of Object.keys(cond.stats) as StatKey[]) {
      const rango = cond.stats[key]
      if (!rango) continue
      const valor = p.stats[key]
      if (rango.min !== undefined && valor < rango.min) return false
      if (rango.max !== undefined && valor > rango.max) return false
    }
  }

  if (cond.flags && !cond.flags.every((f) => (p.flags[f] ?? 0) > 0)) return false
  if (cond.sinFlags && cond.sinFlags.some((f) => (p.flags[f] ?? 0) > 0)) return false
  if (cond.algunaFlag && !cond.algunaFlag.some((f) => (p.flags[f] ?? 0) > 0)) return false

  if (cond.genero && !cond.genero.includes(p.personaje.genero)) return false
  if (cond.nacionalidad && !cond.nacionalidad.includes(p.personaje.nacionalidad)) return false
  if (cond.rol && !cond.rol.includes(p.personaje.rol)) return false
  if (cond.decada && !cond.decada.includes(p.personaje.decada)) return false
  if (cond.fase && !cond.fase.includes(faseActual(p))) return false

  if (cond.discosMin !== undefined && p.discografia.length < cond.discosMin) return false
  if (cond.discosMax !== undefined && p.discografia.length > cond.discosMax) return false

  if (cond.tieneBanda !== undefined) {
    const tiene = p.banda !== null && p.banda.integrantes.some((i) => i.enBanda && i.vivo)
    if (cond.tieneBanda !== tiene) return false
  }

  if (cond.chance !== undefined && azar && !azar.chance(cond.chance)) return false

  return true
}

/** Explica por qué una opción está bloqueada, para mostrarlo en la UI. */
export function motivoBloqueo(cond: Condicion | undefined, p: Partida): string | null {
  if (!cond) return null
  if (cond.dineroMin !== undefined && p.dinero < cond.dineroMin) {
    return `Necesitás $${cond.dineroMin.toLocaleString('es-AR')}`
  }
  if (cond.stats) {
    for (const key of Object.keys(cond.stats) as StatKey[]) {
      const rango = cond.stats[key]
      if (!rango) continue
      if (rango.min !== undefined && p.stats[key] < rango.min) {
        return `Te falta ${key} (${p.stats[key]}/${rango.min})`
      }
      if (rango.max !== undefined && p.stats[key] > rango.max) {
        return `Demasiada ${key} (${p.stats[key]}/${rango.max})`
      }
    }
  }
  if (cond.tieneBanda === true) return 'Necesitás una banda'
  if (cond.flags?.length) return 'Todavía no'
  return 'No disponible'
}

// ---------------------------------------------------------------------------
// Efectos
// ---------------------------------------------------------------------------

/** Aplica efectos sobre una copia de la partida. Devuelve la partida nueva. */
export function aplicarEfectos(p: Partida, ef: Efectos | undefined, azar: Azar): Partida {
  if (!ef) return p
  let salida: Partida = { ...p }

  if (ef.stats) salida.stats = aplicarStats(salida.stats, ef.stats)
  if (ef.dinero) salida.dinero = Math.round(salida.dinero + ef.dinero)

  if (ef.flags) {
    const flags = { ...salida.flags }
    for (const [k, v] of Object.entries(ef.flags)) {
      flags[k] = (flags[k] ?? 0) + v
    }
    salida.flags = flags
  }

  if (ef.quitaFlags?.length) {
    const flags = { ...salida.flags }
    for (const f of ef.quitaFlags) delete flags[f]
    salida.flags = flags
  }

  if (ef.encola?.length) {
    salida.cola = [...salida.cola, ...ef.encola.filter((id) => !salida.cola.includes(id))]
  }

  if (ef.formaBanda && !salida.banda) {
    salida.flags = { ...salida.flags, quiereBanda: (salida.flags.quiereBanda ?? 0) + 1 }
  }

  if (ef.disuelveBanda && salida.banda) {
    salida.banda = {
      ...salida.banda,
      integrantes: salida.banda.integrantes.map((i) => ({ ...i, enBanda: false })),
    }
    salida.flags = { ...salida.flags, bandaDisuelta: (salida.flags.bandaDisuelta ?? 0) + 1 }
  }

  if (ef.bandaSale && salida.banda) {
    const activos = salida.banda.integrantes.filter((i) => i.enBanda && i.vivo)
    const cuantos = Math.min(ef.bandaSale, activos.length)
    const salen = azar.mezclar(activos).slice(0, cuantos)
    const nombres = new Set(salen.map((i) => i.nombre))
    salida.banda = {
      ...salida.banda,
      integrantes: salida.banda.integrantes.map((i) =>
        nombres.has(i.nombre) ? { ...i, enBanda: false } : i,
      ),
    }
  }

  if (ef.publicaDisco) {
    salida.flags = { ...salida.flags, publicaDisco: 1 }
  }

  return salida
}

// ---------------------------------------------------------------------------
// Interpolación de texto
// ---------------------------------------------------------------------------

export function interpolar(texto: string, p: Partida): string {
  const banda = p.banda?.nombre ?? 'tu banda'
  const companiero =
    p.banda?.integrantes.find((i) => i.enBanda && i.vivo)?.nombre ?? 'el bajista'
  return texto
    .replace(/\{apodo\}/g, p.personaje.apodo)
    .replace(/\{nombre\}/g, p.personaje.nombre)
    .replace(/\{banda\}/g, banda)
    .replace(/\{companiero\}/g, companiero)
    .replace(/\{edad\}/g, String(p.edad))
    .replace(/\{anio\}/g, String(p.anio))
    .replace(/\{rol\}/g, p.personaje.rol)
    .replace(/\{genero\}/g, p.personaje.genero)
    .replace(/\{pais\}/g, p.personaje.nacionalidad)
    .replace(/\{origen\}/g, p.personaje.origen)
}
