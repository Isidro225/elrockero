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
  'Peluqueros', 'Herederos', 'Insomnes', 'Turbios', 'Colectiveros',
  'Santos Menores', 'Pájaros de Lata', 'Suplentes', 'Hermanos Falsos',
  'Chicos del Tercero', 'Bomberos Voluntarios', 'Deudores', 'Nadadores',
  'Cazadores de Ruido', 'Últimos Vagones', 'Pulmones', 'Testigos',
  'Hijos de Nadie', 'Vueltos del Sur', 'Kioscos', 'Sonámbulos',
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
  ['Alta', 'Tensión'],
  ['Peaje', 'Norte'],
  ['Cuarto', 'Piso'],
  ['Rayo', 'Verde'],
  ['Fósforo', 'Mojado'],
  ['Barrio', 'Industrial'],
  ['Hueso', 'Blando'],
  ['Radio', 'Fantasma'],
  ['Vuelo', 'Nocturno'],
  ['Piedra', 'Libre'],
  ['Agua', 'Turbia'],
  ['Costa', 'Muerta'],
  ['Tren', 'Blanco'],
  ['Doble', 'Fondo'],
  ['Feria', 'Americana'],
  ['Última', 'Cuadra'],
  ['Bosque', 'Quemado'],
  ['Frío', 'Industrial'],
]

const SUELTOS = [
  'Kerosene', 'Pentotal', 'Vidalita', 'Sputnik', 'Amianto', 'Cianuro',
  'Alambrado', 'Termita', 'Mercurio', 'Anfibio', 'Panteón', 'Litio',
  'Cobalto', 'Malaria', 'Vértigo', 'Hipnosis', 'Yeso', 'Napalm',
  'Estroncio', 'Formol', 'Balasto', 'Quinina', 'Ozono', 'Bakelita',
  'Alquitrán', 'Semáforo', 'Tungsteno', 'Coliseo', 'Grafito', 'Ámbar',
  'Peróxido', 'Zeppelín', 'Nitrato', 'Cascote', 'Sinapsis', 'Basalto',
  'Pirita', 'Vermut', 'Clorofila', 'Tetrafón',
]

