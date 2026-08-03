// ---------------------------------------------------------------------------
// Tipos base de El Rockero
// ---------------------------------------------------------------------------

/** Stats de 0 a 100. El dinero va aparte porque no tiene techo (ni piso). */
export type StatKey =
  | 'talento'
  | 'fama'
  | 'salud'
  | 'cordura'
  | 'credibilidad'
  | 'adiccion'
  | 'quimica'
  | 'inspiracion'

export type Stats = Record<StatKey, number>

export const STAT_KEYS: StatKey[] = [
  'talento',
  'fama',
  'salud',
  'cordura',
  'credibilidad',
  'adiccion',
  'quimica',
  'inspiracion',
]

export interface StatMeta {
  key: StatKey
  nombre: string
  descripcion: string
  /** true = que suba es malo */
  invertida?: boolean
}

export const STAT_META: Record<StatKey, StatMeta> = {
  talento: {
    key: 'talento',
    nombre: 'Talento',
    descripcion: 'Lo que sabés hacer con las manos y con el oído. No se pierde fácil.',
  },
  fama: {
    key: 'fama',
    nombre: 'Fama',
    descripcion: 'Cuánta gente sabe tu nombre. Sube rápido, baja más rápido.',
  },
  salud: {
    key: 'salud',
    nombre: 'Salud',
    descripcion: 'El cuerpo. Si llega a cero, se terminó el show.',
  },
  cordura: {
    key: 'cordura',
    nombre: 'Cordura',
    descripcion: 'La cabeza. Si llega a cero, también se terminó, pero peor.',
  },
  credibilidad: {
    key: 'credibilidad',
    nombre: 'Credibilidad',
    descripcion: 'Lo que piensan de vos los que saben. La prensa, los músicos, la calle.',
  },
  adiccion: {
    key: 'adiccion',
    nombre: 'Adicción',
    descripcion: 'Lo que te pide el cuerpo cuando no estás tocando.',
    invertida: true,
  },
  quimica: {
    key: 'quimica',
    nombre: 'Química',
    descripcion: 'Cómo te llevás con la banda. Sin banda no hay disco.',
  },
  inspiracion: {
    key: 'inspiracion',
    nombre: 'Inspiración',
    descripcion: 'Las canciones que tenés adentro esperando salir.',
  },
}

// ---------------------------------------------------------------------------
// Creación de personaje
// ---------------------------------------------------------------------------

export interface OpcionOrigen {
  id: string
  nombre: string
  descripcion: string
  efectos: Partial<Stats>
  dinero?: number
  flags?: string[]
}

export interface Personaje {
  nombre: string
  apodo: string
  nacionalidad: string
  rol: string
  genero: string
  decada: number
  origen: string
}

// ---------------------------------------------------------------------------
// Fases de carrera
// ---------------------------------------------------------------------------

export type Fase = 'garaje' | 'ascenso' | 'estrellato' | 'meseta' | 'legado'

export const FASE_NOMBRE: Record<Fase, string> = {
  garaje: 'El garaje',
  ascenso: 'El ascenso',
  estrellato: 'El estrellato',
  meseta: 'La meseta',
  legado: 'El legado',
}

// ---------------------------------------------------------------------------
// Condiciones (mini DSL declarativo)
// ---------------------------------------------------------------------------

export interface RangoStat {
  min?: number
  max?: number
}

export interface Condicion {
  edadMin?: number
  edadMax?: number
  anioMin?: number
  anioMax?: number
  stats?: Partial<Record<StatKey, RangoStat>>
  dineroMin?: number
  dineroMax?: number
  /** Todas estas flags tienen que estar presentes (valor > 0). */
  flags?: string[]
  /** Ninguna de estas flags puede estar presente. */
  sinFlags?: string[]
  /** Al menos una de estas flags. */
  algunaFlag?: string[]
  genero?: string[]
  nacionalidad?: string[]
  rol?: string[]
  decada?: number[]
  fase?: Fase[]
  /** Cantidad mínima de discos publicados. */
  discosMin?: number
  discosMax?: number
  tieneBanda?: boolean
  /** Probabilidad extra de que la condición se cumpla (0..1). */
  chance?: number
}

// ---------------------------------------------------------------------------
// Efectos
// ---------------------------------------------------------------------------

export interface Efectos {
  stats?: Partial<Stats>
  dinero?: number
  /** Suma el valor a la flag (por defecto crea/incrementa en 1). */
  flags?: Record<string, number>
  /** Borra flags. */
  quitaFlags?: string[]
  /** Encola ids de eventos para los próximos años. */
  encola?: string[]
  /** Fuerza un final por id. */
  final?: string
  /** Alta o baja de integrantes. */
  bandaSale?: number
  /** Crea una banda si no hay. */
  formaBanda?: boolean
  /** Disuelve la banda. */
  disuelveBanda?: boolean
  /** Publica un disco al cierre del año. */
  publicaDisco?: boolean
  /** Titular de prensa que queda en la línea de tiempo. */
  titular?: string
}

