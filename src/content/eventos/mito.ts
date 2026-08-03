import type { Evento } from '../../engine/types'

// Los eventos-mito: las encrucijadas que definen cómo se cuenta tu historia.
// Casi todos son de guion (los encola el motor en momentos precisos).

export const EVENTOS_MITO: Evento[] = [
  // -------------------------------------------------------------------------
  // El club de los 27
  // -------------------------------------------------------------------------
  {
    id: 'mito-27',
    titulo: 'Veintisiete',
    categoria: 'mito',
    guion: true,
    epigrafe: 'La edad de la que todos hablan y nadie quiere nombrar.',
    texto:
      'Cumplís veintisiete. Alguien lo dice en voz alta en la fiesta, medio en broma, y la mesa se ríe con dos segundos de retraso. Estás en el mejor momento de tu carrera y en el peor momento de tu vida, y las dos cosas vienen del mismo lugar.\n\nEsa noche te quedás solo en la cocina con una lista mental de todos los que no llegaron a los veintiocho.',
    opciones: [
      {
        id: 'acelerar',
        texto: 'Brindar por ellos y seguir la fiesta hasta el final',
        riesgo: 'letal',
        resultados: [
          {
            peso: 4,
            texto:
              'Seguís hasta las once de la mañana. Te despertás a las seis de la tarde con la sensación de haber pasado muy cerca de algo. Cumplís veintiocho once meses después.',
            efectos: {
              stats: { adiccion: 20, salud: -20, cordura: -14, fama: 8, credibilidad: 6 },
              flags: { sobrevivioAlos27: 1, pasoCerca: 1 },
            },
          },
          {
            peso: 3,
            texto:
              'Seguís hasta que el cuerpo dice basta de una forma que no admite discusión. Los que estaban ahí van a dar la misma versión durante treinta años y ninguna va a coincidir.',
            efectos: { final: 'club-27' },
          },
        ],
      },
      {
        id: 'irse',
        texto: 'Irte de la fiesta a la medianoche y dormir',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te vas sin saludar. Dormís nueve horas. Te despertás a los veintisiete años y un día, y esa es la clase de victoria que no se le puede contar a nadie.',
            efectos: {
              stats: { cordura: 16, salud: 10, adiccion: -12, fama: -4 },
              flags: { sobrevivioAlos27: 1, eligioVivir: 1 },
            },
          },
        ],
      },
      {
        id: 'trabajo',
        texto: 'Encerrarte a grabar. Convertir el miedo en un disco',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Nueve meses encerrado. Sale un disco que suena a alguien discutiendo con su propia muerte y ganando por muy poco. Es lo mejor que vas a hacer.',
            efectos: {
              stats: { inspiracion: 20, credibilidad: 24, talento: 10, cordura: -8, salud: -8 },
              flags: { sobrevivioAlos27: 1, discoDelMiedo: 1 },
              publicaDisco: true,
              titular: '"El disco que {apodo} grabó a los 27: la crítica no encuentra antecedentes"',
            },
          },
          {
            peso: 1,
            texto:
              'Nueve meses encerrado sin salir ni ver a nadie. Al final no hay disco, hay una persona irreconocible que ya no distingue el día de la noche.',
            efectos: {
              stats: { cordura: -28, salud: -14, adiccion: 12, inspiracion: 6 },
              flags: { sobrevivioAlos27: 1, brote: 1 },
            },
          },
        ],
      },
      {
        id: 'pedir-ayuda',
        texto: 'Llamar a alguien a las cuatro de la mañana y decirle la verdad',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Atiende al cuarto tono. No dice nada inteligente. Se queda en el teléfono hasta que amanece. Eso es todo lo que hace falta y casi nadie lo hace.',
            efectos: {
              stats: { cordura: 24, adiccion: -14, salud: 6, quimica: 10 },
              flags: { sobrevivioAlos27: 1, eligioVivir: 1, pidioAyuda: 1 },
            },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // El noveno piso
  // -------------------------------------------------------------------------
  {
    id: 'mito-pileta',
    titulo: 'El noveno piso',
    categoria: 'mito',
    guion: true,
    epigrafe: 'La pileta se ve chiquita desde acá arriba.',
    texto:
      'Hotel de provincia, cuatro de la mañana, la habitación llena de gente. Alguien dice que desde el balcón se llega a la pileta. Vos calculás. Vos siempre calculás.\n\nHay diez personas mirándote y una cámara de televisión estacionada en la puerta desde ayer.',
    opciones: [
      {
        id: 'saltar',
        texto: 'Saltar',
        riesgo: 'letal',
        resultados: [
          {
            peso: 5,
            texto:
              'Caés en el agua. Salís nadando, saludás con la mano y pedís un whisky. La foto sale en la tapa de todos los diarios del país y ya no vas a ser un músico: vas a ser un mito con testigos.',
            efectos: {
              stats: { fama: 30, credibilidad: 22, cordura: -12, salud: -10 },
              flags: { saltoPileta: 1, mitoVivo: 1, invencible: 1 },
              titular: '"Saltó del noveno piso a la pileta y salió nadando"',
            },
          },
          {
            peso: 3,
            texto:
              'Caés en el borde. Tres costillas, una clavícula y cinco meses de yeso. Salís del hospital diciendo que lo volverías a hacer y una parte de vos lo dice en serio.',
            efectos: {
              stats: { fama: 22, credibilidad: 12, salud: -30, cordura: -14 },
              dinero: -20000,
              flags: { saltoPileta: 1, mitoVivo: 1, casiMuerte: 1 },
              titular: '"Saltó del noveno piso: internado con politraumatismos"',
            },
          },
          {
            peso: 2,
            texto:
              'No llega. Nadie de los que estaban en esa habitación vuelve a hablar del tema en público.',
            efectos: { final: 'salto-fallido' },
          },
        ],
      },
      {
        id: 'no-saltar',
        texto: 'Bajar por el ascensor y tirarte desde el borde',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Bajás los nueve pisos, te tirás desde el borde con toda la ropa puesta y hacés la peor bomba de la historia. Se ríen todos. Nadie lo va a contar nunca y ese es el precio de estar vivo.',
            efectos: {
              stats: { cordura: 12, quimica: 10, fama: -4, salud: -2 },
              flags: { eligioVivir: 1 },
            },
          },
        ],
      },
      {
        id: 'echarlos',
        texto: 'Echar a todos de la habitación',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Los sacás uno por uno y cerrás la puerta. Te quedás mirando la pileta desde el balcón hasta que amanece. No saltaste y no dormiste: la mitad de una buena decisión.',
            efectos: {
              stats: { cordura: 6, adiccion: -8, quimica: -10, inspiracion: 10 },
              flags: { eligioVivir: 1, solitario: 1 },
            },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // El cuarto oscuro
  // -------------------------------------------------------------------------
  {
    id: 'mito-cuarto-oscuro',
    titulo: 'El cuarto oscuro',
    categoria: 'mito',
    guion: true,
    sensible: true,
    epigrafe: 'Hace tres semanas que no bajás.',
    texto:
      'Todo lo que querías lo tenés. Estadios llenos, discos que la gente se tatúa, una casa con vista. Y hace meses que te levantás con la sensación de estar mirando tu propia vida desde afuera, sin poder entrar.\n\nHay un teléfono al lado de la cama. Hay una puerta. Hay tres semanas de persianas bajas. Alguien, en algún lugar de la casa, está esperando que bajes a desayunar.',
    opciones: [
      {
        id: 'levantar-telefono',
        texto: 'Levantar el teléfono',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Llamás. Hablás cuarenta minutos y decís en voz alta, por primera vez, exactamente lo que venías pensando. Del otro lado no se asustan. Al día siguiente hay alguien en tu casa a las nueve de la mañana y a partir de ahí empieza lo lento, lo aburrido y lo que funciona.',
            efectos: {
              stats: { cordura: 28, salud: 10, adiccion: -14, inspiracion: -6, fama: -6 },
              flags: { pidioAyuda: 1, eligioVivir: 1, tratamiento: 1 },
            },
          },
        ],
      },
      {
        id: 'bajar',
        texto: 'Bajar a desayunar',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Bajás. No decís nada de lo que pasa arriba. Alguien te sirve café y te habla de cualquier cosa durante veinte minutos y eso te sostiene un día más. A veces un día más es todo el plan que hay.',
            efectos: {
              stats: { cordura: 14, salud: 6, quimica: 8 },
              flags: { eligioVivir: 1 },
              encola: ['mito-cuarto-oscuro-2'],
            },
          },
        ],
      },
      {
        id: 'escribir',
        texto: 'Agarrar la guitarra que está en el rincón',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Sale una canción de tres minutos que no le vas a mostrar a nadie durante años. Cuando finalmente la editás, mucha gente te va a escribir para contarte que esa canción los sacó de un cuarto parecido.',
            efectos: {
              stats: { cordura: 12, inspiracion: 24, credibilidad: 16 },
              flags: { cancionDelCuarto: 1, eligioVivir: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'No sale nada. La dejás donde estaba. Te volvés a acostar y afuera se hace de noche otra vez.',
            efectos: {
              stats: { cordura: -16, inspiracion: -8, adiccion: 8 },
              encola: ['mito-cuarto-oscuro-2'],
            },
          },
        ],
      },
      {
        id: 'nada',
        texto: 'No hacer nada',
        riesgo: 'letal',
        resultados: [
          {
            peso: 3,
            texto:
              'No hacés nada. Pasa el día, pasa la semana. Alguien fuerza la puerta el jueves y te encuentra dormido, entero, y te obliga a comer algo. Estás vivo por insistencia ajena.',
            efectos: {
              stats: { cordura: -22, salud: -16, adiccion: 12, fama: -8 },
              flags: { rescatado: 1 },
              encola: ['mito-cuarto-oscuro-2'],
            },
          },
          {
            peso: 2,
            texto:
              'No hacés nada durante mucho tiempo, y después hacés una sola cosa.',
            efectos: { final: 'el-silencio' },
          },
        ],
      },
    ],
  },

  {
    id: 'mito-cuarto-oscuro-2',
    titulo: 'La segunda vez',
    categoria: 'salud',
    guion: true,
    sensible: true,
    texto:
      'Vuelve. Ya sabés cómo es y esta vez llega más rápido. La diferencia es que ahora sabés que se pasa, y ese dato pequeño es la única herramienta que tenés.',
    opciones: [
      {
        id: 'tratamiento',
        texto: 'Buscar tratamiento en serio y sostenerlo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Dos años de terapia, medicación y aburrimiento. Escribís menos y peor durante un tiempo. Estás vivo a los sesenta para escribir mejor que nunca a los sesenta y uno.',
            efectos: {
              stats: { cordura: 34, salud: 12, inspiracion: -12, adiccion: -18, fama: -6 },
              flags: { tratamiento: 1, eligioVivir: 1, estable: 1 },
            },
          },
        ],
      },
      {
        id: 'aguantar',
        texto: 'Aguantar solo, como siempre',
        riesgo: 'letal',
        resultados: [
          {
            peso: 2,
            texto:
              'Aguantás. Se te pasa a los cuatro meses, como la otra vez. Aprendés que se puede aguantar, que es un aprendizaje peligrosísimo.',
            efectos: { stats: { cordura: -14, salud: -8, credibilidad: 6 }, flags: { aguantaSolo: 1 } },
          },
          {
            peso: 1,
            texto: 'Esta vez no se pasa.',
            efectos: { final: 'el-silencio' },
          },
        ],
      },
      {
        id: 'gira',
        texto: 'Salir de gira. Arriba del escenario no pasa',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Arriba del escenario, efectivamente, no pasa. Las otras veintitrés horas del día pasan el doble. Hacés ochenta fechas y volvés vacío.',
            efectos: {
              stats: { fama: 16, cordura: -20, salud: -12, adiccion: 12 },
              dinero: 70000,
              flags: { huyeHaciaAdelante: 1 },
            },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // La desaparición
  // -------------------------------------------------------------------------
  {
    id: 'mito-desaparecer',
    titulo: 'El auto en el puente',
    categoria: 'mito',
    guion: true,
    epigrafe: 'Nadie te pidió explicaciones todavía.',
    texto:
      'Tenés el auto cargado, la cuenta vaciada en efectivo y ninguna obligación hasta el martes. Hace años que fantaseás con manejar hasta que se termine el mapa y no avisarle a nadie.\n\nEl puente está a doce kilómetros. Después del puente no hay nada tuyo.',
    opciones: [
      {
        id: 'seguir',
        texto: 'Cruzar el puente y no volver',
        riesgo: 'letal',
        resultados: [
          {
            peso: 2,
            texto: 'Encuentran el auto en el puente a los cuatro días, con las llaves puestas.',
            efectos: { final: 'desaparecido' },
          },
          {
            peso: 1,
            texto:
              'Manejás cuatro días. En un pueblo de mil habitantes alquilás una pieza y ponés un nombre falso. Durás siete meses hasta que un turista te reconoce en el almacén.',
            efectos: {
              stats: { fama: -22, cordura: 18, inspiracion: 22, credibilidad: 16, adiccion: -20 },
              dinero: -30000,
              flags: { desaparecioUnTiempo: 1, mitoDelRegreso: 1 },
              titular: '"Apareció: {apodo} vivía en un pueblo bajo otro nombre"',
            },
          },
        ],
      },
      {
        id: 'volver',
        texto: 'Dar la vuelta antes del puente',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Das la vuelta en la banquina. Volvés a las siete de la mañana y nadie se dio cuenta de nada. Guardás esa noche adentro como una salida de emergencia que no usaste.',
            efectos: { stats: { cordura: 8, inspiracion: 12 }, flags: { eligioVivir: 1 } },
          },
        ],
      },
      {
        id: 'avisar',
        texto: 'Parar en un teléfono y avisar que te vas un tiempo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Llamás y decís que te tomás tres meses. Se arma un quilombo enorme y se cancelan cuarenta fechas. Volvés a los tres meses exactos, entero, con un disco escrito.',
            efectos: {
              stats: { cordura: 20, inspiracion: 20, fama: -12, adiccion: -14 },
              dinero: -40000,
              flags: { retiroTemporal: 1, eligioVivir: 1 },
              titular: '"{apodo} suspende todo: \'me tomo tres meses\'"',
            },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // El disparo (final trágico, tratado con sobriedad)
  // -------------------------------------------------------------------------
  {
    id: 'mito-ultimo-invierno',
    titulo: 'El último invierno',
    categoria: 'mito',
    guion: true,
    sensible: true,
    epigrafe: 'Todo el mundo te quiere y ninguna de esas personas te alcanza.',
    texto:
      'Sos la voz de una generación que no pediste representar. Odiás las giras, odiás las entrevistas, odiás la palabra "auténtico". Estás en la casa de la que no salís hace semanas, en la ciudad más gris que existe, y venís de una internación de la que te escapaste.\n\nHay una lista de llamados sin devolver. Hay una carta a medio escribir. Hay un invernadero al fondo del jardín.',
    opciones: [
      {
        id: 'devolver',
        texto: 'Devolver el primer llamado de la lista',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Es el baterista. No te pregunta cómo estás; te pregunta si querés que vaya. Le decís que sí. Llega en tres horas y se queda una semana durmiendo en el sillón sin decir casi nada.',
            efectos: {
              stats: { cordura: 26, quimica: 16, adiccion: -12, salud: 6 },
              flags: { eligioVivir: 1, pidioAyuda: 1, rescatado: 1 },
            },
          },
        ],
      },
      {
        id: 'terminar-carta',
        texto: 'Terminar la carta y publicarla como una despedida artística',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Escribís tres páginas donde anunciás que te retirás de la música para siempre. La publicás. Es lo más leído del año y la gente entiende, por primera vez, que no estabas actuando.',
            efectos: {
              stats: { fama: -20, credibilidad: 26, cordura: 14, inspiracion: -10 },
              flags: { retiroDefinitivo: 1, eligioVivir: 1, cartaFamosa: 1 },
              titular: '"Me voy": la carta con la que {apodo} se retiró de la música',
            },
          },
          {
            peso: 1,
            texto:
              'Escribís tres páginas y no las publicás. Quedan en un cajón. Alguien las va a encontrar, algún día, y va a decidir si el mundo tiene derecho a leerlas.',
            efectos: { stats: { cordura: -12, inspiracion: 10 }, flags: { cartaGuardada: 1 } },
          },
        ],
      },
      {
        id: 'invernadero',
        texto: 'Ir al invernadero',
        riesgo: 'letal',
        resultados: [
          {
            peso: 3,
            texto:
              'Vas al invernadero. Te quedás sentado ahí hasta que se hace de noche y no pasa nada, y volvés a la casa, y esa noche dormís. Ganaste un día. Mañana hay que ganar otro.',
            efectos: {
              stats: { cordura: -18, salud: -8, adiccion: 8 },
              encola: ['mito-ultimo-invierno-2'],
            },
          },
          {
            peso: 4,
            texto: 'Vas al invernadero.',
            efectos: { final: 'el-invernadero' },
          },
        ],
      },
    ],
  },

  {
    id: 'mito-ultimo-invierno-2',
    titulo: 'La mañana siguiente',
    categoria: 'salud',
    guion: true,
    sensible: true,
    texto:
      'Te despertaste. No es poco. En la mesa de la cocina hay tres personas que llegaron sin avisar y que no se van a ir hasta que hables.',
    opciones: [
      {
        id: 'hablar',
        texto: 'Sentarte con ellos y hablar',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te sentás. Tardás una hora en decir la primera frase entera. Después no parás en cuatro horas. Al final de la tarde hay un plan concreto, con horarios y con nombres de gente que sabe de esto.',
            efectos: {
              stats: { cordura: 30, salud: 10, adiccion: -20, quimica: 14, fama: -8 },
              flags: { eligioVivir: 1, tratamiento: 1, pidioAyuda: 1, estable: 1 },
            },
          },
        ],
      },
      {
        id: 'echarlos',
        texto: 'Echarlos de tu casa',
        riesgo: 'letal',
        resultados: [
          {
            peso: 2,
            texto:
              'Los echás a los gritos. Se van. Uno se queda sentado en el auto en la puerta toda la noche, por las dudas. Estaba en lo cierto al quedarse.',
            efectos: {
              stats: { cordura: -20, quimica: -16, salud: -10 },
              flags: { rescatado: 1 },
            },
          },
          {
            peso: 2,
            texto: 'Los echás. Se van. Nadie se queda en la puerta.',
            efectos: { final: 'el-invernadero' },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // El pacto
  // -------------------------------------------------------------------------
  {
    id: 'mito-encrucijada',
    titulo: 'La encrucijada',
    categoria: 'mito',
    guion: true,
    epigrafe: 'Es una historia vieja y no deja de aparecer.',
    texto:
      'Volvés manejando de madrugada por una ruta provincial y se te para el auto en un cruce de caminos. No hay señal, no hay luces y hay un tipo sentado en el guardarraíl con una guitarra que no es suya.\n\nTe dice que te afina la guitarra. Sonríe demasiado. No hace frío y aún así se te eriza la piel.',
    opciones: [
      {
        id: 'darle',
        texto: 'Darle la guitarra',
        riesgo: 'letal',
        resultados: [
          {
            peso: 3,
            texto:
              'Te la devuelve afinada de una manera que no habías escuchado nunca. Desde esa noche tocás distinto y todos lo notan y nadie sabe explicarlo. Vos tampoco. Y hay noches en que sentís que le debés algo a alguien.',
            efectos: {
              stats: { talento: 30, inspiracion: 24, credibilidad: 18, cordura: -20, salud: -10 },
              flags: { pacto: 1, tocaDistinto: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te la devuelve afinada. Arranca el auto. Manejás cincuenta kilómetros y cuando llegás a tu casa te das cuenta de que no te acordás de tu propia dirección, y tardás dos años en volver a acordarte de otras cosas.',
            efectos: {
              stats: { talento: 22, cordura: -34, inspiracion: 16 },
              flags: { pacto: 1, brote: 1 },
            },
          },
        ],
      },
      {
        id: 'irse',
        texto: 'Cerrar la ventanilla y esperar a que arranque',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Arranca a los diez minutos. En el espejo retrovisor no hay nadie sentado en el guardarraíl. Vas a contar esta historia en entrevistas durante cuarenta años y nunca la vas a contar dos veces igual.',
            efectos: { stats: { inspiracion: 16, credibilidad: 8, cordura: -6 }, flags: { anecdotaRuta: 1 } },
          },
        ],
      },
      {
        id: 'preguntar',
        texto: 'Bajarte y preguntarle quién es',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Es un tipo que se quedó sin nafta a doce kilómetros. Lo llevás hasta la estación de servicio. Habla de música toda la noche mejor que cualquier crítico que hayas leído. No lo volvés a ver.',
            efectos: { stats: { inspiracion: 18, talento: 8, cordura: 6, credibilidad: 6 } },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // La reunión de la banda
  // -------------------------------------------------------------------------
  {
    id: 'mito-reunion',
    titulo: 'La llamada después de veinte años',
    categoria: 'banda',
    guion: true,
    texto:
      'Suena el teléfono. Es el bajista, con quien no hablás desde el juicio. Dice que hay una oferta obscena para hacer diez estadios y que él necesita la plata, y lo dice sin vergüenza, que es lo que más te desarma.',
    opciones: [
      {
        id: 'aceptar',
        texto: 'Aceptar por la plata y decirlo así, de frente',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'El primer ensayo es un velorio. El cuarto tema del cuarto ensayo alguien se equivoca igual que hace treinta años y se ríen los cuatro. Hacen los diez estadios y agregan doce.',
            efectos: {
              stats: { fama: 30, quimica: 24, cordura: 12, credibilidad: -6 },
              dinero: 400000,
              flags: { reunion: 1, reunionExitosa: 1 },
              titular: '"Vuelven: {banda} anuncia diez estadios tras veinte años"',
            },
          },
          {
            peso: 1,
            texto:
              'Hacen los diez estadios sin cruzar una palabra fuera del escenario. Ganan una fortuna. En la última noche se abrazan y ninguno de los cuatro sabe qué significa ese abrazo.',
            efectos: {
              stats: { fama: 26, quimica: 6, cordura: -6, credibilidad: -8 },
              dinero: 400000,
              flags: { reunion: 1 },
            },
          },
        ],
      },
      {
        id: 'condicion',
        texto: 'Aceptar sólo si graban un disco nuevo antes',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Graban un disco nuevo a los sesenta años. La prensa lo trata con condescendencia y tres temas son mejores que todo lo que hicieron en los noventa.',
            efectos: {
              stats: { credibilidad: 20, quimica: 18, inspiracion: 12, fama: 18 },
              dinero: 250000,
              publicaDisco: true,
              flags: { reunion: 1, discoTardio: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Intentan grabar y se dan cuenta de que ya no saben escribir juntos. Se cancela todo. La reunión más famosa que no ocurrió.',
            efectos: { stats: { quimica: -14, cordura: -10, credibilidad: 6 }, flags: { reunion: 1 } },
          },
        ],
      },
      {
        id: 'no',
        texto: 'Decirle que no y ofrecerle la plata de tu bolsillo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Le mandás lo que necesita sin condiciones y sin contárselo a nadie. La banda no vuelve nunca. Él lo sabe y vos lo sabés y con eso alcanza.',
            efectos: {
              stats: { credibilidad: 16, cordura: 14, quimica: 10, fama: -6 },
              dinero: -150000,
              flags: { reunionRechazada: 1, tipoDecente: 1 },
            },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // El salón de la fama
  // -------------------------------------------------------------------------
  {
    id: 'mito-salon',
    titulo: 'El Salón de la Fama',
    categoria: 'mito',
    guion: true,
    texto:
      'Te van a inducir al Salón de la Fama. Hay una cena de gala, un discurso de alguien que no te conoce y una mesa donde te sientan al lado de tres ex integrantes que te odian.',
    opciones: [
      {
        id: 'ir-agradecido',
        texto: 'Ir, agradecer y nombrar a todos los que te ayudaron',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Das un discurso de once minutos donde nombrás al plomo, al del bar del primer show y a tu vieja. Es el discurso más citado de la noche y de las diez noches siguientes.',
            efectos: {
              stats: { fama: 18, credibilidad: 20, quimica: 12, cordura: 10 },
              flags: { salonFama: 1, discursoMemorable: 1 },
            },
          },
        ],
      },
      {
        id: 'ir-a-romper',
        texto: 'Ir y decir lo que pensás de la industria',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Agarrás el micrófono y hacés doce minutos de demolición sobre los sellos, los ejecutivos y la gente que está sentada en las primeras filas comiendo salmón. Te aplauden de pie los músicos y nadie más.',
            efectos: {
              stats: { credibilidad: 26, fama: 14, cordura: 6 },
              flags: { salonFama: 1, discursoIncendiario: 1 },
              titular: '"Les dijo todo en la cara": el discurso de {apodo} en el Salón de la Fama',
            },
          },
        ],
      },
      {
        id: 'no-ir',
        texto: 'No ir y mandar una carta de dos líneas',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              '"Gracias, pero el rock no se premia." La leen en voz alta en la ceremonia y se hace un silencio incómodo hermoso. Es la mejor decisión de relaciones públicas de tu vida y ni siquiera la pensaste.',
            efectos: {
              stats: { credibilidad: 28, fama: 10 },
              flags: { salonFama: 1, rechazoSalon: 1 },
            },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // El diagnóstico
  // -------------------------------------------------------------------------
  {
    id: 'mito-diagnostico',
    titulo: 'El estudio salió mal',
    categoria: 'salud',
    guion: true,
    texto:
      'El médico gira la pantalla para que veas. Habla despacio y usa palabras cortas. Te da un número de meses y aclara que los números son promedios y que vos no sos un promedio.',
    opciones: [
      {
        id: 'grabar',
        texto: 'Encerrarte a grabar un último disco',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 3,
            texto:
              'Grabás con la voz que te queda, que es poca y es toda verdad. Sale un disco que la gente no va a poder escuchar entero sin parar a mitad de camino.',
            efectos: {
              stats: { credibilidad: 30, inspiracion: 20, fama: 22, salud: -14 },
              publicaDisco: true,
              flags: { discoFinal: 1, enfermo: 1 },
              titular: '"El último disco: {apodo} grabó hasta el final"',
            },
          },
          {
            peso: 1,
            texto:
              'Grabás seis temas y no llegás a terminarlo. Lo editan después, con las tomas crudas y tu voz dando indicaciones entre canciones. Es devastador y es hermoso.',
            efectos: {
              stats: { credibilidad: 26, fama: 18, salud: -24 },
              flags: { discoFinal: 1, enfermo: 1, discoPostumo: 1 },
            },
          },
        ],
      },
      {
        id: 'gira',
        texto: 'Hacer una última gira sin decirle a nadie por qué',
        riesgo: 'letal',
        resultados: [
          {
            peso: 2,
            texto:
              'Cuarenta fechas con oxígeno esperando en el costado del escenario. La gente nota que algo pasa y nadie pregunta. Son los mejores shows de tu vida.',
            efectos: {
              stats: { fama: 26, credibilidad: 24, salud: -28, cordura: 10 },
              dinero: 120000,
              flags: { enfermo: 1, giraDespedida: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'En la fecha catorce no podés terminar el show. Lo cancelás todo desde el escenario y le contás a las nueve mil personas que están ahí lo que está pasando. Nadie se mueve durante un minuto entero.',
            efectos: {
              stats: { fama: 24, credibilidad: 28, salud: -34, cordura: -6 },
              dinero: 40000,
              flags: { enfermo: 1, adiosPublico: 1 },
              titular: '"Se los tengo que decir": el anuncio de {apodo} desde el escenario',
            },
          },
        ],
      },
      {
        id: 'casa',
        texto: 'Irte a tu casa con los tuyos y no hacer nada más',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Apagás el teléfono. Pasás el tiempo que queda con las cinco personas que importan, en una casa con jardín, escuchando discos ajenos. Nadie escribe una nota sobre esto y así tiene que ser.',
            efectos: {
              stats: { cordura: 26, fama: -14, salud: -18, quimica: 10 },
              flags: { enfermo: 1, retiroSilencioso: 1 },
            },
          },
        ],
      },
    ],
  },
]
