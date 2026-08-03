import type { Condicion, Partida } from './types'
import { cumple } from './reglas'
import { Azar } from './rng'

// Los eventos-mito no entran al sorteo normal: se disparan cuando la partida
// llega a un estado concreto. Acá está la tabla de esos disparadores, ordenada
// por prioridad (el primero que aplica gana el año).

export interface Disparador {
  evento: string
  requiere: Condicion
  /** Probabilidad de que salte el año en que se cumple la condición. */
  probabilidad: number
  prioridad: number
}

export const DISPARADORES: Disparador[] = [
  // El club de los 27 siempre aparece a los 27. Es la cita obligada.
  {
    evento: 'mito-27',
    requiere: { edadMin: 27, edadMax: 27 },
    probabilidad: 1,
    prioridad: 100,
  },

  // El último invierno: fama alta, cabeza muy mal, sustancias de por medio.
  {
    evento: 'mito-ultimo-invierno',
    requiere: {
      stats: { cordura: { max: 24 }, fama: { min: 58 } },
      edadMin: 22,
      sinFlags: ['estable'],
    },
    probabilidad: 0.75,
    prioridad: 95,
  },

  // El cuarto oscuro: la cabeza empieza a ceder.
  {
    evento: 'mito-cuarto-oscuro',
    requiere: { stats: { cordura: { max: 34 } }, edadMin: 21, sinFlags: ['estable'] },
    probabilidad: 0.7,
    prioridad: 90,
  },

  // El diagnóstico: el cuerpo pasa factura.
  {
    evento: 'mito-diagnostico',
    requiere: { stats: { salud: { max: 26 } }, edadMin: 42 },
    probabilidad: 0.8,
    prioridad: 88,
  },

  // El noveno piso: hace falta fama, algo encima y ganas de romper todo.
  {
    evento: 'mito-pileta',
    requiere: {
      stats: { fama: { min: 62 }, adiccion: { min: 38 } },
      edadMin: 26,
      edadMax: 58,
    },
    probabilidad: 0.45,
    prioridad: 80,
  },

  // Desaparecer: mucha presión, poca cabeza, y todavía no tocaste fondo.
  {
    evento: 'mito-desaparecer',
    requiere: {
      stats: { fama: { min: 50 }, cordura: { max: 45 } },
      edadMin: 24,
      edadMax: 60,
    },
    probabilidad: 0.35,
    prioridad: 70,
  },

  // La encrucijada: poco oficio y mucha desesperación por tenerlo.
  {
    evento: 'mito-encrucijada',
    requiere: {
      stats: { talento: { max: 58 }, inspiracion: { min: 45 } },
      edadMin: 19,
      edadMax: 40,
    },
    probabilidad: 0.16,
    prioridad: 50,
  },

  // La reunión: hay que haberse separado y que haya pasado tiempo.
  {
    evento: 'mito-reunion',
    requiere: {
      flags: ['separacion'],
      edadMin: 46,
      stats: { fama: { min: 38 } },
    },
    probabilidad: 0.6,
    prioridad: 60,
  },

  // El Salón de la Fama: carrera larga y consagrada.
  {
    evento: 'mito-salon',
    requiere: {
      edadMin: 50,
      discosMin: 4,
      stats: { fama: { min: 62 } },
    },
    probabilidad: 0.5,
    prioridad: 55,
  },
]

/** Devuelve el id del evento-mito que corresponde disparar este año, si hay alguno. */
export function disparadorDelAnio(p: Partida, azar: Azar): string | null {
  const candidatos = DISPARADORES.filter(
    (d) => !p.eventosVistos.includes(d.evento) && !p.cola.includes(d.evento) && cumple(d.requiere, p),
  ).sort((a, b) => b.prioridad - a.prioridad)

  for (const d of candidatos) {
    if (azar.chance(d.probabilidad)) return d.evento
  }
  return null
}
