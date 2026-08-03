import type { Evento } from '../../engine/types'

// Eventos de los primeros años: formar la banda, primeros shows, primer demo.

export const EVENTOS_GARAJE: Evento[] = [
  {
    id: 'garaje-primer-banda',
    titulo: 'Alguien tiene una sala',
    categoria: 'banda',
    epigrafe: 'Todo empieza con tres tipos y un amplificador que zumba.',
    texto:
      'Un conocido del barrio te dice que tiene una sala de ensayo con dos horas libres los martes. No hay banda todavía. Hay dos horas.',
    requiere: { edadMax: 24, tieneBanda: false },
    peso: 6,
    opciones: [
      {
        id: 'amigos',
        texto: 'Llamar a los pibes que conocés de siempre',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Tocan mal, se ríen mucho y a la tercera hora sale algo que se parece a una canción. Nadie lo dice, pero todos saben que esto ya empezó.',
            efectos: {
              stats: { quimica: 18, inspiracion: 8, talento: 4 },
              formaBanda: true,
              flags: { bandaDeAmigos: 1 },
            },
          },
        ],
      },
      {
        id: 'audiciones',
        texto: 'Poner un aviso y hacer audiciones en serio',
        riesgo: 'seguro',
        resultados: [
          {
            peso: 3,
            texto:
              'Vienen catorce personas. Doce son un desastre. Las dos que quedan tocan mejor que vos y eso te da miedo y te da envidia y te da ganas.',
            efectos: {
              stats: { talento: 12, quimica: -4, credibilidad: 4 },
              formaBanda: true,
              flags: { bandaProfesional: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Viene una sola persona y es exactamente lo que buscabas. A veces la suerte existe.',
            efectos: {
              stats: { talento: 14, quimica: 10, inspiracion: 6 },
              formaBanda: true,
              flags: { bandaProfesional: 1 },
            },
          },
        ],
      },
      {
        id: 'solo',
        texto: 'Ir solo. Vos, tu instrumento y nadie que te discuta',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Dos horas de silencio y una grabación en casete que sólo vas a escuchar vos. Es tuyo entero. También es tuyo entero el peso.',
            efectos: {
              stats: { inspiracion: 14, talento: 8, quimica: -12, cordura: -4 },
              flags: { solista: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-primer-show',
    titulo: 'El primer show',
    categoria: 'carrera',
    epigrafe: 'Nueve personas, cuatro son familiares.',
    texto:
      'Un bar del centro te da el horario de las once de la noche de un martes. No pagan. Hay que llevar el equipo.',
    requiere: { tieneBanda: true, edadMax: 26, sinFlags: ['debutEnVivo'] },
    peso: 5,
    opciones: [
      {
        id: 'tocar',
        texto: 'Tocar igual. Un show es un show',
        riesgo: 'seguro',
        resultados: [
          {
            peso: 3,
            texto:
              'Tocan para nueve personas. Al cuarto tema, uno de los que estaba tomando en la barra se da vuelta y mira. Ese giro de cabeza te va a durar veinte años.',
            efectos: {
              stats: { fama: 6, credibilidad: 6, quimica: 6, inspiracion: 4 },
              flags: { debutEnVivo: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Se corta la luz en el segundo tema. Terminan el show a oscuras, gritando la letra sin micrófono. Los nueve que estaban lo van a contar toda la vida.',
            efectos: {
              stats: { fama: 4, credibilidad: 14, quimica: 12 },
              flags: { debutEnVivo: 1, mitoBarrial: 1 },
            },
          },
        ],
      },
      {
        id: 'exigir',
        texto: 'Exigir que les paguen algo',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'El dueño se ríe en tu cara y le da el horario a otra banda. Te vas con la razón y sin fecha.',
            efectos: { stats: { credibilidad: 6, fama: -2, quimica: -4 } },
          },
          {
            peso: 1,
            texto:
              'El dueño se sorprende y te ofrece la puerta: lo que entre, es tuyo. Entran nueve personas. Te llevás lo que sale de nueve entradas y una lección de negocios.',
            efectos: {
              stats: { credibilidad: 10, fama: 4 },
              dinero: 90,
              flags: { debutEnVivo: 1, negociador: 1 },
            },
          },
        ],
      },
      {
        id: 'esperar',
        texto: 'Esperar a estar mejor preparados',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Ensayan tres meses más. Cuando finalmente tocan, están apretadísimos. También están tres meses más viejos y el bar ya cerró.',
            efectos: { stats: { talento: 12, fama: -4, inspiracion: -4 } },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-nombre',
    titulo: 'Falta el nombre',
    categoria: 'banda',
    inspiracion:
      'Los nombres del rock salieron de un manual de máquinas de coser (Pink Floyd fue Floyd Council y Pink Anderson, dos bluesmen), de una novela sobre insectos escrita por un adicto, de un desodorante de ambientes, de un aviso clasificado y de un chiste sobre un dirigible de plomo que se cae. Todos sonaban espantosos el primer día.',
    texto:
      'No pueden seguir siendo "la banda". Hay que decidir, y cada uno trajo una lista.',
    requiere: { tieneBanda: true, sinFlags: ['nombreElegido'] },
    peso: 4,
    opciones: [
      {
        id: 'consenso',
        texto: 'Votar. El que gana, gana',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Gana un nombre que a nadie enamora y que a nadie ofende. Con los años se va a volver imposible imaginarlos llamándose de otra forma.',
            efectos: { stats: { quimica: 8 }, flags: { nombreElegido: 1 } },
          },
        ],
      },
      {
        id: 'imponer',
        texto: 'Imponer el tuyo',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Se hace lo que decís vos. Queda claro para todos quién manda, incluso para los que todavía no se enojaron.',
            efectos: {
              stats: { quimica: -10, fama: 4, credibilidad: 4 },
              flags: { nombreElegido: 1, egoLider: 1 },
            },
          },
        ],
      },
      {
        id: 'azar',
        texto: 'Abrir un libro en una página al azar',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Sale una frase absurda que suena perfecta. Van a pasar treinta años explicando en entrevistas que no significa nada.',
            efectos: {
              stats: { credibilidad: 8, quimica: 4, inspiracion: 4 },
              flags: { nombreElegido: 1 },
            },
          },
        ],
      },
      {
        id: 'impronunciable',
        texto: 'Elegir el más impronunciable e imposible de escribir',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Eligen un nombre larguísimo, con una palabra que nadie sabe deletrear y un signo raro en el medio. El del bar los anota mal en el afiche del primer show y los va a anotar mal durante cuatro años.\n\nY sin embargo funciona: es imposible confundirlos con nadie y, cuando alguien finalmente lo aprende, ya no se lo olvida nunca. Los primeros mil fans se sienten parte de una secta chiquita nada más que por saber escribirlo.',
            efectos: {
              stats: { credibilidad: 14, inspiracion: 8, fama: -6, quimica: 6 },
              flags: { nombreElegido: 1, escenaAmiga: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Eligen un nombre impronunciable y pasan dos años corrigiendo a todo el mundo, incluidos los que quieren contratarlos.\n\nUn productor les dice de frente que no los llama porque no se acuerda cómo se llaman. Lo terminan acortando a las dos primeras sílabas, que es lo que la gente les decía desde el principio.',
            efectos: {
              stats: { fama: -10, credibilidad: 6, quimica: -4, cordura: -4 },
              flags: { nombreElegido: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-trabajo',
    titulo: 'El turno de la mañana',
    categoria: 'plata',
    texto:
      'Tenés un trabajo que paga el alquiler y te come las horas en que podrías estar componiendo. Tu jefe te ofrece más horas y más plata.',
    requiere: { edadMax: 28, stats: { fama: { max: 45 } } },
    peso: 3,
    opciones: [
      {
        id: 'aceptar',
        texto: 'Aceptar. La plata es plata',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Comprás un amplificador decente y perdés seis meses de inspiración. El equipo suena mejor y vos tenés menos para decir.',
            efectos: { stats: { inspiracion: -12, talento: 6, salud: -4 }, dinero: 2200 },
          },
        ],
      },
      {
        id: 'renunciar',
        texto: 'Renunciar. Todo o nada',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Te quedan tres meses de ahorros y catorce horas por día para componer. Nunca escribiste tanto en tu vida ni comiste tan mal.',
            efectos: {
              stats: { inspiracion: 22, credibilidad: 10, salud: -10, cordura: -6 },
              dinero: -800,
              flags: { todoONada: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te quedan tres meses de ahorros y descubrís que sin la rutina no escribís nada. El pánico no es una musa.',
            efectos: { stats: { inspiracion: -6, cordura: -12, salud: -6 }, dinero: -1200 },
          },
        ],
      },
      {
        id: 'part',
        texto: 'Negociar medio turno',
        riesgo: 'seguro',
        resultados: [
          {
            texto: 'Menos plata, menos horas, y la sensación permanente de no estar haciendo bien ninguna de las dos cosas.',
            efectos: { stats: { inspiracion: 4, cordura: -4 }, dinero: 900 },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-demo',
    titulo: 'Grabar el demo',
    categoria: 'carrera',
    epigrafe: 'Cuatro canales, una tarde, cero presupuesto.',
    texto:
      'Consiguieron un estudio berreta por un fin de semana. Alcanza para grabar cuatro temas o para grabar uno bien.',
    requiere: { tieneBanda: true, sinFlags: ['demoGrabado'], edadMax: 30 },
    peso: 5,
    opciones: [
      {
        id: 'cuatro',
        texto: 'Cuatro temas, como salgan',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Suena a lata. También suena a banda. Ese casete va a circular de mano en mano por lugares a los que ustedes todavía no llegaron.',
            efectos: {
              stats: { fama: 10, credibilidad: 8, inspiracion: -4 },
              dinero: -300,
              flags: { demoGrabado: 1, demoCrudo: 1 },
            },
          },
        ],
      },
      {
        id: 'uno',
        texto: 'Un solo tema, perfecto',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Le dedican dieciséis horas a tres minutos. Queda impecable. Un tema impecable es un tema, no una banda.',
            efectos: {
              stats: { talento: 12, fama: 6, credibilidad: 4 },
              dinero: -300,
              flags: { demoGrabado: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Le dedican dieciséis horas a tres minutos y sale algo que no se parece a nada. Un tipo de una radio lo pasa a las dos de la mañana y el teléfono no para.',
            efectos: {
              stats: { talento: 10, fama: 20, credibilidad: 10 },
              dinero: -300,
              flags: { demoGrabado: 1, temaBomba: 1 },
              titular: 'Una radio pasa tu demo a las dos de la mañana y colapsa la centralita',
            },
          },
        ],
      },
      {
        id: 'casa',
        texto: 'Cancelar y grabar en casa con lo que hay',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Se escucha el colectivo pasando en el segundo tema. Nadie del sello va a tomarlos en serio; la gente que lo escucha, sí.',
            efectos: {
              stats: { credibilidad: 14, fama: 4, talento: -4 },
              flags: { demoGrabado: 1, demoCasero: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-cover',
    titulo: 'El bar de covers',
    categoria: 'plata',
    texto:
      'Un bar paga bien y todos los viernes, con una condición: nada de temas propios. Sólo clásicos que la gente pueda cantar borracha.',
    requiere: { edadMax: 30, stats: { fama: { max: 50 } } },
    peso: 3,
    opciones: [
      {
        id: 'aceptar',
        texto: 'Aceptar y cobrar todos los viernes',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Un año de viernes. Tocan como una máquina y se olvidan de por qué habían empezado. La plata está buena.',
            efectos: {
              stats: { talento: 14, quimica: 8, credibilidad: -12, inspiracion: -10 },
              dinero: 3000,
              flags: { bandaDeCovers: 1 },
            },
          },
        ],
      },
      {
        id: 'colar',
        texto: 'Aceptar y colar temas propios de a poco',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Anuncian un tema propio como si fuera un clásico oscuro. Nadie se da cuenta. Una noche alguien pregunta de quién es y responden: nuestro.',
            efectos: {
              stats: { talento: 10, credibilidad: 4, fama: 6, inspiracion: 4 },
              dinero: 2000,
            },
          },
          {
            peso: 1,
            texto:
              'El dueño se da cuenta al tercer viernes y los echa en el entretiempo. Se van con medio pago y toda la dignidad.',
            efectos: { stats: { credibilidad: 10, quimica: 6 }, dinero: 400 },
          },
        ],
      },
      {
        id: 'rechazar',
        texto: 'Rechazar. No para eso',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te quedás sin los viernes y sin la plata. Tenés una convicción que no se come, pero tampoco se te cae.',
            efectos: { stats: { credibilidad: 12, inspiracion: 6 }, dinero: -200 },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-clases',
    titulo: 'El profesor',
    categoria: 'carrera',
    texto:
      'Un músico viejo del barrio, que tocó con todos y no llegó a nada, te ofrece enseñarte gratis. La única condición es que vayas todas las semanas.',
    requiere: { edadMax: 26 },
    peso: 3,
    opciones: [
      {
        id: 'ir',
        texto: 'Ir todas las semanas durante un año',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te enseña armonía, te enseña a escuchar y te enseña a no firmar nada sin leerlo. Lo último es lo que más te va a servir.',
            efectos: {
              stats: { talento: 20, credibilidad: 6, cordura: 6 },
              flags: { maestro: 1 },
            },
          },
        ],
      },
      {
        id: 'poco',
        texto: 'Ir hasta que te aburras',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Vas seis veces. Aprendés cuatro cosas útiles y una manera de mirar el mástil que no vas a perder nunca.',
            efectos: { stats: { talento: 8, credibilidad: 2 } },
          },
        ],
      },
      {
        id: 'no',
        texto: 'No. Lo que tenés que saber ya lo sabés',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Seguís tocando exactamente igual que ayer, con la ventaja de que nadie te va a acusar de sonar a escuela.',
            efectos: { stats: { credibilidad: 8, talento: -4, inspiracion: 4 } },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-familia',
    titulo: 'La charla con tu vieja',
    categoria: 'amor',
    texto:
      'Te sienta en la cocina. No grita. Te pregunta, con la voz muy tranquila, qué vas a hacer si esto no funciona.',
    requiere: { edadMax: 25, stats: { fama: { max: 40 } } },
    peso: 3,
    opciones: [
      {
        id: 'jurar',
        texto: 'Jurarle que va a funcionar',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Ella asiente y no te cree, y aún así al mes siguiente aparece un amplificador nuevo en tu pieza sin ninguna nota.',
            efectos: { stats: { cordura: 10, inspiracion: 6 }, dinero: 500, flags: { apoyoFamiliar: 1 } },
          },
        ],
      },
      {
        id: 'plan-b',
        texto: 'Admitir que tenés un plan B',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Ella respira aliviada. Vos te vas a la pieza pensando que el que tiene plan B ya se rindió un poco.',
            efectos: { stats: { cordura: 8, credibilidad: -6, inspiracion: -6 } },
          },
        ],
      },
      {
        id: 'portazo',
        texto: 'Levantarte de la mesa',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'No hablan por cuatro meses. En esos cuatro meses escribís las tres mejores canciones que tenés hasta hoy.',
            efectos: { stats: { inspiracion: 18, cordura: -12, credibilidad: 4 }, flags: { peleaFamiliar: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-primera-nota',
    titulo: 'Un fanzine quiere entrevistarte',
    categoria: 'prensa',
    texto:
      'Una revista fotocopiada que hacen tres pibes en una facultad quiere hacerles una nota de dos páginas.',
    requiere: { edadMax: 30, stats: { fama: { min: 8, max: 55 } } },
    peso: 3,
    opciones: [
      {
        id: 'honesto',
        texto: 'Hablar de verdad, sin cuidarte',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Decís cosas que en diez años te van a citar en todos lados. También decís dos boludeces que te van a perseguir igual de tiempo.',
            efectos: { stats: { credibilidad: 14, fama: 6, cordura: -4 }, flags: { bocaFloja: 1 } },
          },
          {
            peso: 1,
            texto:
              'Sale una nota tan buena que la fotocopian por todo el país. La banda pasa de ser local a ser un rumor nacional.',
            efectos: { stats: { credibilidad: 12, fama: 16 }, flags: { rumorNacional: 1 } },
          },
        ],
      },
      {
        id: 'pose',
        texto: 'Inventarte un personaje',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Te construís un tipo misterioso y algo insoportable. Funciona tan bien que vas a tener que sostenerlo veinte años.',
            efectos: {
              stats: { fama: 12, credibilidad: 6, cordura: -8 },
              flags: { personajePublico: 1 },
            },
          },
        ],
      },
      {
        id: 'no',
        texto: 'Pasar. Son tres pibes con una fotocopiadora',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Uno de esos tres pibes va a ser, en quince años, el director de la revista de música más importante del país. Y se acuerda de todo.',
            efectos: { stats: { fama: -2 }, flags: { enemigoPrensa: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-robo-equipo',
    titulo: 'Se llevaron el equipo',
    categoria: 'plata',
    texto:
      'Forzaron la sala de ensayo. Se llevaron todo lo que servía. Hay una fecha importante en tres semanas.',
    requiere: { edadMax: 35, stats: { fama: { max: 70 } } },
    peso: 2,
    opciones: [
      {
        id: 'prestado',
        texto: 'Pedir prestado a todas las bandas que conocés',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Aparecen seis bandas con equipo. Tocás con una guitarra que no es tuya y suena raro y suena bien. La escena existe cuando pasa esto.',
            efectos: { stats: { quimica: 10, credibilidad: 12, fama: 4 }, flags: { escenaAmiga: 1 } },
          },
        ],
      },
      {
        id: 'endeudarse',
        texto: 'Endeudarse y comprar todo nuevo',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Equipo nuevo, deuda vieja. Suena mejor que nunca y vas a estar pagándolo hasta el tercer disco.',
            efectos: { stats: { talento: 6, cordura: -8 }, dinero: -3500, flags: { deuda: 1 } },
          },
        ],
      },
      {
        id: 'buscar',
        texto: 'Salir a buscarlo por las casas de empeño',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Encontrás tu guitarra en la tercera casa de empeño. La recomprás con tu propia plata. La historia es tan buena que casi vale lo que te costó.',
            efectos: { stats: { credibilidad: 10, inspiracion: 6 }, dinero: -600 },
          },
          {
            peso: 1,
            texto:
              'Encontrás al que la vendió. La discusión termina mal y vos terminás con la mano rota y sin guitarra.',
            efectos: { stats: { salud: -14, cordura: -6, talento: -6 }, dinero: -400 },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-manager',
    titulo: 'El primer manager',
    categoria: 'plata',
    epigrafe: 'Tiene un maletín y ninguna referencia comprobable.',
    texto:
      'Un tipo de traje se te acerca después del show. Dice que trabajó con gente importante. No dice con quién. Quiere el veinte por ciento.',
    requiere: { stats: { fama: { min: 15 } }, sinFlags: ['tieneManager'], edadMax: 40 },
    peso: 4,
    opciones: [
      {
        id: 'firmar',
        texto: 'Firmar sin leer',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Consigue fechas. Consigue prensa. Consigue, además, quedarse con un porcentaje que no era el que decía el papel que no leíste.',
            efectos: {
              stats: { fama: 18, credibilidad: 4 },
              dinero: 1500,
              flags: { tieneManager: 1, managerLadron: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Resulta ser un fenómeno. En diez meses pasan de tocar en bares a abrir para una banda grande. A veces el tipo del maletín sabe.',
            efectos: {
              stats: { fama: 24, credibilidad: 8, quimica: 6 },
              dinero: 3000,
              flags: { tieneManager: 1, managerBueno: 1 },
            },
          },
        ],
      },
      {
        id: 'abogado',
        texto: 'Pedirle el contrato para mostrárselo a un abogado',
        riesgo: 'seguro',
        requiere: { dineroMin: 300 },
        bloqueo: 'Un abogado cuesta $300',
        resultados: [
          {
            texto:
              'El abogado tacha nueve cláusulas. El tipo firma igual, un poco molesto. Vas a ganar menos rápido y vas a conservar lo tuyo.',
            efectos: {
              stats: { fama: 12, credibilidad: 8, cordura: 6 },
              dinero: -300,
              flags: { tieneManager: 1, managerHonesto: 1, precavido: 1 },
            },
          },
        ],
      },
      {
        id: 'no',
        texto: 'Manejarse solos',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Se manejan solos. Pierden dos giras por no saber a quién llamar y aprenden todo lo demás a los golpes.',
            efectos: { stats: { fama: -4, credibilidad: 10, cordura: -6 }, flags: { autogestion: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-competencia',
    titulo: 'El concurso de bandas',
    categoria: 'carrera',
    texto:
      'Una radio organiza un concurso de bandas nuevas. El premio es grabar un disco. El jurado son cuatro señores de la industria.',
    requiere: { tieneBanda: true, edadMax: 30, stats: { fama: { max: 60 } } },
    peso: 3,
    opciones: [
      {
        id: 'complacer',
        texto: 'Tocar el tema más comercial que tengan',
        riesgo: 'seguro',
        resultados: [
          {
            peso: 2,
            texto:
              'Salen segundos. El primero es una banda que se separa a los ocho meses. Ustedes se quedan con el contacto de dos productores.',
            efectos: { stats: { fama: 12, credibilidad: -6 }, dinero: 500 },
          },
          {
            peso: 1,
            texto: 'Ganan. Graban un disco que suena a lo que el jurado quería escuchar.',
            efectos: {
              stats: { fama: 20, credibilidad: -12, talento: 6 },
              dinero: 1500,
              flags: { ganoConcurso: 1 },
            },
          },
        ],
      },
      {
        id: 'raro',
        texto: 'Tocar el tema de siete minutos que no entiende nadie',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Los eliminan en la primera ronda. Uno de los jurados, el único que sabía algo, los busca al final y les deja su teléfono.',
            efectos: { stats: { credibilidad: 16, fama: -4 }, flags: { padrinoIndustria: 1 } },
          },
          {
            peso: 1,
            texto:
              'El público del concurso enloquece con algo que el jurado detesta. Pierden el premio y ganan doscientos fans que van a seguirlos toda la vida.',
            efectos: { stats: { credibilidad: 18, fama: 10, quimica: 8 } },
          },
        ],
      },
      {
        id: 'boicot',
        texto: 'No presentarse y decir por qué en público',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Publican una carta explicando que los concursos son un negocio de las radios. Media escena los aplaude y la radio no los pasa nunca más.',
            efectos: {
              stats: { credibilidad: 20, fama: -6 },
              flags: { enemigoRadio: 1, principios: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-amor-temprano',
    titulo: 'Alguien te espera despierto',
    categoria: 'amor',
    texto:
      'Estás con alguien que te banca los ensayos, los horarios y la falta de plata. Te dice que consiguió trabajo en otra ciudad y que quiere que vayas.',
    requiere: { edadMax: 28, sinFlags: ['pareja'] },
    peso: 3,
    opciones: [
      {
        id: 'ir',
        texto: 'Irte con esa persona',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Dejás la banda a mitad de camino. Tenés dos años buenos, tranquilos, ordenados, y una canción atravesada en la garganta que no escribiste.',
            efectos: {
              stats: { cordura: 16, salud: 8, fama: -14, inspiracion: -10, quimica: -14 },
              flags: { pareja: 1, seFueDeLaCiudad: 1 },
            },
          },
        ],
      },
      {
        id: 'quedarse',
        texto: 'Quedarte y pedirle que se quede',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Se queda. Vos seguís yendo a los ensayos. Con el tiempo vas a entender que se quedó por vos y que vos no te quedaste por nadie.',
            efectos: { stats: { cordura: 6, quimica: 4, inspiracion: 4 }, flags: { pareja: 1, deudaAfectiva: 1 } },
          },
          {
            peso: 1,
            texto: 'Se va igual. Escribís sobre eso durante los siguientes cuatro discos.',
            efectos: { stats: { inspiracion: 20, cordura: -12 }, flags: { corazonRoto: 1 } },
          },
        ],
      },
      {
        id: 'cortar',
        texto: 'Cortar vos, limpio, antes de que duela más',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Cortás vos. Te sentís un hijo de puta durante ocho meses y componés como si te persiguieran.',
            efectos: { stats: { inspiracion: 16, cordura: -10, credibilidad: 4 }, flags: { corazonRoto: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-gira-camioneta',
    titulo: 'La primera gira',
    categoria: 'carrera',
    epigrafe: 'Seis fechas, una camioneta, cero mecánica preventiva.',
    texto:
      'Alguien armó una gira de seis pueblos. La camioneta tiene 340.000 kilómetros y un ruido que nadie quiere nombrar.',
    requiere: { tieneBanda: true, stats: { fama: { min: 12 } }, sinFlags: ['primeraGira'] },
    peso: 4,
    opciones: [
      {
        id: 'ir',
        texto: 'Subirse igual',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 3,
            texto:
              'Cuatro de las seis fechas son un desastre y dos son las mejores noches de sus vidas. Vuelven flacos, sucios y convertidos en una banda de verdad.',
            efectos: {
              stats: { quimica: 18, credibilidad: 12, fama: 10, salud: -8 },
              dinero: 300,
              flags: { primeraGira: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'La camioneta se parte en el kilómetro 200 de la ruta. Pasan la noche en la banquina. A las seis de la mañana pasa un camionero, los lleva y llegan a tocar. Ese camionero se llama Raúl y le van a dedicar un tema.',
            efectos: {
              stats: { quimica: 22, credibilidad: 14, fama: 8, salud: -12, inspiracion: 10 },
              dinero: -200,
              flags: { primeraGira: 1, temaRaul: 1 },
            },
          },
        ],
      },
      {
        id: 'arreglar',
        texto: 'Arreglar la camioneta primero',
        riesgo: 'seguro',
        requiere: { dineroMin: 800 },
        bloqueo: 'El mecánico pide $800',
        resultados: [
          {
            texto:
              'Se hace bien. La gira sale sin sobresaltos y sin épica. Tienen seis fechas hechas y ninguna anécdota.',
            efectos: {
              stats: { quimica: 8, fama: 10, salud: -4 },
              dinero: -300,
              flags: { primeraGira: 1, precavido: 1 },
            },
          },
        ],
      },
      {
        id: 'cancelar',
        texto: 'Cancelar dos fechas y hacer sólo las cercanas',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Hacen cuatro fechas cómodas y vuelven a dormir a casa todas las noches. La banda sigue siendo un grupo de conocidos.',
            efectos: { stats: { fama: 5, quimica: 2 }, dinero: 200, flags: { primeraGira: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'garaje-sello-chico',
    titulo: 'Un sello independiente los quiere',
    categoria: 'carrera',
    texto:
      'Un sello chico, de tres personas y mucha convicción, quiere editarles el primer disco. Ofrecen poco dinero y todo el control artístico.',
    requiere: { stats: { fama: { min: 20 } }, discosMax: 0, sinFlags: ['contratoSello'] },
    peso: 5,
    opciones: [
      {
        id: 'firmar',
        texto: 'Firmar con ellos',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Firman por dos discos. El adelanto alcanza para comer tres meses. El disco va a salir exactamente como ustedes quieran, y eso no tiene precio hasta que lo tiene.',
            efectos: {
              stats: { credibilidad: 16, inspiracion: 8, fama: 6 },
              dinero: 1200,
              flags: { contratoSello: 1, selloIndie: 1 },
            },
          },
        ],
      },
      {
        id: 'esperar',
        texto: 'Esperar una oferta más grande',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Esperan catorce meses. No llega nada. El sello chico ya firmó a la banda de al lado y esa banda ahora está en todas las radios.',
            efectos: { stats: { fama: -8, credibilidad: -4, cordura: -8 }, flags: { rivalAscendente: 1 } },
          },
          {
            peso: 1,
            texto:
              'Esperan ocho meses y aparece una multinacional con un cheque que no se puede rechazar. A veces la paciencia paga.',
            efectos: {
              stats: { fama: 18, credibilidad: -10 },
              dinero: 8000,
              flags: { contratoSello: 1, selloMulti: 1 },
            },
          },
        ],
      },
      {
        id: 'autoeditar',
        texto: 'Autoeditarse. Sin sello, sin intermediarios',
        riesgo: 'dudoso',
        requiere: { dineroMin: 1000 },
        bloqueo: 'Prensar un disco cuesta $1.000',
        resultados: [
          {
            texto:
              'Prensan quinientas copias y las venden ustedes mismos a la salida de los shows. Se agotan en cuatro meses y la plata queda entera adentro de la banda.',
            efectos: {
              stats: { credibilidad: 20, quimica: 10, fama: 4 },
              dinero: -400,
              flags: { autogestion: 1, contratoSello: 1 },
            },
          },
        ],
      },
    ],
  },
]
