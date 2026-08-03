import { Azar } from '../engine/rng'

// ---------------------------------------------------------------------------
// Nombres de banda
// ---------------------------------------------------------------------------

const ARTICULO = ['Los', 'Las', 'The']

const SUSTANTIVOS = [
  'Perros', 'Cuervos', 'Espejos', 'Hermanos Ruiz', 'Fantasmas', 'Lobos',
  'Gatos Negros', 'Hijos del Ruido', 'Cadáveres', 'Ratones', 'Ángeles Sucios',
  'Buitres', 'Náufragos', 'Vagones', 'Reptiles', 'Fusiles', 'Domingos',
  'Autos Rotos', 'Pibes del Fondo', 'Enterradores', 'Vecinos', 'Ahogados',
]

const COMPUESTOS: [string, string][] = [
  ['Kilómetro', 'Cero'],
  ['Cemento', 'Húmedo'],
  ['Bala', 'Perdida'],
  ['Sangre', 'Joven'],
  ['Ruido', 'Blanco'],
  ['Vidrio', 'Molido'],
  ['Motor', 'Diesel'],
  ['Sábado', 'Eterno'],
  ['Diente', 'de Oro'],
  ['Estación', 'Terminal'],
  ['Aguja', 'Rota'],
  ['Templo', 'Vacío'],
  ['Muerte', 'Lenta'],
  ['Hotel', 'Mendoza'],
  ['Cielo', 'Partido'],
  ['Furia', 'Doméstica'],
  ['Túnel', 'Sur'],
  ['Zona', 'Roja'],
]

const SUELTOS = [
  'Kerosene', 'Pentotal', 'Vidalita', 'Sputnik', 'Amianto', 'Cianuro',
  'Alambrado', 'Termita', 'Mercurio', 'Anfibio', 'Panteón', 'Litio',
  'Cobalto', 'Malaria', 'Vértigo', 'Hipnosis', 'Yeso', 'Napalm',
]

export function nombreDeBanda(azar: Azar, genero: string): string {
  const tirada = azar.float()
  if (genero === 'metal' && azar.chance(0.5)) {
    return azar.elegir(['Guillotina', 'Sepulcro', 'Yunque', 'Ánima Negra', 'Ferrum', 'Caronte'])
  }
  if (genero === 'punk' && azar.chance(0.5)) {
    return `${azar.elegir(ARTICULO)} ${azar.elegir(SUSTANTIVOS)}`
  }
  if (tirada < 0.35) return `${azar.elegir(ARTICULO)} ${azar.elegir(SUSTANTIVOS)}`
  if (tirada < 0.7) {
    const [a, b] = azar.elegir(COMPUESTOS)
    return `${a} ${b}`
  }
  return azar.elegir(SUELTOS)
}

// ---------------------------------------------------------------------------
// Títulos de disco
// ---------------------------------------------------------------------------

const TITULOS_A = [
  'Canciones para', 'Manual de', 'Últimos días de', 'Retrato de', 'Himnos de',
  'Cartas desde', 'Ruinas de', 'Postales de', 'Diario de', 'Anatomía de',
]

const TITULOS_B = [
  'un incendio', 'la resaca', 'nadie', 'una ciudad muerta', 'la clase media',
  'un domingo largo', 'los que quedan', 'el subsuelo', 'la última gira',
  'un animal herido', 'el mediodía', 'la vereda de enfrente',
]

const TITULOS_SIMPLES = [
  'Alta tensión', 'Ruido de fondo', 'Sangre y purpurina', 'Insomnio',
  'Vuelvo a casa', 'Todo lo que ardió', 'Hormigón', 'Sin testigos',
  'Kilómetro cero', 'La deuda', 'Perros de la lluvia', 'Nadie duerme acá',
  'Voltaje', 'Fiebre', 'El velorio', 'Autopista sur', 'Cuarto oscuro',
  'La primera piedra', 'Contraluz', 'Rehenes', 'Sal gruesa', 'Bajo cero',
  'Doce cicatrices', 'Nada personal', 'El intruso', 'Mala fe',
]

const TITULOS_PROG = [
  'La sinfonía del reloj de arena', 'El jardinero de Titán',
  'Suite para un rey enfermo', 'Los siete espejos de Alejandría',
  'Crónicas del faro invertido',
]

export function tituloDeDisco(azar: Azar, genero: string, numero: number): string {
  if (genero === 'progresivo' && azar.chance(0.6)) return azar.elegir(TITULOS_PROG)
  if (numero === 1 && azar.chance(0.25)) return 'Debut'
  const tirada = azar.float()
  if (tirada < 0.45) return azar.elegir(TITULOS_SIMPLES)
  return `${azar.elegir(TITULOS_A)} ${azar.elegir(TITULOS_B)}`
}

