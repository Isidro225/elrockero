import type { OpcionOrigen } from '../engine/types'

// ---------------------------------------------------------------------------
// Nacionalidades
// ---------------------------------------------------------------------------

export const NACIONALIDADES: OpcionOrigen[] = [
  {
    id: 'argentina',
    nombre: 'Argentina',
    descripcion:
      'Rock nacional, aguante y crisis económica. Mucha calle, poca guita, letras que duelen.',
    efectos: { credibilidad: 12, inspiracion: 10, talento: 4 },
    dinero: -200,
    flags: ['aguante'],
  },
  {
    id: 'reino-unido',
    nombre: 'Reino Unido',
    descripcion:
      'La isla que inventó casi todo. Prensa musical feroz: te consagra o te destruye en una semana.',
    efectos: { fama: 10, credibilidad: 8, cordura: -4 },
    dinero: 400,
    flags: ['prensaFeroz'],
  },
  {
    id: 'estados-unidos',
    nombre: 'Estados Unidos',
    descripcion:
      'El mercado más grande del mundo. Todo es más grande acá: los estadios, los cheques y los excesos.',
    efectos: { fama: 14, talento: 2, adiccion: 6 },
    dinero: 900,
    flags: ['mercadoGrande'],
  },
  {
    id: 'espania',
    nombre: 'España',
    descripcion:
      'Movida, bares hasta las siete de la mañana y una industria que recién despierta.',
    efectos: { credibilidad: 8, inspiracion: 8, salud: -4 },
    dinero: 200,
  },
  {
    id: 'mexico',
    nombre: 'México',
    descripcion:
      'Rock urbano, Avándaro y el público más fiel del continente. También el más ruidoso.',
    efectos: { quimica: 10, credibilidad: 8, fama: 4 },
    dinero: 100,
  },
  {
    id: 'chile',
    nombre: 'Chile',
    descripcion:
      'Rock hecho a contramano, en dictadura y en silencio. Lo que sale de ahí sale con filo.',
    efectos: { credibilidad: 14, cordura: 6, fama: -4 },
    dinero: 0,
  },
  {
    id: 'suecia',
    nombre: 'Suecia',
    descripcion:
      'Escuelas de música públicas, inviernos de seis meses y una fábrica de himnos perfectos.',
    efectos: { talento: 16, inspiracion: 4, credibilidad: -4 },
    dinero: 700,
    flags: ['escuelaMusica'],
  },
  {
    id: 'noruega',
    nombre: 'Noruega',
    descripcion:
      'Bosques, fiordos y una escena que se toma todo demasiado en serio. Sobre todo el frío.',
    efectos: { credibilidad: 16, cordura: -10, inspiracion: 8 },
    dinero: 500,
    flags: ['bosqueOscuro'],
  },
  {
    id: 'brasil',
    nombre: 'Brasil',
    descripcion: 'Tropicalia, ritmo raro y un país que baila incluso cuando llora.',
    efectos: { talento: 8, quimica: 10, inspiracion: 6 },
    dinero: 150,
  },
  {
    id: 'australia',
    nombre: 'Australia',
    descripcion:
      'Pubs con rejas, giras de doce horas en camioneta y rock de tres acordes hecho a martillazos.',
    efectos: { salud: 10, credibilidad: 6, adiccion: 6 },
    dinero: 300,
    flags: ['curtido'],
  },
]

// ---------------------------------------------------------------------------
// Instrumento / rol
// ---------------------------------------------------------------------------

