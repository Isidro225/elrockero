import type { Evento } from '../../engine/types'
import { EVENTOS_APERTURA } from './apertura'
import { EVENTOS_GARAJE } from './garaje'
import { EVENTOS_ASCENSO } from './ascenso'
import { EVENTOS_ESTRELLATO } from './estrellato'
import { EVENTOS_SUSTANCIAS } from './sustancias'
import { EVENTOS_LEGADO } from './legado'
import { EVENTOS_MITO } from './mito'
import { EVENTOS_RUTINA } from './rutina'
import { EVENTOS_BIZARROS } from './bizarros'

export const TODOS_LOS_EVENTOS: Evento[] = [
  ...EVENTOS_APERTURA,
  ...EVENTOS_GARAJE,
  ...EVENTOS_ASCENSO,
  ...EVENTOS_ESTRELLATO,
  ...EVENTOS_SUSTANCIAS,
  ...EVENTOS_LEGADO,
  ...EVENTOS_MITO,
  ...EVENTOS_RUTINA,
  ...EVENTOS_BIZARROS,
]

export const EVENTOS_POR_ID: Record<string, Evento> = Object.fromEntries(
  TODOS_LOS_EVENTOS.map((e) => [e.id, e]),
)

/** Eventos que entran al sorteo anual (los de guion se encolan a mano). */
export const EVENTOS_SORTEABLES: Evento[] = TODOS_LOS_EVENTOS.filter((e) => !e.guion)