export function nombreDeBanda(azar: Azar, genero: string): string {
  const tirada = azar.float()
  if (genero === 'metal' && azar.chance(0.5)) {
    return azar.elegir([
      'Guillotina', 'Sepulcro', 'Yunque', 'Ánima Negra', 'Ferrum', 'Caronte',
      'Sudario', 'Cripta', 'Ordalía', 'Aquelarre', 'Basilisco', 'Cadena Perpetua',
      'Hidra', 'Osario', 'Mortaja', 'Leviatán', 'Cenotafio', 'Tártaro',
    ])
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
  'Elogio de', 'Museo de', 'Inventario de', 'Nocturnos de', 'Mapa de',
  'Retrato hablado de', 'Boletín de', 'Baladas de', 'Crónica de', 'Cinco versiones de',
  'Instrucciones para', 'Tratado sobre', 'Réquiem para', 'Fotos de', 'Notas al pie de',
  'La educación de', 'El precio de', 'Cómo sobrevivir a', 'Lo que queda de',
]

const TITULOS_B = [
  'un incendio', 'la resaca', 'nadie', 'una ciudad muerta', 'la clase media',
  'un domingo largo', 'los que quedan', 'el subsuelo', 'la última gira',
  'un animal herido', 'el mediodía', 'la vereda de enfrente',
  'el barrio nuevo', 'la hora pico', 'los que se fueron', 'un país prestado',
  'la pieza de atrás', 'el turno noche', 'una promesa barata', 'la mudanza',
  'los que no llamaron', 'el invierno del 82', 'un teléfono que no suena',
  'la mesa de saldos', 'un martes cualquiera', 'el hotel de la ruta',
  'los santos menores', 'la última fila', 'un verano sin plata', 'el ascensor',
  'la mano izquierda', 'los perros del vecino', 'una cama ajena',
]

const TITULOS_SIMPLES = [
  'Alta tensión', 'Ruido de fondo', 'Sangre y purpurina', 'Insomnio',
  'Vuelvo a casa', 'Todo lo que ardió', 'Hormigón', 'Sin testigos',
  'Kilómetro cero', 'La deuda', 'Perros de la lluvia', 'Nadie duerme acá',
  'Voltaje', 'Fiebre', 'El velorio', 'Autopista sur', 'Cuarto oscuro',
  'La primera piedra', 'Contraluz', 'Rehenes', 'Sal gruesa', 'Bajo cero',
  'Doce cicatrices', 'Nada personal', 'El intruso', 'Mala fe',
  'Zona de descarga', 'Materia oscura', 'Agua pesada', 'Corriente alterna',
  'Trece de octubre', 'Suciedad', 'El resto es ruido', 'Animal doméstico',
  'La última pieza del hotel', 'Vidrio templado', 'Nafta súper', 'Casi nada',
  'Barrio chino', 'Doble jornada', 'Radio a pilas', 'Techo de chapa',
  'Vuelta al perro', 'Peatonal', 'Chatarra', 'Ojo de buey', 'Tierra firme',
  'Cable pelado', 'Tres minutos', 'Interferencia', 'Media res', 'Marea baja',
  'Hierro viejo', 'Silbato', 'Tormenta eléctrica', 'Escombros', 'Ceniza fina',
  'Lo que no se dice', 'Fuera de hora', 'Cuenta regresiva', 'Aire acondicionado',
  'Kerosén', 'Puente viejo', 'Sin anestesia', 'La mala costumbre',
  'Domingo a la noche', 'Trabajo en negro', 'El descarte', 'Pura sangre',
  'Ruido y furia', 'Tregua', 'Vía muerta', 'Serie negra', 'Doce campanadas',
  'Combustión', 'Última llamada', 'Ninguna parte', 'Bienvenidos al peor año',
]

const TITULOS_PROG = [
  'La sinfonía del reloj de arena', 'El jardinero de Titán',
  'Suite para un rey enfermo', 'Los siete espejos de Alejandría',
  'Crónicas del faro invertido', 'El tercer sueño del cartógrafo',
  'Fábula del autómata melancólico', 'Los nueve portales de la memoria',
  'Concierto para una ciudad que no existe', 'El códice de las mareas',
  'Ascenso y caída del reino de vidrio', 'La geometría del olvido',
  'Cantata para el último astrónomo', 'El bestiario de las horas',
]

// Bancos por género: el sonido de cada escena también se nota en las tapas.
const TITULOS_POR_GENERO: Record<string, string[]> = {
  metal: [
    'Yunque y ceniza', 'Catedral de hierro', 'El martillo de los mansos',
    'Osario', 'Marcha fúnebre para un dios menor', 'Acero litúrgico',
    'La hora del lobo', 'Trece campanas', 'Herrumbre', 'Bestiario',
    'Fosa común', 'Ordalía', 'Némesis', 'Sangre en el yunque', 'Invierno perpetuo',
  ],
  punk: [
    'Nadie nos representa', 'Basura y gloria', 'Trabajo, alquiler, muerte',
    'Cuatro acordes y una mentira', 'Ruido para tus padres', 'No pidas permiso',
    'Menores de edad', 'Golpe de estado en el garage', 'Que se pudran todos',
    'Sábado sin plata', 'Escupí acá', 'Diez temas en veinte minutos',
  ],
  glam: [
    'Purpurina y gasolina', 'Tacos de aguja', 'Diamante barato', 'Veneno rosa',
    'Perfume y anfetamina', 'Lentejuelas rotas', 'Chicas de neón',
    'Vivir de noche', 'Espejo con luces', 'Caramelo tóxico',
  ],
  grunge: [
    'Dolor de estómago', 'Anestesia local', 'Malestar', 'Ropa mojada',
    'Cosas que no dije', 'El ruido adentro', 'Vergüenza', 'No me mires',
    'Colchón en el piso', 'Lavarropas', 'Todo me queda grande',
  ],
  indie: [
    'Cosas que pasan en agosto', 'Departamento con humedad', 'Todo bien, todo mal',
    'Insomnio de living', 'Canciones para dos personas', 'Cuaderno cuadriculado',
    'Verano en la terraza', 'Bicicleta', 'Nos vemos el jueves', 'Café frío',
  ],
  'blues rock': [
    'Whisky y ruta', 'La curva del diablo', 'Cruce de caminos', 'Mala racha',
    'Doce compases', 'Botella vacía', 'Tren de carga', 'Manos sucias',
    'La mujer del bar de abajo', 'Tres días sin dormir',
  ],
  'rock clásico': [
    'Caballos y estadios', 'Ruta 9', 'La gran noche', 'Fuego cruzado',
    'Alas de lata', 'El reloj del estadio', 'Camino al sur', 'Trueno',
  ],
}

/** Sortea un título sin mirar los que ya usaste. */
function sortearTitulo(azar: Azar, genero: string, numero: number, banda?: string | null): string {
  // El debut homónimo es la costumbre más vieja de la industria.
  if (numero === 1 && banda && azar.chance(0.2)) return banda

  if (genero === 'progresivo' && azar.chance(0.6)) return azar.elegir(TITULOS_PROG)

  const propios = TITULOS_POR_GENERO[genero]
  if (propios && azar.chance(0.32)) return azar.elegir(propios)

  const tirada = azar.float()
  if (tirada < 0.5) return azar.elegir(TITULOS_SIMPLES)
  return `${azar.elegir(TITULOS_A)} ${azar.elegir(TITULOS_B)}`
}

/**
 * Título de disco que no repite ninguno de `usados`. Si el banco se agota
 * (discografías muy largas), numera como hace todo el mundo desde siempre.
 */
export function tituloDeDisco(
  azar: Azar,
  genero: string,
  numero: number,
  usados: readonly string[] = [],
  banda?: string | null,
): string {
  const yaEstan = new Set(usados)

  for (let intento = 0; intento < 16; intento++) {
    const titulo = sortearTitulo(azar, genero, numero, banda)
    if (!yaEstan.has(titulo)) return titulo
  }

  const base = sortearTitulo(azar, genero, numero, banda)
  for (const sufijo of ['II', 'III', 'IV', 'V', 'VI', 'VII']) {
    const titulo = `${base} ${sufijo}`
    if (!yaEstan.has(titulo)) return titulo
  }
  return `${base} (${numero})`
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