export const ROLES: OpcionOrigen[] = [
  {
    id: 'voz',
    nombre: 'Voz',
    descripcion:
      'La cara de la banda. Toda la fama y toda la culpa apuntan al mismo lugar: vos.',
    efectos: { fama: 18, cordura: -8, quimica: -6 },
    flags: ['frontman'],
  },
  {
    id: 'guitarra',
    nombre: 'Guitarra',
    descripcion:
      'El riff es tuyo. La mitad de la mitología del rock se escribió con seis cuerdas.',
    efectos: { talento: 12, fama: 8, inspiracion: 6 },
    flags: ['guitarrista'],
  },
  {
    id: 'bajo',
    nombre: 'Bajo',
    descripcion:
      'Nadie te nombra, todos te necesitan. Sos el único que llega sobrio a la prueba de sonido.',
    efectos: { quimica: 16, cordura: 12, fama: -8 },
    flags: ['bajista'],
  },
  {
    id: 'bateria',
    nombre: 'Batería',
    descripcion:
      'El motor. También el puesto con la esperanza de vida más corta de la industria.',
    efectos: { salud: 12, quimica: 8, adiccion: 6, fama: -4 },
    flags: ['baterista'],
  },
  {
    id: 'teclados',
    nombre: 'Teclados',
    descripcion:
      'El que sabe armonía de verdad. En algún momento vas a querer meter un disco conceptual.',
    efectos: { talento: 16, inspiracion: 10, credibilidad: -4, fama: -6 },
    flags: ['tecladista'],
  },
]

// ---------------------------------------------------------------------------
// Género
// ---------------------------------------------------------------------------

export const GENEROS: OpcionOrigen[] = [
  {
    id: 'rock-clasico',
    nombre: 'Rock clásico',
    descripcion:
      'Blues, riffs y estadios. El camino ancho: menos gloria de culto, más chance de durar.',
    efectos: { fama: 10, talento: 8, salud: 4 },
  },
  {
    id: 'punk',
    nombre: 'Punk',
    descripcion:
      'Tres acordes y la verdad. Vas a ser importante antes de saber tocar, y eso tiene precio.',
    efectos: { credibilidad: 18, fama: 6, talento: -10, salud: -6 },
    flags: ['punk'],
  },
  {
    id: 'metal',
    nombre: 'Metal',
    descripcion:
      'El público más leal del planeta y la prensa más despectiva. Vas a durar treinta años.',
    efectos: { talento: 12, quimica: 10, credibilidad: 6, fama: -6 },
    flags: ['metal'],
  },
  {
    id: 'grunge',
    nombre: 'Grunge',
    descripcion:
      'Ruido, vergüenza y dolor de estómago. Odiás el éxito y el éxito te persigue.',
    efectos: { credibilidad: 14, inspiracion: 10, cordura: -14, adiccion: 8 },
    flags: ['grunge'],
  },
  {
    id: 'glam',
    nombre: 'Glam',
    descripcion:
      'Purpurina, tacos y decibeles. Sos una fiesta ambulante hasta que la fiesta se termina.',
    efectos: { fama: 20, adiccion: 12, credibilidad: -12, salud: -4 },
    flags: ['glam'],
  },
  {
    id: 'progresivo',
    nombre: 'Progresivo',
    descripcion:
      'Suites de veinte minutos y un disco doble sobre un caballero medieval. Nadie te va a entender.',
    efectos: { talento: 20, inspiracion: 14, fama: -14, cordura: -4 },
    flags: ['prog'],
  },
  {
    id: 'blues-rock',
    nombre: 'Blues rock',
    descripcion:
      'La raíz. Tocás mejor que casi todos y vas a llevarte muy mal con las modas.',
    efectos: { talento: 18, credibilidad: 12, fama: -8, adiccion: 6 },
  },
  {
    id: 'indie',
    nombre: 'Indie',
    descripcion:
      'Sello chico, prensa especializada y un público que te abandona apenas firmás con una multi.',
    efectos: { credibilidad: 16, inspiracion: 8, fama: -10, cordura: 6 },
    flags: ['indie'],
  },
]

// ---------------------------------------------------------------------------
// Década de arranque
// ---------------------------------------------------------------------------

export interface OpcionDecada extends OpcionOrigen {
  anio: number
}

