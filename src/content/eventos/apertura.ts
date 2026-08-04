import type { Evento } from '../../engine/types'

// Eventos de apertura. No entran al sorteo: el motor los encola al crear el
// personaje, dos por partida. El primero depende de dónde te criaste; el
// segundo, de la época que te tocó. Sirven para poner al jugador en el lugar
// donde empieza todo, antes de que aparezca la primera oportunidad real.

// ---------------------------------------------------------------------------
// Apertura 1: el lugar del que venís
// ---------------------------------------------------------------------------

export const APERTURA_POR_ORIGEN: Record<string, string> = {
  conservatorio: 'apertura-conservatorio',
  garaje: 'apertura-garaje',
  iglesia: 'apertura-iglesia',
  'familia-musica': 'apertura-familia',
  fabrica: 'apertura-fabrica',
  internado: 'apertura-internado',
  calle: 'apertura-calle',
}

const EVENTOS_ORIGEN: Evento[] = [
  {
    id: 'apertura-conservatorio',
    titulo: 'El aula de la planta alta',
    categoria: 'carrera',
    guion: true,
    epigrafe: 'Piso encerado, silencio obligatorio y un metrónomo que no perdona.',
    texto:
      'Tenés diecisiete años y una beca. El profesor te corrige la muñeca por cuarta vez en la mañana. A las siete cierran el edificio y hay un aula del fondo cuya cerradura, todo el mundo lo sabe, no cierra del todo.',
    opciones: [
      {
        id: 'programa',
        texto: 'Hacer el programa completo. Todo lo demás puede esperar',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Terminás el año con la mejor nota de tu camada. Tocás mejor que cualquiera que vayas a conocer en los próximos diez años y no tenés absolutamente nada que contar.',
            efectos: {
              stats: { talento: 10, cordura: 4, inspiracion: -6, credibilidad: -4 },
              flags: { disciplina: 1 },
            },
          },
        ],
      },
      {
        id: 'aula-fondo',
        texto: 'Quedarte en el aula del fondo después de hora',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Descubrís que el conservatorio suena distinto vacío. Tocás cosas que ahí adentro no se pueden nombrar y salís a las once de la noche con la sensación exacta de estar haciendo algo prohibido con un piano de cola.',
            efectos: {
              stats: { inspiracion: 12, talento: 4, credibilidad: 6, cordura: -4 },
              flags: { aulaDelFondo: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te encuentra el portero a la tercera noche. No te denuncia: se sienta, escucha dos temas y te dice que su hermano tocaba parecido y que dejó. Te deja la llave y te pide que apagues las luces.',
            efectos: {
              stats: { inspiracion: 14, talento: 6, credibilidad: 8 },
              flags: { aulaDelFondo: 1, escenaAmiga: 1 },
            },
          },
        ],
      },
      {
        id: 'dejar',
        texto: 'Dejar la beca. No viniste a esto',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Firmás la baja un martes a la mañana y salís a la calle con el estuche en la mano y ninguna excusa. Tu vieja se entera por una carta. Tardás años en poder explicar bien por qué lo hiciste, y para entonces ya no hace falta.',
            efectos: {
              stats: { credibilidad: 14, inspiracion: 10, talento: -6, cordura: -6 },
              dinero: -400,
              flags: { todoONada: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'apertura-garaje',
    titulo: 'Dos horas antes de que vuelvan',
    categoria: 'banda',
    guion: true,
    epigrafe: 'Un garaje, un amplificador prestado y una vecina con teléfono.',
    texto:
      'El garaje de la casa está vacío de lunes a viernes hasta las siete. Ahí adentro entran tres personas, un amplificador que zumba y toda la adolescencia. La vecina del fondo ya llamó dos veces.',
    opciones: [
      {
        id: 'negociar',
        texto: 'Ir a hablar con la vecina antes de que llame de nuevo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te abre la puerta con cara de guerra y se la desarmás preguntándole a qué hora le molesta menos. Pactan de cuatro a seis. Nunca más llama, y con los años va a decirle a todo el barrio que ella los escuchó primero.',
            efectos: {
              stats: { cordura: 8, quimica: 6, credibilidad: 4 },
              flags: { barrioAmigo: 1 },
            },
          },
        ],
      },
      {
        id: 'mas-fuerte',
        texto: 'Subir todo y que se arregle',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Viene la policía un jueves. Se llevan el amplificador prestado y una advertencia para tus viejos. Esa tarde, tres pibes de la otra cuadra golpean la puerta para preguntar quiénes eran los que hacían ese ruido.',
            efectos: {
              stats: { credibilidad: 10, quimica: 8, inspiracion: 6, cordura: -6 },
              dinero: -200,
              flags: { escenaAmiga: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Nadie viene. Tocan a volumen de estadio durante seis meses en un garaje de cuatro por cinco y aprenden lo único que no se enseña: cómo suena una banda cuando no le importa nada.',
            efectos: {
              stats: { quimica: 14, credibilidad: 8, inspiracion: 6, salud: -4 },
            },
          },
        ],
      },
      {
        id: 'insonorizar',
        texto: 'Forrar las paredes con cartones de huevo y seguir',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Se pasan un sábado entero pegando cartones que no aíslan absolutamente nada. Sirve igual: a partir de ese día el garaje deja de ser el garaje de una casa y pasa a ser la sala de una banda que todavía no existe.',
            efectos: {
              stats: { quimica: 10, inspiracion: 8, talento: 4 },
              dinero: -100,
              flags: { salaPropia: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'apertura-iglesia',
    titulo: 'Después de la misa de siete',
    categoria: 'carrera',
    guion: true,
    epigrafe: 'El mejor equipo de sonido del barrio está en una parroquia.',
    texto:
      'Cantás en el coro desde los nueve años. La parroquia tiene micrófonos, un órgano eléctrico y un salón vacío después de la última misa. El cura te tiene confianza y no sabe todavía para qué la vas a usar.',
    opciones: [
      {
        id: 'pedir',
        texto: 'Pedirle el salón al cura y contarle la verdad',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Lo escucha, se queda callado un rato largo y te dice que los martes hay catequesis y los jueves no. No te pregunta qué música es. Durante dos años ensayás abajo de un cristo de yeso y eso te va a salir en las letras toda la vida.',
            efectos: {
              stats: { inspiracion: 10, talento: 6, cordura: 6, quimica: 4 },
              flags: { salaPropia: 1, culpaCatolica: 1 },
            },
          },
        ],
      },
      {
        id: 'copia',
        texto: 'Hacer una copia de la llave y no contarle nada',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Entrás de noche durante siete meses. Grabás en un casete con el micrófono del ambón y aprendés a tocar bajito, que es una técnica que después nadie entiende de dónde sacaste.',
            efectos: {
              stats: { inspiracion: 14, talento: 8, credibilidad: 6, cordura: -8 },
              flags: { culpaCatolica: 1, aulaDelFondo: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te agarra el cura la cuarta noche. No grita. Te dice que le parece bien pero que se lo hubieras pedido, y esa frase te va a doler más que cualquier reto que te hayan pegado en tu casa.',
            efectos: {
              stats: { cordura: -10, credibilidad: 4, inspiracion: 8 },
              flags: { culpaCatolica: 1 },
            },
          },
        ],
      },
      {
        id: 'irse',
        texto: 'Dejar el coro. No querés deberle nada a nadie',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Te vas sin dar explicaciones, en el medio de un adviento. Te quedás sin la mejor escuela de canto que ibas a tener gratis y con una cosa adentro, mitad culpa y mitad libertad, que va a ser tu tema durante veinte años.',
            efectos: {
              stats: { credibilidad: 10, inspiracion: 12, talento: -6, cordura: -6 },
              flags: { culpaCatolica: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'apertura-familia',
    titulo: 'Las cajas del fondo',
    categoria: 'amor',
    guion: true,
    epigrafe: 'Todo lo que tu viejo dejó de hacer está apilado en un placard.',
    texto:
      'Tu viejo tocó en serio hasta los treinta y después no tocó nunca más. En el fondo de la casa hay tres cajas con cintas, contratos viejos y una guitarra que nadie abre desde antes de que nacieras.',
    opciones: [
      {
        id: 'preguntar',
        texto: 'Sentarte con él y pedirle que te cuente todo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Habla cuatro horas seguidas por primera vez en su vida. Te cuenta las giras, los sellos, los que no le pagaron y el día que dejó. Al final te dice el nombre de dos personas a las que podés llamar de su parte y te pide que no lo hagas hasta que tengas algo bueno.',
            efectos: {
              stats: { talento: 8, cordura: 8, credibilidad: 6, inspiracion: 4 },
              flags: { apoyoFamiliar: 1, padrinoIndustria: 1 },
            },
          },
        ],
      },
      {
        id: 'abrir',
        texto: 'Abrir las cajas solo, una noche, sin avisar',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Encontrás cintas de una banda que nunca nombró y un contrato con una cláusula que se entiende sola. Escuchás tres horas de tu viejo a los veinticuatro años sonando mejor de lo que jamás te dijo. No le decís que las escuchaste.',
            efectos: {
              stats: { inspiracion: 16, talento: 6, cordura: -8, credibilidad: 4 },
              flags: { herencia: 1, precavido: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te encuentra a las tres de la mañana rodeado de cintas. Se queda parado en la puerta un minuto entero, se da vuelta y se va a dormir. A la mañana siguiente la guitarra está afinada arriba de tu cama.',
            efectos: {
              stats: { inspiracion: 12, talento: 10, cordura: 4 },
              flags: { apoyoFamiliar: 1, herencia: 1 },
            },
          },
        ],
      },
      {
        id: 'no-repetir',
        texto: 'Cerrar el placard. Vos no vas a terminar así',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Decidís que nada de lo que hay en esas cajas te sirve. Empezás de cero, sin herencia y sin advertencias, que es la manera más cara y más limpia de empezar.',
            efectos: {
              stats: { credibilidad: 8, inspiracion: 6, talento: -4, cordura: -4 },
              flags: { todoONada: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'apertura-fabrica',
    titulo: 'La sirena de las seis',
    categoria: 'plata',
    guion: true,
    epigrafe: 'Ocho horas de ruido de máquina afinan el oído de una manera rara.',
    texto:
      'Entrás a la planta a los quince y no conocés otra cosa. Los compañeros del turno saben que tocás. En el vestuario hay un tipo de cincuenta años que fue sonidista y un tablón de anuncios donde alguien colgó un aviso: se alquila sala por hora.',
    opciones: [
      {
        id: 'ahorrar',
        texto: 'Ahorrar cada quincena hasta tener equipo propio',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Catorce meses de horas extra y un cuaderno con las cuentas. Comprás todo usado, todo tuyo, sin deberle un peso a nadie. La primera vez que lo enchufás en tu pieza te temblaban las manos.',
            efectos: {
              stats: { salud: -6, credibilidad: 8, talento: 6, cordura: 4 },
              dinero: 1200,
              flags: { precavido: 1, autogestion: 1 },
            },
          },
        ],
      },
      {
        id: 'sonidista',
        texto: 'Pegarte al viejo sonidista del vestuario',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te enseña a soldar cables, a levantar un escenario y a no confiar nunca en el que maneja la consola. Te arma un ampli con partes de la planta que suena mal de una manera que después vas a extrañar.',
            efectos: {
              stats: { talento: 12, credibilidad: 8, quimica: 4 },
              flags: { maestro: 1 },
            },
          },
        ],
      },
      {
        id: 'faltar',
        texto: 'Faltar los viernes para ensayar y bancarte lo que venga',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Tres apercibimientos en cuatro meses. El capataz te avisa que al próximo no vuelve a firmarte nada. Ensayaste doce viernes seguidos y ninguno lo cambiarías.',
            efectos: {
              stats: { inspiracion: 14, quimica: 10, cordura: -6 },
              dinero: -300,
              flags: { claseObrera: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te echan en el quinto mes, sin indemnización y con una carta que dice "abandono de tareas". Salís de la planta un mediodía, con el sol alto por primera vez en años, y no sabés si querés llorar o gritar.',
            efectos: {
              stats: { inspiracion: 18, credibilidad: 10, cordura: -12 },
              dinero: -700,
              flags: { todoONada: 1, claseObrera: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'apertura-internado',
    titulo: 'El pabellón después de las diez',
    categoria: 'banda',
    guion: true,
    epigrafe: 'Ochenta pibes encerrados y una radio a pilas escondida.',
    texto:
      'Te mandaron acá a los diez. Hay una sala de música cerrada con candado, un preceptor que revisa las camas a las diez y media y un agujero en el alambrado que conocen cuatro personas. Vos sos una de las cuatro.',
    opciones: [
      {
        id: 'banda-internado',
        texto: 'Armar algo con los tres que también están despiertos',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Ensayan sin instrumentos: uno hace la batería con las manos en un banco y el resto canta en voz muy baja, que es la única manera de no ser descubierto. Aprendés a componer sin ruido y eso no se te va a olvidar nunca.',
            efectos: {
              stats: { quimica: 14, inspiracion: 10, talento: 4 },
              flags: { escenaAmiga: 1 },
            },
          },
        ],
      },
      {
        id: 'biblioteca',
        texto: 'Encerrarte en la biblioteca a escribir todo lo que te pasa',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Llenás tres cuadernos en un año y medio. La mitad es insoportable y la otra mitad es lo mejor que vas a escribir en tu vida. Te volvés muy bueno para estar solo, que es una habilidad y también es un problema.',
            efectos: {
              stats: { inspiracion: 18, credibilidad: 6, cordura: -8, quimica: -8 },
              flags: { daniadoTemprano: 1 },
            },
          },
        ],
      },
      {
        id: 'alambrado',
        texto: 'Salir por el alambrado los sábados a la noche',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'A dos kilómetros hay un pueblo con un bar con una máquina de discos. Te sentás en un rincón a escuchar hasta las tres y volvés antes del recuento. Doce sábados sin que te agarren y una educación musical completa.',
            efectos: {
              stats: { inspiracion: 14, credibilidad: 10, talento: 6, salud: -4 },
              flags: { escapista: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te agarran al cuarto sábado. Un mes sin salidas y una carta a tu casa que nadie contesta. Volvés al pabellón sabiendo dos cosas: que afuera hay algo mejor y que nadie va a venir a buscarte.',
            efectos: {
              stats: { cordura: -14, inspiracion: 16, credibilidad: 6 },
              flags: { daniadoTemprano: 1, escapista: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'apertura-calle',
    titulo: 'La esquina de la peatonal',
    categoria: 'carrera',
    guion: true,
    epigrafe: 'El público más honesto del mundo es el que puede irse caminando.',
    texto:
      'La mejor esquina de la peatonal la tiene un acordeonista que lleva doce años ahí. Las otras tres son un desastre acústico. Tenés una gorra, un instrumento y toda la tarde.',
    opciones: [
      {
        id: 'pelear',
        texto: 'Plantarte en la esquina buena y aguantar',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'El acordeonista te putea en dos idiomas el primer día y el segundo día se sienta a mirarte. Al tercero te dice que toques vos de tres a seis y él de seis a nueve, porque a esa hora sale la gente del centro y esa es su hora. Aceptás y te está enseñando algo.',
            efectos: {
              stats: { credibilidad: 12, fama: 4, quimica: 6 },
              dinero: 200,
              flags: { calle: 1, maestro: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te la peleás durante tres semanas hasta que el otro se cansa y se muda de esquina. Ganás el mejor lugar de la ciudad y la certeza incómoda de que le sacaste algo a un tipo de sesenta años.',
            efectos: {
              stats: { credibilidad: 8, fama: 8, cordura: -6 },
              dinero: 400,
              flags: { calle: 1 },
            },
          },
        ],
      },
      {
        id: 'subte',
        texto: 'Bajar al subte, donde suena mejor y hay más gente',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Los andenes tienen un eco que te hace sonar mejor de lo que sos y una inspección que te corre dos veces por semana. Tocás para gente que no eligió escucharte y aprendés a agarrarla en los primeros ocho segundos. Ese reflejo no lo pierde nadie.',
            efectos: {
              stats: { talento: 8, credibilidad: 10, fama: 6, salud: -6 },
              dinero: 350,
              flags: { calle: 1 },
            },
          },
        ],
      },
      {
        id: 'bares',
        texto: 'Dejar la calle y golpear puertas de bares',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Catorce bares, catorce no. En el quince te dicen que sí para el horario que nadie quiere. Tenés un escenario, un techo y, por primera vez, alguien que espera que llegues a una hora.',
            efectos: {
              stats: { fama: 8, credibilidad: 4, quimica: 4, cordura: 4 },
              dinero: 100,
              flags: { escenaAmiga: 1 },
            },
          },
        ],
      },
    ],
  },
]

// ---------------------------------------------------------------------------
// Apertura 2: la época que te tocó
// ---------------------------------------------------------------------------

export const APERTURA_POR_DECADA: Record<string, string> = {
  '1960': 'apertura-escena-60',
  '1970': 'apertura-escena-70',
  '1980': 'apertura-escena-80',
  '1990': 'apertura-escena-90',
  '2000': 'apertura-escena-2000',
}

const EVENTOS_ESCENA: Evento[] = [
  {
    id: 'apertura-escena-60',
    titulo: 'Lo que se escucha en {anio}',
    categoria: 'carrera',
    guion: true,
    epigrafe: 'Todavía no hay reglas porque todavía no hubo tiempo de escribirlas.',
    texto:
      'En {pais} la música que te importa entra de contrabando: discos que trae alguien de afuera, una radio que se escucha mal de noche y un puñado de tipos de tu edad copiando de oído lo que pueden. Nadie sabe todavía si esto es un oficio.',
    opciones: [
      {
        id: 'club',
        texto: 'Meterte en el bar donde se juntan todos',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Es un sótano con mesas de fórmica y quince personas que en diez años van a ser todas famosas o van a estar todas muertas. No tocás nada esa noche. Escuchás, preguntás y volvés a la semana siguiente, y a la otra.',
            efectos: {
              stats: { credibilidad: 10, inspiracion: 8, quimica: 6 },
              flags: { escenaAmiga: 1 },
            },
          },
        ],
      },
      {
        id: 'discos',
        texto: 'Conseguir los discos importados como sea y sacarlos de oído',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Un tipo del puerto te vende tres discos rayados a precio de oro. Los escuchás doscientas veces cada uno, con la púa levantada para repetir un compás, y sacás todo mal, que es exactamente como se inventaron los géneros nuevos.',
            efectos: {
              stats: { talento: 12, inspiracion: 10, credibilidad: 4 },
              dinero: -350,
              flags: { oidoCrudo: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te vende tres discos que resultan ser otra cosa completamente distinta de lo que buscabas. Los escuchás igual, porque no hay más, y terminás sonando a algo que en este país no suena nadie.',
            efectos: {
              stats: { inspiracion: 16, credibilidad: 10, talento: 4 },
              dinero: -350,
              flags: { oidoCrudo: 1 },
            },
          },
        ],
      },
      {
        id: 'radio',
        texto: 'Escribirle a la radio que pasa esa música a las dos de la mañana',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Mandás una carta a mano pidiendo un tema. La leen al aire tres semanas después, con tu nombre y todo, y no lo escuchás porque te habías quedado dormido. Te lo cuenta un compañero del colegio y te das cuenta de que hay más gente escuchando lo mismo que vos.',
            efectos: {
              stats: { inspiracion: 8, fama: 4, cordura: 6, credibilidad: 4 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'apertura-escena-70',
    titulo: 'Lo que se escucha en {anio}',
    categoria: 'carrera',
    guion: true,
    epigrafe: 'Discos dobles, solos de once minutos y equipos del tamaño de una pared.',
    texto:
      'En {pais} ya hay estadios, hay festivales de tres días y hay bandas que vuelven de girar por Europa contando cosas imposibles. También hay una vara altísima: lo que estaba bien hace cinco años ahora da vergüenza.',
    opciones: [
      {
        id: 'festival',
        texto: 'Colarte al festival y quedarte los tres días',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Dormís en el pasto, comés una vez y ves catorce bandas. Doce son olvidables y dos te reordenan la cabeza para siempre. Volvés a tu casa el lunes con barro hasta la rodilla, sin voz y con la carrera decidida.',
            efectos: {
              stats: { inspiracion: 16, credibilidad: 8, salud: -6, fama: 2 },
              dinero: -150,
              flags: { visionTemprana: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te agarran en el alambrado y terminás trabajando dos días descargando equipos para no ir preso. Desde atrás del escenario ves cómo se arma todo: los cables, los egos, la plata, el miedo. Ves más de lo que hubieras visto desde adelante.',
            efectos: {
              stats: { credibilidad: 12, talento: 6, quimica: 6, salud: -4 },
              flags: { escenaAmiga: 1, visionTemprana: 1 },
            },
          },
        ],
      },
      {
        id: 'equipo',
        texto: 'Endeudarte por el equipo que usan los que admirás',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Doce cuotas por una cabeza de amplificador que pesa más que vos. Suena descomunal en una pieza de tres por tres. Vas a estar pagándolo mucho después de que hayas dejado de usarlo, y aún así fue la mejor decisión de esos años.',
            efectos: {
              stats: { talento: 8, fama: 4, credibilidad: 6, cordura: -6 },
              dinero: -1800,
              flags: { deuda: 1 },
            },
          },
        ],
      },
      {
        id: 'contramano',
        texto: 'Ir a contramano: todo lo que suena ahora te aburre',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Mientras todos alargan los temas hasta los doce minutos, vos los cortás a dos. Nadie te da bola durante un buen rato. Guardás esa idea y en unos años va a haber alguien más que piense igual, y van a ser muchos de golpe.',
            efectos: {
              stats: { credibilidad: 14, inspiracion: 10, fama: -4, talento: -4 },
              flags: { visionTemprana: 1, principios: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'apertura-escena-80',
    titulo: 'Lo que se escucha en {anio}',
    categoria: 'prensa',
    guion: true,
    epigrafe: 'Ahora hay que verse bien. Es un requisito nuevo y no avisaron.',
    texto:
      'En {pais} la música entra por los ojos: videoclips todo el día, sellos con presupuesto y bandas que gastan más en el peluquero que en el estudio. La disquería del centro tiene una pared entera de discos que salieron este mes.',
    opciones: [
      {
        id: 'imagen',
        texto: 'Armarte una imagen antes que un repertorio',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Te cortás el pelo de una manera agresiva, conseguís ropa en una feria americana y te sacás fotos en blanco y negro con un fotógrafo que te cobra en cervezas. Todavía no sabés tocar bien y ya parecés alguien. En esta década eso alcanza más de lo que debería.',
            efectos: {
              stats: { fama: 12, credibilidad: -6, quimica: 4 },
              dinero: -200,
              flags: { personajePublico: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Las fotos salen tan bien que un sello chico te llama antes de haberte escuchado. Cuando les mostrás lo que tenés, se les nota la decepción en la cara y aprendés en un minuto exacto cómo funciona esta década.',
            efectos: {
              stats: { fama: 14, credibilidad: -10, cordura: -6 },
              flags: { personajePublico: 1 },
            },
          },
        ],
      },
      {
        id: 'disqueria',
        texto: 'Entrar a trabajar a la disquería del centro',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Sueldo miserable y todo el catálogo a mano. Escuchás cuatro discos por día durante dos años, conocés a cada tarado con banda de la ciudad y sabés qué se vende y qué no antes que los sellos. Es la mejor educación disponible y encima te pagan.',
            efectos: {
              stats: { talento: 8, credibilidad: 10, inspiracion: 8, quimica: 4 },
              dinero: 600,
              flags: { escenaAmiga: 1 },
            },
          },
        ],
      },
      {
        id: 'sintetizador',
        texto: 'Vender lo que tengas y comprar el aparato nuevo que nadie entiende',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Traés a tu casa una caja de plástico con botones y sin manual en tu idioma. Tardás cuatro meses en sacarle un sonido decente y cuando lo lográs no se parece a nada de lo que están haciendo los demás.',
            efectos: {
              stats: { inspiracion: 14, talento: 8, credibilidad: -4 },
              dinero: -900,
              flags: { visionTemprana: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'La caja de plástico no anda bien, el service está a mil kilómetros y la terminás revendiendo a mitad de precio. Te queda una idea de cómo debería sonar todo, que es lo único que no se puede revender.',
            efectos: {
              stats: { inspiracion: 8, cordura: -6, talento: 4 },
              dinero: -500,
            },
          },
        ],
      },
    ],
  },

  {
    id: 'apertura-escena-90',
    titulo: 'Lo que se escucha en {anio}',
    categoria: 'prensa',
    guion: true,
    epigrafe: 'De golpe lo importante es que no parezca que te importa.',
    texto:
      'En {pais} circulan fanzines fotocopiados, casetes grabados de casetes grabados y una escena chica que decide quién es genuino y quién no. Firmar con una multinacional es, este año, la peor cosa que se puede decir de alguien.',
    opciones: [
      {
        id: 'fanzine',
        texto: 'Hacer tu propio fanzine y escribir de los demás',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Sesenta ejemplares fotocopiados con la plata del almuerzo. Escribís sobre siete bandas de la ciudad y las siete te contestan. En seis meses conocés a todo el mundo y todo el mundo te debe una nota buena.',
            efectos: {
              stats: { credibilidad: 12, fama: 6, quimica: 6 },
              dinero: -150,
              flags: { escenaAmiga: 1, amigosPrensa: 1 },
            },
          },
        ],
      },
      {
        id: 'casetes',
        texto: 'Vivir del intercambio de casetes por correo',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Mandás casetes a direcciones de otras ciudades que sacás del reverso de un fanzine. Te vuelven casetes de bandas que no existen en ningún lado. Tenés dieciocho años y una red de contactos en cuatro provincias que no sabe qué cara tenés.',
            efectos: {
              stats: { inspiracion: 12, credibilidad: 10, fama: 4, quimica: -4 },
              dinero: -100,
              flags: { redSubterranea: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Uno de los casetes llega a manos de alguien que después va a ser importante. No te enterás hasta muchos años más tarde, cuando te lo diga en un camarín y no te acuerdes de haberlo mandado.',
            efectos: {
              stats: { credibilidad: 12, fama: 8, inspiracion: 8 },
              flags: { redSubterranea: 1, padrinoIndustria: 1 },
            },
          },
        ],
      },
      {
        id: 'ajeno',
        texto: 'Mantenerte afuera. La escena también es una moda',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Mirás todo de lejos y te ahorrás las alianzas, las peleas y el ridículo. También te ahorrás los amigos. Cuando quieras entrar, la puerta va a estar bastante más pesada de lo que era ahora.',
            efectos: {
              stats: { cordura: 8, inspiracion: 8, quimica: -10, fama: -4 },
              flags: { principios: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'apertura-escena-2000',
    titulo: 'Lo que se escucha en {anio}',
    categoria: 'carrera',
    guion: true,
    epigrafe: 'La industria se está cayendo y todavía nadie lo dice en voz alta.',
    texto:
      'En {pais} nadie compra discos: se bajan. Los sellos despiden gente, las disquerías cierran y hay foros de internet donde mil desconocidos discuten bandas que tocan para veinte personas. Todo el mundo tiene acceso a todo y nadie sabe todavía qué hacer con eso.',
    opciones: [
      {
        id: 'internet',
        texto: 'Subir lo que grabás en tu pieza, aunque suene mal',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Grabás cuatro temas con una placa de sonido de cuarenta pesos y los subís un domingo. En dos meses los escucharon novecientas personas, ninguna de las cuales vive en tu ciudad. No ganás un peso y sos, en algún lugar del mundo, alguien.',
            efectos: {
              stats: { fama: 12, credibilidad: 4, inspiracion: 6 },
              flags: { redSubterranea: 1, autogestion: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Lo subís, no lo escucha nadie durante siete meses y un día alguien lo linkea en un foro grande. Se te cae el servidor gratuito donde lo tenías. Aprendés en una tarde que esto ya no funciona como te habían contado.',
            efectos: {
              stats: { fama: 18, credibilidad: 6, cordura: -4 },
              flags: { redSubterranea: 1, autogestion: 1 },
            },
          },
        ],
      },
      {
        id: 'sala',
        texto: 'Juntar plata para pagar sala de ensayo por hora, como todos',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Tres horas por semana, cronometradas, con el dueño golpeando la puerta cuando faltan diez minutos. Aprendés a no perder un segundo. Ninguna banda de las décadas anteriores tuvo que ensayar mirando el reloj y se nota en cómo tocan.',
            efectos: {
              stats: { talento: 10, quimica: 8, cordura: -4 },
              dinero: -400,
              flags: { disciplina: 1 },
            },
          },
        ],
      },
      {
        id: 'ruta',
        texto: 'Asumir que ya no se vende nada y salir a tocar donde sea',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Decidís, a los diecisiete, que la plata está en la ruta y no en el disco. Vas a tener razón antes que casi todos y el precio de tener razón temprano lo vas a pagar con el cuerpo, kilómetro por kilómetro.',
            efectos: {
              stats: { credibilidad: 12, quimica: 8, salud: -8, fama: 6 },
              flags: { visionTemprana: 1, autogestion: 1 },
            },
          },
        ],
      },
    ],
  },
]

export const EVENTOS_APERTURA: Evento[] = [...EVENTOS_ORIGEN, ...EVENTOS_ESCENA]
