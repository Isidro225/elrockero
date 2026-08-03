import type { Evento } from '../../engine/types'

// Sustancias, dietas, médicos generosos y todo lo que te ofrecen para rendir más.
// Regla general del módulo: el beneficio es inmediato y visible, el costo es lento
// y se paga en salud, cordura y adicción.

export const EVENTOS_SUSTANCIAS: Evento[] = [
  {
    id: 'sust-primera-vez',
    titulo: 'La primera vez',
    categoria: 'sustancias',
    epigrafe: 'Alguien abre la mano en un baño de bar.',
    texto:
      'Después del show, alguien te muestra algo en la palma de la mano y te dice que con esto vas a tocar mejor. Todos los que están ahí ya dijeron que sí.',
    requiere: { edadMax: 30, stats: { adiccion: { max: 25 } }, sinFlags: ['debutSustancias'] },
    peso: 4,
    opciones: [
      {
        id: 'probar',
        texto: 'Probar',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 3,
            texto:
              'Tocás cuatro horas seguidas y te parece que descubriste algo. Al otro día no te acordás de la mitad y el cuerpo te pide la otra mitad.',
            efectos: {
              stats: { inspiracion: 14, fama: 4, adiccion: 18, salud: -6, cordura: -4 },
              flags: { debutSustancias: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te sienta pésimo. Vomitás durante dos horas en el baño de un bar y decidís que esto no es para vos. La mejor mala noche de tu vida.',
            efectos: {
              stats: { salud: -6, adiccion: 4, cordura: 8 },
              flags: { debutSustancias: 1, malaExperiencia: 1 },
            },
          },
        ],
      },
      {
        id: 'no',
        texto: 'Decir que no delante de todos',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Decís que no y se te quedan mirando dos segundos de más. Después siguen como si nada. Lo difícil ya lo hiciste.',
            efectos: { stats: { cordura: 10, credibilidad: -4, quimica: -4 }, flags: { abstemio: 1 } },
          },
        ],
      },
      {
        id: 'alcohol',
        texto: 'Quedarte con la bebida, que es más barata',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Elegís lo legal, lo lento y lo que nadie te va a cuestionar durante veinte años. Es un camino más largo hacia el mismo lugar.',
            efectos: {
              stats: { adiccion: 10, salud: -4, cordura: 4, quimica: 6 },
              flags: { debutSustancias: 1, alcohol: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'sust-medico-generoso',
    titulo: 'El médico de la gira',
    categoria: 'sustancias',
    epigrafe: 'Tiene título, matrícula y un maletín muy completo.',
    texto:
      'El sello contrató un médico para la gira. Dice que te ve cansado. Te ofrece "unas vitaminas" que te van a dejar como nuevo y firma la receta antes de que respondas.',
    requiere: { stats: { fama: { min: 45 } }, edadMin: 22, sinFlags: ['medicoGeneroso'] },
    peso: 4,
    opciones: [
      {
        id: 'aceptar',
        texto: 'Aceptar. Es un médico, sabe lo que hace',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Funcionan increíble. Hacés cuarenta fechas sin bajar el nivel una sola noche. Nadie te dice qué son y vos preferís no preguntar.',
            efectos: {
              stats: { fama: 14, salud: 8, adiccion: 22, cordura: -8 },
              dinero: -3000,
              flags: { medicoGeneroso: 1, dependenciaMedica: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Funcionan increíble durante seis meses. Después te despertás una mañana sin poder mover el brazo derecho y el médico ya no atiende el teléfono.',
            efectos: {
              stats: { salud: -22, adiccion: 24, cordura: -12, talento: -6 },
              dinero: -5000,
              flags: { medicoGeneroso: 1, dependenciaMedica: 1, danioNervioso: 1 },
            },
          },
        ],
      },
      {
        id: 'preguntar',
        texto: 'Preguntarle exactamente qué son',
        riesgo: 'seguro',
        resultados: [
          {
            peso: 2,
            texto:
              'Se pone nervioso, empieza a hablar en latín y cambia de tema. Le decís que no. A las tres semanas lo echan de la gira por otra cosa.',
            efectos: { stats: { cordura: 10, salud: 4, credibilidad: 4 }, flags: { precavido: 1 } },
          },
          {
            peso: 1,
            texto:
              'Te explica todo con detalle, con nombres largos y efectos secundarios incluidos. Es honesto. Le decís que sí sabiendo lo que hacés, que es distinto.',
            efectos: {
              stats: { salud: 10, adiccion: 10, fama: 8 },
              dinero: -2000,
              flags: { medicoGeneroso: 1 },
            },
          },
        ],
      },
      {
        id: 'echar',
        texto: 'Pedir que lo saquen de la gira',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Lo sacan. El baterista se enoja muchísimo con vos y no te explica por qué, aunque los dos sepan por qué.',
            efectos: { stats: { cordura: 8, salud: 6, quimica: -12 }, flags: { limpiaGira: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'sust-suplemento-dudoso',
    titulo: 'El suplemento del preparador',
    categoria: 'sustancias',
    epigrafe: 'Etiqueta escrita a mano. Sin prospecto.',
    texto:
      'Un preparador físico que trabaja con deportistas te ofrece un suplemento para aguantar las giras. Dice que es natural. El frasco no dice nada y viene de otro país.',
    requiere: { stats: { fama: { min: 35 } }, sinFlags: ['suplementoDudoso'] },
    peso: 3,
    opciones: [
      {
        id: 'tomar',
        texto: 'Tomarlo todos los días de la gira',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Tenés una energía que no tenías desde los diecinueve. Aguantás treinta shows en treinta y cinco días. También dejaste de dormir y no te parece un problema.',
            efectos: {
              stats: { salud: 12, fama: 10, cordura: -14, adiccion: 12 },
              dinero: -2000,
              flags: { suplementoDudoso: 1, insomnio: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'A la tercera semana te agarra una taquicardia arriba del escenario. Terminás el show sentado. El análisis después detecta tres sustancias prohibidas en cualquier deporte.',
            efectos: {
              stats: { salud: -24, cordura: -10, fama: 4 },
              dinero: -3000,
              flags: { suplementoDudoso: 1, corazonDaniado: 1 },
              titular: '"{apodo} terminó el show sentado: se descompensó en pleno escenario"',
            },
          },
        ],
      },
      {
        id: 'analizar',
        texto: 'Mandarlo a analizar antes',
        riesgo: 'seguro',
        requiere: { dineroMin: 500 },
        bloqueo: 'El análisis cuesta $500',
        resultados: [
          {
            texto:
              'El laboratorio encuentra dos anfetaminas y algo que no logran identificar. Tirás el frasco. El preparador sigue trabajando con media industria.',
            efectos: { stats: { cordura: 8, credibilidad: 6 }, dinero: -500, flags: { precavido: 1 } },
          },
        ],
      },
      {
        id: 'no',
        texto: 'Dormir ocho horas, que es gratis',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Dormís. Rendís un poco menos en el escenario y bastante más en el resto de tu vida.',
            efectos: { stats: { salud: 10, cordura: 10, fama: -4 } },
          },
        ],
      },
    ],
  },

  {
    id: 'sust-dieta',
    titulo: 'La dieta que te va a cambiar la vida',
    categoria: 'salud',
    texto:
      'Alguien te convence de una dieta estricta. Dice que te va a limpiar el cuerpo y la cabeza. También te prohíbe catorce cosas, entre ellas dormir después de las diez.',
    requiere: { edadMin: 24, sinFlags: ['dietaExtrema'] },
    peso: 3,
    opciones: [
      {
        id: 'macrobiotica',
        texto: 'La macrobiótica estricta',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Bajás nueve kilos y te sentís lúcido como nunca. También estás de pésimo humor y le hiciste la vida imposible a todo el mundo durante ocho meses.',
            efectos: {
              stats: { salud: 16, cordura: 6, quimica: -10, adiccion: -8 },
              flags: { dietaExtrema: 1, dietaSana: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'La llevás demasiado lejos. Bajás dieciocho kilos, te agarra una anemia y el médico te dice que estás peor que cuando tomabas.',
            efectos: {
              stats: { salud: -20, cordura: -8, talento: -4 },
              flags: { dietaExtrema: 1, dietaPeligrosa: 1 },
            },
          },
        ],
      },
      {
        id: 'ayuno',
        texto: 'El retiro de ayuno y silencio de tres semanas',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Tres semanas sin hablar ni comer casi nada. Salís con veinte letras escritas y una calma que no vas a poder explicar en ninguna entrevista.',
            efectos: {
              stats: { inspiracion: 24, cordura: 16, adiccion: -14, salud: -6, fama: -4 },
              dinero: -3000,
              flags: { dietaExtrema: 1, retiroEspiritual: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Al día once empezás a escuchar cosas. El retiro te pide que te vayas. Volvés distinto y no exactamente mejor.',
            efectos: {
              stats: { inspiracion: 18, cordura: -22, salud: -10 },
              dinero: -3000,
              flags: { dietaExtrema: 1, brote: 1 },
            },
          },
        ],
      },
      {
        id: 'nada',
        texto: 'Seguir comiendo como siempre',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Milanesas a las cuatro de la mañana. No es un plan de salud pero es un plan sostenible, que es más de lo que se puede decir de los otros dos.',
            efectos: { stats: { salud: -4, cordura: 6, quimica: 6 } },
          },
        ],
      },
    ],
  },

  {
    id: 'sust-aguja',
    titulo: 'El escalón siguiente',
    categoria: 'sustancias',
    epigrafe: 'Hasta acá era una fiesta.',
    texto:
      'Alguien de confianza te ofrece algo distinto. Dice que es otra cosa, que no tiene nada que ver, que él lo controla perfectamente hace años.',
    requiere: { stats: { adiccion: { min: 40 } }, edadMin: 20, sinFlags: ['lineaCruzada'] },
    peso: 4,
    opciones: [
      {
        id: 'cruzar',
        texto: 'Cruzar la línea',
        riesgo: 'letal',
        resultados: [
          {
            peso: 3,
            texto:
              'Es lo mejor que sentiste en tu vida y esa es exactamente la peor noticia posible. A partir de acá el reloj corre para otro lado.',
            efectos: {
              stats: { adiccion: 32, salud: -14, cordura: -10, inspiracion: 8 },
              flags: { lineaCruzada: 1 },
              encola: ['sust-fondo'],
            },
          },
          {
            peso: 1,
            texto:
              'Te da una reacción horrible, casi te vas y volvés. Pasás la noche entera convencido de que te morís. Nunca más querés acercarte a eso.',
            efectos: {
              stats: { salud: -18, cordura: -14, adiccion: 8 },
              flags: { casiMuerte: 1, sustoGrande: 1 },
            },
          },
        ],
      },
      {
        id: 'no',
        texto: 'No. Ahí no',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Le decís que no y te vas del lugar. Es la única decisión de tu vida que vas a poder señalar sin ninguna duda como la correcta.',
            efectos: { stats: { cordura: 14, credibilidad: 4, adiccion: -6 }, flags: { lineaRespetada: 1 } },
          },
        ],
      },
      {
        id: 'sacarlo',
        texto: 'Sacárselo y tirarlo al inodoro delante de él',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Se pone a llorar y te putea. Se van a hablar de nuevo en tres años, cuando esté limpio, y te va a agradecer sin mirarte a los ojos.',
            efectos: {
              stats: { cordura: 10, quimica: -10, credibilidad: 8 },
              flags: { lineaRespetada: 1, salvoAAlguien: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'sust-fondo',
    titulo: 'El fondo',
    categoria: 'sustancias',
    guion: true,
    epigrafe: 'Un departamento con las persianas bajas.',
    texto:
      'Hace cuatro meses que no salís. Vendiste dos guitarras. La banda dejó de llamar y te alivió que dejaran de llamar. Alguien golpea la puerta y no para de golpear.',
    opciones: [
      {
        id: 'abrir',
        texto: 'Abrir la puerta',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Es tu vieja con una valija. No dice nada, entra, abre las persianas y se sienta. Se queda cuatro meses. Es la única razón por la que hay un capítulo siguiente.',
            efectos: {
              stats: { adiccion: -22, salud: 12, cordura: 16, quimica: -6 },
              flags: { rescatado: 1 },
              encola: ['sust-rehabilitacion'],
            },
          },
          {
            peso: 1,
            texto:
              'Es el bajista. Te mira, mira el departamento y se le cae la cara. Te dice que la banda te espera y que no te van a esperar para siempre.',
            efectos: {
              stats: { adiccion: -12, cordura: 10, quimica: 12 },
              flags: { ultimatumBanda: 1 },
              encola: ['sust-rehabilitacion'],
            },
          },
        ],
      },
      {
        id: 'no-abrir',
        texto: 'No abrir',
        riesgo: 'letal',
        resultados: [
          {
            peso: 2,
            texto:
              'Dejan de golpear a los veinte minutos. Volvés a la cama. Pasan otros cuatro meses y nadie vuelve a golpear.',
            efectos: {
              stats: { adiccion: 20, salud: -22, cordura: -22, fama: -16, quimica: -20 },
              flags: { aislado: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Dejan de golpear. Esa noche te pasás de la raya y te encuentran a la mañana en el piso del baño. Los paramédicos llegan cuatro minutos antes de lo necesario.',
            efectos: {
              stats: { adiccion: 14, salud: -34, cordura: -16 },
              flags: { casiMuerte: 1, sobredosisPrevia: 1 },
              titular: '"Internaron de urgencia a {apodo}: cuatro minutos"',
            },
          },
        ],
      },
    ],
  },

  {
    id: 'sust-rehabilitacion',
    titulo: 'La clínica',
    categoria: 'salud',
    guion: true,
    texto:
      'Hay un lugar en las sierras, caro, discreto y con muy buena reputación. Son tres meses. La banda tiene una gira firmada para dentro de cinco semanas.',
    opciones: [
      {
        id: 'internarse',
        texto: 'Internarte los tres meses completos',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Se cancela la gira y se pierde mucha plata. Salís a los tres meses caminando por tu cuenta. La primera vez que agarrás la guitarra limpio te temblaban las manos y salió igual.',
            efectos: {
              stats: { adiccion: -42, salud: 22, cordura: 24, fama: -12, inspiracion: -6 },
              dinero: -25000,
              flags: { rehabilitado: 1, sobrio: 1 },
              titular: '"{apodo} cancela la gira: \'necesito parar\'"',
            },
          },
        ],
      },
      {
        id: 'medio',
        texto: 'Hacer cinco semanas y salir a tiempo para la gira',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Salís antes de tiempo y hacés la gira. Funciona durante once fechas. En la doceava, en un hotel, todo vuelve exactamente al mismo lugar.',
            efectos: {
              stats: { adiccion: 12, salud: -8, cordura: -10, fama: 10 },
              dinero: 15000,
              flags: { recaida: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Salís antes y aguantás. La gira es un infierno de fuerza de voluntad noche por noche y la terminás. Nadie te va a aplaudir por eso porque nadie se enteró.',
            efectos: {
              stats: { adiccion: -22, cordura: 12, salud: 6, fama: 10 },
              dinero: 15000,
              flags: { rehabilitado: 1 },
            },
          },
        ],
      },
      {
        id: 'solo',
        texto: 'Dejar solo, en tu casa, sin ayuda',
        riesgo: 'letal',
        resultados: [
          {
            peso: 2,
            texto:
              'Aguantás nueve días. Al décimo estás peor que antes y encima te sentís un fracasado, que es exactamente el combustible que esto necesita.',
            efectos: { stats: { adiccion: 16, salud: -14, cordura: -18 }, flags: { recaida: 1 } },
          },
          {
            peso: 1,
            texto:
              'Contra todo pronóstico, aguantás. Nadie te ayudó y por eso mismo no le debés nada a nadie, y por eso mismo tampoco tenés a nadie cuando se pone difícil.',
            efectos: {
              stats: { adiccion: -28, cordura: -6, salud: 10, credibilidad: 8 },
              flags: { rehabilitado: 1, orgulloso: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'sust-recaida',
    titulo: 'Una copa no es nada',
    categoria: 'sustancias',
    texto:
      'Llevás dos años limpio. Estás en una fiesta y alguien te alcanza una copa por distracción. Nadie te está mirando. Sería un solo trago.',
    requiere: { flags: ['rehabilitado'], stats: { adiccion: { max: 40 } } },
    peso: 3,
    opciones: [
      {
        id: 'tomar',
        texto: 'Tomarla',
        riesgo: 'letal',
        resultados: [
          {
            peso: 3,
            texto:
              'Una copa. Al mes son cuatro por noche. A los seis meses estás donde estabas, con la diferencia de que ahora sabés perfectamente cómo termina.',
            efectos: {
              stats: { adiccion: 30, salud: -14, cordura: -16 },
              quitaFlags: ['sobrio'],
              flags: { recaida: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Una copa. La tomás, la dejás y no pasa nada. Estás dentro del uno por ciento de las veces que esto sale así y ni siquiera lo sabés.',
            efectos: { stats: { adiccion: 8, cordura: -4 } },
          },
        ],
      },
      {
        id: 'devolver',
        texto: 'Devolverla y salir a la vereda',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te fumás un cigarrillo en la vereda con el corazón a mil. Volvés adentro a los veinte minutos. Nadie se enteró de nada y vos ganaste una batalla enorme.',
            efectos: { stats: { cordura: 12, adiccion: -8, salud: 4 }, flags: { sobrio: 1 } },
          },
        ],
      },
      {
        id: 'irse',
        texto: 'Irte de la fiesta sin avisar',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te vas. Al otro día algunos comentan que estuviste raro. Preferís que digan eso a lo otro.',
            efectos: { stats: { cordura: 8, adiccion: -6, quimica: -6, fama: -2 } },
          },
        ],
      },
    ],
  },

  {
    id: 'sust-gira-blanca',
    titulo: 'La gira de los cuarenta días',
    categoria: 'sustancias',
    texto:
      'Cuarenta fechas en cuarenta y cinco días. El tour manager te dice, sin mirarte, que hay una forma de llegar entero al final y que no es durmiendo.',
    requiere: { stats: { fama: { min: 55 }, adiccion: { min: 25 } } },
    peso: 3,
    opciones: [
      {
        id: 'todo',
        texto: 'Hacerla completa, como sea',
        riesgo: 'letal',
        resultados: [
          {
            peso: 2,
            texto:
              'La hacen entera. Cuarenta fechas, ninguna cancelada, récord de recaudación. Vos volvés con diez kilos menos y sin ningún recuerdo del mes de marzo.',
            efectos: {
              stats: { fama: 20, adiccion: 24, salud: -20, cordura: -14 },
              dinero: 60000,
              flags: { giraRecord: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'En la fecha treinta y uno te desplomás en la prueba de sonido. Suspenden las nueve restantes. Te despertás en una clínica con suero y con abogados.',
            efectos: {
              stats: { fama: 6, adiccion: 18, salud: -32, cordura: -16 },
              dinero: 20000,
              flags: { colapsoGira: 1 },
              titular: '"Se desplomó en la prueba de sonido: suspenden nueve fechas"',
            },
          },
        ],
      },
      {
        id: 'recortar',
        texto: 'Recortar la gira a la mitad',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Veinte fechas. El sello se enoja, el promotor se enoja, la banda respira. Llegan al final sin que nadie termine en un hospital.',
            efectos: { stats: { fama: 8, salud: -6, cordura: 6, quimica: 8 }, dinero: 25000 },
          },
        ],
      },
      {
        id: 'reglas',
        texto: 'Imponer reglas: nada antes del show, todos duermen',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Se cumple a medias. Los shows son notablemente mejores. Dos integrantes te odian por convertirte en el policía de la gira.',
            efectos: {
              stats: { fama: 14, talento: 8, salud: -6, quimica: -10, adiccion: -6 },
              dinero: 45000,
            },
          },
          {
            peso: 1,
            texto:
              'Se cumple. Es la mejor gira de sus vidas y todos vuelven enteros. Nadie va a escribir un libro sobre esta gira, y está bien.',
            efectos: {
              stats: { fama: 18, talento: 10, quimica: 14, adiccion: -10 },
              dinero: 55000,
              flags: { giraLimpia: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'sust-companiero',
    titulo: 'El que está peor que vos',
    categoria: 'banda',
    texto:
      'El guitarrista lleva tres shows tocando mal. Ayer se durmió en la prueba de sonido sentado. Todos lo ven y nadie dice nada, y vos sos el que puede decir algo.',
    requiere: { tieneBanda: true, stats: { fama: { min: 40 } }, sinFlags: ['intervencion'] },
    peso: 3,
    opciones: [
      {
        id: 'hablar',
        texto: 'Sentarlo y hablarle de frente',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Te putea, te dice que sos un hipócrita y tiene bastante razón. Dos semanas después te agradece. Sigue igual, pero te agradece.',
            efectos: { stats: { quimica: 8, cordura: -4 }, flags: { intervencion: 1 } },
          },
          {
            peso: 1,
            texto:
              'Te escucha en silencio y se pone a llorar. Al día siguiente pide ayuda de verdad. Le acabás de agregar veinte años de vida.',
            efectos: {
              stats: { quimica: 20, cordura: 8, credibilidad: 6 },
              flags: { intervencion: 1, salvoAAlguien: 1 },
            },
          },
        ],
      },
      {
        id: 'echar',
        texto: 'Echarlo de la banda',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Lo echan. Consiguen un reemplazo que toca mejor y no aporta nada. La banda funciona y ya no es la misma banda.',
            efectos: {
              stats: { quimica: -14, talento: 6, credibilidad: -8, cordura: -8 },
              bandaSale: 1,
              flags: { intervencion: 1, echoAUno: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Lo echan y a los ocho meses aparece muerto en un hotel. En cada entrevista de los próximos treinta años te van a preguntar por él.',
            efectos: {
              stats: { quimica: -10, cordura: -26, credibilidad: 6, inspiracion: 12 },
              bandaSale: 1,
              flags: { intervencion: 1, muerteCompaniero: 1, culpa: 1 },
              titular: '"Encontraron muerto al ex guitarrista de {banda}"',
            },
          },
        ],
      },
      {
        id: 'nada',
        texto: 'Dejarlo. Es grande, sabe lo que hace',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Sigue así dos años más. La banda se acostumbra a tapar sus errores en vivo y a mentirle a la prensa. Se vuelve un trabajo aparte.',
            efectos: { stats: { quimica: -10, talento: -6, cordura: -8 } },
          },
          {
            peso: 1,
            texto:
              'Una noche no baja del cuarto del hotel. Golpean la puerta media hora antes de saber que ya era tarde. Vos estabas en el cuarto de al lado.',
            efectos: {
              stats: { cordura: -30, quimica: -20, credibilidad: 4, inspiracion: 14 },
              bandaSale: 1,
              flags: { muerteCompaniero: 1, culpa: 2 },
              titular: '"Luto en el rock: murió el guitarrista de {banda}"',
            },
          },
        ],
      },
    ],
  },

  {
    id: 'sust-detox-espiritual',
    titulo: 'El gurú',
    categoria: 'salud',
    texto:
      'Un tipo con túnica blanca y muchos discos de oro entre sus seguidores te propone un mes en su centro. Nada de sustancias, mucha meditación y una cuota mensual considerable.',
    requiere: { stats: { fama: { min: 50 } }, dineroMin: 8000, sinFlags: ['guru'] },
    peso: 2,
    opciones: [
      {
        id: 'ir',
        texto: 'Ir un mes entero',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Volvés limpio, tranquilo y convencido de cosas que a tus amigos les cuesta escuchar sin reírse. También volvés componiendo mejor que nunca.',
            efectos: {
              stats: { adiccion: -24, cordura: 18, inspiracion: 16, salud: 10, credibilidad: -8 },
              dinero: -12000,
              flags: { guru: 1, iluminado: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Es una estafa carísima con incienso. Volvés igual que como fuiste, con doce mil menos y con un video tuyo cantando mantras que va a circular para siempre.',
            efectos: {
              stats: { cordura: -6, credibilidad: -14, fama: 6 },
              dinero: -12000,
              flags: { guru: 1, ridiculoPublico: 1 },
            },
          },
        ],
      },
      {
        id: 'financiar',
        texto: 'No ir, pero donar y salir en la foto',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Donás, salís en la foto y seguís exactamente igual. El gurú te agradece públicamente y eso te sirve más a él que a vos.',
            efectos: { stats: { fama: 6, credibilidad: -10 }, dinero: -8000 },
          },
        ],
      },
      {
        id: 'no',
        texto: 'Reírte y no ir',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'No vas. Dos años después, el gurú está preso por lavado de dinero y vos tenés una anécdota buenísima para las entrevistas.',
            efectos: { stats: { credibilidad: 6, cordura: 4 } },
          },
        ],
      },
    ],
  },
]