export const DECADAS: OpcionDecada[] = [
  {
    id: '1960',
    anio: 1966,
    nombre: 'Los sesenta',
    descripcion:
      'Todo está por inventarse. Contratos leoninos, ácido en el agua y una revolución por mes.',
    efectos: { inspiracion: 16, credibilidad: 8, salud: -4 },
    dinero: -300,
    flags: ['era60'],
  },
  {
    id: '1970',
    anio: 1973,
    nombre: 'Los setenta',
    descripcion:
      'Estadios, aviones privados y cocaína contable. La época dorada, si sobrevivís a ella.',
    efectos: { fama: 12, adiccion: 10, talento: 6 },
    dinero: 200,
    flags: ['era70'],
  },
  {
    id: '1980',
    anio: 1983,
    nombre: 'Los ochenta',
    descripcion:
      'Videoclips, laca y sellos con presupuesto infinito. La imagen importa más que el disco.',
    efectos: { fama: 16, credibilidad: -8 },
    dinero: 800,
    flags: ['era80'],
  },
  {
    id: '1990',
    anio: 1992,
    nombre: 'Los noventa',
    descripcion:
      'La autenticidad se vuelve producto. Firmás por un millón y te odiás por eso.',
    efectos: { credibilidad: 10, cordura: -10, fama: 8 },
    dinero: 500,
    flags: ['era90'],
  },
  {
    id: '2000',
    anio: 2003,
    nombre: 'Los dos mil',
    descripcion:
      'Se cae la industria del disco. Nadie compra nada, todos giran. La ruta te come vivo.',
    efectos: { salud: -8, credibilidad: 6, quimica: 8 },
    dinero: 100,
    flags: ['era2000'],
  },
]

// ---------------------------------------------------------------------------
// Origen social / cómo empezaste
// ---------------------------------------------------------------------------

export const ORIGENES: OpcionOrigen[] = [
  {
    id: 'conservatorio',
    nombre: 'El conservatorio',
    descripcion:
      'Doce años de solfeo. Sabés lo que es un modo lidio y no sabés lo que es una pelea de bar.',
    efectos: { talento: 22, credibilidad: -10, cordura: 8, inspiracion: -6 },
    dinero: 600,
    flags: ['academico'],
  },
  {
    id: 'garaje',
    nombre: 'El garaje del barrio',
    descripcion:
      'Aprendiste sacando temas de oído con un amplificador prestado. Todo lo demás lo inventaste.',
    efectos: { quimica: 14, credibilidad: 10, inspiracion: 8, talento: -4 },
    dinero: 0,
  },
  {
    id: 'iglesia',
    nombre: 'El coro de la iglesia',
    descripcion:
      'Ahí aprendiste a cantar y ahí aprendiste la culpa. Las dos cosas te van a servir.',
    efectos: { talento: 14, cordura: 10, inspiracion: 6, credibilidad: -6 },
    dinero: 100,
    flags: ['culpaCatolica'],
  },
  {
    id: 'familia-musica',
    nombre: 'Familia de músicos',
    descripcion:
      'Tu viejo tocaba. Sabés cómo funciona el negocio y sabés cómo termina, y aún así estás acá.',
    efectos: { talento: 12, fama: 8, cordura: -6 },
    dinero: 900,
    flags: ['herencia'],
  },
  {
    id: 'fabrica',
    nombre: 'La fábrica',
    descripcion:
      'Turno de noche desde los quince. La música es lo único que te sacó de esa cinta transportadora.',
    efectos: { salud: 14, credibilidad: 14, talento: -6, inspiracion: 8 },
    dinero: -100,
    flags: ['claseObrera'],
  },
  {
    id: 'internado',
    nombre: 'El internado',
    descripcion:
      'Te mandaron lejos a los diez años. Volviste con un daño interesante y muchas letras.',
    efectos: { inspiracion: 18, cordura: -14, credibilidad: 6 },
    dinero: 1200,
    flags: ['daniadoTemprano'],
  },
  {
    id: 'calle',
    nombre: 'Tocando en la calle',
    descripcion:
      'Aprendiste a sostener a un público que no te debe nada. Nunca más te va a asustar un escenario.',
    efectos: { fama: 6, credibilidad: 16, salud: -6, quimica: 6 },
    dinero: -300,
    flags: ['calle'],
  },
]

// ---------------------------------------------------------------------------
// Stats base antes de aplicar elecciones
// ---------------------------------------------------------------------------

export const STATS_BASE = {
  talento: 25,
  fama: 2,
  salud: 78,
  cordura: 72,
  credibilidad: 10,
  adiccion: 5,
  quimica: 40,
  inspiracion: 45,
}

export const DINERO_BASE = 500
export const EDAD_INICIAL = 17
