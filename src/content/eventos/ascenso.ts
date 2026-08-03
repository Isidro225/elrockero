import type { Evento } from '../../engine/types'

// El ascenso: sellos grandes, primeras giras largas, la prensa que empieza a mirar.

export const EVENTOS_ASCENSO: Evento[] = [
  {
    id: 'ascenso-multinacional',
    titulo: 'La multinacional',
    categoria: 'plata',
    epigrafe: 'El cheque más grande que viste en tu vida, con letra chica.',
    texto:
      'Un sello grande quiere ficharlos. Adelanto alto, distribución mundial y un ejecutivo que dice "vamos a respetar lo que ustedes hacen" mientras mira su reloj.',
    requiere: { stats: { fama: { min: 40 } }, sinFlags: ['selloMulti'], edadMax: 45 },
    peso: 5,
    opciones: [
      {
        id: 'firmar',
        texto: 'Firmar. Es la puerta grande',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Cobran una cifra que no saben ni cómo escribir. En el contrato hay una cláusula que dice que el sello aprueba el material. Vas a acordarte de esa cláusula.',
            efectos: {
              stats: { fama: 22, credibilidad: -12 },
              dinero: 40000,
              flags: { selloMulti: 1, contratoSello: 1, clausulaAprobacion: 1 },
              titular: '"{banda} firma con una multinacional: la escena discute"',
            },
          },
          {
            peso: 1,
            texto:
              'Cobran, y además les tocó el único ejecutivo del edificio al que le gusta la música de verdad. Los deja hacer. Va a durar dos discos.',
            efectos: {
              stats: { fama: 24, credibilidad: -4, inspiracion: 6 },
              dinero: 45000,
              flags: { selloMulti: 1, contratoSello: 1, ejecutivoAliado: 1 },
            },
          },
        ],
      },
      {
        id: 'negociar',
        texto: 'Negociar control artístico aunque baje el adelanto',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Cobran la mitad y se quedan con la última palabra sobre las canciones. El ejecutivo firma con cara de estar perdiendo algo, porque está perdiendo algo.',
            efectos: {
              stats: { fama: 16, credibilidad: 8, cordura: 6 },
              dinero: 18000,
              flags: { selloMulti: 1, contratoSello: 1, controlArtistico: 1 },
            },
          },
        ],
      },
      {
        id: 'rechazar',
        texto: 'Rechazar en público y con ruido',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'La nota donde explicás por qué los mandaste al carajo se reproduce en todos lados. Sos el músico más íntegro del país y el más pobre de tu cuadra.',
            efectos: {
              stats: { credibilidad: 24, fama: 8, cordura: -6 },
              dinero: -1000,
              flags: { antisistema: 1, enemigoIndustria: 1 },
              titular: '"No me compran": {apodo} rechaza el contrato más grande del año',
            },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-productor',
    titulo: 'El productor famoso',
    categoria: 'carrera',
    texto:
      'Un productor que hizo tres discos históricos quiere trabajar con ustedes. Su método consiste en romper la banda hasta que salga algo bueno.',
    requiere: { stats: { fama: { min: 35 } }, discosMin: 1, sinFlags: ['productorEstrella'] },
    peso: 4,
    opciones: [
      {
        id: 'aceptar',
        texto: 'Aceptar y bancarse el método',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Les hace grabar la misma toma cuarenta veces. El baterista llora en el pasillo. El disco que sale es el mejor que hicieron y ninguno lo puede escuchar sin apretar los dientes.',
            efectos: {
              stats: { talento: 16, credibilidad: 14, quimica: -18, cordura: -10, inspiracion: 8 },
              dinero: -6000,
              flags: { productorEstrella: 1, discoGrande: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'La banda se le planta el segundo día. El productor se va del estudio y no vuelve. Quedan con medio disco grabado y una factura entera.',
            efectos: {
              stats: { quimica: 8, credibilidad: -6, cordura: -8 },
              dinero: -9000,
              flags: { productorEstrella: 1 },
            },
          },
        ],
      },
      {
        id: 'autoproducir',
        texto: 'Producirse ustedes mismos',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Tardan el doble y gastan la mitad. Suena a ustedes, con todos los defectos incluidos. Algunos de esos defectos van a ser lo que la gente más quiera.',
            efectos: {
              stats: { credibilidad: 12, quimica: 8, talento: 6, inspiracion: 4 },
              dinero: -2500,
              flags: { autoproducido: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Tardan el doble, gastan el doble y el disco suena a demo caro. Nadie en la banda quiere admitirlo.',
            efectos: { stats: { credibilidad: -8, talento: 4, quimica: -6 }, dinero: -5000 },
          },
        ],
      },
      {
        id: 'ingeniero',
        texto: 'Contratar un buen ingeniero y producir entre todos',
        riesgo: 'seguro',
        requiere: { dineroMin: 3000 },
        bloqueo: 'Un ingeniero decente cuesta $3.000',
        resultados: [
          {
            texto:
              'Un tipo callado que sabe dónde poner los micrófonos les cambia el sonido sin cambiarles las canciones. La solución obvia que casi nadie elige.',
            efectos: {
              stats: { talento: 10, credibilidad: 8, quimica: 6 },
              dinero: -3000,
              flags: { buenSonido: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-telonero',
    titulo: 'Abrir para los grandes',
    categoria: 'carrera',
    texto:
      'Una banda internacional busca telonero para su gira. Es un mes de estadios. Pagan poco y el público no vino por ustedes.',
    requiere: { stats: { fama: { min: 30 } }, sinFlags: ['fueTelonero'] },
    peso: 4,
    opciones: [
      {
        id: 'ir',
        texto: 'Ir. Cuarenta minutos frente a cincuenta mil personas',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Las primeras cinco noches tocan para un estadio que compra cerveza. La sexta, algo se da vuelta y veinte mil personas que no los conocían se aprenden el estribillo.',
            efectos: {
              stats: { fama: 24, quimica: 10, salud: -6, credibilidad: 4 },
              dinero: 3000,
              flags: { fueTelonero: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Los abuchean todas las noches durante un mes. Aprenden a tocar frente a gente que los odia, que es la mejor escuela que existe.',
            efectos: {
              stats: { fama: 8, talento: 12, quimica: 14, cordura: -8 },
              dinero: 2500,
              flags: { fueTelonero: 1, curtido: 1 },
            },
          },
        ],
      },
      {
        id: 'condiciones',
        texto: 'Aceptar sólo si les dan sonido y luces propias',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Se ríen y se lo dan igual, porque el manager de la banda grande vio el video de un show suyo. Suenan como cabeza de cartel siendo teloneros.',
            efectos: {
              stats: { fama: 20, credibilidad: 10, quimica: 6 },
              dinero: 2000,
              flags: { fueTelonero: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Se ríen y le dan la fecha a otros. Esos otros vuelven de la gira con el doble de público.',
            efectos: { stats: { fama: -6, credibilidad: 4 }, flags: { rivalAscendente: 1 } },
          },
        ],
      },
      {
        id: 'no',
        texto: 'No. Prefieren llenar salas propias',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Hacen su propia gira en salas de mil personas. Las llenan todas. Crecen más despacio y crecen para adentro.',
            efectos: { stats: { fama: 8, credibilidad: 12, quimica: 8 }, dinero: 4000 },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-video',
    titulo: 'El videoclip',
    categoria: 'prensa',
    texto:
      'El sello pone presupuesto para un video. El director tiene una idea con bailarinas, humo y un plano tuyo caminando en cámara lenta.',
    requiere: { stats: { fama: { min: 35 } }, decada: [1980, 1990, 2000], sinFlags: ['hizoVideo'] },
    peso: 4,
    opciones: [
      {
        id: 'aceptar',
        texto: 'Hacer el video que quiere el sello',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Rota en televisión durante cuatro meses. Es horrible. Funciona. Vas a tener que verlo en cada especial de aniversario por el resto de tu vida.',
            efectos: {
              stats: { fama: 26, credibilidad: -14 },
              dinero: 2000,
              flags: { hizoVideo: 1, videoVergonzoso: 1 },
            },
          },
        ],
      },
      {
        id: 'artistico',
        texto: 'Insistir con una idea propia, rara y barata',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Un plano fijo de cuatro minutos con la banda mirando a cámara. La televisión no lo pasa. La gente lo comenta durante veinte años.',
            efectos: {
              stats: { credibilidad: 20, fama: 6, inspiracion: 6 },
              flags: { hizoVideo: 1, videoDeCulto: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Un plano fijo de cuatro minutos con la banda mirando a cámara. No lo pasa nadie y no lo comenta nadie. A veces raro es sólo raro.',
            efectos: { stats: { credibilidad: 6, fama: -6 }, dinero: -1500, flags: { hizoVideo: 1 } },
          },
        ],
      },
      {
        id: 'sin-video',
        texto: 'Negarse a hacer video',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'El sello los saca de la prioridad de promoción. La banda de al lado ocupa su lugar en la rotación. Ustedes conservan la cara.',
            efectos: { stats: { credibilidad: 14, fama: -12 }, flags: { conflictoSello: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-hit',
    titulo: 'El tema que se les escapó de las manos',
    categoria: 'carrera',
    epigrafe: 'Lo escribieron en veinte minutos y les va a durar toda la vida.',
    texto:
      'Uno de los temas del disco explotó. Suena en todos lados. Es el más simple que tienen y ninguno de ustedes lo considera de los mejores.',
    requiere: { stats: { fama: { min: 45 } }, discosMin: 1, sinFlags: ['tieneHit'] },
    peso: 5,
    opciones: [
      {
        id: 'abrazar',
        texto: 'Abrazarlo. Tocarlo todas las noches con ganas',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Se convierte en el momento de la noche en que todo el estadio canta. Aprendés a disfrutar de un tema que no te gusta porque le gusta a otros, y eso también es un oficio.',
            efectos: {
              stats: { fama: 20, quimica: 8, cordura: 6, credibilidad: -6 },
              dinero: 15000,
              flags: { tieneHit: 1, aceptaElHit: 1 },
            },
          },
        ],
      },
      {
        id: 'negarlo',
        texto: 'Negarse a tocarlo en vivo',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'La gente lo pide toda la noche. Ustedes no lo tocan. Los shows terminan con silbidos y con una minoría que los admira por eso.',
            efectos: {
              stats: { credibilidad: 12, fama: -10, quimica: -8, cordura: -6 },
              dinero: 8000,
              flags: { tieneHit: 1, odiaElHit: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'La banda se divide. Dos quieren tocarlo, dos no. La discusión de camarín termina con un plato roto y una gira suspendida.',
            efectos: {
              stats: { quimica: -20, fama: -8, cordura: -10 },
              flags: { tieneHit: 1, odiaElHit: 1, grietaInterna: 1 },
            },
          },
        ],
      },
      {
        id: 'destruirlo',
        texto: 'Tocarlo, pero irreconocible: lento, en otro tono, arruinado',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Lo convierten en una balada arrastrada de seis minutos. Media platea se enoja y la otra media entiende que eso es exactamente lo que hace una banda viva.',
            efectos: {
              stats: { credibilidad: 18, fama: 4, inspiracion: 10, quimica: 4 },
              dinero: 9000,
              flags: { tieneHit: 1, hitDestruido: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-rival',
    titulo: 'La banda rival',
    categoria: 'prensa',
    texto:
      'La prensa inventó una rivalidad entre ustedes y otra banda que salió al mismo tiempo. Un periodista te pide una declaración picante.',
    requiere: { stats: { fama: { min: 40 } }, sinFlags: ['rivalidadPublica'] },
    peso: 3,
    opciones: [
      {
        id: 'atacar',
        texto: 'Destrozarlos con una frase memorable',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'La frase queda para la historia. Venden el doble de discos los dos. Se odian en público durante una década y en privado se admiran un poco.',
            efectos: {
              stats: { fama: 20, credibilidad: 6, cordura: -6 },
              flags: { rivalidadPublica: 1, enemigoBanda: 1 },
              titular: '"{apodo} liquidó a la banda del momento en una sola frase"',
            },
          },
          {
            peso: 1,
            texto:
              'La frase sale mal, suena a envidia y todo el mundo se pone del lado de ellos. Tardás cuatro años en sacarte eso de encima.',
            efectos: {
              stats: { fama: 6, credibilidad: -14, cordura: -8 },
              flags: { rivalidadPublica: 1, quedasteMal: 1 },
            },
          },
        ],
      },
      {
        id: 'elogiar',
        texto: 'Elogiarlos sinceramente y desactivar todo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te sale una respuesta tan generosa que el periodista se queda sin nota. El cantante de la otra banda te llama a la semana y terminan escribiendo algo juntos.',
            efectos: {
              stats: { credibilidad: 14, quimica: 6, inspiracion: 8, fama: 4 },
              flags: { aliadoMusico: 1 },
            },
          },
        ],
      },
      {
        id: 'ignorar',
        texto: 'No entrar. Cambiar de tema',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'La nota sale igual, más corta y más aburrida. Nadie se acuerda de ella y esa es exactamente la idea.',
            efectos: { stats: { cordura: 6, fama: -2 } },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-television',
    titulo: 'El programa de la tarde',
    categoria: 'prensa',
    texto:
      'Los invitan al programa más visto del país. El conductor es un tipo que se burla de los músicos y tiene ocho millones de espectadores.',
    requiere: { stats: { fama: { min: 45 } } },
    peso: 3,
    opciones: [
      {
        id: 'jugar',
        texto: 'Seguirle el juego y hacerse el simpático',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Salís bien. Vendés discos. En el ambiente, alguno murmura que te vendiste por diez minutos de aire.',
            efectos: { stats: { fama: 18, credibilidad: -10 }, dinero: 5000 },
          },
        ],
      },
      {
        id: 'plantarse',
        texto: 'Plantarte cuando te falte el respeto',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Le contestás en vivo y el estudio queda helado. El momento se repite durante semanas. Ganás un enemigo con canal propio y una generación entera de fans.',
            efectos: {
              stats: { fama: 22, credibilidad: 18, cordura: -6 },
              flags: { enemigoTV: 1, momentoHistorico: 1 },
              titular: '"El silencio más largo de la televisión: {apodo} paró el programa en seco"',
            },
          },
          {
            peso: 1,
            texto:
              'Le contestás mal, sin gracia, y quedás como un maleducado sin argumentos. La clase de video que te van a mostrar en cada entrevista futura.',
            efectos: { stats: { fama: 10, credibilidad: -12, cordura: -10 }, flags: { enemigoTV: 1 } },
          },
        ],
      },
      {
        id: 'no-ir',
        texto: 'No ir',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'No van. El conductor hace un chiste al aire sobre eso. La banda se ahorra el mal trago y pierde ocho millones de personas.',
            efectos: { stats: { credibilidad: 10, fama: -8 } },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-publicidad',
    titulo: 'La marca de gaseosa',
    categoria: 'plata',
    epigrafe: 'Es mucha plata. Es una gaseosa.',
    texto:
      'Una marca enorme quiere tu tema más conocido para una publicidad. Ofrecen una cifra que resuelve la vida de todos los integrantes.',
    requiere: { stats: { fama: { min: 50 } }, sinFlags: ['vendioTema'] },
    peso: 3,
    opciones: [
      {
        id: 'vender',
        texto: 'Vender el tema',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Cobran una fortuna. Durante seis meses tu canción sobre la muerte de tu viejo acompaña a gente joven tomando gaseosa en una playa.',
            efectos: {
              stats: { credibilidad: -22, fama: 12, cordura: -8 },
              dinero: 90000,
              flags: { vendioTema: 1, selloutPublico: 1 },
              titular: '"De himno generacional a jingle: la polémica del año"',
            },
          },
        ],
      },
      {
        id: 'tema-nuevo',
        texto: 'Ofrecerles un tema nuevo hecho a medida',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Componés algo alegre en dos tardes y se lo vendés. Cobrás menos, no tocás el catálogo y aprendés que sabés hacer eso con una facilidad que te asusta.',
            efectos: {
              stats: { credibilidad: -6, talento: 6, cordura: -4 },
              dinero: 40000,
              flags: { vendioTema: 1, jinglero: 1 },
            },
          },
        ],
      },
      {
        id: 'rechazar',
        texto: 'Rechazar y contarlo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'La banda se entera de cuánta plata rechazaste. El bajista no te habla por dos meses. La escena te pone en un pedestal que no se puede comer.',
            efectos: {
              stats: { credibilidad: 20, quimica: -12, fama: 4 },
              flags: { integro: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-fan-obsesivo',
    titulo: 'El pibe que sabe todo',
    categoria: 'mito',
    texto:
      'Hay alguien que va a todos los shows. Sabe las letras que nunca publicaste. Hoy te esperó en la puerta de tu casa con un cuaderno lleno de anotaciones sobre vos.',
    requiere: { stats: { fama: { min: 50 } }, sinFlags: ['fanObsesivo'] },
    peso: 3,
    opciones: [
      {
        id: 'charlar',
        texto: 'Invitarlo a tomar un café y escucharlo',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Es un pibe solo que encontró en tus discos algo que no encontró en ningún otro lado. Charlan dos horas. Se va tranquilo. Vos te quedás pensando toda la noche.',
            efectos: { stats: { cordura: -4, inspiracion: 12, credibilidad: 6 }, flags: { fanObsesivo: 1 } },
          },
          {
            peso: 1,
            texto:
              'Se va convencido de que ahora son amigos. Al mes siguiente está otra vez en tu puerta, y al otro también.',
            efectos: { stats: { cordura: -12 }, flags: { fanObsesivo: 1, acosado: 1 } },
          },
        ],
      },
      {
        id: 'firmar',
        texto: 'Firmarle el cuaderno y meterte adentro',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Le firmás y cerrás la puerta. Desde la ventana lo ves quedarse parado veinte minutos mirando la firma.',
            efectos: { stats: { cordura: -6 }, flags: { fanObsesivo: 1 } },
          },
        ],
      },
      {
        id: 'seguridad',
        texto: 'Llamar a seguridad y hacer una denuncia',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'No vuelve a aparecer. En un foro escribe que lo traicionaste. Doscientas personas le dan la razón.',
            efectos: { stats: { cordura: 6, credibilidad: -6, fama: -2 }, flags: { seguridadPropia: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-integrante-celos',
    titulo: 'La foto de la revista',
    categoria: 'banda',
    texto:
      'La revista más importante les hace la tapa. En la foto publicada salís vos adelante y el resto de la banda desenfocado atrás. Vos no lo elegiste. Ellos no lo saben.',
    requiere: { tieneBanda: true, stats: { fama: { min: 45 } }, sinFlags: ['tapaSolo'] },
    peso: 3,
    opciones: [
      {
        id: 'aclarar',
        texto: 'Aclararlo públicamente y pedir una nueva foto',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Le exigís a la revista una fe de erratas ridícula que nadie va a leer. La banda lo sabe y te lo agradece sin decírtelo.',
            efectos: { stats: { quimica: 16, fama: -4, credibilidad: 6 }, flags: { tapaSolo: 1 } },
          },
        ],
      },
      {
        id: 'callar',
        texto: 'No decir nada. Total, no fue culpa tuya',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Nadie te lo reclama de frente. Se instala una cosa en los ensayos que no estaba antes y que ya no se va a ir.',
            efectos: { stats: { quimica: -14, fama: 8 }, flags: { tapaSolo: 1, grietaInterna: 1 } },
          },
        ],
      },
      {
        id: 'aprovechar',
        texto: 'Aprovecharlo. Es tu cara la que vende',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Empezás a dar entrevistas solo. En seis meses, la prensa habla de "{apodo} y su banda". La banda lee eso y toma nota.',
            efectos: {
              stats: { fama: 20, quimica: -22, credibilidad: -4 },
              flags: { tapaSolo: 1, egoLider: 1, grietaInterna: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-festival',
    titulo: 'El festival',
    categoria: 'carrera',
    epigrafe: 'Ochenta mil personas y una tormenta a lo lejos.',
    texto:
      'Les dan un horario bueno en el festival más grande del país. Llueve. La organización dice que decidan ustedes si salen.',
    requiere: { stats: { fama: { min: 50 } }, sinFlags: ['festivalGrande'] },
    peso: 4,
    opciones: [
      {
        id: 'salir',
        texto: 'Salir bajo la lluvia',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 3,
            texto:
              'Ochenta mil personas empapadas cantando bajo el agua. Es la clase de show que después se cuenta en primera persona por gente que no estuvo ahí.',
            efectos: {
              stats: { fama: 26, credibilidad: 16, quimica: 12, salud: -8 },
              dinero: 12000,
              flags: { festivalGrande: 1, showMitico: 1 },
              titular: '"La noche que {banda} tocó bajo la tormenta"',
            },
          },
          {
            peso: 1,
            texto:
              'A los tres temas hay una descarga en el escenario. El guitarrista sale despedido y termina en el hospital con quemaduras. El show se suspende.',
            efectos: {
              stats: { fama: 14, salud: -20, cordura: -14, quimica: -6 },
              dinero: 6000,
              flags: { festivalGrande: 1, accidenteEscenario: 1 },
              titular: '"Descarga eléctrica en pleno festival: la banda se salvó por muy poco"',
            },
          },
        ],
      },
      {
        id: 'esperar',
        texto: 'Esperar a que pare y tocar más tarde',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Tocan a las tres de la mañana para diez mil personas que aguantaron. Es menos épico y todos vuelven enteros a su casa.',
            efectos: {
              stats: { fama: 12, quimica: 6, salud: -4 },
              dinero: 9000,
              flags: { festivalGrande: 1 },
            },
          },
        ],
      },
      {
        id: 'cancelar',
        texto: 'Cancelar. No vale la pena el riesgo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'La organización lo entiende. El público, no. Durante dos años les van a gritar eso en cada show.',
            efectos: { stats: { fama: -12, credibilidad: -8, cordura: 4 }, dinero: 2000 },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-plagio',
    titulo: 'La acusación de plagio',
    categoria: 'prensa',
    texto:
      'Un músico desconocido dice que el estribillo del hit es suyo. Tiene una grabación de tres años antes. Se parece bastante.',
    requiere: { stats: { fama: { min: 45 } }, flags: ['tieneHit'], sinFlags: ['juicioPlagio'] },
    peso: 3,
    opciones: [
      {
        id: 'arreglar',
        texto: 'Arreglar en privado y darle un crédito',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Le das un porcentaje y su nombre en la ficha. El tipo llora en la reunión. Nadie se entera y todos duermen tranquilos.',
            efectos: { stats: { cordura: 8, credibilidad: 4 }, dinero: -20000, flags: { juicioPlagio: 1 } },
          },
        ],
      },
      {
        id: 'pelear',
        texto: 'Pelearlo en la justicia',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Ganan a los tres años. Los honorarios se comen lo que hubieras pagado en un arreglo y la prensa te trató de ladrón durante todo el juicio.',
            efectos: {
              stats: { credibilidad: -12, cordura: -14, fama: 6 },
              dinero: -30000,
              flags: { juicioPlagio: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Perdés. El juez determina que hay ocho compases idénticos. Perdés los derechos del tema más importante de tu vida.',
            efectos: {
              stats: { credibilidad: -20, cordura: -18, fama: -6 },
              dinero: -60000,
              flags: { juicioPlagio: 1, perdioDerechos: 1 },
              titular: '"Fallo histórico: {apodo} pierde los derechos de su propio hit"',
            },
          },
        ],
      },
      {
        id: 'ignorar',
        texto: 'Ignorarlo. Que se queje',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'El tipo insiste dos años y después desaparece. Cada tanto alguien sube la comparación a internet y vuelve a arder.',
            efectos: { stats: { credibilidad: -8, cordura: -6 }, flags: { juicioPlagio: 1, manchaPlagio: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-gira-internacional',
    titulo: 'Salir del país',
    categoria: 'carrera',
    texto:
      'Hay una oferta para girar por el exterior. Tres meses, otro idioma, salas chicas y arrancar de cero en un lugar donde nadie los conoce.',
    requiere: { stats: { fama: { min: 55 } }, sinFlags: ['giraInternacional'] },
    peso: 4,
    opciones: [
      {
        id: 'ir',
        texto: 'Ir. Aunque sea empezar de nuevo',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Tocan para cuarenta personas en ciudades cuyo nombre no saben pronunciar. Vuelven con menos plata, más humildad y un puñado de fans en otro continente.',
            efectos: {
              stats: { credibilidad: 16, quimica: 10, salud: -10, fama: 8, inspiracion: 10 },
              dinero: -4000,
              flags: { giraInternacional: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'En la cuarta fecha, un periodista importante los descubre y escribe una nota que los cambia todo. Vuelven siendo una banda internacional.',
            efectos: {
              stats: { fama: 28, credibilidad: 18, quimica: 8, salud: -8 },
              dinero: 8000,
              flags: { giraInternacional: 1, reconocimientoExterior: 1 },
            },
          },
        ],
      },
      {
        id: 'quedarse',
        texto: 'Quedarse. Acá son grandes, allá son nadie',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Se quedan y consolidan lo que tienen. Van a ser enormes en su país y una nota al pie en el resto del mundo. No es poco.',
            efectos: { stats: { fama: 10, cordura: 6 }, dinero: 12000, flags: { localista: 1 } },
          },
        ],
      },
      {
        id: 'mudarse',
        texto: 'Mudarse allá directamente. Todo o nada',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Alquilan un departamento con humedad y ensayan en un sótano. Pasan dos años difíciles. Lo que sale de ahí no se parece a nada de lo anterior.',
            efectos: {
              stats: { inspiracion: 22, credibilidad: 14, cordura: -12, salud: -8, fama: -6 },
              dinero: -12000,
              flags: { giraInternacional: 1, exiliado: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'La banda no aguanta la mudanza. Dos se vuelven a los cuatro meses. Te quedás solo en una ciudad enorme.',
            efectos: {
              stats: { cordura: -18, quimica: -20, inspiracion: 14 },
              dinero: -10000,
              flags: { exiliado: 1 },
              bandaSale: 2,
            },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-critico',
    titulo: 'La reseña que dolió',
    categoria: 'prensa',
    texto:
      'El crítico más influyente destrozó el disco. No dijo que era malo: dijo que era cobarde. Te lo mandaron por fax a las siete de la mañana.',
    requiere: { discosMin: 1, stats: { fama: { min: 30 } } },
    peso: 3,
    opciones: [
      {
        id: 'responder',
        texto: 'Escribirle una carta abierta',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'La carta se publica entera. Es buena, es filosa y demuestra que le importó. La gente que lee eso concluye que el crítico tenía razón en que te importó.',
            efectos: { stats: { fama: 8, credibilidad: -6, cordura: -8 }, flags: { enemigoPrensa: 1 } },
          },
          {
            peso: 1,
            texto:
              'La carta es tan buena que el crítico la reproduce en su columna y admite, a medias, que se le fue la mano. Empatás con el mejor.',
            efectos: { stats: { credibilidad: 12, fama: 6 } },
          },
        ],
      },
      {
        id: 'usarla',
        texto: 'Usar la frase peor como título del próximo disco',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Convertís el insulto en portada. Es la mejor respuesta posible y todo el mundo lo entiende así.',
            efectos: {
              stats: { credibilidad: 18, fama: 10, inspiracion: 10 },
              flags: { respuestaGenial: 1 },
            },
          },
        ],
      },
      {
        id: 'tomarla',
        texto: 'Leerla en serio y preguntarte si tiene razón',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Tenía razón. Tirás cuatro temas del próximo disco y volvés a empezar. Duele y sirve.',
            efectos: { stats: { inspiracion: 14, talento: 8, cordura: -6, credibilidad: 8 } },
          },
        ],
      },
    ],
  },

  {
    id: 'ascenso-camarin',
    titulo: 'El camarín se llenó de gente',
    categoria: 'banda',
    texto:
      'Después del show ya no están sólo ustedes. Hay veinte personas que nadie invitó, todas simpáticas, todas con algo para ofrecer.',
    requiere: { stats: { fama: { min: 50 } }, sinFlags: ['camarinAbierto'] },
    peso: 3,
    opciones: [
      {
        id: 'abrir',
        texto: 'Que entren todos. Es parte de la fiesta',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'El camarín se convierte en un lugar donde pasan cosas todas las noches. Nunca más van a estar solos los cuatro después de un show.',
            efectos: {
              stats: { fama: 10, adiccion: 14, salud: -8, quimica: -8, cordura: -6 },
              flags: { camarinAbierto: 1, entornoParasito: 1 },
            },
          },
        ],
      },
      {
        id: 'filtrar',
        texto: 'Poner a alguien en la puerta con una lista',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Un tipo grande con una carpeta decide quién entra. Se van a decir cosas horribles de ustedes en la puerta y van a dormir mejor.',
            efectos: {
              stats: { cordura: 10, salud: 6, credibilidad: -6, fama: -2 },
              flags: { camarinCerrado: 1 },
            },
          },
        ],
      },
      {
        id: 'irse',
        texto: 'Irte del camarín y volver al hotel solo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te vas caminando por una ciudad que no conocés. La banda festeja sin vos. Vas a repetir esto muchas veces y va a ser lo que te salve.',
            efectos: { stats: { cordura: 12, inspiracion: 8, quimica: -8, adiccion: -6 }, flags: { solitario: 1 } },
          },
        ],
      },
    ],
  },
]
