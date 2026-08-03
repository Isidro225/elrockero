import type { Evento } from '../../engine/types'

// Eventos raros con antecedente real. Todo lo que pasa acá le pasó a alguien:
// el campo `inspiracion` cuenta a quién, y se muestra recién después de elegir.

export const EVENTOS_BIZARROS: Evento[] = [
  // -------------------------------------------------------------------------
  // Escenario y giras
  // -------------------------------------------------------------------------
  {
    id: 'biz-murcielago',
    titulo: 'Algo vuela hacia el escenario',
    categoria: 'mito',
    epigrafe: 'Viene girando desde la cuarta fila y todavía se mueve.',
    inspiracion:
      'En 1982, Ozzy Osbourne le arrancó la cabeza de un mordisco a un murciélago que le tiraron al escenario, convencido de que era de goma. Pasó la gira siguiente dándose vacunas antirrábicas. Dos años antes había hecho lo mismo con una paloma, arriba de la mesa de reuniones de un sello discográfico.',
    texto:
      'Alguien tira algo desde la cuarta fila. Cae a tus pies en la mitad del tema y es un bicho, y es un bicho de verdad, y todavía se mueve un poco.\n\nEl público hace un ruido que no habías escuchado nunca. Trece mil personas esperando a ver qué hacés. La banda sigue tocando porque no vio nada.',
    requiere: { stats: { fama: { min: 30 } }, sinFlags: ['bichoEscenario'] },
    peso: 3,
    opciones: [
      {
        id: 'morder',
        texto: 'Levantarlo y morderlo',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 3,
            texto:
              'Lo hacés convencido de que es de goma. No es de goma. Pasás el resto de la gira yendo a un hospital distinto cada tres días a darte la vacuna antirrábica, con un enfermero que te explica que esto no es común. Es la anécdota más contada de tu vida y la vas a odiar a los cincuenta.',
            efectos: {
              stats: { fama: 26, credibilidad: 10, salud: -14, cordura: -8 },
              dinero: -6000,
              flags: { bichoEscenario: 1, leyendaAsquerosa: 1, mitoVivo: 1 },
              titular: '"Le arrancó la cabeza de un mordisco": {apodo} tuvo que vacunarse contra la rabia',
            },
          },
          {
            peso: 2,
            texto:
              'Lo hacés y la mitad del estadio deja de mirarte. Tres provincias te prohíben tocar, una liga protectora de animales te hace juicio y una marca de gaseosa te saca el contrato en cuarenta y ocho horas. La otra mitad del estadio ahora te sigue a todos lados.',
            efectos: {
              stats: { fama: 18, credibilidad: -12, cordura: -12, salud: -10 },
              dinero: -30000,
              flags: { bichoEscenario: 1, leyendaAsquerosa: 1, listaNegra: 1 },
              titular: '"Repudio unánime: piden que se prohíban los shows de {apodo}"',
            },
          },
        ],
      },
      {
        id: 'cuidarlo',
        texto: 'Parar el show, envolverlo en una remera y sacarlo en brazos',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Cortás el tema, lo levantás con cuidado y se lo das a alguien de producción con la instrucción de llevarlo a un veterinario. Volvés al micrófono y decís tres frases sobre el que lo tiró que ese tipo va a escuchar en su cabeza durante quince años. El video se ve más que cualquiera de tus videoclips.',
            efectos: {
              stats: { credibilidad: 18, fama: 10, cordura: 6, quimica: 6 },
              flags: { bichoEscenario: 1, momentoViral: 1 },
            },
          },
        ],
      },
      {
        id: 'ignorar',
        texto: 'Patearlo fuera del escenario y seguir tocando',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Lo sacás con el pie sin perder el compás y terminás el tema. Nadie escribe una sola línea sobre esto. Sos, por una noche, un profesional aburridísimo, que es exactamente lo que hay que ser para llegar a viejo.',
            efectos: { stats: { talento: 4, fama: -2, cordura: 4 }, flags: { bichoEscenario: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-mm-marrones',
    titulo: 'La cláusula de los M&M marrones',
    categoria: 'carrera',
    epigrafe: 'Cuarenta y cinco páginas de exigencias técnicas que nadie lee.',
    inspiracion:
      'Van Halen exigía por contrato un bol de M&M sin ninguno marrón. No era un capricho: si encontraban uno marrón, sabían que el promotor no había leído el contrato y revisaban toda la instalación eléctrica y las estructuras antes de tocar. En un estadio, el escenario se les hundió por eso.',
    texto:
      'El contrato técnico tiene cuarenta y cinco páginas: peso máximo por metro cuadrado, sección de los cables, salidas de emergencia. Sabés perfectamente que en la mitad de los lugares no lo lee nadie, y que el día que no lo lean se cae algo arriba de alguien.\n\nEl manager te pregunta si querés agregar algo al camarín.',
    requiere: { stats: { fama: { min: 45 } }, sinFlags: ['riderTecnico'] },
    peso: 3,
    opciones: [
      {
        id: 'trampa',
        texto: 'Meter una exigencia absurda en la página treinta y nueve, como prueba',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Pedís un bol de caramelos sin ninguno marrón, escondido entre las especificaciones eléctricas. Si hay uno marrón en el camarín, sabés que no leyeron nada y mandás a revisar el escenario entero antes de tocar. Funciona tres veces. La tercera, el techo de una estructura estaba montado al revés.\n\nLa prensa cuenta durante veinte años que son unas divas insoportables. Los dejás.',
            efectos: {
              stats: { cordura: 10, credibilidad: -8, fama: 8, talento: 4 },
              flags: { riderTecnico: 1, precavido: 1, personajePublico: 1 },
              titular: '"Caprichos de estrella: el increíble camarín que exige {banda}"',
            },
          },
        ],
      },
      {
        id: 'caprichos',
        texto: 'Pedir cosas realmente ridículas, porque podés',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Pedís un pinball, cuatro clases de queso y que nadie del personal te mire a los ojos. Te lo cumplen todo. Descubrís que hay un punto en el que la gente te concede cualquier cosa y que ese punto es el principio del final de tu contacto con la realidad.',
            efectos: {
              stats: { fama: 10, cordura: -12, credibilidad: -10, quimica: -6 },
              dinero: -12000,
              flags: { riderTecnico: 1, entornoParasito: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Pedís tanta ridiculez que el promotor de una gira entera se planta y les cancela seis fechas por escrito, con la lista adjunta. La carta se filtra. Es humillante y es gracioso y no vas a poder explicarlo nunca.',
            efectos: {
              stats: { fama: 6, credibilidad: -16, cordura: -8 },
              dinero: -25000,
              flags: { riderTecnico: 1, ridiculoPublico: 1 },
            },
          },
        ],
      },
      {
        id: 'nada',
        texto: 'No pedir nada y confiar en que alguien lo lea',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 3,
            texto:
              'No pedís nada. Durante años no pasa nada, que es lo que pasa casi siempre y por eso nadie revisa nunca.',
            efectos: { stats: { credibilidad: 6, cordura: -4 }, flags: { riderTecnico: 1 } },
          },
          {
            peso: 2,
            texto:
              'Una noche, en una cancha de fútbol de provincia, el escenario cede quince centímetros en la mitad del tercer tema. No se cae. Quince centímetros. Terminás el show con la sensación física de estar parado arriba de un error de otro.',
            efectos: {
              stats: { cordura: -18, salud: -6, credibilidad: 6, fama: 4 },
              flags: { riderTecnico: 1, sustoGrande: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-instalacion',
    titulo: 'El micrófono da patadas',
    categoria: 'salud',
    epigrafe: 'Una chispa azul cada vez que te acercás.',
    inspiracion:
      'Les Harvey, de Stone the Crows, murió en 1972 al tocar un micrófono sin descarga a tierra en pleno show. Keith Relf, de los Yardbirds, murió en 1976 por lo mismo, en el sótano de su casa. Durante décadas fue la causa de muerte más común y menos contada del oficio.',
    texto:
      'En la prueba de sonido te da una patada eléctrica al acercarte al micrófono. Una chispita azul y un tirón en el antebrazo.\n\nEl sonidista dice que es la humedad. El dueño del local dice que siempre fue así y que acá tocaron todos. Hay ochocientas personas afuera y llovió toda la tarde.',
    requiere: { stats: { fama: { min: 20 } }, sinFlags: ['instalacionTrucha'] },
    peso: 2,
    opciones: [
      {
        id: 'tocar',
        texto: 'Tocar igual. Siempre fue así',
        riesgo: 'letal',
        resultados: [
          {
            peso: 8,
            texto:
              'Tocás con la boca a cinco centímetros del micrófono, sin apoyar los labios, como si el micrófono estuviera caliente. Te dan tres patadas más en el show. No pasa nada y esa es exactamente la razón por la que vas a volver a tocar en lugares así doscientas veces.',
            efectos: {
              stats: { salud: -8, cordura: -10, credibilidad: 6, fama: 4 },
              dinero: 4000,
              flags: { instalacionTrucha: 1, zafaste: 1 },
            },
          },
          {
            peso: 2,
            texto:
              'En el cuarto tema apoyás la boca en el micrófono con la guitarra colgada y las manos mojadas.',
            efectos: { final: 'la-descarga' },
          },
        ],
      },
      {
        id: 'suspender',
        texto: 'No tocar hasta que un electricista lo revise',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te plantás. El dueño grita, el promotor grita, la gente afuera putea bajo la lluvia. Aparece un electricista a las once de la noche, mide, se pone pálido y dice que eso no puede estar así. Tocan a la una de la mañana para seiscientas personas empapadas y es un show que nadie olvida.',
            efectos: {
              stats: { credibilidad: 16, cordura: 8, fama: 4, quimica: 8 },
              dinero: -2000,
              flags: { instalacionTrucha: 1, seguridadPrimero: 1, precavido: 1 },
            },
          },
        ],
      },
      {
        id: 'goma',
        texto: 'Tocar con zapatillas de goma y guantes de trabajo',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Salís con guantes amarillos de electricista y las zapatillas más gruesas que había en la producción. Se ríe todo el mundo, incluida la banda, y funciona. Después de esa noche vas a mirar el piso del escenario antes de cada show por el resto de tu vida.',
            efectos: {
              stats: { fama: 8, credibilidad: 8, cordura: -6, salud: -2 },
              dinero: 4000,
              flags: { instalacionTrucha: 1, precavido: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-litera',
    titulo: 'La litera de arriba',
    categoria: 'banda',
    epigrafe: 'Once horas de ruta y una sola cama que sirve.',
    inspiracion:
      'Cliff Burton, de Metallica, ganó la mejor litera del micro sacando el as de espadas en un sorteo de cartas, la madrugada del 27 de septiembre de 1986. El micro volcó en una ruta helada de Suecia unas horas después.',
    texto:
      'Once horas de ruta hasta la próxima fecha y una sola litera decente en todo el micro. Las demás están arriba del motor o al lado del baño.\n\nEl bajista saca un mazo y dice que la sortean. El que saca la carta más alta duerme como una persona.',
    requiere: { flags: ['primeraGira'], edadMax: 55, sinFlags: ['sorteoLitera'] },
    peso: 2,
    opciones: [
      {
        id: 'jugar',
        texto: 'Sacar una carta',
        riesgo: 'letal',
        resultados: [
          {
            peso: 8,
            texto:
              'Sacás un cuatro de copas. Dormís sentado adelante, con la cabeza contra el vidrio y el ruido del motor, y llegás destruido. El que ganó no para de hacerte chistes durante trescientos kilómetros.',
            efectos: {
              stats: { salud: -6, quimica: 8, cordura: -4 },
              flags: { sorteoLitera: 1 },
            },
          },
          {
            peso: 2,
            texto:
              'Sacás el as de espadas. Te reís, decís que es tuya, y el otro se va a dormir adelante puteando de mentira. A las siete de la mañana el micro se sale de la ruta.',
            efectos: { final: 'la-litera' },
          },
        ],
      },
      {
        id: 'ceder',
        texto: 'Cederla al que está peor',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Se la das al baterista, que hace tres días que no duerme y tiene una tos que asusta. Vos viajás adelante hablando con el chofer once horas. Aprendés más de rutas, de camiones y de la vida de ese hombre que en cinco años de entrevistas.',
            efectos: {
              stats: { quimica: 14, salud: -6, inspiracion: 12, cordura: 4 },
              flags: { sorteoLitera: 1, tipoDecente: 1 },
            },
          },
        ],
      },
      {
        id: 'hotel',
        texto: 'Pagar de tu bolsillo un hotel y salir a la mañana',
        riesgo: 'seguro',
        requiere: { dineroMin: 3000 },
        bloqueo: 'No te alcanza para el hotel',
        resultados: [
          {
            texto:
              'Pagás cuatro habitaciones baratas y salen a las ocho de la mañana con luz. Llegan tarde a la prueba de sonido y el promotor amenaza con descontarles. Nadie viaja de noche en esta banda nunca más, y esa regla estúpida los va a sobrevivir a todos.',
            efectos: {
              stats: { salud: 8, quimica: 10, cordura: 8 },
              dinero: -3000,
              flags: { sorteoLitera: 1, precavido: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-piloto',
    titulo: 'El cantante sacó licencia de piloto',
    categoria: 'banda',
    epigrafe: 'Quiere volar él el avión de la gira.',
    inspiracion:
      'Bruce Dickinson, cantante de Iron Maiden, es piloto comercial y voló personalmente el avión de la banda —un Boeing 757 llamado Ed Force One— con los músicos, los técnicos y todo el equipo adentro.',
    texto:
      'Alguien de la banda desapareció seis meses en su tiempo libre y volvió con una licencia de piloto comercial de verdad, con horas de vuelo y todo.\n\nAhora propone que la gira la haga él: un avión propio, con el logo pintado, el equipo adentro y la banda en la cabina. Dice que es más barato. Lo peor es que hizo los números y es más barato.',
    requiere: { tieneBanda: true, stats: { fama: { min: 55 } }, dineroMin: 60000, sinFlags: ['pilotoPropio'] },
    peso: 2,
    opciones: [
      {
        id: 'dejarlo',
        texto: 'Dejarlo volar',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 4,
            texto:
              'Vuela él. Cuarenta fechas en tres continentes, con el logo de la banda en la cola del avión y el cantante saludando desde la cabina con gorra. Es lo más ridículo y lo más glorioso que hicieron nunca. Llegan descansados a todos lados y nadie vuelve a alquilar una chatarra jamás.',
            efectos: {
              stats: { fama: 20, quimica: 18, cordura: 10, salud: 6 },
              dinero: 90000,
              flags: { pilotoPropio: 1, giraRecord: 1, precavido: 1 },
              titular: '"El cantante de {banda} pilotea el avión de su propia gira"',
              quitaFlags: ['avionGira'],
            },
          },
          {
            peso: 1,
            texto:
              'Vuela él y en la fecha nueve tiene que aterrizar con viento cruzado y medio equipo vomitando. Lo hace bien. Nadie dice una palabra durante el aterrizaje y nadie vuelve a hacer un chiste sobre su hobby.',
            efectos: {
              stats: { fama: 12, quimica: 10, cordura: -10, salud: -4 },
              dinero: 50000,
              flags: { pilotoPropio: 1, sustoGrande: 1 },
              quitaFlags: ['avionGira'],
            },
          },
        ],
      },
      {
        id: 'profesional',
        texto: 'Comprar el avión pero contratar un piloto de línea',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Compran el avión y contratan un tipo de sesenta años con veinte mil horas de vuelo. El cantante viaja de copiloto todas las fechas con una cara de felicidad que no le viste ni en el escenario. Es la mejor plata que gastaron.',
            efectos: {
              stats: { salud: 10, cordura: 10, quimica: 12, fama: 8 },
              dinero: -60000,
              flags: { pilotoPropio: 1, precavido: 1 },
              quitaFlags: ['avionGira'],
            },
          },
        ],
      },
      {
        id: 'prohibir',
        texto: 'Prohibírselo. Es una locura',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Le decís que no delante de todos y con malos modos. Se lo banca y no vuelve a mencionarlo. Un año después lo tenés dos veces por semana volando solo en un aeroclub, y entendés que era lo único que lo mantenía cuerdo, y que se lo sacaste vos.',
            efectos: { stats: { quimica: -14, cordura: -6, salud: 2 }, flags: { pilotoPropio: 1 } },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Gente rara alrededor
  // -------------------------------------------------------------------------
  {
    id: 'biz-huesped',
    titulo: 'El tipo que duerme en tu living',
    categoria: 'mito',
    epigrafe: 'Vino con dos chicas y una guitarra y hace once días que está.',
    inspiracion:
      'Dennis Wilson, de los Beach Boys, levantó a dos chicas que hacían dedo y así Charles Manson y su grupo terminaron viviendo meses en su casa. Wilson llegó a grabar una de sus canciones con la banda, cambiándole la letra y el título, lo cual lo enfureció.',
    texto:
      'Levantaste a dos chicas que hacían dedo y a la noche estaba el novio, y después el amigo del novio, y después ocho personas más. Hace once días que viven en tu casa.\n\nÉl habla con una seguridad que no le viste a nadie. Tiene canciones. Son raras y no son malas. Dice que sabe exactamente lo que va a pasar en este país en los próximos dos años y lo dice como quien lee el diario del futuro.',
    requiere: { stats: { fama: { min: 50 } }, dineroMin: 40000, sinFlags: ['huespedPeligroso'] },
    peso: 2,
    opciones: [
      {
        id: 'grabarle',
        texto: 'Grabarle un tema con tu banda',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Le grabás un tema, le cambiás la letra, el título y los créditos, y sale en tu disco. Cuando se entera te lo dice de una manera tranquila que te hace dormir con la luz prendida durante meses.\n\nUn año después su cara está en la tapa de todos los diarios del mundo por algo que no tiene nada que ver con la música, y vos vas a pasar el resto de tu vida explicando en cada entrevista por qué esa persona vivió ocho meses en tu casa.',
            efectos: {
              stats: { fama: 14, cordura: -30, credibilidad: -12, inspiracion: 10 },
              dinero: -50000,
              flags: { huespedPeligroso: 1, culpa: 2, insomnio: 1 },
              titular: '"Vivió en la casa de {apodo}": la conexión que nadie quiere explicar',
            },
          },
          {
            peso: 1,
            texto:
              'Le grabás el tema y queda bien. Él se va solo a los dos meses, sin escándalo, y años después te enterás de que terminó dando clases de guitarra en un pueblo. No todas las historias raras terminan mal. Casi todas, pero no todas.',
            efectos: {
              stats: { inspiracion: 14, credibilidad: 6, cordura: -6 },
              dinero: -8000,
              flags: { huespedPeligroso: 1 },
            },
          },
        ],
      },
      {
        id: 'echarlos',
        texto: 'Echarlos a todos hoy mismo',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Contratás dos tipos grandes y los sacás en una tarde. Él te mira desde la vereda un rato largo antes de subirse a la camioneta y no dice nada, que es peor que si dijera algo. Cambiás las cerraduras y, seis meses después, te mudás.',
            efectos: {
              stats: { cordura: -14, salud: -2, quimica: 6 },
              dinero: -20000,
              flags: { huespedPeligroso: 1, sustoGrande: 1 },
            },
          },
        ],
      },
      {
        id: 'quedarse',
        texto: 'Dejarlos quedarse. Total, la casa es enorme',
        riesgo: 'letal',
        resultados: [
          {
            peso: 3,
            texto:
              'Se quedan siete meses. Te vacían la heladera, te chocan dos autos, te usan las tarjetas y te comen medio año de regalías. Cuando finalmente se van, tardás dos años en volver a invitar a alguien a tu casa.',
            efectos: {
              stats: { cordura: -22, salud: -10, adiccion: 12, inspiracion: 8 },
              dinero: -90000,
              flags: { huespedPeligroso: 1, entornoParasito: 1 },
            },
          },
          {
            peso: 2,
            texto:
              'Se quedan. Una noche, en la cocina, escuchás algo que él le dice a los demás en voz baja y entendés con total claridad que en tu casa hay una cosa que no sabés manejar. Te vas vos. Dejás la casa. La vendés por teléfono, amueblada, a la mitad de lo que vale.',
            efectos: {
              stats: { cordura: -26, credibilidad: -6, inspiracion: 16 },
              dinero: -120000,
              flags: { huespedPeligroso: 1, insomnio: 1, seFueDeLaCiudad: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-tutor',
    titulo: 'El médico se muda a tu casa',
    categoria: 'salud',
    epigrafe: 'Te sacó de la cama en un año. Ahora atiende tu teléfono.',
    inspiracion:
      'Eugene Landy sacó a Brian Wilson de la cama después de años de encierro y terminó controlándole la medicación, la comida, las visitas, los contratos y los créditos de sus canciones. La familia tuvo que ir a la justicia; le retiraron la matrícula.',
    texto:
      'Hace un año no salías de la cama. Este tipo te levantó, te hizo caminar, te hizo comer y te hizo grabar, y te cobró una cifra que tu contador considera un delito.\n\nAhora propone algo nuevo: mudarse a tu casa, con un equipo. Control total, veinticuatro horas. Él decide a quién ves, qué tomás y a qué hora te levantás. Dice que es la única forma. Lo peor es que la última vez tenía razón.',
    requiere: { stats: { cordura: { max: 45 } }, dineroMin: 30000, edadMin: 28, sinFlags: ['tutorMedico', 'tratamiento'] },
    peso: 3,
    opciones: [
      {
        id: 'firmar',
        texto: 'Firmarle el control total',
        riesgo: 'letal',
        resultados: [
          {
            peso: 3,
            texto:
              'Firmás. Los primeros ocho meses son un milagro: grabás, comés, salís a la calle. Después empieza a decidir quién puede llamarte. Después empieza a firmar tus canciones como coautor. Después, en las entrevistas, mirás fuera de cámara antes de contestar qué desayunaste.',
            efectos: {
              stats: { cordura: 14, salud: 16, talento: 8, credibilidad: -14 },
              dinero: -80000,
              flags: { tutorMedico: 1, dependenciaMedica: 1 },
            },
          },
          {
            peso: 2,
            texto:
              'Firmás y funciona demasiado bien. En dos años sacás el mejor disco de tu carrera tardía y no tenés ni idea de cuánto de eso es tuyo. Él da las entrevistas. Él elige el corte. Tu familia dejó de venir hace catorce meses y a vos te dijeron que fueron ellos los que dejaron de venir.',
            efectos: {
              stats: { cordura: -10, salud: 12, talento: 12, credibilidad: -20, quimica: -20 },
              dinero: -140000,
              publicaDisco: true,
              flags: { tutorMedico: 1, dependenciaMedica: 1, aislado: 1 },
            },
          },
        ],
      },
      {
        id: 'familia',
        texto: 'Llamar a tu familia antes de firmar nada',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Los llamás. Vienen al día siguiente, escuchan la propuesta y hacen las cuatro preguntas que vos no hiciste. El tipo se pone raro con la tercera. A la semana lo estás buscando en el registro de matrículas y encontrás dos denuncias anteriores.\n\nConseguís un equipo aburrido, con obra social y horario de oficina. Tardás el triple. Salís entero.',
            efectos: {
              stats: { cordura: 22, salud: 12, quimica: 14, fama: -6, inspiracion: -6 },
              dinero: -20000,
              flags: { tratamiento: 1, apoyoFamiliar: 1, estable: 1 },
            },
          },
        ],
      },
      {
        id: 'echarlo',
        texto: 'Echarlo y arreglártelas solo',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Lo echás. Tenías razón sobre él y no tenías ningún plan para vos. Volvés a la cama seis meses. Cuando salís, salís por tu cuenta y más lento, y esa parte no se la debés a nadie.',
            efectos: {
              stats: { cordura: -16, salud: -12, credibilidad: 8, inspiracion: 10 },
              flags: { aguantaSolo: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Lo echás y te hace juicio por los honorarios y por tres canciones que dice haber escrito con vos. Gana una. Cada vez que suena ese tema en la radio, cobra él.',
            efectos: {
              stats: { cordura: -12, credibilidad: -6 },
              dinero: -60000,
              flags: { perdioDerechos: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-revolver',
    titulo: 'El revólver del estudio',
    categoria: 'mito',
    epigrafe: 'Lo tiene en el cajón de la consola, al lado de los cables.',
    inspiracion:
      'Phil Spector grababa con armas en el estudio y llegó a disparar dentro de una sesión de John Lennon; años después fue condenado por homicidio. Terry Kath, de Chicago, murió en 1978 jugando con una pistola que creía descargada, después de una fiesta.',
    texto:
      'El productor tiene un revólver en el cajón de la consola, entre los cables y las pilas. Lo sacó dos veces esta semana: una para una anécdota y otra para apurar a un músico de sesión que llegaba tarde.\n\nSon las cuatro de la mañana, están todos dados vuelta y ahora está arriba de la mesa, entre los ceniceros. Alguien dice, riéndose, que no está cargada.',
    requiere: { stats: { adiccion: { min: 25 } }, edadMin: 21, sinFlags: ['revolverEstudio'] },
    peso: 2,
    opciones: [
      {
        id: 'agarrarlo',
        texto: 'Agarrarlo y hacer el chiste',
        riesgo: 'letal',
        resultados: [
          {
            peso: 6,
            texto:
              'Le sacás el cargador, lo mostrás, hacés el chiste y todos se ríen menos uno, que se levanta y se va del estudio y no vuelve a trabajar con vos nunca más. Tenía razón él. Tardás quince años en admitirlo.',
            efectos: {
              stats: { cordura: -14, credibilidad: -8, quimica: -12, fama: 4 },
              flags: { revolverEstudio: 1 },
            },
          },
          {
            peso: 3,
            texto: 'Le sacás el cargador, lo mostrás y decís que no te preocupes, que no está cargada.',
            efectos: { final: 'no-esta-cargada' },
          },
        ],
      },
      {
        id: 'sacarlo',
        texto: 'Sacarlo del estudio vos mismo, esta noche',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Lo levantás con dos dedos, salís a la calle y lo tirás a una boca de tormenta a tres cuadras. Volvés y se arma un quilombo que termina la sesión. El disco se retrasa cuatro meses y se graba con otro productor.\n\nDe todas las decisiones de esa época, es la única que no revisás nunca.',
            efectos: {
              stats: { cordura: 14, credibilidad: 12, quimica: 8, fama: -4 },
              dinero: -15000,
              flags: { revolverEstudio: 1, eligioVivir: 1, tipoDecente: 1 },
            },
          },
        ],
      },
      {
        id: 'irse',
        texto: 'Levantarte y no volver a ese estudio',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Agarrás la campera y te vas sin decir nada. Perdés al mejor productor de tu generación y al disco que iba a hacerte enorme.\n\nDoce años después, ese productor entra preso por algo que empezó exactamente igual que esa noche: a las cuatro de la mañana, con el arma arriba de la mesa y alguien riéndose.',
            efectos: {
              stats: { cordura: 10, credibilidad: 8, fama: -10, inspiracion: 6 },
              flags: { revolverEstudio: 1, eligioVivir: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-pacto-desierto',
    titulo: 'El pacto en el desierto',
    categoria: 'mito',
    epigrafe: 'Tres de la mañana, una botella y una promesa.',
    inspiracion:
      'Gram Parsons y su road manager Phil Kaufman se prometieron que, si uno moría, el otro llevaría el cuerpo a Joshua Tree y lo quemaría. En 1973 Kaufman cumplió: robó el ataúd del aeropuerto y lo incineró en el desierto. Como no existía una ley específica, lo multaron por la camioneta.',
    texto:
      'Están los dos tirados afuera de un motel del desierto, a las tres de la mañana, mirando un cielo que en la ciudad no existe.\n\nÉl dice que si se muere no quiere un velorio con un cura que no lo conoce y con tíos que no lo vieron nunca. Dice que quiere que lo traigan acá y que lo quemen. Y te pregunta si vos harías eso por él, y si querés que él lo haga por vos.',
    requiere: { edadMin: 22, stats: { fama: { min: 35 } }, sinFlags: ['pactoFunerario'] },
    peso: 2,
    opciones: [
      {
        id: 'jurar',
        texto: 'Jurárselo y hacer que él te lo jure',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Se lo jurás con la mano en el pecho y con la solemnidad estúpida de las tres de la mañana, y los dos se cagan de risa, y los dos lo dicen en serio.\n\nNunca más hablan del tema. Él se acuerda perfectamente. Diez años después, cuando le pregunten qué clase de amigo eras, va a contar esta noche y no va a contar ninguna otra.',
            efectos: {
              stats: { quimica: 16, cordura: 8, inspiracion: 12, credibilidad: 6 },
              flags: { pactoFunerario: 1, bandaDeAmigos: 1 },
            },
          },
        ],
      },
      {
        id: 'reirse',
        texto: 'Reírte y cambiar de tema',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Le decís que está delirando y hablás de otra cosa. Él insiste dos veces más esa noche y las dos veces lo esquivás.\n\nNo pasa nada. Es una conversación de borrachos entre miles. Pero se acuerda, y en algún lugar muy chiquito de su cabeza queda anotado que cuando te pidió algo raro, vos te reíste.',
            efectos: { stats: { cordura: 4, quimica: -6 } },
          },
        ],
      },
      {
        id: 'testamento',
        texto: 'Decirle que sí y al otro día ir los dos a un escribano',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'A las once de la mañana, con resaca, están los dos sentados frente a una escribana de sesenta años explicándole lo del desierto. Ella no mueve un músculo de la cara y redacta.\n\nEs el documento más ridículo del país y va a servir. El día que haga falta, alguien va a sacar ese papel y nadie va a poder decir que era un delirio de músicos.',
            efectos: {
              stats: { quimica: 12, cordura: 10, credibilidad: 4 },
              dinero: -2000,
              flags: { pactoFunerario: 1, ordenado: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-rio',
    titulo: 'El río',
    categoria: 'salud',
    epigrafe: 'Estás bien. Hace calor. El agua está quieta.',
    inspiracion:
      'Jeff Buckley entró vestido al río Wolf, en Memphis, una noche de mayo de 1997, cantando. No estaba borracho ni deprimido: venía de un buen ensayo. Dennis Wilson murió en 1983 buceando para recuperar cosas que él mismo había tirado al agua.',
    texto:
      'Salieron del ensayo y sonó mejor que nunca. Hace un calor pegajoso y el río está ahí nomás, quieto, negro, enorme.\n\nEstás bien. Estás mejor que en meses. Uno se queda en la orilla con la radio y las cosas, y vos te metés hasta las rodillas con las botas puestas, cantando un tema que no es tuyo.',
    requiere: {
      stats: { cordura: { min: 35 }, inspiracion: { min: 40 } },
      edadMin: 20,
      edadMax: 45,
      sinFlags: ['elRio'],
      chance: 0.5,
    },
    peso: 2,
    opciones: [
      {
        id: 'seguir',
        texto: 'Seguir caminando hacia adentro, cantando',
        riesgo: 'letal',
        resultados: [
          {
            peso: 9,
            texto:
              'Te metés hasta el pecho. Pasa un remolcador lejos y llega una ola sucia que te tapa y te da vuelta, y salís tosiendo, riéndote, con una bota menos. Esa noche dormís como no dormías hace un año.',
            efectos: {
              stats: { cordura: 14, inspiracion: 18, salud: -6 },
              flags: { elRio: 1, pasoCerca: 1 },
            },
          },
          {
            peso: 3,
            texto: 'Te metés hasta el pecho. El que estaba en la orilla se da vuelta treinta segundos para mover la radio.',
            efectos: { final: 'el-rio' },
          },
        ],
      },
      {
        id: 'orilla',
        texto: 'Quedarte en la orilla con los pies en el agua',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te sentás en el barro con el agua hasta los tobillos y se quedan los dos ahí hasta que amanece, sin hablar casi nada. De esa noche salen tres canciones y ninguna habla del río.',
            efectos: {
              stats: { cordura: 12, inspiracion: 20, quimica: 8 },
              flags: { elRio: 1, eligioVivir: 1 },
            },
          },
        ],
      },
      {
        id: 'volver',
        texto: 'Meterte, mojarte la cabeza y salir',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Te sumergís entero una vez, te mojás la cabeza y salís enseguida porque el fondo desaparece de golpe a los cuatro metros y eso te asusta.\n\nDos años después, en una entrevista, te preguntan si tuviste miedo alguna vez de verdad y contás esto, y el periodista no entiende por qué.',
            efectos: {
              stats: { cordura: 8, inspiracion: 12, salud: -2 },
              flags: { elRio: 1, eligioVivir: 1 },
            },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Prensa, escándalos y malentendidos
  // -------------------------------------------------------------------------
  {
    id: 'biz-frase',
    titulo: 'La frase',
    categoria: 'prensa',
    epigrafe: 'Lo dijiste en marzo. Explotó en agosto, en otro país.',
    inspiracion:
      'John Lennon dijo en 1966, en una entrevista inglesa que nadie discutió, que los Beatles eran "más populares que Jesús". Cinco meses después, una revista adolescente lo reprodujo en Estados Unidos: hubo quema de discos, boicot de radios y amenazas de muerte. Lennon terminó pidiendo disculpas en una conferencia de prensa.',
    texto:
      'Hace cinco meses le dijiste algo a un periodista, sentado en tu casa, medio en broma, sobre la religión y sobre cuánta gente va a verlos a ustedes. Salió publicado sin que nadie levantara una ceja.\n\nHoy una revista del otro lado del mundo lo puso en la tapa, sin el resto de la frase. Hay gente quemando tus discos en una plaza, cuarenta radios te sacaron del aire y llegó una amenaza escrita a la oficina de tu manager. Tienen una gira de treinta fechas empezando en dos semanas, ahí.',
    requiere: { stats: { fama: { min: 55 } }, sinFlags: ['laFrase'] },
    peso: 3,
    opciones: [
      {
        id: 'disculparse',
        texto: 'Pedir disculpas en conferencia de prensa',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Te sentás delante de doscientos periodistas y explicás la frase entera, y aclarás que era una observación y no una comparación, y pedís perdón sin creer del todo que haya que pedirlo. Se calma en una semana.\n\nEsa noche, en el hotel, alguien de la banda dice en voz baja que nunca te vio así, y no te lo dice como un elogio.',
            efectos: {
              stats: { fama: 8, credibilidad: -12, cordura: -18 },
              flags: { laFrase: 1, sePidioDisculpas: 1 },
              titular: '"No fue mi intención": la conferencia de prensa de {apodo}',
            },
          },
          {
            peso: 1,
            texto:
              'Pedís disculpas y no alcanza. La gira se hace igual, con custodia policial en cada estadio y con vos mirando las tribunas altas en cada tema. En la última fecha, en el tercer bis, escuchás un ruido seco y te tirás al piso, y era un petardo.\n\nNo volvés a girar por ese país en once años.',
            efectos: {
              stats: { fama: 6, credibilidad: -8, cordura: -28, salud: -6 },
              dinero: 40000,
              flags: { laFrase: 1, sustoGrande: 1, insomnio: 1 },
            },
          },
        ],
      },
      {
        id: 'redoblar',
        texto: 'Redoblar la apuesta y decirlo más fuerte',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Salís a decir que lo sostenés y que además tenés otras cosas para decir. Perdés ese mercado durante una década y ganás algo que no se compra: cada persona que se queda con ustedes después de esto se queda para siempre.\n\nTu sello te odia. Tus letras mejoran muchísimo.',
            efectos: {
              stats: { credibilidad: 26, fama: -14, inspiracion: 16, cordura: -10 },
              dinero: -60000,
              flags: { laFrase: 1, antisistema: 1, listaNegra: 1 },
              titular: '"Lo vuelvo a decir": {apodo} no se retracta y pierde un país entero',
            },
          },
        ],
      },
      {
        id: 'cancelar',
        texto: 'Cancelar la gira y no ir',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Cancelan todo y se quedan en casa. El sello pierde una fortuna y tu manager amenaza con renunciar. Nadie corre riesgo y nadie escribe una línea heroica sobre ustedes.\n\nDiez años después, cuando otra banda pasa por lo mismo y sale a girar con custodia, mirás las noticias y sabés perfectamente qué hubieras hecho.',
            efectos: {
              stats: { cordura: 10, fama: -16, credibilidad: -6 },
              dinero: -80000,
              flags: { laFrase: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-rumor-muerte',
    titulo: 'Dicen que te moriste',
    categoria: 'prensa',
    epigrafe: 'Y que el que está dando esta nota es un doble.',
    inspiracion:
      'En 1969, una radio de Detroit "demostró" que Paul McCartney había muerto en un accidente en 1966 y que lo había reemplazado un doble ganador de un concurso de parecidos. Las pruebas estaban en las tapas de los discos y en los temas escuchados al revés. McCartney lo sigue desmintiendo.',
    texto:
      'Un tipo con un programa de radio de madrugada explicó anoche, durante cuatro horas y con una lógica impecable, que vos te moriste hace tres años en un accidente que se tapó, y que la persona que aparece en las fotos desde entonces es un doble.\n\nLas pruebas están en la tapa de tu último disco, en la posición de tus manos y en un tema que, escuchado al revés, dice algo. Esta mañana había cuatrocientas personas en la puerta del sello. Tu vieja te llamó llorando.',
    requiere: { stats: { fama: { min: 60 } }, sinFlags: ['rumorMuerte'] },
    peso: 3,
    opciones: [
      {
        id: 'jugar',
        texto: 'Seguirle el juego y sembrar pistas falsas en el próximo disco',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Metés en el disco siguiente once pistas falsas: un mensaje al revés, una foto con un zapato distinto, una fecha que no cierra. La cosa se vuelve una industria paralela. Se venden libros, se hacen programas, se organizan visitas guiadas.\n\nVendés una barbaridad. Y a la vez, para siempre, hay una porción del planeta que te mira a los ojos y te agradece la excelente imitación.',
            efectos: {
              stats: { fama: 24, credibilidad: 8, cordura: -14, inspiracion: 12 },
              dinero: 90000,
              publicaDisco: true,
              flags: { rumorMuerte: 1, mitoVivo: 1, personajePublico: 1 },
              titular: '"El disco de las pistas": la teoría de la muerte de {apodo} se descontrola',
            },
          },
        ],
      },
      {
        id: 'desmentir',
        texto: 'Desmentirlo en la tapa de una revista, con documento en la mano',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Posás con el documento y un diario del día. Título: "Estoy vivo". La revista agota dos ediciones.\n\nNo sirve absolutamente para nada: en esta clase de historias, la desmentida es la prueba. Lo vas a explicar en entrevistas durante cincuenta años, cada vez con menos paciencia, hasta que un día un chico de once años te lo pregunte y le contestes que sí, que sos el doble.',
            efectos: {
              stats: { fama: 12, credibilidad: 6, cordura: -10 },
              dinero: 10000,
              flags: { rumorMuerte: 1 },
              titular: '"Estoy vivo": {apodo} tuvo que salir a demostrar que no está muerto',
            },
          },
        ],
      },
      {
        id: 'nada',
        texto: 'No decir nada y esperar a que se les pase',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'No decís una palabra durante cuatro meses. El silencio hace exactamente lo que hace siempre el silencio: lo agranda.\n\nCuando finalmente aparecés en público, hay tres mil personas y un ambiente rarísimo, mitad recital mitad procesión. Alguien grita que le muestres la mano. Se la mostrás.',
            efectos: {
              stats: { fama: 16, cordura: -16, credibilidad: 4 },
              flags: { rumorMuerte: 1, aislado: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-congreso',
    titulo: 'Te citan a declarar por las letras',
    categoria: 'prensa',
    epigrafe: 'Una comisión de señoras y senadores quiere hablar de tus canciones.',
    inspiracion:
      'En 1985, el Senado de Estados Unidos citó a Frank Zappa, Dee Snider y John Denver por las letras del rock. Zappa leyó una declaración demoledora sobre censura; Snider, de Twisted Sister, apareció con el pelo largo y desarmó a la comisión hablando con una educación perfecta. De ahí salió el sticker de "Parental Advisory", que multiplicó las ventas.',
    texto:
      'Una comisión parlamentaria armada por las esposas de cuatro funcionarios hizo una lista de canciones peligrosas. Hay tres tuyas.\n\nTe citan a declarar. Va a estar televisado. Del otro lado hay diez señores de traje que nunca escucharon un disco entero en su vida y que están seguros de que tus letras causan cosas.',
    requiere: { stats: { fama: { min: 50 } }, sinFlags: ['citadoCongreso'] },
    peso: 3,
    opciones: [
      {
        id: 'argumentar',
        texto: 'Ir con una declaración escrita y hacerlos pelota con argumentos',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Vas de traje, prolijo, con nueve páginas escritas y con la constitución subrayada. Hablás veinte minutos sobre censura, sobre quién decide y sobre lo que pasa cuando el Estado se mete con la letra de una canción, y no levantás la voz ni una vez.\n\nEl video de eso se estudia en facultades cuarenta años después. Perdés la votación igual: sale el sticker de advertencia. El sticker termina funcionando como propaganda gratis y les hace vender el doble a todos.',
            efectos: {
              stats: { credibilidad: 28, fama: 16, talento: 4, cordura: -6 },
              dinero: 20000,
              flags: { citadoCongreso: 1, enfrentoPoder: 1, juradoRespetado: 1 },
              titular: '"Les dio una clase": la declaración de {apodo} ante la comisión',
            },
          },
        ],
      },
      {
        id: 'provocar',
        texto: 'Ir vestido para el escenario y provocarlos',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Entrás con toda la pinta puesta y con la mejor educación del mundo, y contestás cada pregunta con datos, y les explicás con paciencia de maestro que la canción que citaron habla de una operación de garganta.\n\nEl contraste entre cómo te ven y cómo hablás los deja sin nada. Es el mejor show de tu vida y no tocaste una nota.',
            efectos: {
              stats: { credibilidad: 24, fama: 22, cordura: 6 },
              flags: { citadoCongreso: 1, enfrentoPoder: 1, momentoViral: 1 },
              titular: '"Nadie esperaba eso": {apodo} desarmó a la comisión sin levantar la voz',
            },
          },
          {
            peso: 1,
            texto:
              'Entrás a romper y salís roto. Te sacan de contexto tres frases, te pintan como exactamente lo que ellos decían y dos cadenas de disquerías dejan de vender tus discos. Ganaste el momento y perdiste el año.',
            efectos: {
              stats: { credibilidad: 6, fama: 12, cordura: -14 },
              dinero: -40000,
              flags: { citadoCongreso: 1, listaNegra: 1 },
            },
          },
        ],
      },
      {
        id: 'no-ir',
        texto: 'No ir. Que se arreglen',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'No vas. Va otro en tu lugar, uno que canta canciones sobre montañas y que nadie hubiera imaginado del lado de ustedes, y los defiende mejor de lo que los hubieras defendido vos.\n\nSale el sticker igual. Cada vez que ves uno pegado en un disco tuyo, te acordás de que ese día estabas durmiendo.',
            efectos: {
              stats: { credibilidad: -14, cordura: 4, fama: -4 },
              flags: { citadoCongreso: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-subliminal',
    titulo: 'El juicio por los mensajes al revés',
    categoria: 'prensa',
    epigrafe: 'Dicen que tu disco, escuchado al revés, da una orden.',
    inspiracion:
      'En 1990, Judas Priest fue llevado a juicio acusado de haber escondido el mensaje "hazlo" en un tema. La defensa demostró en la sala que si uno busca palabras en el ruido, aparecen: reprodujeron fragmentos al revés donde se escuchaba, entre otras cosas, un pedido de ayuda con una pizza. La banda ganó.',
    texto:
      'Dos familias te hacen juicio. Dicen que su hijo hizo lo que hizo porque tu disco, escuchado al revés, le dio una orden de dos palabras.\n\nEstás sentado en una sala de tribunales, con un perito de audio de un lado y un pastor del otro, escuchando tu propio disco al revés a través de unos parlantes malos, delante de un juez.',
    requiere: { stats: { fama: { min: 55 } }, algunaFlag: ['metal', 'grunge', 'punk'], sinFlags: ['juicioSubliminal'] },
    peso: 3,
    sensible: true,
    opciones: [
      {
        id: 'demostrar',
        texto: 'Demostrar en la sala que el ruido dice cualquier cosa',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Tu abogado pasa al revés tres fragmentos de tu disco elegidos al azar. En uno se escucha clarísimo un pedido de ayuda. En otro, alguien encargando una pizza. El juez pide que lo repitan dos veces y se ríe la sala entera menos vos.\n\nGanás. Y en el pasillo, al salir, ves a la madre de uno de los chicos sentada sola en un banco, y entendés que ella no vino por el juicio: vino porque necesitaba que alguien le explicara algo que no tiene explicación.',
            efectos: {
              stats: { credibilidad: 20, fama: 14, cordura: -20 },
              dinero: -70000,
              flags: { juicioSubliminal: 1, causaGanada: 1 },
              titular: '"El disco al revés pedía una pizza": {banda} ganó el juicio',
            },
          },
        ],
      },
      {
        id: 'arreglar',
        texto: 'Pagar un arreglo para que termine ya',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Pagás sin admitir nada, que es la fórmula que inventaron los abogados para que uno pueda pagar y decirse que no admitió nada.\n\nLa prensa lo cuenta como una confesión. Durante veinte años, en cada nota, aparece la línea "la banda pagó un acuerdo". Los padres reciben una plata que no querían y que no les sirve para nada.',
            efectos: {
              stats: { credibilidad: -18, cordura: -10, fama: -4 },
              dinero: -150000,
              flags: { juicioSubliminal: 1 },
            },
          },
        ],
      },
      {
        id: 'burlarse',
        texto: 'Declarar que sí, que hay mensajes, y que dicen otra cosa',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Declarás con cara de piedra que si tuvieras el poder de dar órdenes a tus oyentes, lo primero que les pedirías es que compren más discos, porque muertos no compran.\n\nSe hace un silencio helado. Ganás el juicio y perdés cualquier posibilidad de que alguien vuelva a considerarte una persona seria. La frase te sobrevive.',
            efectos: {
              stats: { fama: 18, credibilidad: -10, cordura: -12 },
              dinero: -60000,
              flags: { juicioSubliminal: 1, bocaFloja: 1, personajePublico: 1 },
              titular: '"Muertos no compran discos": la declaración que indignó al país',
            },
          },
          {
            peso: 2,
            texto:
              'Hacés el chiste y el juez no se ríe y las familias tampoco, y esa noche te ves en el noticiero haciendo el chiste, en la misma nota en la que muestran la foto del chico.\n\nNo volvés a hacer chistes con eso. No es suficiente y no hay nada que sea suficiente.',
            efectos: {
              stats: { fama: 10, credibilidad: -22, cordura: -26 },
              dinero: -90000,
              flags: { juicioSubliminal: 1, culpa: 2 },
            },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Contratos, nombres y venganzas
  // -------------------------------------------------------------------------
  {
    id: 'biz-contrato-basura',
    titulo: 'Te faltan tres discos de contrato',
    categoria: 'plata',
    epigrafe: 'No dice en ningún lado que tengan que ser buenos.',
    inspiracion:
      'Lou Reed entregó Metal Machine Music, sesenta y cuatro minutos de ruido puro, en parte para cerrar un contrato. Van Morrison grabó treinta y una canciones absurdas improvisadas en una tarde con el mismo fin. Andrés Calamaro entregó El Salmón: cinco discos y ciento tres canciones de una sentada.',
    texto:
      'Firmaste por seis discos cuando tenías veintitrés y no sabías leer un contrato. Te faltan tres y el sello se niega a soltarte.\n\nTu abogado señala una cosa: el papel dice tres discos de una duración mínima. No dice nada sobre qué tiene que haber adentro.',
    requiere: { flags: ['contratoSello'], stats: { fama: { min: 40 } }, algunaFlag: ['conflictoSello', 'selloMulti'], sinFlags: ['contratoBasura'] },
    peso: 3,
    opciones: [
      {
        id: 'ruido',
        texto: 'Entregar sesenta y cuatro minutos de ruido puro',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Entregás dos caras de acople de guitarra, sin una sola nota tocada por una persona. El sello lo edita sin escucharlo. Vuelve el noventa por ciento de las copias vendidas.\n\nTe liberan del contrato. Veinte años después hay una orquesta europea que lo toca en vivo, en un teatro, en serio, y vos estás sentado en la platea sin entender absolutamente nada.',
            efectos: {
              stats: { credibilidad: 18, fama: -16, inspiracion: 10, talento: 4 },
              dinero: -30000,
              flags: { contratoBasura: 1, duenioDeLoSuyo: 1, obraMaestraTardía: 1 },
              titular: '"Un insulto de una hora": el disco con el que {apodo} se sacó al sello de encima',
            },
          },
          {
            peso: 1,
            texto:
              'Entregás el ruido y el sello, que tiene mejores abogados que vos, lo rechaza por "no constituir una obra musical" y te demanda por incumplimiento. Perdés dos años y una fortuna, y encima tenés que grabar los tres discos igual.',
            efectos: {
              stats: { credibilidad: 8, cordura: -18, inspiracion: -10 },
              dinero: -90000,
              flags: { contratoBasura: 1, conflictoSello: 1 },
            },
          },
        ],
      },
      {
        id: 'ciento-tres',
        texto: 'Entregar ciento tres canciones de una sentada',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Grabás cinco discos en cuatro meses, sin corregir nada, sin sacar nada. Ciento tres temas. Hay veinte que son basura, sesenta que están bien y veintitrés que son lo mejor que hiciste en tu vida, y no hay un solo periodista con tiempo para encontrarlos.\n\nLo destrozan al salir. Diez años después es un disco de culto y hay pibes de veinte años que se saben los ciento tres.',
            efectos: {
              stats: { inspiracion: -30, credibilidad: 14, fama: -8, talento: 8, cordura: -14, adiccion: 10 },
              dinero: 20000,
              publicaDisco: true,
              flags: { contratoBasura: 1, duenioDeLoSuyo: 1, discoDeCulto: 1 },
              titular: '"Ciento tres canciones": nadie sabe qué hacer con el nuevo disco de {apodo}',
            },
          },
          {
            peso: 1,
            texto:
              'Grabás ciento tres temas en cuatro meses y llegás al final sin poder distinguir cuál es cuál. Cumplís el contrato. Después no escribís nada durante cinco años y tenés que aprender de nuevo cómo se hacía.',
            efectos: {
              stats: { inspiracion: -34, cordura: -20, adiccion: 14, credibilidad: 6, fama: -6 },
              dinero: 15000,
              publicaDisco: true,
              flags: { contratoBasura: 1, quedasteMal: 1 },
            },
          },
        ],
      },
      {
        id: 'cumplir',
        texto: 'Cumplir en serio: tres discos buenos y a otra cosa',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Hacés los tres discos como corresponde, a regañadientes, con la profesionalidad de un tipo que cumple una condena.\n\nDos son correctos. El tercero, hecho ya sin ninguna expectativa ni ninguna esperanza de que le importe a nadie, te sale bárbaro. Es la clase de chiste que hace este oficio todo el tiempo.',
            efectos: {
              stats: { talento: 8, credibilidad: 8, fama: 6, inspiracion: -14, cordura: -8 },
              dinero: 60000,
              publicaDisco: true,
              flags: { contratoBasura: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-simbolo',
    titulo: 'Cambiarte el nombre por un símbolo',
    categoria: 'carrera',
    epigrafe: 'Uno que no se pueda pronunciar ni escribir.',
    inspiracion:
      'Prince se cambió el nombre por un símbolo impronunciable en 1993 para pelear con su sello, que era dueño de su nombre artístico. Salía a tocar con la palabra "SLAVE" escrita en la cara. La prensa tuvo que llamarlo "el artista antes conocido como Prince" durante siete años.',
    texto:
      'Descubriste, leyendo un papel que firmaste a los veinte, que el sello es dueño de tu nombre artístico. No de las canciones nada más: del nombre. Si te vas, no te podés llamar como te llamás.\n\nTu abogado dice que hay que negociar diez años. Vos estás mirando un símbolo que dibujaste anoche en una servilleta.',
    requiere: { flags: ['contratoSello'], stats: { fama: { min: 60 } }, sinFlags: ['nombreSimbolo'] },
    peso: 2,
    opciones: [
      {
        id: 'simbolo',
        texto: 'Cambiarte el nombre por el símbolo y salir a tocar con una palabra escrita en la cara',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Anunciás que ya no te llamás como te llamabas y que ahora sos eso, un dibujo que no se puede pronunciar. Salís a tocar con la palabra "ESCLAVO" escrita en la mejilla.\n\nEl mundo entero se ríe de vos durante siete años. Los conductores de televisión hacen el chiste todas las noches. Y a la vez, en silencio, todos los abogados de todos los sellos revisan los contratos que tienen firmados, porque nadie quiere ser el próximo en esa foto.\n\nRecuperás tu nombre. Tardás siete años y te cuesta una década de credibilidad.',
            efectos: {
              stats: { credibilidad: -14, fama: 10, cordura: -12, talento: 6 },
              dinero: -50000,
              flags: { nombreSimbolo: 1, duenioDeLoSuyo: 1, ridiculoPublico: 1 },
              titular: '"El artista antes conocido como {apodo}": el cambio de nombre que nadie entiende',
            },
          },
          {
            peso: 1,
            texto:
              'Hacés el cambio y no te lo banca nadie: ni la radio, ni el público, ni la banda. En dos años pasaste de llenar estadios a tocar en teatros con la mitad vendida.\n\nRecuperás el nombre y no recuperás lo otro. Fue justo, fue valiente y salió carísimo.',
            efectos: {
              stats: { fama: -26, credibilidad: 8, cordura: -16 },
              dinero: -80000,
              flags: { nombreSimbolo: 1, duenioDeLoSuyo: 1 },
            },
          },
        ],
      },
      {
        id: 'negociar',
        texto: 'Negociar diez años como dice el abogado',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Negociás. Diez años de reuniones, de cartas y de cláusulas, con un tipo de sesenta años que cobra por hora y que te cae bien.\n\nGanás la mitad de las cosas. Nadie escribe nada sobre esto porque no hay nada que escribir, y por eso mismo funciona.',
            efectos: {
              stats: { cordura: -8, credibilidad: 6, fama: -4 },
              dinero: -40000,
              flags: { nombreSimbolo: 1, negociador: 1, ordenado: 1 },
            },
          },
        ],
      },
      {
        id: 'regalarlo',
        texto: 'Dejarles el nombre y empezar de cero con otro',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Les regalás el nombre con el que sos famoso y arrancás de nuevo, con otro, a los treinta y ocho años.\n\nPerdés la mitad del público de un golpe. La otra mitad te sigue a cualquier lado y descubrís, con bastante espanto, que esa mitad era la única que te importaba.',
            efectos: {
              stats: { fama: -30, credibilidad: 22, inspiracion: 16, cordura: 8 },
              flags: { nombreSimbolo: 1, duenioDeLoSuyo: 1, segundaCarrera: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-banda-falsa',
    titulo: 'Hay otra banda girando con tu nombre',
    categoria: 'banda',
    epigrafe: 'Mismo nombre, mismo afiche, otras cuatro personas.',
    inspiracion:
      'En 1974, el manager de Fleetwood Mac armó una banda entera con músicos desconocidos y la mandó de gira por Estados Unidos con ese nombre, porque sostenía que el nombre era suyo. La banda verdadera se enteró por los diarios y tuvo que parar dos años por el juicio.',
    texto:
      'Te llama un promotor de otra provincia para agradecerte por el show del sábado. Vos el sábado estabas en tu casa.\n\nHay una banda girando con el nombre de ustedes, con el mismo afiche, con cuatro músicos que nadie conoce. La armó el manager, que sostiene, con papeles en la mano, que el nombre es de él.',
    requiere: { tieneBanda: true, flags: ['tieneManager'], stats: { fama: { min: 45 } }, sinFlags: ['bandaFalsa'] },
    peso: 2,
    opciones: [
      {
        id: 'juicio',
        texto: 'Juicio y freno judicial ya mismo',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Frenan la gira trucha en dos meses y el juicio por el nombre dura dos años, en los que ustedes no pueden usar su propio nombre para tocar.\n\nGanan. Salen del juicio sin manager, sin ahorros y sin un año y medio de carrera. Vuelven a empezar en salas chicas, con todo el mundo diciendo que se habían separado.',
            efectos: {
              stats: { fama: -20, credibilidad: 10, quimica: 12, cordura: -14 },
              dinero: -70000,
              flags: { bandaFalsa: 1, juicioBanda: 1, duenioDeLoSuyo: 1 },
              titular: '"El nombre es nuestro": {banda} le ganó el juicio a su ex manager',
            },
          },
        ],
      },
      {
        id: 'subirse',
        texto: 'Ir a un show de la banda falsa y subirte al escenario',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Compran entradas y se sientan en la sexta fila. A la mitad del tercer tema se suben los cuatro al escenario y siguen ellos, con los instrumentos de los otros, delante de mil doscientas personas que tardan un minuto entero en entender qué están viendo.\n\nEs la mejor noche de la historia de la banda y no cobraron un peso. El video circula durante décadas.',
            efectos: {
              stats: { fama: 24, credibilidad: 22, quimica: 20, cordura: 6 },
              flags: { bandaFalsa: 1, momentoHistorico: 1, showMitico: 1 },
              titular: '"Se subieron a su propio impostor": la noche más rara del rock',
            },
          },
          {
            peso: 1,
            texto:
              'Se suben y se arma una batalla campal arriba del escenario, con instrumentos rotos, seguridad y una denuncia cruzada. Dos de ustedes pasan la noche en una comisaría de provincia.\n\nLa foto es buenísima y el costo legal es un desastre.',
            efectos: {
              stats: { fama: 18, credibilidad: 6, cordura: -12, salud: -8 },
              dinero: -35000,
              flags: { bandaFalsa: 1, causaPenal: 1, manoLarga: 1 },
            },
          },
        ],
      },
      {
        id: 'porcentaje',
        texto: 'Dejarlos girar y quedarte con un porcentaje',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Negociás un porcentaje y firmás. Ellos giran por el interior con tu nombre y vos cobrás sin moverte de tu casa.\n\nEs plata cómoda y es un veneno lento: en cuatro años hay dos generaciones enteras de pueblos que vieron a "la banda" y vieron a otros tipos, y no distinguen, y en el fondo eso te dice algo sobre lo que era la banda que no querés escuchar.',
            efectos: {
              stats: { credibilidad: -20, quimica: -16, fama: 6, cordura: -8 },
              dinero: 80000,
              flags: { bandaFalsa: 1, selloutPublico: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-novia',
    titulo: 'Se fue con tu novia',
    categoria: 'banda',
    epigrafe: 'Y mañana tienen fecha.',
    inspiracion:
      'Johnny Ramone se quedó con la novia de Joey Ramone y después se casó con ella. Los dos siguieron veinte años en la misma banda, viajando en la misma camioneta, sin dirigirse la palabra. Joey escribió "The KKK Took My Baby Away" sobre eso.',
    texto:
      'Te enterás por el plomo, en un pasillo, que hace cuatro meses que tu compañero de banda está con tu novia. Se van a casar.\n\nMañana tienen fecha y pasado empieza una gira de setenta shows. La banda está en el mejor momento de su historia.',
    requiere: { tieneBanda: true, algunaFlag: ['pareja', 'bandaDeAmigos'], stats: { fama: { min: 35 } }, sinFlags: ['traicionBanda'] },
    peso: 3,
    opciones: [
      {
        id: 'quedarse',
        texto: 'Quedarte en la banda y no dirigirle la palabra nunca más',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Hacen veinte años más juntos. Veinte. Mismos micros, mismos camarines, mismos hoteles, cero palabras fuera de lo estrictamente técnico. Cuando hay que decirse algo, se lo dicen al baterista y el baterista lo repite.\n\nEl público no se entera nunca. La banda suena, arriba del escenario, como si se quisieran.\n\nEscribís sobre eso una canción con un título absurdo que es el mejor tema del disco, y él la toca todas las noches, y nunca hablan de eso.',
            efectos: {
              stats: { quimica: -24, cordura: -20, inspiracion: 24, credibilidad: 14, fama: 10 },
              dinero: 60000,
              flags: { traicionBanda: 1, enemigoBanda: 1, temaBomba: 1 },
            },
          },
        ],
      },
      {
        id: 'irse',
        texto: 'Irte de la banda hoy',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Te vas en el mejor momento, sin explicar nada públicamente. La banda sigue con otro y le va bien. A vos, solo, te va peor, pero dormís.\n\nDurante treinta años, en cada entrevista, te preguntan por qué te fuiste y contestás algo sobre diferencias musicales. Nadie te cree y nadie insiste.',
            efectos: {
              stats: { fama: -20, cordura: 10, quimica: -10, inspiracion: 14, credibilidad: 6 },
              disuelveBanda: true,
              flags: { traicionBanda: 1, separacion: 1, solista: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te vas y a los ocho meses la banda se disuelve sin vos, porque resulta que eras vos.\n\nA los dos años, él te llama para pedirte perdón. Le cortás. A los diez, te vuelve a llamar y esa vez lo escuchás hasta el final sin decir nada, y cuando corta, te quedás sentado en la cocina una hora.',
            efectos: {
              stats: { fama: -14, cordura: -6, inspiracion: 18, credibilidad: 10 },
              disuelveBanda: true,
              flags: { traicionBanda: 1, separacion: 1, solista: 1 },
            },
          },
        ],
      },
      {
        id: 'echarlo',
        texto: 'Echarlo vos, delante de todos',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Lo echás en la sala de ensayo, a los gritos, y los otros dos miran el piso y no dicen nada, y ese silencio de ellos te duele más que todo lo demás.\n\nConseguís un reemplazo en dos semanas y la gira sale. Suena bien y no suena igual, y la diferencia la escuchan seiscientas personas en todo el país, y una de ellas sos vos, todas las noches.',
            efectos: {
              stats: { quimica: -18, cordura: -14, fama: -6, talento: 4 },
              bandaSale: 1,
              flags: { traicionBanda: 1, echoAUno: 1, egoLider: 1 },
            },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // El cuerpo
  // -------------------------------------------------------------------------
  {
    id: 'biz-tres-dedos',
    titulo: 'El último día en la fábrica',
    categoria: 'salud',
    epigrafe: 'Renunciaste ayer. Te falta un turno.',
    inspiracion:
      'Tony Iommi perdió las puntas de dos dedos en una prensa el último día que trabajó en la fábrica, a los diecisiete años. Se hizo prótesis derritiendo un envase de detergente, aflojó y bajó la afinación de la guitarra para que no doliera tanto: así sonó el heavy metal.',
    texto:
      'Renunciaste la semana pasada porque la banda por fin tiene fechas. Te queda un turno, el último, y lo vas a hacer porque no vas a dejar de cobrar la quincena.\n\nA las cuatro de la tarde, cansado, en una máquina que conocés de memoria, mirás para otro lado un segundo y medio.',
    requiere: { algunaFlag: ['claseObrera', 'calle'], edadMax: 30, sinFlags: ['cuerpoRoto'] },
    peso: 2,
    opciones: [
      {
        id: 'inventar',
        texto: 'Inventar una manera de tocar con lo que te quedó',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 3,
            texto:
              'Perdés las puntas de dos dedos de la mano que digita. El médico te dice, con buenos modales y con toda la razón estadística del mundo, que se terminó.\n\nEntonces derretís un envase de plástico y te hacés dos dedales. Aflojás las cuerdas para que duela menos, y como quedan flojas, bajás la afinación entera. Y al bajarla, la guitarra suena grave y espesa y como enferma, y esa es la primera vez que alguien escucha eso.\n\nTardás dos años y le cambiás el sonido a un género que todavía no existe.',
            efectos: {
              stats: { talento: -8, inspiracion: 24, credibilidad: 20, salud: -12, cordura: -10 },
              flags: { cuerpoRoto: 1, afinacionGrave: 1, claseObrera: 1 },
              titular: '"Se lastimó en la fábrica y volvió sonando distinto"',
            },
          },
          {
            peso: 1,
            texto:
              'Perdés las puntas de dos dedos. Probás durante cuatro años, con prótesis caseras y con dolor todos los días, y no llegás a recuperar ni la mitad de lo que tenías.\n\nTerminás pasándote al bajo, donde sos apenas correcto, en una banda donde no escribís vos. Cada tanto agarrás una guitarra cuando no hay nadie.',
            efectos: {
              stats: { talento: -20, cordura: -16, credibilidad: 6, inspiracion: 8, salud: -10 },
              flags: { cuerpoRoto: 1, problemaManos: 1 },
            },
          },
        ],
      },
      {
        id: 'dejar',
        texto: 'Aceptar que se terminó y buscar otra cosa',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Dejás de tocar. Te quedás en la fábrica, ahora en la oficina, con una indemnización chica y una mano rara.\n\nLa banda sigue sin vos y no le pasa nada especial: se separan en dos años. Los ves a veces. Nadie menciona el tema.\n\nA los cuarenta y cinco, tu hija encuentra tus cintas viejas y te pregunta quién toca la guitarra ahí.',
            efectos: {
              stats: { talento: -14, fama: -12, cordura: -8, salud: 6, inspiracion: -10 },
              dinero: 8000,
              flags: { cuerpoRoto: 1, retiroForzado: 1 },
            },
          },
        ],
      },
      {
        id: 'no-ir',
        texto: 'No ir a ese último turno',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'No vas. Perdés la quincena y te putean por teléfono. Esa tarde ensayan cuatro horas y sale el primer tema decente que escriben.\n\nNunca vas a saber lo que no te pasó. Nadie sabe nunca eso, y es una lástima, porque es lo único que le daría un poco de perspectiva a cualquiera.',
            efectos: { stats: { inspiracion: 10, quimica: 8, talento: 4 }, dinero: -1500 },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-brazo',
    titulo: 'El accidente',
    categoria: 'salud',
    epigrafe: 'La curva, el auto y una decisión médica en cuarenta minutos.',
    inspiracion:
      'Rick Allen, baterista de Def Leppard, perdió un brazo en un accidente de auto en 1984. Volvió a la banda con una batería electrónica rediseñada para tocar con un brazo y los dos pies, y siguió tocando el resto de su vida. La banda lo esperó tres años.',
    texto:
      'Una curva, un auto y una noche que no te acordás. Te despertás dos días después.\n\nEl médico te explica, con la voz de los médicos que dan malas noticias, que hicieron todo lo posible. Ya no tenés el brazo izquierdo. Tenés treinta y un años, un disco entregado y una gira mundial vendida.',
    requiere: {
      algunaFlag: ['moto', 'baterista', 'rutaNocturna'],
      edadMin: 24,
      edadMax: 50,
      stats: { fama: { min: 35 } },
      sinFlags: ['cuerpoRoto'],
      chance: 0.35,
    },
    peso: 2,
    opciones: [
      {
        id: 'rediseniar',
        texto: 'Rediseñar tu instrumento entero para el cuerpo que te quedó',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 3,
            texto:
              'Le encargás a un técnico un instrumento que no existe: mitad electrónico, mitad acústico, repartido entre un brazo y los dos pies.\n\nTardás tres años. La banda te espera tres años, y eso, en esta industria, no lo hace absolutamente nadie.\n\nVolvés en un festival, y cuando entrás en el primer tema, sesenta y cinco mil personas hacen un ruido que no se parece a un aplauso. Tocás peor que antes durante dos años y después tocás mejor que antes.',
            efectos: {
              stats: { salud: -24, talento: -6, credibilidad: 26, fama: 20, cordura: 10, quimica: 20 },
              dinero: -60000,
              flags: { cuerpoRoto: 1, momentoHistorico: 1, hastaElFinal: 1 },
              titular: '"Volvió": el regreso de {apodo} después del accidente',
            },
          },
          {
            peso: 1,
            texto:
              'Lo intentás durante dos años con una tozudez que asusta a todo el mundo. No llegás. Podés tocar, pero no al nivel al que hay que tocar para sostener lo que ustedes hacían.\n\nLo decidís vos, un martes, sin drama. Te quedás en la banda produciendo y escribiendo, y tocando en tres temas por show.',
            efectos: {
              stats: { salud: -26, talento: -18, credibilidad: 16, cordura: -12, quimica: 14 },
              dinero: -40000,
              flags: { cuerpoRoto: 1, productorDeOtros: 1 },
            },
          },
        ],
      },
      {
        id: 'reemplazo',
        texto: 'Dejar que la banda siga con otro y quedarte a un costado',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Les decís que sigan. Contratan a alguien en seis semanas y la gira sale.\n\nVas a dos shows. En el segundo te quedás en el costado del escenario mirando a un tipo de veinticuatro años tocar tus partes correctamente, y entendés que la parte más difícil de esto no era el brazo.\n\nSeguís cobrando tu porcentaje y no volvés a subirte a un escenario.',
            efectos: {
              stats: { salud: -20, fama: -18, cordura: -22, credibilidad: 6 },
              dinero: 30000,
              flags: { cuerpoRoto: 1, retiroForzado: 1 },
            },
          },
        ],
      },
      {
        id: 'otra-cosa',
        texto: 'Reinventarte del otro lado: componer, producir, dirigir',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Dejás de ser el que toca y te convertís en el que decide. Producís tres discos ajenos en dos años y dos son enormes.\n\nDescubrís que tenías un oído que no habías usado nunca porque estabas ocupado tocando. No hay una sola noche en que no cambiarías todo eso por veinte minutos arriba de un escenario.',
            efectos: {
              stats: { salud: -18, talento: 10, credibilidad: 18, fama: -8, cordura: -6, inspiracion: 12 },
              dinero: 50000,
              flags: { cuerpoRoto: 1, productorDeOtros: 1 },
            },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Manías, plata y creencias
  // -------------------------------------------------------------------------
  {
    id: 'biz-boveda',
    titulo: 'La bóveda',
    categoria: 'carrera',
    epigrafe: 'Grabás cuatro veces más de lo que editás.',
    inspiracion:
      'Prince grababa casi todos los días y guardaba lo inédito en una bóveda climatizada bajo su estudio de Paisley Park. Cuando murió sin testamento, hubo que llamar a un cerrajero. Se calcula que había material para editar un disco por año durante un siglo.',
    texto:
      'Grabás todos los días. Días de gira, días de mudanza, días de velorio. Tenés cuatro veces más material inédito que editado y no parás nunca.\n\nEl que te construyó el estudio te pasa un presupuesto por una cosa nueva: una bóveda climatizada abajo, con puerta de acero y control de humedad, para las cintas.',
    requiere: { discosMin: 2, dineroMin: 80000, stats: { inspiracion: { min: 55 } }, sinFlags: ['boveda'] },
    peso: 2,
    opciones: [
      {
        id: 'construir',
        texto: 'Construirla y no darle la combinación a nadie',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'La construyen en cuatro meses. Bajás vos solo con las cintas, etiquetadas con tu letra, y cerrás la puerta.\n\nDe ahí en más, cada vez que un periodista te pregunta qué hay ahí abajo, sonreís y no contestás, y eso vale más que cualquier disco que puedas editar. Nadie sabe qué tenés. Ni siquiera vos, del todo.\n\nTe preguntan veinte veces qué se hace con eso el día que no estés. Contestás siempre lo mismo: nada.',
            efectos: {
              stats: { inspiracion: 14, credibilidad: 16, fama: 6, cordura: -6 },
              dinero: -80000,
              flags: { boveda: 1, duenioDeLoSuyo: 1, estudioPropio: 1 },
            },
          },
        ],
      },
      {
        id: 'editar',
        texto: 'Nada de bóveda: editar todo, aunque sea mucho',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Sacás tres discos por año durante cinco años. La prensa no da abasto y te acusa de inflación. El público se cansa a la mitad.\n\nY sin embargo, en esa avalancha hay cuatro discos que están entre lo mejor que hiciste, y hay una generación de fanáticos rarísimos que los conoce todos y que se pelea en internet durante décadas sobre cuál es cuál.',
            efectos: {
              stats: { fama: -10, credibilidad: 12, inspiracion: -16, talento: 10 },
              dinero: 60000,
              publicaDisco: true,
              flags: { discoDeCulto: 1, autogestion: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Editás todo y se te devalúa la firma. En cuatro años, un disco tuyo nuevo dejó de ser una noticia y pasó a ser una cosa que aparece.\n\nCuando finalmente sacás uno importante, no lo escucha nadie, porque le enseñaste al mundo a no prestarte atención.',
            efectos: {
              stats: { fama: -22, credibilidad: -12, inspiracion: -18 },
              dinero: 30000,
              publicaDisco: true,
            },
          },
        ],
      },
      {
        id: 'quemar',
        texto: 'Quemar todo lo que no vas a editar',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Hacés un fuego en el fondo de tu casa con cuatrocientas horas de cintas. Tardás una noche entera y te quedás mirándolo hasta que amanece.\n\nA la mañana siguiente escribís tres temas. Lo hiciste por eso y funcionó, y aun así, cada tanto, durante el resto de tu vida, te vas a acordar de una versión de un tema que estaba ahí adentro y que no existe en ningún otro lado.',
            efectos: {
              stats: { inspiracion: 22, cordura: -14, credibilidad: 10, talento: 4 },
              flags: { quemoLasCintas: 1 },
              titular: '"Quemé lo que no servía": la noche en que {apodo} incendió su archivo',
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-otro-hemisferio',
    titulo: 'Sos enorme en un país que no conocés',
    categoria: 'plata',
    epigrafe: 'Te lo dice un turista en la puerta de una obra.',
    inspiracion:
      'Sixto Rodríguez grabó dos discos que no vendió nadie y trabajó treinta años en demoliciones en Detroit, sin saber que en Sudáfrica era más famoso que los Rolling Stones. Allá lo creían muerto: la versión más difundida decía que se había prendido fuego arriba de un escenario.',
    texto:
      'Estás cargando escombros en una obra, con las manos hechas mierda, a los cuarenta y pico. Hace años que no grabás.\n\nUn turista te para en la vereda y te dice tu nombre. Después te dice que del otro lado del mundo tus dos discos son la música con la que una generación entera se peleó con su gobierno, y que allá te creen muerto, y que la versión más contada es que te prendiste fuego arriba de un escenario.',
    requiere: { stats: { fama: { max: 45 } }, discosMin: 1, edadMin: 38, sinFlags: ['otroHemisferio'] },
    peso: 3,
    opciones: [
      {
        id: 'ir',
        texto: 'Ir a tocar allá aunque tengas que pedir prestado el pasaje',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 3,
            texto:
              'Pedís prestado el pasaje. Llegás a un país que no conocés, con tus hijas, convencido de que va a haber cincuenta personas.\n\nHay un estadio. Cantan tus letras palabra por palabra, en otro idioma que no es el suyo, gente que nació después de que grabaste eso. Tardás seis minutos en poder empezar el primer tema.\n\nVolvés a tu casa de siempre. Seguís yendo a la obra un tiempo más, porque te gusta.',
            efectos: {
              stats: { fama: 24, credibilidad: 30, cordura: 20, inspiracion: 18, quimica: 10 },
              dinero: 60000,
              flags: { otroHemisferio: 1, reconocimientoExterior: 1, mitoDelRegreso: 1 },
              titular: '"Lo creían muerto y estaba trabajando en una obra": el regreso de {apodo}',
            },
          },
          {
            peso: 1,
            texto:
              'Vas y es verdad todo, y también es verdad que treinta años no vuelven. Tocás para diez mil personas emocionadas y volvés con la sensación exacta de haber ido al velorio de un tipo que se te parecía.\n\nGrabás un disco nuevo. Lo escuchan los mismos diez mil y nadie más.',
            efectos: {
              stats: { fama: 12, credibilidad: 20, cordura: -8, inspiracion: 14 },
              dinero: 25000,
              publicaDisco: true,
              flags: { otroHemisferio: 1, reconocimientoExterior: 1 },
            },
          },
        ],
      },
      {
        id: 'abogado',
        texto: 'Poner un abogado y reclamar treinta años de regalías',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Contratás un abogado con lo poco que tenés. Aparecen sellos intermediarios en cuatro países, contratos firmados por gente que murió y una cifra de discos vendidos que te hace sentar en una silla.\n\nSeis años después cobrás una parte. Alcanza para comprar la casa en la que alquilabas y para que tus hijas estudien. El resto se lo quedó gente cuyo nombre nunca vas a saber.',
            efectos: {
              stats: { credibilidad: 10, cordura: -12, fama: 6 },
              dinero: 180000,
              flags: { otroHemisferio: 1, perdioDerechos: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'El juicio dura ocho años, se pierde en tribunales de tres países y no cobrás un peso. Los discos siguen vendiéndose allá.\n\nLo único que sacás en limpio es una carpeta enorme con la prueba documental de que fuiste importante en algún lado.',
            efectos: {
              stats: { cordura: -16, credibilidad: 8 },
              dinero: -20000,
              flags: { otroHemisferio: 1, perdioDerechos: 1 },
            },
          },
        ],
      },
      {
        id: 'no-creer',
        texto: 'No creerle y volver a cargar escombros',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Le decís que se debe estar confundiendo y volvés adentro. Trabajás cuatro horas más.\n\nEsa noche, sin decírselo a nadie, ponés tu propio disco por primera vez en quince años y lo escuchás entero, sentado en la cocina, y te parece que está bastante bien.',
            efectos: {
              stats: { cordura: 8, inspiracion: 14, credibilidad: 6 },
              flags: { otroHemisferio: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-regalar',
    titulo: 'Devolver la plata',
    categoria: 'plata',
    epigrafe: 'Llamaste a tu contador para que deje de mandarte cheques.',
    inspiracion:
      'Peter Green, de Fleetwood Mac, empezó a regalar su parte de las regalías y llegó a amenazar a su contador para que dejara de mandarle cheques. Terminó internado y después trabajando de sepulturero. Volvió a tocar veinte años más tarde.',
    texto:
      'Hace tres meses que no podés dormir por la misma idea: que la plata que entra por tus canciones es demasiada y que hay algo profundamente podrido en el hecho de que a vos te lleguen esos números por algo que hiciste en una tarde.\n\nEsta mañana llamaste a tu contador para pedirle que deje de mandarte cheques. Te dijo que eso no se puede hacer. Le dijiste que sí se puede.',
    requiere: { dineroMin: 120000, stats: { cordura: { max: 55 } }, edadMin: 26, sinFlags: ['regaloTodo'] },
    peso: 2,
    opciones: [
      {
        id: 'todo',
        texto: 'Regalar todo, hasta el último peso',
        riesgo: 'letal',
        resultados: [
          {
            peso: 2,
            texto:
              'Firmás la cesión de tus derechos y repartís lo líquido entre tres organizaciones y catorce personas.\n\nDurante unos meses te sentís liviano de una manera que no vas a poder explicarle nunca a nadie. Después empieza lo otro: la casa, los impuestos, el teléfono cortado, el contador que no te atiende, la idea de ir a su oficina a exigirle.\n\nTerminás internado seis meses. Ahí adentro, un enfermero de cuarenta años te pregunta si sos vos y le decís que no.',
            efectos: {
              stats: { cordura: -26, salud: -10, credibilidad: 16, fama: -20, adiccion: -10 },
              dinero: -400000,
              flags: { regaloTodo: 1, brote: 1, intervencion: 1 },
              titular: '"Regaló todo": la decisión de {apodo} que nadie en la industria entiende',
            },
          },
          {
            peso: 2,
            texto:
              'Regalás todo y quedás en cero, y contra todo pronóstico, funciona.\n\nTe conseguís un trabajo de verdad: en un cementerio, de sepulturero, seis horas por día. Volvés a dormir. Nadie te reconoce ahí y las tres personas que sí te reconocen no dicen nada, que es la mejor forma de cortesía que existe.\n\nNo tocás durante años y no lo extrañás tanto como todos suponen.',
            efectos: {
              stats: { cordura: 18, salud: 10, adiccion: -24, fama: -30, credibilidad: 20, inspiracion: -14 },
              dinero: -400000,
              flags: { regaloTodo: 1, retirado: 1, sobrio: 1 },
            },
          },
        ],
      },
      {
        id: 'mitad',
        texto: 'Ceder la mitad y armar algo que funcione',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Armás una fundación aburridísima con un directorio, una auditoría y una contadora que te dice que no a casi todo.\n\nEn veinte años financia doscientas becas de música para pibes que no tienen instrumento. Ninguno de esos pibes sabe tu nombre porque pediste que no figure.\n\nY vos te quedaste con lo suficiente para no volverte loco, que es la parte que la mitología del rock jamás va a considerar interesante.',
            efectos: {
              stats: { cordura: 16, credibilidad: 18, fama: 4, quimica: 8 },
              dinero: -180000,
              flags: { tipoDecente: 1, ordenado: 1 },
            },
          },
        ],
      },
      {
        id: 'quedartela',
        texto: 'Quedártela y aguantarte la culpa',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Te la quedás. Comprás una casa, un auto y dos instrumentos que no sabés tocar.\n\nLa culpa no se va: se convierte en otra cosa, en un ruido de fondo que aparece cada vez que ves a un músico de tu edad tocando en un bar por la cena. Le ponés plata a mucha gente en silencio durante cuarenta años y no se lo contás nunca a nadie, ni siquiera para quedar bien.',
            efectos: {
              stats: { cordura: -10, credibilidad: 6, inspiracion: 8 },
              dinero: -30000,
              flags: { culpa: 1, tipoDecente: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-anillos',
    titulo: 'La bola de fuego desde la ventanilla',
    categoria: 'mito',
    epigrafe: 'Motor derecho, cuarenta mil pies, cinco de la mañana.',
    inspiracion:
      'Little Richard vio, durante un vuelo en 1957, lo que describió como una bola de fuego (probablemente el Sputnik) y lo tomó como una señal: bajó del avión, tiró sus anillos al puerto de Sídney, dejó el rock y se metió en un seminario. Volvió años después, se fue otra vez, y así toda la vida.',
    texto:
      'Cinco de la mañana, vuelo de gira, todos dormidos. Mirás por la ventanilla y hay una cosa enorme y anaranjada cruzando el cielo a una velocidad que no le corresponde a nada que vos conozcas.\n\nDura once segundos. Nadie más la ve. Cuando aterrizan, tenés las manos frías y una certeza que no te cabe en el cuerpo.',
    requiere: { stats: { fama: { min: 45 } }, edadMin: 22, sinFlags: ['iluminado', 'guru'] },
    peso: 2,
    opciones: [
      {
        id: 'anillos',
        texto: 'Tirar los anillos al agua y dejar todo hoy',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Desde el taxi vas derecho al puerto, te sacás los cuatro anillos y los tirás al agua delante de tres personas de tu equipo que no saben qué hacer con las manos.\n\nCancelás la gira, devolvés el adelanto y te metés en un seminario. Durante años, cuando alguien te pregunta por tu música, contestás con una cita.\n\nVolvés. Siempre vuelven todos. Y te vas otra vez, y volvés, y te vas, y así toda la vida, y el mundo nunca te va a perdonar ninguna de las dos cosas.',
            efectos: {
              stats: { fama: -24, credibilidad: 14, cordura: 16, adiccion: -26, inspiracion: -10 },
              dinero: -70000,
              flags: { iluminado: 1, retiroEspiritual: 1, sobrio: 1 },
              titular: '"Vi algo en el cielo": {apodo} deja la música y se mete en un seminario',
            },
          },
          {
            peso: 1,
            texto:
              'Tirás los anillos, cancelás todo y a los cuatro meses estás de vuelta en un escenario, con el mismo repertorio y con una vergüenza nueva.\n\nNadie te lo dice en la cara. Todos lo anotan. En esta industria, la única cosa que no se perdona es haber intentado ser mejor persona en público y no haber podido.',
            efectos: {
              stats: { fama: -10, credibilidad: -14, cordura: -8, adiccion: 8 },
              dinero: -40000,
              flags: { ridiculoPublico: 1 },
            },
          },
        ],
      },
      {
        id: 'cancion',
        texto: 'Convertirlo en una canción y no cambiar nada más',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Escribís sobre eso un tema de cinco minutos que no explica nada y que la gente escucha durante cincuenta años sin saber que hablaba de una cosa que viste por una ventanilla.\n\nEs una de las tres mejores que hiciste. En las entrevistas contás que es sobre una separación.',
            efectos: {
              stats: { inspiracion: 26, credibilidad: 14, talento: 6, cordura: 6 },
              flags: { temaBomba: 1, anecdotaRuta: 1 },
            },
          },
        ],
      },
      {
        id: 'nada',
        texto: 'Buscarle una explicación y olvidarte',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'A la semana leés en un diario que esa madrugada pasó un satélite sobre esa zona y te quedás tranquilo.\n\nY sin embargo, durante el resto de tu vida, cada vez que estás muy mal a las cinco de la mañana, te acordás de los once segundos y no de la explicación.',
            efectos: { stats: { cordura: 6, inspiracion: 8 } },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-cenizas',
    titulo: 'Las cenizas',
    categoria: 'mito',
    epigrafe: 'Están arriba de la mesa, en una caja, hace tres semanas.',
    inspiracion:
      'Keith Richards contó en una entrevista que mezcló las cenizas de su padre con cocaína y las aspiró; después dijo que era un chiste, y después no lo desmintió más. Lemmy pidió que repartieran las suyas en urnas con forma de bala entre sus amigos. Las de Ronnie Van Zant terminaron en un juicio.',
    texto:
      'Se murió tu viejo, que nunca entendió del todo a qué te dedicabas y que en los últimos diez años se había vuelto tu mejor público.\n\nLa caja está arriba de la mesa hace tres semanas. Nadie de tu familia quiere decidir nada. En dos días te espera un periodista para una nota larga.',
    requiere: { edadMin: 34, stats: { fama: { min: 40 } }, sinFlags: ['cenizas'] },
    peso: 2,
    opciones: [
      {
        id: 'anecdota',
        texto: 'Contar en la nota una barbaridad sobre esas cenizas',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Le decís al periodista, con total naturalidad, que mezclaste una parte con lo que tenías a mano y te lo aspiraste, porque tu viejo no hubiera querido que se desperdiciara.\n\nSale en tapa en cuarenta países. A los tres días decís que era un chiste. A los treinta años seguís sin desmentirlo del todo, porque descubriste que la frase te trajo más gente a los shows que cualquier disco.\n\nTu hermana no te habla por dos años.',
            efectos: {
              stats: { fama: 26, credibilidad: 8, cordura: -14, quimica: -8 },
              flags: { cenizas: 1, personajePublico: 1, peleaFamiliar: 1, leyendaAsquerosa: 1 },
              titular: '"Me lo tomé con lo que tenía a mano": la frase de {apodo} sobre las cenizas de su padre',
            },
          },
          {
            peso: 1,
            texto:
              'Lo decís y no sale bien. La frase circula sin el tono, sin la cara que pusiste y sin los treinta segundos anteriores en los que se te quebró la voz hablando de él.\n\nDos programas te tratan de degenerado durante una semana. Tu familia lee eso. Es la única cosa de tu carrera pública que te gustaría poder borrar.',
            efectos: {
              stats: { fama: 12, credibilidad: -18, cordura: -22 },
              flags: { cenizas: 1, peleaFamiliar: 1, arrepentimiento: 1 },
            },
          },
        ],
      },
      {
        id: 'balas',
        texto: 'Repartirlas entre sus amigos en urnas con forma de bala',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Encargás doce urnas de metal con forma de bala y se las das en mano a los doce tipos con los que tu viejo tomaba los sábados.\n\nDe los doce, tres lloran, ocho hacen chistes y uno la guarda en la guantera de su camioneta durante veinte años y les cuenta a todos los que se suben de quién es.\n\nEs la mejor idea que tuviste en la vida y no se te ocurrió a vos: estaba escrita en un papel, en el bolsillo del saco que tenía puesto.',
            efectos: {
              stats: { cordura: 16, quimica: 10, inspiracion: 12, credibilidad: 8 },
              dinero: -6000,
              flags: { cenizas: 1, tipoDecente: 1 },
            },
          },
        ],
      },
      {
        id: 'callarse',
        texto: 'Tirarlas donde él quería y no contárselo a nadie nunca',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Manejás cuatro horas hasta un lugar del que él hablaba siempre y que resulta ser bastante feo. Lo hacés solo, a las siete de la mañana, y te volvés.\n\nEn la nota, el periodista te pregunta por él. Decís tres frases correctas y pasás a otra cosa.\n\nHay como catorce cosas de tu vida que valen la pena y esta es la única que no le contaste nunca a nadie.',
            efectos: {
              stats: { cordura: 18, inspiracion: 16, fama: -2 },
              flags: { cenizas: 1, integro: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-enchufar',
    titulo: 'Enchufar la guitarra',
    categoria: 'carrera',
    epigrafe: 'Este festival es acústico. Vos trajiste amplificadores.',
    inspiracion:
      'Cuando Bob Dylan salió con banda eléctrica al festival folk de Newport en 1965, el público puritano lo abucheó. Un año después, en Manchester, alguien le gritó "Judas" desde la platea; Dylan contestó "no te creo, sos un mentiroso" y le dijo a la banda que tocara más fuerte que nunca.',
    texto:
      'Te invitaron al festival de la escena que te crió: la escena pura, la escena que odia el volumen y la industria y las modas.\n\nEn el camión hay tres amplificadores y una banda eléctrica esperando. Sabés perfectamente lo que va a pasar si los enchufás y sabés perfectamente que la música que tenés adentro ahora es esa.',
    requiere: { algunaFlag: ['escenaAmiga', 'indie', 'punk', 'localista'], stats: { credibilidad: { min: 45 } }, sinFlags: ['enchufo'] },
    peso: 3,
    opciones: [
      {
        id: 'enchufar',
        texto: 'Enchufar todo y tocar más fuerte de lo necesario',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 3,
            texto:
              'Enchufás. A los cuarenta segundos del primer tema, la mitad del campo está abucheando y hay dos tipos en la primera fila haciéndote un gesto de traición con las manos.\n\nAlguien te grita una sola palabra que se escucha en todo el predio. Te acercás al micrófono, decís que no le creés, que es un mentiroso, y te das vuelta y le decís a la banda que toque más fuerte.\n\nEsos ocho segundos se estudian sesenta años después. Perdiste a tu escena y ganaste el resto del mundo.',
            efectos: {
              stats: { credibilidad: 24, fama: 24, inspiracion: 18, quimica: 10, cordura: -12 },
              dinero: 15000,
              flags: { enchufo: 1, momentoHistorico: 1, enemigoPrensa: 1, showMitico: 1 },
              titular: '"Traidor": el festival que echó a {apodo} y el gesto que quedó para siempre',
            },
          },
          {
            peso: 1,
            texto:
              'Enchufás y no funciona: el sonido es un desastre, se corta la luz dos veces y el abucheo termina siendo justo. Te bajás en el cuarto tema.\n\nPerdiste a tu escena por un show malo. Es la peor combinación posible y tardás seis años en recuperarte.',
            efectos: {
              stats: { credibilidad: -20, fama: -8, cordura: -16, quimica: -8 },
              flags: { enchufo: 1, malaExperiencia: 1 },
            },
          },
        ],
      },
      {
        id: 'acustico',
        texto: 'Dejar los amplificadores en el camión y hacer lo que esperan',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Salís solo, con una guitarra criolla, y hacés cuarenta minutos impecables. Te aplauden de pie. Es de los mejores shows que diste en tu vida y te vas con un vacío en el estómago que no se te va en tres semanas.\n\nA los dos meses grabás el disco eléctrico igual, sin público delante, y sale peor de lo que hubiera salido esa noche.',
            efectos: {
              stats: { credibilidad: 14, fama: 4, inspiracion: -10, cordura: -8, talento: 6 },
              dinero: 8000,
              flags: { enchufo: 1, escenaAmiga: 1 },
            },
          },
        ],
      },
      {
        id: 'mitad',
        texto: 'Arrancar acústico y enchufar en la segunda mitad',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Los tenés veinte minutos comiendo de tu mano y después entra la banda. Se va un tercio del campo y se queda el resto, y los que se quedan terminan saltando.\n\nNo hay foto histórica ni frase para el bronce. Hiciste la transición más difícil de esta profesión sin romper nada, y por eso nadie va a escribir un libro sobre vos.',
            efectos: {
              stats: { credibilidad: 12, fama: 14, inspiracion: 12, talento: 8 },
              dinero: 12000,
              flags: { enchufo: 1, negociador: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Arrancás acústico y cuando entra la banda ya se fue la mitad y la otra mitad está incómoda. Quedás en el peor lugar posible: demasiado eléctrico para ellos y demasiado tibio para vos.',
            efectos: {
              stats: { credibilidad: -10, fama: 4, cordura: -8 },
              dinero: 10000,
              flags: { enchufo: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'biz-anuncio-escenario',
    titulo: 'Matar al personaje en vivo',
    categoria: 'banda',
    epigrafe: 'Última fecha de la gira. La banda no sabe nada.',
    inspiracion:
      'El 3 de julio de 1973, David Bowie anunció desde el escenario del Hammersmith Odeon que ese era "el último show que vamos a hacer", matando a Ziggy Stardust en vivo. Su banda, los Spiders from Mars, se enteró en ese momento, delante de todo el público.',
    texto:
      'Última fecha de la gira. Hace dos años que sos un personaje que inventaste vos y que ahora te maneja a vos: la ropa, la voz, la forma de contestar las preguntas.\n\nDecidiste matarlo esta noche, en vivo, antes del último tema. No se lo dijiste a nadie. Los músicos, que dejaron sus bandas por esto y que tienen alquileres que pagar, están afinando en el costado del escenario.',
    requiere: { tieneBanda: true, stats: { fama: { min: 62 } }, edadMin: 24, sinFlags: ['matoAlPersonaje'] },
    peso: 2,
    opciones: [
      {
        id: 'anunciarlo',
        texto: 'Anunciarlo ahí, sin avisarles',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Antes del último tema decís que este no es solamente el último show de la gira: es el último show que vamos a hacer.\n\nOcho mil personas gritan. Atrás tuyo, el baterista deja las baquetas sobre el redoblante y se queda mirando un punto fijo, y el bajista pregunta al aire, con el micrófono abierto, qué acaba de decir.\n\nEs la escena más famosa de tu carrera. Ninguno de esos tres músicos te dirige la palabra nunca más, y los tres tenían razón.',
            efectos: {
              stats: { fama: 26, credibilidad: 20, quimica: -34, cordura: -10 },
              disuelveBanda: true,
              flags: { matoAlPersonaje: 1, separacion: 1, momentoHistorico: 1, egoLider: 1 },
              titular: '"El último show que vamos a hacer": {apodo} mató a su personaje en vivo',
            },
          },
        ],
      },
      {
        id: 'avisar',
        texto: 'Juntarlos en el camarín y decírselo antes',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Los juntás una hora antes y se lo decís mirándolos a la cara. Se pudre todo durante veinte minutos, hay dos que te putean y uno que se pone a llorar, y después el baterista dice que salgan a hacer el mejor show de la gira.\n\nLo hacen. El anuncio del escenario sale igual y sale mejor, porque atrás tuyo hay tres tipos que sabían.\n\nDe los tres, dos siguen tocando con vos veinte años después.',
            efectos: {
              stats: { fama: 20, credibilidad: 16, quimica: 16, cordura: 8 },
              disuelveBanda: true,
              flags: { matoAlPersonaje: 1, separacion: 1, despedidaDigna: 1 },
              titular: '"Se terminó el personaje": el anuncio de {apodo} en la última fecha',
            },
          },
        ],
      },
      {
        id: 'seguir',
        texto: 'No matarlo. Es lo que la gente viene a ver',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Hacés el show y no decís nada, y a la semana el sello anuncia otra gira del personaje, y decís que sí.\n\nTres años más de traje y de voz impostada. Ganás una fortuna. Un día, en un aeropuerto, alguien te llama por el nombre del personaje y tardás dos segundos de más en darte cuenta de que no es el tuyo, y esos dos segundos te asustan como no te asustó nada en la vida.',
            efectos: {
              stats: { fama: 18, cordura: -22, credibilidad: -10, inspiracion: -12 },
              dinero: 150000,
              flags: { matoAlPersonaje: 1, personajePublico: 1, aislado: 1 },
            },
          },
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Guion (los encola el motor)
  // -------------------------------------------------------------------------
  {
    id: 'biz-acv',
    titulo: 'El hormigueo en la mano',
    categoria: 'salud',
    guion: true,
    epigrafe: 'Prueba de sonido. Se te duerme la mano izquierda.',
    inspiracion:
      'Gustavo Cerati sufrió un ACV al bajar del escenario en Caracas, en 2010, y estuvo cuatro años en coma. En los días previos había tenido síntomas y había seguido adelante con la gira.',
    texto:
      'En la prueba de sonido se te durmió la mano izquierda durante dos minutos largos y se te trabó una palabra al hablar. Ya te había pasado el martes.\n\nEl médico del estadio te toma la presión, se queda callado más tiempo del que te gustaría y te dice que tenés que hacerte estudios hoy, no mañana. Hay diecisiete mil entradas vendidas y tres fechas más en el país.',
    opciones: [
      {
        id: 'cancelar',
        texto: 'Cancelar todo e internarte hoy',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Suspendés el show con la gente ya adentro del estadio. Sale un comunicado que nadie cree y te internan esa noche.\n\nTenías la carótida obstruida. Te operan a los cuatro días. El médico te dice, sin dramatismo, que llegaste con horas.\n\nVolvés a tocar en un año, con una dieta espantosa y sin la mitad de las cosas que te gustaban. Estás vivo, aburrido y componiendo mejor que nunca.',
            efectos: {
              stats: { salud: -14, cordura: 14, fama: -12, adiccion: -22, inspiracion: 16 },
              dinero: -120000,
              flags: { enfermo: 1, eligioVivir: 1, sobrio: 1, estable: 1 },
              titular: '"Suspendido por razones de salud": {apodo} internado de urgencia',
            },
          },
        ],
      },
      {
        id: 'tocar',
        texto: 'Tocar igual. Son diecisiete mil personas',
        riesgo: 'letal',
        resultados: [
          {
            peso: 5,
            texto:
              'Tocás. El show sale bien, ni el mejor ni el peor de la gira, y al bajar te tenés que agarrar del pasamanos porque el escalón no está donde vos lo veías.\n\nEsa noche te internan igual, y te operan, y zafás por muy poco. Nunca vas a poder explicar por qué era tan importante ese show.',
            efectos: {
              stats: { salud: -26, cordura: -14, fama: 8, adiccion: -12 },
              dinero: 60000,
              flags: { enfermo: 1, casiMuerte: 1, sustoGrande: 1 },
            },
          },
          {
            peso: 3,
            texto: 'Tocás. Saludás. Bajás los seis escalones del costado del escenario.',
            efectos: { final: 'el-coma' },
          },
        ],
      },
      {
        id: 'sentado',
        texto: 'Hacer un show corto, sentado, y cancelar el resto de la gira',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 5,
            texto:
              'Salís, les explicás a las diecisiete mil personas que no estás bien y que igual querés tocar un rato, y hacés cincuenta minutos sentado en un banco.\n\nEs uno de los shows más raros y más queridos de tu carrera. Al bajar te subís a una ambulancia que ya estaba en la puerta porque tu tour manager la había llamado tres horas antes sin decirte nada.',
            efectos: {
              stats: { salud: -18, credibilidad: 22, fama: 10, cordura: 6, adiccion: -16 },
              dinero: -40000,
              flags: { enfermo: 1, eligioVivir: 1, adiosPublico: 1 },
              titular: '"Tocó sentado y se fue en ambulancia": la noche que no se olvida',
            },
          },
          {
            peso: 1,
            texto: 'Salís, hacés tres temas sentado y en el cuarto se te apaga la mitad del cuerpo delante de todos.',
            efectos: { final: 'el-coma' },
          },
        ],
      },
    ],
  },
]