// ---------------------------------------------------------------------------
// Eventos
// ---------------------------------------------------------------------------

export interface Resultado {
  /** Peso relativo dentro de la opción. Por defecto 1. */
  peso?: number
  /** Texto que se muestra tras elegir. */
  texto: string
  efectos?: Efectos
}

export type Riesgo = 'seguro' | 'dudoso' | 'riesgoso' | 'letal'

export interface Opcion {
  id: string
  texto: string
  /** Si no se cumple, la opción aparece bloqueada con motivo. */
  requiere?: Condicion
  /** Motivo legible cuando está bloqueada. */
  bloqueo?: string
  /** Etiqueta visual de riesgo. */
  riesgo?: Riesgo
  /** Uno o varios resultados posibles (se sortea por peso). */
  resultados: Resultado[]
}

export interface Evento {
  id: string
  titulo: string
  /** Bajada corta, tipo epígrafe de revista. */
  epigrafe?: string
  texto: string
  requiere?: Condicion
  /** Peso relativo en el sorteo. Por defecto 1. */
  peso?: number
  /** Si es true, sólo puede salir una vez por partida. Por defecto true. */
  unico?: boolean
  /** Los eventos de guion no entran al sorteo: se encolan explícitamente. */
  guion?: boolean
  /** Categoría, para variar el menú de cada año. */
  categoria?: CategoriaEvento
  /** Marca eventos que tocan temas sensibles (suicidio, autolesión). */
  sensible?: boolean
  /** Incidente real que inspiró el evento (se muestra después de elegir). */
  inspiracion?: string
  opciones: Opcion[]
}

export type CategoriaEvento =
  | 'carrera'
  | 'banda'
  | 'sustancias'
  | 'amor'
  | 'prensa'
  | 'plata'
  | 'salud'
  | 'mito'

// ---------------------------------------------------------------------------
// Finales
// ---------------------------------------------------------------------------

export type TonoFinal = 'tragico' | 'epico' | 'agridulce' | 'patetico' | 'misterioso'

export interface Final {
  id: string
  titulo: string
  tono: TonoFinal
  /** Mayor prioridad gana cuando varios finales aplican. */
  prioridad: number
  /** Condición para que aplique en una muerte/retiro natural. */
  requiere?: Condicion
  /** Si es true, sólo se alcanza si un evento lo fuerza. */
  soloForzado?: boolean
  texto: string
  epitafio: string
  /** Referencia real que inspiró el final (se muestra en las notas). */
  inspiracion?: string
  /** Marca finales que tocan temas sensibles (suicidio). */
  sensible?: boolean
}

export interface ResultadoFinal {
  final: Final
  edad: number
  anio: number
  puntaje: number
  rango: string
}

// ---------------------------------------------------------------------------
// Estado de partida
// ---------------------------------------------------------------------------

export interface Integrante {
  nombre: string
  rol: string
  vivo: boolean
  enBanda: boolean
}

export interface Banda {
  nombre: string
  formadaEn: number
  integrantes: Integrante[]
}

export interface Disco {
  titulo: string
  anio: number
  puntaje: number
  ventas: number
  resenia: string
}

export type TipoEntrada = 'anio' | 'evento' | 'disco' | 'titular' | 'hito' | 'final'

export interface EntradaHistorial {
  anio: number
  edad: number
  tipo: TipoEntrada
  titulo: string
  detalle?: string
}

export type FasePartida = 'creacion' | 'jugando' | 'resumen' | 'final'

export interface EventoEnCurso {
  evento: Evento
  /** Resultado ya elegido, si el jugador respondió. */
  resuelto?: {
    opcionId: string
    resultado: Resultado
  }
}

export interface Partida {
  version: number
  semilla: number
  rng: number
  fasePartida: FasePartida
  personaje: Personaje
  stats: Stats
  dinero: number
  edad: number
  anio: number
  anioInicio: number
  flags: Record<string, number>
  banda: Banda | null
  discografia: Disco[]
  historial: EntradaHistorial[]
  eventosVistos: string[]
  cola: string[]
  /** Eventos del año en curso. */
  agenda: EventoEnCurso[]
  indiceAgenda: number
  /** Resumen del año que se acaba de cerrar. */
  resumenAnio: ResumenAnio | null
  final: ResultadoFinal | null
  /** Pico histórico de fama, para el puntaje. */
  picoFama: number
  /** Cantidad de años sobrevividos con adicción alta. */
  aniosAlLimite: number
}

export interface ResumenAnio {
  anio: number
  edad: number
  lineas: string[]
  disco: Disco | null
  cambios: Partial<Stats>
  dinero: number
}

// ---------------------------------------------------------------------------
// Registro de partidas terminadas (Salón de la Fama local)
// ---------------------------------------------------------------------------

export interface RegistroLeyenda {
  apodo: string
  banda: string | null
  rol: string
  genero: string
  nacionalidad: string
  anioInicio: number
  anioFin: number
  edad: number
  finalId: string
  finalTitulo: string
  tono: TonoFinal
  puntaje: number
  rango: string
  discos: number
  fecha: number
}