// ---------------------------------------------------------------------------
// Integrantes
// ---------------------------------------------------------------------------

const NOMBRES_PILA = [
  'Beto', 'Nacho', 'Willy', 'Cacho', 'Rulo', 'Tano', 'Pipo', 'Chino',
  'Zorro', 'Mota', 'Lito', 'Yuyo', 'Turco', 'Poli', 'Sapo', 'Toto',
  'Vicky', 'Andrea', 'Lu', 'Cami', 'Nadia', 'Rita', 'Sol', 'Meli',
  'Dani', 'Robi', 'Coco', 'Fede', 'Iván', 'Gus', 'Manu', 'Kevin',
]

const APELLIDOS = [
  'Peralta', 'Suárez', 'Krause', 'Ibáñez', 'Molina', 'Ferreyra', 'Bruno',
  'Salgado', 'Ríos', 'Cabral', 'Domínguez', 'Vega', 'Ortiz', 'Lombardi',
  'Miranda', 'Acuña', 'Falcón', 'Barreto', 'Quiroga', 'Vidal',
]

export function nombreDeIntegrante(azar: Azar): string {
  return `${azar.elegir(NOMBRES_PILA)} ${azar.elegir(APELLIDOS)}`
}

// ---------------------------------------------------------------------------
// Reseñas de disco según puntaje
// ---------------------------------------------------------------------------

const RESENIAS: [number, string[]][] = [
  [
    90,
    [
      'Un disco que reordena el género. Se va a estudiar dentro de treinta años.',
      'No hay un solo segundo de más. Obra maestra y punto.',
      'La clase de disco que hace que otras bandas se separen de vergüenza.',
    ],
  ],
  [
    75,
    [
      'Enorme. Le sobra un tema y le falta un poco de humildad, nada más.',
      'Un discazo. La prensa lo va a poner en todas las listas de fin de año.',
      'Suena a banda que entendió exactamente lo que era.',
    ],
  ],
  [
    58,
    [
      'Correcto. Tiene dos temas gigantes y ocho que están ahí para acompañarlos.',
      'Cumple. Los fans lo van a defender, el resto lo va a olvidar.',
      'Se escucha bien, no molesta a nadie. Ese es el problema.',
    ],
  ],
  [
    40,
    [
      'Un disco de transición, que es la forma elegante de decir que no había ideas.',
      'La producción tapa lo que las canciones no tienen.',
      'Suena a contrato que había que cumplir.',
    ],
  ],
  [
    0,
    [
      'Un desastre documentado. Alguien tendría que haber apagado la consola.',
      'Difícil de terminar de escuchar. Más difícil de perdonar.',
      'El sonido de una banda hundiéndose en tiempo real.',
    ],
  ],
]

export function reseniaDeDisco(azar: Azar, puntaje: number): string {
  for (const [umbral, textos] of RESENIAS) {
    if (puntaje >= umbral) return azar.elegir(textos)
  }
  return azar.elegir(RESENIAS[RESENIAS.length - 1][1])
}

// ---------------------------------------------------------------------------
// Titulares de prensa de relleno
// ---------------------------------------------------------------------------

const TITULARES_FAMA: string[] = [
  '"{banda}: el fenómeno que nadie vio venir"',
  '"{apodo} agotó tres noches y sumó una cuarta"',
  '"La banda del año se llama {banda}"',
  '"{apodo}, la nueva cara del {genero}"',
]

const TITULARES_CAIDA: string[] = [
  '"¿Qué le pasó a {banda}?"',
  '"{apodo} suspende la gira sin explicaciones"',
  '"El sello confirma que {banda} está \'en pausa\'"',
  '"Media entrada en un estadio que supo llenarse"',
]

const TITULARES_ESCANDALO: string[] = [
  '"Escándalo en el hotel: {apodo} otra vez"',
  '"{apodo} agredió a un fotógrafo a la salida del show"',
  '"El video que {banda} no quería que veas"',
  '"Denuncian a {apodo} por destrozos en una habitación de hotel"',
]

export function titularAlAzar(azar: Azar, tipo: 'fama' | 'caida' | 'escandalo'): string {
  const banco = tipo === 'fama' ? TITULARES_FAMA : tipo === 'caida' ? TITULARES_CAIDA : TITULARES_ESCANDALO
  return azar.elegir(banco)
}
