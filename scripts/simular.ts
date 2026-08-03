/**
 * Simulador headless: juega N partidas eligiendo opciones al azar y reporta
 * distribución de finales, edades y errores. Sirve para detectar callejones
 * sin salida, finales inalcanzables y bucles infinitos.
 *
 *   npm run simular -- 3000
 */
import type { Partida } from '../src/engine/types'
import { continuar, elegirOpcion, nuevaPartida, siguienteAnio } from '../src/engine/motor'
import { cumple } from '../src/engine/reglas'
import { DECADAS, GENEROS, NACIONALIDADES, ORIGENES, ROLES } from '../src/content/origenes'
import { FINALES } from '../src/content/finales'
import { TODOS_LOS_EVENTOS } from '../src/content/eventos'

const CORRIDAS = Number(process.argv[2] ?? 2000)
const TOPE_ANIOS = 120

function aleatorio<T>(lista: readonly T[]): T {
  return lista[Math.floor(Math.random() * lista.length)]
}

interface Reporte {
  finales: Record<string, number>
  eventosVistos: Record<string, number>
  edades: number[]
  puntajes: number[]
  errores: string[]
  sinFinal: number
}

function jugarUna(reporte: Reporte, semilla: number): void {
  let p: Partida = nuevaPartida(
    {
      apodo: 'Test',
      nombre: 'Test',
      nacionalidadId: aleatorio(NACIONALIDADES).id,
      rolId: aleatorio(ROLES).id,
      generoId: aleatorio(GENEROS).id,
      decadaId: aleatorio(DECADAS).id,
      origenId: aleatorio(ORIGENES).id,
    },
    semilla,
  )

  let vueltas = 0
  while (p.fasePartida !== 'final' && vueltas < TOPE_ANIOS * 8) {
    vueltas++
    if (p.fasePartida === 'resumen') {
      p = siguienteAnio(p)
      continue
    }
    const actual = p.agenda[p.indiceAgenda]
    if (!actual) {
      p = continuar(p)
      continue
    }
    if (!actual.resuelto) {
      const posibles = actual.evento.opciones.filter((o) => cumple(o.requiere, p))
      const opcion = posibles.length > 0 ? aleatorio(posibles) : actual.evento.opciones[0]
      const antes = p
      p = elegirOpcion(p, opcion.id)
      if (p === antes) {
        reporte.errores.push(`Opción sin efecto: ${actual.evento.id} / ${opcion.id}`)
        p = continuar(p)
      }
      for (const id of p.eventosVistos) {
        reporte.eventosVistos[id] = (reporte.eventosVistos[id] ?? 0) + 1
      }
    } else {
      p = continuar(p)
    }
  }

  if (p.fasePartida !== 'final' || !p.final) {
    reporte.sinFinal++
    return
  }
  const id = p.final.final.id
  reporte.finales[id] = (reporte.finales[id] ?? 0) + 1
  reporte.edades.push(p.edad)
  reporte.puntajes.push(p.final.puntaje)
}

function percentil(lista: number[], q: number): number {
  const orden = [...lista].sort((a, b) => a - b)
  return orden[Math.min(orden.length - 1, Math.floor(orden.length * q))] ?? 0
}

function main(): void {
  const reporte: Reporte = {
    finales: {},
    eventosVistos: {},
    edades: [],
    puntajes: [],
    errores: [],
    sinFinal: 0,
  }

  const t0 = Date.now()
  for (let i = 0; i < CORRIDAS; i++) jugarUna(reporte, i * 7919 + 13)
  const ms = Date.now() - t0

  console.log(`\n${CORRIDAS} partidas en ${ms} ms (${(ms / CORRIDAS).toFixed(2)} ms c/u)`)
  console.log(`Partidas sin final: ${reporte.sinFinal}`)
  console.log(
    `Edad de muerte/retiro — p10 ${percentil(reporte.edades, 0.1)} · mediana ${percentil(
      reporte.edades,
      0.5,
    )} · p90 ${percentil(reporte.edades, 0.9)}`,
  )
  console.log(
    `Puntaje — p10 ${percentil(reporte.puntajes, 0.1)} · mediana ${percentil(
      reporte.puntajes,
      0.5,
    )} · p90 ${percentil(reporte.puntajes, 0.9)}`,
  )

  console.log('\n--- Finales ---')
  const filas = FINALES.map((f) => ({ id: f.id, titulo: f.titulo, n: reporte.finales[f.id] ?? 0 }))
  filas.sort((a, b) => b.n - a.n)
  for (const f of filas) {
    const pct = ((f.n / CORRIDAS) * 100).toFixed(1)
    const marca = f.n === 0 ? '  ⚠ NUNCA' : ''
    console.log(`${String(f.n).padStart(5)}  ${pct.padStart(5)}%  ${f.titulo}${marca}`)
  }

  const nunca = TODOS_LOS_EVENTOS.filter((e) => !reporte.eventosVistos[e.id])
  console.log(`\n--- Eventos nunca vistos (${nunca.length}/${TODOS_LOS_EVENTOS.length}) ---`)
  for (const e of nunca) console.log(`  ${e.id}  (${e.titulo})`)

  if (reporte.errores.length > 0) {
    console.log(`\n--- Errores (${reporte.errores.length}) ---`)
    for (const e of [...new Set(reporte.errores)].slice(0, 20)) console.log(`  ${e}`)
  }
}

main()
