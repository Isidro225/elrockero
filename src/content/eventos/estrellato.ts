import type { Evento } from '../../engine/types'

// Estrellato y decadencia: lo que pasa cuando ya llegaste y hay que sostenerlo.

export const EVENTOS_ESTRELLATO: Evento[] = [
  {
    id: 'estr-disco-doble',
    titulo: 'El disco imposible',
    categoria: 'carrera',
    epigrafe: 'Cuarenta y dos temas, una orquesta y un coro de niños.',
    texto:
      'Tenés la plata y el poder para hacer el disco que se te cante. Lo que se te canta es un doble conceptual con orquesta sobre la caída de un imperio imaginario.',
    requiere: { stats: { fama: { min: 60 }, inspiracion: { min: 55 } }, discosMin: 2, sinFlags: ['discoImposible'] },
    peso: 4,
    opciones: [
      {
        id: 'hacerlo',
        texto: 'Hacerlo entero, sin que nadie te frene',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Sale un disco monstruoso que la prensa destroza y que veinte años después se considera adelantado a su época. Las dos cosas son ciertas al mismo tiempo.',
            efectos: {
              stats: { credibilidad: 20, talento: 12, fama: -14, inspiracion: -16 },
              dinero: -40000,
              flags: { discoImposible: 1, obraMaestraTardía: 1 },
              publicaDisco: true,
            },
          },
          {
            peso: 1,
            texto:
              'Sale un disco monstruoso y la gente lo entiende de entrada. Es lo mejor que hiciste y todo el mundo lo sabe al mismo tiempo que vos.',
            efectos: {
              stats: { credibilidad: 26, talento: 14, fama: 18 },
              dinero: -20000,
              flags: { discoImposible: 1, obraMaestra: 1 },
              publicaDisco: true,
              titular: '"La obra de su vida": la crítica se rinde ante el nuevo disco de {banda}',
            },
          },
        ],
      },
      {
        id: 'recortar',
        texto: 'Recortarlo a un disco simple de diez temas',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Queda ajustado, redondo y vendible. Guardás las otras treinta canciones en una caja. Vas a pensar en esa caja toda tu vida.',
            efectos: {
              stats: { fama: 14, talento: 8, inspiracion: -8, credibilidad: 4 },
              dinero: -8000,
              publicaDisco: true,
              flags: { discoImposible: 1, cajaGuardada: 1 },
            },
          },
        ],
      },
      {
        id: 'guardarlo',
        texto: 'Guardarlo entero y no editarlo nunca',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Lo terminás y lo guardás. Durante décadas va a ser el disco perdido más famoso del país. Circulan copias truchas. Nadie lo escuchó y todos opinan.',
            efectos: {
              stats: { credibilidad: 18, cordura: -10, fama: 6, inspiracion: -10 },
              dinero: -25000,
              flags: { discoImposible: 1, discoPerdido: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-estadio',
    titulo: 'El estadio',
    categoria: 'carrera',
    texto:
      'Les ofrecen el estadio más grande del país. Nadie de su generación lo llenó. Si no se llena, va a ser la foto que ilustre su caída durante veinte años.',
    requiere: { stats: { fama: { min: 68 } }, sinFlags: ['estadio'] },
    peso: 5,
    opciones: [
      {
        id: 'aceptar',
        texto: 'Aceptar una fecha',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 3,
            texto:
              'Se llena. Cincuenta mil personas cantando algo que escribiste en una pieza de dos por tres. Hay un momento, en el tercer tema, en que tenés que darte vuelta para que no te vean la cara.',
            efectos: {
              stats: { fama: 26, credibilidad: 10, quimica: 12, cordura: 8 },
              dinero: 120000,
              flags: { estadio: 1, llenoEstadio: 1 },
              titular: '"{banda} llenó el estadio: la noche más grande del rock local"',
            },
          },
          {
            peso: 1,
            texto:
              'Se vende el sesenta por ciento. Las fotos aéreas del sector vacío salen en todos lados. El show fue bueno y nadie va a hablar del show.',
            efectos: {
              stats: { fama: -14, credibilidad: -10, cordura: -14, quimica: -8 },
              dinero: 40000,
              flags: { estadio: 1, estadioVacio: 1 },
              titular: '"Los huecos en la popular: la noche que {banda} no pudo llenar"',
            },
          },
        ],
      },
      {
        id: 'dos-fechas',
        texto: 'Pedir dos fechas. Confianza total',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Agotan las dos en cuatro horas y agregan una tercera. Se convierte en la referencia con la que se van a medir todas las bandas del país durante una década.',
            efectos: {
              stats: { fama: 34, credibilidad: 14, quimica: 10 },
              dinero: 300000,
              flags: { estadio: 1, llenoEstadio: 1, records: 1 },
              titular: '"Tres estadios agotados: {banda} rompió todos los récords"',
            },
          },
          {
            peso: 2,
            texto:
              'La primera se llena, la segunda queda por la mitad. Ganan mucha plata y pierden el aura de invencibles en la misma semana.',
            efectos: {
              stats: { fama: 8, credibilidad: -8, cordura: -10 },
              dinero: 150000,
              flags: { estadio: 1 },
            },
          },
        ],
      },
      {
        id: 'salas',
        texto: 'Rechazarlo y hacer diez noches en un teatro',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Diez noches agotadas en un teatro hermoso, con sonido perfecto y a tres metros de la gente. Menos plata, menos foto, mejores shows.',
            efectos: {
              stats: { credibilidad: 20, quimica: 12, fama: 6, talento: 6 },
              dinero: 70000,
              flags: { teatroLargo: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-separacion',
    titulo: 'La reunión donde se dice todo',
    categoria: 'banda',
    epigrafe: 'Nadie se sienta. Es una reunión de pie.',
    texto:
      'Después de doce años, alguien dice en voz alta lo que todos venían pensando. Que ya no se soportan. Que hace tres discos que no se divierten.',
    requiere: { tieneBanda: true, stats: { quimica: { max: 32 } }, discosMin: 2, sinFlags: ['separacion'] },
    peso: 5,
    opciones: [
      {
        id: 'separar',
        texto: 'Separarse ahora, arriba, sin arrastrarlo',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Anuncian el fin con una gira de despedida. Las últimas veinte noches son las mejores en años, porque ya nadie tiene que fingir nada.',
            efectos: {
              stats: { fama: 16, credibilidad: 16, cordura: -8, quimica: 10 },
              dinero: 90000,
              disuelveBanda: true,
              flags: { separacion: 1, despedidaDigna: 1 },
              titular: '"Se separa {banda}: el final de una era"',
            },
          },
        ],
      },
      {
        id: 'seguir',
        texto: 'Seguir. Es un trabajo, y los trabajos no se disfrutan',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Siguen ocho años más viajando en camionetas separadas y sin cruzar palabra fuera del escenario. Hacen mucha plata. Se odian con una prolijidad admirable.',
            efectos: {
              stats: { quimica: -14, cordura: -16, fama: 6, inspiracion: -14 },
              dinero: 140000,
              flags: { separacion: 1, bandaZombie: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Siguen y, sin que nadie sepa bien por qué, algo se arregla en la gira siguiente. A veces alcanza con no tomar la decisión el peor día.',
            efectos: { stats: { quimica: 22, cordura: 6, inspiracion: 8 }, dinero: 60000 },
          },
        ],
      },
      {
        id: 'echar-todos',
        texto: 'Echarlos a todos y quedarte con el nombre',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Te quedás con el nombre y contratás músicos de sesión que hacen exactamente lo que decís. Suena perfecto y no suena a nada. Vas a ganar el juicio y vas a perder la banda.',
            efectos: {
              stats: { fama: 8, credibilidad: -22, quimica: -30, talento: 4, cordura: -12 },
              dinero: 40000,
              disuelveBanda: true,
              flags: { separacion: 1, seQuedoConElNombre: 1, juicioBanda: 1 },
              titular: '"Guerra por el nombre: los ex integrantes de {banda} demandan a {apodo}"',
            },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-solista',
    titulo: 'El disco solista',
    categoria: 'carrera',
    texto:
      'Tenés canciones que no entran en la banda. Un ejecutivo te dice al oído que un disco tuyo solo vendería el triple.',
    requiere: { stats: { fama: { min: 55 } }, sinFlags: ['discoSolista'] },
    peso: 4,
    opciones: [
      {
        id: 'hacerlo',
        texto: 'Hacerlo sin avisarle a la banda',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Se enteran por la radio. El disco vende muchísimo y la próxima gira de la banda transcurre en un silencio de piedra.',
            efectos: {
              stats: { fama: 20, quimica: -26, credibilidad: -4 },
              dinero: 70000,
              flags: { discoSolista: 1, grietaInterna: 1 },
              publicaDisco: true,
            },
          },
          {
            peso: 1,
            texto:
              'Se enteran por la radio y a la semana el baterista saca el suyo. Terminan los cuatro con discos solistas y la banda no vuelve a grabar nunca.',
            efectos: {
              stats: { fama: 12, quimica: -34, inspiracion: 6 },
              dinero: 50000,
              disuelveBanda: true,
              flags: { discoSolista: 1, separacion: 1 },
            },
          },
        ],
      },
      {
        id: 'avisar',
        texto: 'Avisar, explicar y hacerlo igual',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Se lo bancan a regañadientes. Sale un disco íntimo y raro que vende menos de lo previsto y que va a envejecer mejor que casi todo lo demás.',
            efectos: {
              stats: { credibilidad: 16, inspiracion: 12, quimica: -8, fama: 6 },
              dinero: 25000,
              flags: { discoSolista: 1 },
              publicaDisco: true,
            },
          },
        ],
      },
      {
        id: 'guardar',
        texto: 'Meter esas canciones en el próximo disco de la banda',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'La banda las arruina y las mejora al mismo tiempo. Ya no son tuyas, son de ellos, y ese siempre fue el punto.',
            efectos: { stats: { quimica: 16, inspiracion: -4, talento: 6, credibilidad: 6 } },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-hotel',
    titulo: 'La habitación 402',
    categoria: 'mito',
    texto:
      'Son las cinco de la mañana en un hotel de lujo. Hay un televisor, una ventana grande y una idea muy estúpida que a todos les parece buenísima.',
    requiere: { stats: { fama: { min: 55 }, adiccion: { min: 30 } }, sinFlags: ['destrozoHotel'] },
    peso: 3,
    opciones: [
      {
        id: 'tirar',
        texto: 'Tirar el televisor por la ventana',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'El televisor cae en la pileta vacía. El estruendo despierta a cuatro pisos. Pagás los daños con una sonrisa y comprás una leyenda por muy poca plata.',
            efectos: {
              stats: { fama: 16, credibilidad: 8, cordura: -6 },
              dinero: -8000,
              flags: { destrozoHotel: 1, leyendaHotel: 1 },
              titular: '"Otra vez {apodo}: destrozos en un hotel cinco estrellas"',
            },
          },
          {
            peso: 1,
            texto:
              'El televisor cae a dos metros de un empleado que estaba limpiando la pileta. Nadie se ríe. Hay una denuncia penal y una noche entera en una comisaría.',
            efectos: {
              stats: { fama: 10, credibilidad: -16, cordura: -14 },
              dinero: -30000,
              flags: { destrozoHotel: 1, causaPenal: 1 },
              titular: '"Casi mata a un empleado: {apodo} pasó la noche detenido"',
            },
          },
        ],
      },
      {
        id: 'pileta',
        texto: 'Bajar y tirarte a la pileta con ropa',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Media banda termina en el agua a las cinco de la mañana. Es la mejor noche de la gira y no rompieron absolutamente nada.',
            efectos: {
              stats: { quimica: 14, cordura: 8, fama: 4, salud: -4 },
              flags: { destrozoHotel: 1 },
            },
          },
        ],
      },
      {
        id: 'dormir',
        texto: 'Irte a dormir',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te vas a dormir. A la mañana desayunás solo, descansado, mientras los demás no bajan. Elegiste durar.',
            efectos: { stats: { salud: 8, cordura: 8, fama: -2, quimica: -4 } },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-impuestos',
    titulo: 'La carta de la AFIP',
    categoria: 'plata',
    texto:
      'Llega una carta certificada. Tu contador no atiende el teléfono desde hace tres semanas. La cifra que aparece en el papel tiene demasiados ceros.',
    requiere: { dineroMin: 50000, sinFlags: ['problemaImpuestos'] },
    peso: 3,
    opciones: [
      {
        id: 'pagar',
        texto: 'Pagar todo y quedarte tranquilo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Pagás. Duele. Contratás un estudio serio y nunca más volvés a firmar algo sin leerlo. La tranquilidad tiene un precio y lo acabás de pagar.',
            efectos: { stats: { cordura: 10 }, dinero: -80000, flags: { problemaImpuestos: 1, ordenado: 1 } },
          },
        ],
      },
      {
        id: 'pelear',
        texto: 'Pelearlo con abogados',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Seis años de juicio. Lo arreglás por la mitad y pagás en abogados lo que te ahorraste. La prensa te trató de evasor durante todo el proceso.',
            efectos: {
              stats: { cordura: -16, credibilidad: -10, fama: 4 },
              dinero: -60000,
              flags: { problemaImpuestos: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Resulta que el error era del contador, que además te venía robando hace ocho años. Recuperás parte y perdés la fe en los seres humanos.',
            efectos: {
              stats: { cordura: -12, credibilidad: 6 },
              dinero: -15000,
              flags: { problemaImpuestos: 1, roboContador: 1 },
            },
          },
        ],
      },
      {
        id: 'irse',
        texto: 'Mudar todo al exterior y no volver por un tiempo',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Te instalás afuera y grabás un disco sobre el exilio que es tu mejor trabajo en años. En tu país te acusan de traidor y de rico.',
            efectos: {
              stats: { inspiracion: 18, credibilidad: -12, fama: -8, cordura: -6 },
              dinero: -20000,
              flags: { problemaImpuestos: 1, exiliado: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-politica',
    titulo: 'El político quiere una foto',
    categoria: 'prensa',
    texto:
      'Un candidato con muchas chances quiere usar tu tema en la campaña y quiere una foto con vos. Ofrece plata y ofrece cosas que no son plata.',
    requiere: { stats: { fama: { min: 60 } }, sinFlags: ['fotoPolitica'] },
    peso: 3,
    opciones: [
      {
        id: 'aceptar',
        texto: 'Aceptar. Total es un tema',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'La foto se publica en todos lados. Ganás mucha plata y perdés a un tercio de tu público, que se acuerda de esa foto para siempre.',
            efectos: {
              stats: { credibilidad: -24, fama: 10, cordura: -6 },
              dinero: 100000,
              flags: { fotoPolitica: 1, manchaPolitica: 1 },
              titular: '"{apodo} en el escenario del oficialismo: la escena estalla"',
            },
          },
        ],
      },
      {
        id: 'negar',
        texto: 'Negarte y mandarle una carta documento',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Le prohibís usar el tema. Lo usa igual dos veces y vos lo denunciás en cadena nacional desde un escenario. Es de las mejores cosas que hiciste.',
            efectos: {
              stats: { credibilidad: 22, fama: 12, cordura: -4 },
              flags: { fotoPolitica: 1, enfrentoPoder: 1 },
            },
          },
        ],
      },
      {
        id: 'contrario',
        texto: 'Tocar gratis para el otro lado',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Tocás gratis en el acto del candidato opositor. Media prensa te idolatra, la otra media te destruye. Perdiste la posibilidad de ser de todos.',
            efectos: {
              stats: { credibilidad: 12, fama: 14, cordura: -8 },
              flags: { fotoPolitica: 1, militante: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Tocás gratis, pierde igual, y durante los cuatro años siguientes no te dan un solo permiso municipal para tocar en ningún lado.',
            efectos: {
              stats: { credibilidad: 14, fama: -12 },
              dinero: -20000,
              flags: { fotoPolitica: 1, listaNegra: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-hijo',
    titulo: 'Vas a ser padre',
    categoria: 'amor',
    texto:
      'Te enterás en un camarín, por teléfono, veinte minutos antes de salir a tocar para treinta mil personas.',
    requiere: { edadMin: 23, edadMax: 48, sinFlags: ['hijo'] },
    peso: 3,
    opciones: [
      {
        id: 'bajar',
        texto: 'Bajar el ritmo. Un año sin girar',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Cancelás todo. Pasás un año cambiando pañales y componiendo de madrugada con un bebé dormido encima. El disco que sale de ahí es raro, dulce y el mejor recibido de tu carrera tardía.',
            efectos: {
              stats: { cordura: 20, salud: 8, adiccion: -14, fama: -10, inspiracion: 12 },
              dinero: -20000,
              flags: { hijo: 1, padrePresente: 1 },
            },
          },
        ],
      },
      {
        id: 'seguir',
        texto: 'Seguir igual. La gira no se para',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Te perdés los primeros cuatro años. Le mandás regalos desde ciudades cuyos nombres no va a poder pronunciar. Un día tiene quince y no te habla.',
            efectos: {
              stats: { cordura: -18, fama: 10, inspiracion: 6 },
              dinero: 60000,
              flags: { hijo: 1, padreAusente: 1, culpa: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Te los llevás de gira. Un bebé en un camarín de estadio es un desastre logístico y la mejor decisión que tomaste en diez años.',
            efectos: {
              stats: { cordura: 14, quimica: 6, fama: 6, adiccion: -12 },
              dinero: 30000,
              flags: { hijo: 1, padrePresente: 1 },
            },
          },
        ],
      },
      {
        id: 'plata',
        texto: 'Mandar plata y desaparecer',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Cumplís con lo económico y con nada más. Veinte años después va a dar una entrevista sobre vos y no vas a poder terminar de leerla.',
            efectos: {
              stats: { cordura: -22, credibilidad: -10, inspiracion: 10 },
              dinero: -40000,
              flags: { hijo: 1, padreAusente: 1, culpa: 2 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-biografia',
    titulo: 'El libro',
    categoria: 'prensa',
    texto:
      'Un periodista prestigioso quiere escribir tu biografía. Pide acceso total: la banda, la familia, los archivos, todo. Y advierte que no va a mostrarte el manuscrito.',
    requiere: { stats: { fama: { min: 60 } }, edadMin: 32, sinFlags: ['biografia'] },
    peso: 3,
    opciones: [
      {
        id: 'total',
        texto: 'Darle acceso total',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'El libro es magnífico y te deja destrozado. Cuenta tres cosas que creías secretas y una que ni vos sabías. Se convierte en el libro de rock más vendido del año.',
            efectos: {
              stats: { fama: 18, credibilidad: 14, cordura: -16 },
              dinero: 30000,
              flags: { biografia: 1, libroDefinitivo: 1 },
              titular: '"El libro que desnuda a {apodo}: agotado en dos semanas"',
            },
          },
          {
            peso: 1,
            texto:
              'El libro reabre una vieja denuncia de la que nadie hablaba. Se te caen dos sponsors y una gira. La verdad, resulta, tiene un costo operativo.',
            efectos: {
              stats: { fama: 10, credibilidad: -14, cordura: -20 },
              dinero: -30000,
              flags: { biografia: 1, escandaloViejo: 1 },
            },
          },
        ],
      },
      {
        id: 'controlado',
        texto: 'Dar acceso con derecho a veto',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Sale un libro prolijo, elogioso y olvidable. Nadie lo cita nunca. Es el libro que quisiste y por eso mismo no sirve para nada.',
            efectos: { stats: { fama: 8, credibilidad: -6, cordura: 6 }, dinero: 15000, flags: { biografia: 1 } },
          },
        ],
      },
      {
        id: 'propia',
        texto: 'Escribirla vos mismo',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Tardás cuatro años. Escribís mejor de lo que nadie esperaba, incluido vos. Es honesto en un ochenta por ciento y ese veinte restante te lo van a marcar todos.',
            efectos: {
              stats: { credibilidad: 14, inspiracion: -8, cordura: 8, fama: 10 },
              dinero: 40000,
              flags: { biografia: 1, autobiografia: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Tardás cuatro años y no lográs escribir sobre lo único que importaba. Publicás doscientas páginas sobre equipos de sonido.',
            efectos: { stats: { credibilidad: -8, fama: 2, cordura: -6 }, dinero: 8000, flags: { biografia: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-mtv-unplugged',
    titulo: 'El acústico',
    categoria: 'carrera',
    texto:
      'Un canal quiere grabarles un acústico. Sin distorsión, sin volumen, sin nada donde esconderse. Sólo las canciones y ustedes.',
    requiere: { stats: { fama: { min: 58 } }, decada: [1990, 2000, 1980], sinFlags: ['acustico'] },
    peso: 3,
    opciones: [
      {
        id: 'clasicos',
        texto: 'Hacer los clásicos en versión desnuda',
        riesgo: 'seguro',
        resultados: [
          {
            peso: 2,
            texto:
              'Queda un disco en vivo que vende más que cualquiera de estudio. Se descubre que las canciones eran buenas incluso sin el ruido.',
            efectos: {
              stats: { fama: 20, credibilidad: 12, talento: 8 },
              dinero: 70000,
              flags: { acustico: 1, acusticoExitoso: 1 },
              publicaDisco: true,
            },
          },
          {
            peso: 1,
            texto:
              'Sin la distorsión queda expuesto que tres de los hits no tenían nada adentro. El acústico se edita igual y todos aprenden algo desagradable.',
            efectos: { stats: { credibilidad: -12, fama: 8, cordura: -8 }, dinero: 40000, flags: { acustico: 1 } },
          },
        ],
      },
      {
        id: 'raros',
        texto: 'Tocar sólo temas oscuros y dos covers imposibles',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'El canal se agarra la cabeza. El resultado es un disco de culto absoluto que los músicos de todo el continente van a estudiar tema por tema.',
            efectos: {
              stats: { credibilidad: 24, talento: 12, fama: 6 },
              dinero: 30000,
              flags: { acustico: 1, acusticoDeCulto: 1 },
              publicaDisco: true,
            },
          },
        ],
      },
      {
        id: 'no',
        texto: 'Negarse. Ustedes son una banda eléctrica',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Se lo dan a otra banda que hace un acústico histórico. Ustedes conservan una coherencia que nadie les pidió.',
            efectos: { stats: { credibilidad: 8, fama: -8 } },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-bengala',
    titulo: 'La bengala',
    categoria: 'carrera',
    epigrafe: 'El techo es de material inflamable. Nadie revisó las salidas.',
    texto:
      'Un local sin habilitación, el doble de gente de la permitida y una parte del público que trajo bengalas. El encargado dice que siempre fue así. Faltan diez minutos para salir.',
    requiere: { stats: { fama: { min: 50 } }, sinFlags: ['bengalas'] },
    peso: 3,
    opciones: [
      {
        id: 'suspender',
        texto: 'Suspender el show hasta que despejen y abran las salidas',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Salís al escenario y decís que no se toca hasta que se abran las puertas de emergencia y se apague todo lo que arde. Tardan cuarenta minutos. La gente putea. No pasa nada esa noche y no pasa nada nunca.',
            efectos: {
              stats: { credibilidad: 16, cordura: 10, fama: -4 },
              flags: { bengalas: 1, seguridadPrimero: 1 },
            },
          },
        ],
      },
      {
        id: 'tocar',
        texto: 'Tocar igual. Siempre fue así',
        riesgo: 'letal',
        resultados: [
          {
            peso: 3,
            texto:
              'El show es una fiesta. Al final ves el techo negro de hollín en un rincón y no dormís esa noche pensando en lo que podría haber pasado.',
            efectos: {
              stats: { fama: 12, credibilidad: 6, cordura: -12 },
              dinero: 12000,
              flags: { bengalas: 1, zafaste: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Prende el techo en el cuarto tema. Cortás el show y guiás a la gente hacia una salida trasera desde el micrófono, con la voz firme. No hay muertos. Hay heridos, y hay un local que nunca debió abrir.',
            efectos: {
              stats: { cordura: -30, credibilidad: 10, fama: 14, salud: -12 },
              flags: { bengalas: 1, incendio: 1, culpa: 2 },
              titular: '"Incendio durante el show: los evacuaron desde el escenario"',
              encola: ['estr-juicio-incendio'],
            },
          },
        ],
      },
      {
        id: 'pedir',
        texto: 'Tocar, pero pedir por micrófono que apaguen las bengalas',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Lo pedís tres veces. La mayoría hace caso. Terminan el show con el corazón en la boca y sin ninguna consecuencia.',
            efectos: { stats: { fama: 8, credibilidad: 8, cordura: -8 }, dinero: 12000, flags: { bengalas: 1 } },
          },
          {
            peso: 1,
            texto:
              'Lo pedís y te putean. Una bengala vuela hacia el escenario y te quema el brazo. Terminás el show con la manga chamuscada y una foto que va a dar la vuelta al país.',
            efectos: {
              stats: { salud: -14, fama: 16, credibilidad: 12, cordura: -10 },
              dinero: 12000,
              flags: { bengalas: 1 },
              titular: '"Le quemaron el brazo con una bengala y terminó el show"',
            },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-juicio-incendio',
    titulo: 'Después del incendio',
    categoria: 'prensa',
    guion: true,
    texto:
      'Hay una causa judicial, un local clausurado y familias esperando una respuesta. Todos los medios quieren que hables. Tu abogado dice que no hables.',
    opciones: [
      {
        id: 'dar-la-cara',
        texto: 'Dar la cara. Ir a los tribunales y hablar con las familias',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Vas. Escuchás cosas que no se olvidan. Declarás lo que viste sin cuidarte y eso complica a mucha gente poderosa, incluido vos.',
            efectos: {
              stats: { credibilidad: 20, cordura: -18, fama: 8 },
              dinero: -40000,
              flags: { dioLaCara: 1 },
            },
          },
        ],
      },
      {
        id: 'silencio',
        texto: 'Silencio absoluto por consejo del abogado',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'No hablás durante tres años. Ganás la causa. La palabra "cobarde" te va a acompañar en cada nota que se escriba sobre vos.',
            efectos: {
              stats: { credibilidad: -22, cordura: -14, fama: -6 },
              flags: { silencioJudicial: 1 },
            },
          },
        ],
      },
      {
        id: 'retirarse',
        texto: 'Dejar de tocar por tiempo indeterminado',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Anunciás que no vas a subir a un escenario hasta que la causa termine. Son cinco años. Cuando volvés, sos otra persona y tocás distinto.',
            efectos: {
              stats: { fama: -24, credibilidad: 16, cordura: -8, inspiracion: 14 },
              dinero: -30000,
              flags: { retiroTemporal: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-fan-abrigo',
    titulo: 'El hombre del abrigo',
    categoria: 'mito',
    epigrafe: 'Te pidió un autógrafo a la tarde. Sigue ahí a la noche.',
    texto:
      'Un tipo con un abrigo largo te pidió una firma cuando salías del estudio. Volvés a las once de la noche y sigue parado en el mismo lugar, con las manos en los bolsillos.',
    requiere: { stats: { fama: { min: 72 } }, edadMin: 28, sinFlags: ['hombreAbrigo'] },
    peso: 2,
    opciones: [
      {
        id: 'saludar',
        texto: 'Saludarlo de nuevo al pasar',
        riesgo: 'letal',
        resultados: [
          {
            peso: 4,
            texto:
              'Le decís buenas noches. Él te dice buenas noches. Entrás. Al día siguiente ya no está y nunca vas a saber qué había en ese bolsillo.',
            efectos: { stats: { cordura: -10 }, flags: { hombreAbrigo: 1 } },
          },
          {
            peso: 1,
            texto:
              'Se acerca demasiado rápido. Lo que sigue lo vas a escuchar contado por otros durante mucho tiempo.',
            efectos: {
              stats: { salud: -45, cordura: -20, fama: 10 },
              flags: { hombreAbrigo: 1, atentado: 1 },
              titular: '"Atacaron a {apodo} en la puerta de su casa"',
            },
          },
        ],
      },
      {
        id: 'seguridad',
        texto: 'Llamar a seguridad desde el auto',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Lo retiran sin drama. Tenía un cuaderno y una foto vieja. También tenía otra cosa que nadie menciona en el informe que te llega.',
            efectos: {
              stats: { cordura: -6, fama: -2 },
              flags: { hombreAbrigo: 1, seguridadPropia: 1 },
            },
          },
        ],
      },
      {
        id: 'otra-puerta',
        texto: 'Dar la vuelta a la manzana y entrar por atrás',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Entrás por el garage. Desde entonces entrás siempre por el garage. Así es como empieza una vida entera de entrar por atrás.',
            efectos: { stats: { cordura: -8, credibilidad: 2 }, flags: { hombreAbrigo: 1, encerrado: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-avion',
    titulo: 'El avión de la gira',
    categoria: 'carrera',
    epigrafe: 'Es viejo, es barato y el piloto tiene mucha experiencia.',
    texto:
      'Para hacer catorce fechas en dieciséis días alquilaron un avión chico. El mecánico del aeropuerto te comenta al pasar que ese modelo "da trabajo".',
    requiere: { stats: { fama: { min: 62 } }, sinFlags: ['avionGira'] },
    peso: 2,
    opciones: [
      {
        id: 'volar',
        texto: 'Volar igual. Está todo pago',
        riesgo: 'letal',
        resultados: [
          {
            peso: 5,
            texto:
              'Vuelan catorce veces sin un solo problema. Es incómodo, ruidoso y llegan a todos lados a horario.',
            efectos: { stats: { fama: 12, salud: -6 }, dinero: 40000, flags: { avionGira: 1 } },
          },
          {
            peso: 1,
            texto:
              'En el noveno vuelo se apaga un motor sobre una zona de campos. El piloto aterriza en una pista de tierra y les salva la vida a todos. Nadie vuelve a subirse a ese avión.',
            efectos: {
              stats: { salud: -16, cordura: -26, fama: 16, credibilidad: 8, inspiracion: 16 },
              dinero: 20000,
              flags: { avionGira: 1, accidenteAereo: 1, casiMuerte: 1 },
              titular: '"Aterrizaje de emergencia: {banda} se salvó de milagro"',
            },
          },
        ],
      },
      {
        id: 'micro',
        texto: 'Cambiar todo a micro y perder tres fechas',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Once fechas en micro, durmiendo mal y llegando justo. El promotor pierde plata y ustedes duermen tranquilos.',
            efectos: { stats: { salud: -8, quimica: 8, cordura: 6 }, dinero: 20000, flags: { avionGira: 1 } },
          },
        ],
      },
      {
        id: 'revisar',
        texto: 'Pagar una revisión completa antes de despegar',
        riesgo: 'seguro',
        requiere: { dineroMin: 10000 },
        bloqueo: 'La revisión cuesta $10.000',
        resultados: [
          {
            texto:
              'El taller encuentra una falla en el sistema de combustible y prohíbe el vuelo. Cambian de avión. Nunca vas a saber cuánto te costó esa decisión ni cuánto te ahorró.',
            efectos: {
              stats: { fama: 10, cordura: 6 },
              dinero: 25000,
              flags: { avionGira: 1, precavido: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-pelea',
    titulo: 'El promotor que no paga',
    categoria: 'plata',
    texto:
      'El promotor de la gira te debe cuatro fechas y hoy te dijo, con una sonrisa, que la plata no está y que no va a estar. Está a dos metros tuyo, en un pasillo, y no hay nadie más.',
    requiere: { stats: { fama: { min: 50 } }, sinFlags: ['peleaPromotor'] },
    peso: 3,
    opciones: [
      {
        id: 'pegarle',
        texto: 'Agarrarlo de la camisa',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Lo levantás contra la pared y aparece la plata en cuarenta minutos. Funciona. Aprendés algo peligroso: que a veces esto funciona.',
            efectos: {
              stats: { credibilidad: 8, cordura: -8, fama: 4 },
              dinero: 25000,
              flags: { peleaPromotor: 1, manoLarga: 1 },
            },
          },
          {
            peso: 2,
            texto:
              'Se te va de las manos. Hay una denuncia, hay fotos de él con el labio partido y hay un juez que quiere verte el mes que viene.',
            efectos: {
              stats: { fama: 10, credibilidad: -14, cordura: -14 },
              dinero: -20000,
              flags: { peleaPromotor: 1, causaPenal: 1, manoLarga: 1 },
              titular: '"Denuncian a {apodo} por agresión: hay una causa abierta"',
            },
          },
        ],
      },
      {
        id: 'abogado',
        texto: 'Mandarle un abogado y no volver a hablarle',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Dos años de juicio para cobrar la mitad. Correcto, lento y aburridísimo. Nunca más trabajás con él y él nunca más trabaja en el país.',
            efectos: { stats: { cordura: -4, credibilidad: 6 }, dinero: 9000, flags: { peleaPromotor: 1 } },
          },
        ],
      },
      {
        id: 'contarlo',
        texto: 'Contarlo desde el escenario esa misma noche',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Decís su nombre y apellido frente a ocho mil personas. No cobrás nunca, y ningún promotor del país vuelve a intentar esto con vos ni con nadie durante una década.',
            efectos: {
              stats: { credibilidad: 22, fama: 12, cordura: 6 },
              flags: { peleaPromotor: 1, enfrentoPoder: 1 },
              titular: '"Lo dijo con nombre y apellido": {apodo} escrachó al promotor en pleno show',
            },
          },
        ],
      },
    ],
  },

  {
    id: 'estr-moto',
    titulo: 'La moto nueva',
    categoria: 'mito',
    texto:
      'Te comprás una moto enorme. Andás de noche por la ruta vieja, sin casco, a una velocidad que no le contás a nadie. Es lo único que te calma.',
    requiere: { dineroMin: 30000, stats: { fama: { min: 50 } }, sinFlags: ['moto'] },
    peso: 2,
    opciones: [
      {
        id: 'seguir',
        texto: 'Seguir saliendo todas las noches',
        riesgo: 'letal',
        resultados: [
          {
            peso: 3,
            texto:
              'Es lo mejor de tu vida en esos años. Doscientos kilómetros de ruta vacía y nada en la cabeza. Escribís dos discos ahí arriba.',
            efectos: {
              stats: { cordura: 14, inspiracion: 16, salud: -4 },
              flags: { moto: 1, rutaNocturna: 1 },
            },
          },
          {
            peso: 2,
            texto:
              'Un camión sin luces en una curva. Te despertás dos días después con la cadera reconstruida y un año de rehabilitación por delante.',
            efectos: {
              stats: { salud: -34, cordura: -14, fama: 10, inspiracion: 12 },
              dinero: -30000,
              flags: { moto: 1, accidenteMoto: 1, casiMuerte: 1 },
              titular: '"Grave accidente de {apodo}: internado en terapia intensiva"',
            },
          },
        ],
      },
      {
        id: 'casco',
        texto: 'Seguir, pero con casco y despacio',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Con casco no es lo mismo y aun así sigue siendo algo. Te dura veinte años y nunca te pasa nada.',
            efectos: { stats: { cordura: 10, inspiracion: 8 }, flags: { moto: 1, precavido: 1 } },
          },
        ],
      },
      {
        id: 'vender',
        texto: 'Venderla antes de que pase algo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'La vendés. Te vas a acordar de esa moto cada vez que escuches una en la calle, por el resto de tu vida.',
            efectos: { stats: { cordura: -6, inspiracion: -6 }, dinero: 20000 },
          },
        ],
      },
    ],
  },
]
