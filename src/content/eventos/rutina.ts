import type { Evento } from '../../engine/types'

// Eventos repetibles de relleno. Existen para que ningún año quede vacío y para
// que las decisiones chicas también empujen la partida hacia algún lado.

export const EVENTOS_RUTINA: Evento[] = [
  {
    id: 'rut-anio-de-trabajo',
    titulo: 'Un año más',
    categoria: 'carrera',
    unico: false,
    peso: 0.5,
    texto:
      'No pasa nada extraordinario. Hay ensayos, hay fechas, hay que decidir en qué se va el año.',
    opciones: [
      {
        id: 'componer',
        texto: 'Encerrarte a componer',
        riesgo: 'seguro',
        resultados: [
          {
            texto: 'Doce temas nuevos, cuatro de los cuales sirven. Es una buena proporción.',
            efectos: { stats: { inspiracion: 14, talento: 4, fama: -3, quimica: -2 } },
          },
        ],
      },
      {
        id: 'tocar',
        texto: 'Salir a tocar todo lo que aparezca',
        riesgo: 'seguro',
        resultados: [
          {
            texto: 'Cuarenta fechas chicas. El cuerpo lo siente y la banda suena como nunca.',
            efectos: { stats: { fama: 8, quimica: 8, talento: 6, salud: -6, inspiracion: -6 }, dinero: 6000 },
          },
        ],
      },
      {
        id: 'descansar',
        texto: 'Parar. No hacer nada',
        riesgo: 'seguro',
        resultados: [
          {
            texto: 'Un año en tu casa. El mundo sigue sin vos, que es lo que el mundo sabe hacer.',
            efectos: { stats: { salud: 12, cordura: 12, adiccion: -8, fama: -8 }, dinero: -3000 },
          },
        ],
      },
    ],
  },

  {
    id: 'rut-noche-larga',
    titulo: 'Otra noche larga',
    categoria: 'sustancias',
    unico: false,
    peso: 0.8,
    requiere: { stats: { adiccion: { min: 20 } } },
    texto:
      'Terminó el show, son las tres y hay dos caminos que salen de la puerta del camarín. Los dos existen todas las noches y siempre elegís uno.',
    opciones: [
      {
        id: 'seguir',
        texto: 'Seguirla',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 3,
            texto: 'La seguís hasta las once de la mañana. Al otro día el show es un desastre y nadie lo nota excepto vos.',
            efectos: { stats: { adiccion: 10, salud: -8, cordura: -5, quimica: 4, talento: -2 } },
          },
          {
            peso: 1,
            texto: 'La seguís y sale de ahí una canción entera, escrita en una servilleta a las siete de la mañana.',
            efectos: { stats: { adiccion: 10, salud: -6, inspiracion: 16, credibilidad: 4 } },
          },
        ],
      },
      {
        id: 'hotel',
        texto: 'Volver al hotel',
        riesgo: 'seguro',
        resultados: [
          {
            texto: 'Ocho horas de sueño. Nadie va a escribir sobre esto y es lo que te va a mantener vivo.',
            efectos: { stats: { salud: 8, cordura: 6, adiccion: -6, quimica: -3 } },
          },
        ],
      },
    ],
  },

  {
    id: 'rut-oferta-fechas',
    titulo: 'La agenda del año',
    categoria: 'plata',
    unico: false,
    peso: 0.6,
    requiere: { stats: { fama: { min: 25 } } },
    texto:
      'El manager pone tres propuestas sobre la mesa. Hay que elegir una y las otras dos se las llevan otros.',
    opciones: [
      {
        id: 'corporativos',
        texto: 'Shows privados de empresas. Pagan una barbaridad',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Tocás para doscientos ejecutivos que hablan mientras tocás. Cobrás en una noche lo de una gira entera.',
            efectos: { stats: { credibilidad: -12, cordura: -6, fama: -2 }, dinero: 45000 },
          },
        ],
      },
      {
        id: 'ciudades-chicas',
        texto: 'Gira por ciudades donde nunca fueron',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Pueblos de ocho mil habitantes donde nadie va nunca. Te reciben como si fueras el papa. Volvés con el tanque lleno.',
            efectos: { stats: { fama: 10, credibilidad: 12, quimica: 8, salud: -6, inspiracion: 8 }, dinero: 8000 },
          },
        ],
      },
      {
        id: 'festivales',
        texto: 'Circuito de festivales grandes',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Ocho festivales, cuarenta minutos cada uno, mucha gente que vino por otro. Eficiente y vacío.',
            efectos: { stats: { fama: 14, credibilidad: -4, salud: -4 }, dinero: 25000 },
          },
        ],
      },
    ],
  },

  {
    id: 'rut-conflicto-banda',
    titulo: 'Discusión en la sala',
    categoria: 'banda',
    unico: false,
    peso: 0.7,
    requiere: { tieneBanda: true },
    texto:
      'Se pudre por algo mínimo: un arreglo de dos compases. Todos saben que no es por los dos compases.',
    opciones: [
      {
        id: 'imponerte',
        texto: 'Imponer tu criterio',
        riesgo: 'dudoso',
        resultados: [
          {
            texto: 'Se hace lo que decís. Queda mejor. Alguien deja de proponer cosas para siempre.',
            efectos: { stats: { talento: 4, quimica: -10, credibilidad: 2 } },
          },
        ],
      },
      {
        id: 'ceder',
        texto: 'Ceder aunque tengas razón',
        riesgo: 'seguro',
        resultados: [
          {
            texto: 'Queda peor de lo que hubiera quedado y la banda sigue existiendo. Ese cambio conviene.',
            efectos: { stats: { quimica: 12, talento: -2, cordura: -3 } },
          },
        ],
      },
      {
        id: 'probar',
        texto: 'Grabar las dos versiones y decidir escuchando',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Tardan tres horas más y sale una tercera versión que a nadie se le había ocurrido. Así se hacen los discos buenos.',
            efectos: { stats: { talento: 6, quimica: 8, inspiracion: 6, salud: -2 } },
          },
        ],
      },
    ],
  },

  {
    id: 'rut-entrevista',
    titulo: 'Ronda de prensa',
    categoria: 'prensa',
    unico: false,
    peso: 0.5,
    requiere: { stats: { fama: { min: 30 } } },
    texto:
      'Catorce entrevistas en un día. Para la novena te preguntan de nuevo por el significado del disco.',
    opciones: [
      {
        id: 'profesional',
        texto: 'Contestar bien las catorce',
        riesgo: 'seguro',
        resultados: [
          {
            texto: 'Salen catorce notas correctas. Terminás vacío y el disco vende.',
            efectos: { stats: { fama: 8, cordura: -6 }, dinero: 3000 },
          },
        ],
      },
      {
        id: 'mentir',
        texto: 'Inventar una historia distinta en cada una',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Catorce versiones contradictorias del mismo disco. Los fans arman teorías durante años. Te divertís muchísimo.',
            efectos: { stats: { credibilidad: 8, fama: 6, cordura: 6, inspiracion: 4 } },
          },
        ],
      },
      {
        id: 'cortar',
        texto: 'Levantarte en la novena y volver al hotel',
        riesgo: 'dudoso',
        resultados: [
          {
            texto: 'Cinco periodistas se quedan esperando. Tres escriben notas malísimas sobre vos ese mes.',
            efectos: { stats: { cordura: 6, fama: -6, credibilidad: 2 } },
          },
        ],
      },
    ],
  },

  {
    id: 'rut-cuerpo',
    titulo: 'El chequeo',
    categoria: 'salud',
    unico: false,
    peso: 0.6,
    requiere: { edadMin: 30 },
    texto:
      'Hace años que no te ves con un médico. Alguien insiste. Hay un turno reservado para el jueves.',
    opciones: [
      {
        id: 'ir',
        texto: 'Ir al chequeo',
        riesgo: 'seguro',
        resultados: [
          {
            peso: 2,
            texto: 'Está casi todo bien y hay dos cosas para corregir a tiempo. Corregirlas a tiempo es todo el asunto.',
            efectos: { stats: { salud: 12, cordura: 4 }, dinero: -1500 },
          },
          {
            peso: 1,
            texto: 'Encuentran algo temprano. Te tratás, te asustás y cambiás cuatro hábitos de golpe.',
            efectos: { stats: { salud: 6, cordura: -8, adiccion: -12 }, dinero: -6000 },
          },
        ],
      },
      {
        id: 'no',
        texto: 'No ir. Si no duele, no hay nada',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto: 'No vas. Durante un tiempo no pasa nada, que es exactamente lo que hace que no vayas la próxima.',
            efectos: { stats: { salud: -8, cordura: 2 } },
          },
        ],
      },
    ],
  },

  {
    id: 'rut-fans',
    titulo: 'La puerta del camarín',
    categoria: 'carrera',
    unico: false,
    peso: 0.4,
    requiere: { stats: { fama: { min: 40 } } },
    texto: 'Hay treinta personas esperando afuera bajo la lluvia desde hace dos horas.',
    opciones: [
      {
        id: 'salir',
        texto: 'Salir y quedarte con ellos',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Cuarenta minutos firmando cosas y escuchando historias. Tres de esas historias te acompañan el resto de la gira.',
            efectos: { stats: { fama: 6, credibilidad: 8, cordura: 6, salud: -3 } },
          },
        ],
      },
      {
        id: 'irse',
        texto: 'Salir por atrás',
        riesgo: 'seguro',
        resultados: [
          {
            texto: 'Salís por atrás y llegás al hotel a horario. Alguien de los treinta lo va a contar mal durante años.',
            efectos: { stats: { cordura: 4, credibilidad: -6, fama: -2 } },
          },
        ],
      },
    ],
  },

  {
    id: 'rut-plata-corta',
    titulo: 'No cierran los números',
    categoria: 'plata',
    unico: false,
    peso: 0.9,
    requiere: { dineroMax: 0 },
    texto:
      'La cuenta está en rojo. Hay que resolver algo esta semana y ninguna de las opciones es buena.',
    opciones: [
      {
        id: 'vender',
        texto: 'Vender un instrumento',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Vendés algo que querías. Alcanza para tres meses. Vas a intentar recomprarlo durante años y va a estar en otro país.',
            efectos: { stats: { cordura: -8, talento: -4, inspiracion: -4 }, dinero: 6000 },
          },
        ],
      },
      {
        id: 'sesionista',
        texto: 'Tocar de sesionista para cualquiera que pague',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Grabás en catorce discos de gente que no te gusta. Aprendés muchísimo y no se lo contás a nadie.',
            efectos: { stats: { talento: 12, credibilidad: -4, inspiracion: -4, cordura: -4 }, dinero: 9000 },
          },
        ],
      },
      {
        id: 'prestamo',
        texto: 'Pedir prestado',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Conseguís la plata de alguien a quien no le sobra. La devolución va a ser un tema entre ustedes durante mucho tiempo.',
            efectos: { stats: { cordura: -6, quimica: -6 }, dinero: 8000, flags: { deuda: 1 } },
          },
        ],
      },
    ],
  },
]
