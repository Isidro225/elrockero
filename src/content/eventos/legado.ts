import type { Evento } from '../../engine/types'

// Meseta y legado: la parte larga, la que casi nadie mira y la que decide
// cómo te van a recordar.

export const EVENTOS_LEGADO: Evento[] = [
  {
    id: 'leg-nostalgia',
    titulo: 'La gira del aniversario',
    categoria: 'carrera',
    texto:
      'Se cumplen veinte años del disco importante. Un promotor propone tocarlo entero, en orden, todas las noches, durante dos años.',
    requiere: { edadMin: 38, discosMin: 3, stats: { fama: { min: 35 } }, sinFlags: ['giraAniversario'] },
    peso: 4,
    opciones: [
      {
        id: 'hacerla',
        texto: 'Hacerla. La gente quiere eso',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Se agota todo. Ganás más plata que en los veinte años anteriores juntos. Todas las noches tocás las mismas once canciones en el mismo orden y una parte de vos se apaga despacio.',
            efectos: {
              stats: { fama: 20, cordura: -12, inspiracion: -20, credibilidad: -8 },
              dinero: 200000,
              flags: { giraAniversario: 1, jubiladoActivo: 1 },
            },
          },
        ],
      },
      {
        id: 'mitad',
        texto: 'Hacerla, pero con temas nuevos en la segunda parte',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'La primera mitad la canta todo el mundo y la segunda la escuchan en silencio con cara de espera. Vendés menos y seguís siendo una banda que hace canciones.',
            efectos: {
              stats: { fama: 12, inspiracion: 8, credibilidad: 10 },
              dinero: 120000,
              flags: { giraAniversario: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Tres de los temas nuevos funcionan mejor en vivo que los viejos. A los seis meses la gente pide los nuevos. Eso no le pasa a casi nadie.',
            efectos: {
              stats: { fama: 16, inspiracion: 16, credibilidad: 18 },
              dinero: 140000,
              flags: { giraAniversario: 1, segundoAire: 1 },
            },
          },
        ],
      },
      {
        id: 'no',
        texto: 'Negarte. No sos una banda tributo de vos mismo',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Rechazás una fortuna y hacés un disco nuevo que vende ocho mil copias. Los que lo escuchan te lo agradecen y son ocho mil.',
            efectos: {
              stats: { credibilidad: 22, inspiracion: 14, fama: -12 },
              dinero: -10000,
              publicaDisco: true,
              flags: { integro: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'leg-productor',
    titulo: 'La banda de pibes',
    categoria: 'carrera',
    texto:
      'Una banda de veinte años, que suena a un cruce entre lo que hacías vos y algo que no entendés, te pide que les produzcas el disco.',
    requiere: { edadMin: 36, stats: { talento: { min: 55 } }, sinFlags: ['productorDeOtros'] },
    peso: 3,
    opciones: [
      {
        id: 'producir',
        texto: 'Producirlos y dejarlos hacer lo suyo',
        riesgo: 'seguro',
        resultados: [
          {
            peso: 2,
            texto:
              'El disco explota. Ellos agradecen tu nombre en cada entrevista y vos descubrís que te gusta más estar del otro lado del vidrio.',
            efectos: {
              stats: { credibilidad: 20, talento: 8, cordura: 12, fama: 8 },
              dinero: 40000,
              flags: { productorDeOtros: 1, segundaCarrera: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'El disco pasa sin pena ni gloria y ellos se separan a los ocho meses. Vos te quedás con la certeza incómoda de que sabés hacer esto mejor que tocar.',
            efectos: {
              stats: { credibilidad: 8, cordura: 6, talento: 6 },
              dinero: 15000,
              flags: { productorDeOtros: 1 },
            },
          },
        ],
      },
      {
        id: 'imponerte',
        texto: 'Producirlos y hacerlos sonar como vos',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Queda un disco tuyo cantado por otra gente. Ellos se sienten estafados y el disco no le interesa a nadie. Es la única vez que te llamaron para eso.',
            efectos: { stats: { credibilidad: -14, cordura: -6 }, dinero: 25000, flags: { productorDeOtros: 1 } },
          },
        ],
      },
      {
        id: 'rechazar',
        texto: 'Decirles que no y darles el teléfono de un ingeniero mejor',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Los mandás con quien corresponde. Hacen un disco enorme y en cada nota cuentan que vos los mandaste ahí. Ganás algo que no se cobra.',
            efectos: { stats: { credibilidad: 12, cordura: 6 } },
          },
        ],
      },
    ],
  },

  {
    id: 'leg-tributo',
    titulo: 'La banda tributo',
    categoria: 'prensa',
    texto:
      'Hay una banda que toca tus temas en bares, con un tipo disfrazado de vos, y llena más que vos en esas mismas ciudades.',
    requiere: { edadMin: 40, stats: { fama: { min: 40 } }, sinFlags: ['bandaTributo'] },
    peso: 2,
    opciones: [
      {
        id: 'subirse',
        texto: 'Aparecer sin avisar en uno de sus shows y tocar con ellos',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Subís al escenario en un bar de doscientas personas. El tipo que te imita se pone a llorar en el medio del tema. El video da la vuelta al mundo.',
            efectos: {
              stats: { fama: 18, credibilidad: 16, cordura: 10, quimica: 6 },
              flags: { bandaTributo: 1, momentoViral: 1 },
              titular: '"Se subió al escenario de su propia banda tributo"',
            },
          },
        ],
      },
      {
        id: 'demandar',
        texto: 'Mandarles una carta documento',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Dejan de tocar. Cien personas te putean en internet durante un mes. Tenés razón legal y nadie te la reconoce.',
            efectos: { stats: { credibilidad: -12, fama: -4 }, dinero: 5000, flags: { bandaTributo: 1 } },
          },
        ],
      },
      {
        id: 'contratarlos',
        texto: 'Contratarlos como teloneros de tu gira',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Es la idea más rara y más divertida del año. Salen notas en todos lados sobre el tipo que se telonea a sí mismo. Vendés más entradas que en la gira anterior.',
            efectos: {
              stats: { fama: 16, credibilidad: 8, cordura: 8 },
              dinero: 40000,
              flags: { bandaTributo: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'leg-docente',
    titulo: 'Dar clases',
    categoria: 'carrera',
    texto:
      'Una escuela de música te ofrece dar un seminario. Son doce pibes por curso y no pagan casi nada. Uno de ellos te va a superar y todavía no sabés cuál.',
    requiere: { edadMin: 42, stats: { talento: { min: 50 } }, sinFlags: ['docente'] },
    peso: 3,
    opciones: [
      {
        id: 'dar',
        texto: 'Darlo, y en serio',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Descubrís que enseñar te obliga a entender lo que hacías por instinto. Volvés a tocar mejor a los cincuenta que a los treinta. Ninguna revista lo va a registrar.',
            efectos: {
              stats: { talento: 16, cordura: 14, credibilidad: 10, inspiracion: 10, fama: -2 },
              dinero: 6000,
              flags: { docente: 1 },
            },
          },
        ],
      },
      {
        id: 'masterclass',
        texto: 'Hacer una masterclass carísima de un día',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Cobrás mucho por contar cuatro anécdotas y mostrar un pedal. Los que pagaron salen contentos y no aprendieron nada.',
            efectos: { stats: { credibilidad: -8, fama: 4 }, dinero: 25000 },
          },
        ],
      },
      {
        id: 'no',
        texto: 'No. Enseñar es admitir que se terminó',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'No vas. Seguís tocando en los mismos lugares con la misma gente. La escuela invita a otro y ese otro se convierte en el maestro de una generación.',
            efectos: { stats: { cordura: -6, credibilidad: -4 } },
          },
        ],
      },
    ],
  },

  {
    id: 'leg-reality',
    titulo: 'El programa de talentos',
    categoria: 'prensa',
    texto:
      'Te ofrecen ser jurado de un concurso de canto en televisión. Es un año de trabajo, mucha plata y aparecer en la casa de todo el país cuatro noches por semana.',
    requiere: { edadMin: 44, stats: { fama: { min: 30 } }, sinFlags: ['reality'] },
    peso: 3,
    opciones: [
      {
        id: 'aceptar',
        texto: 'Aceptar. Es un laburo',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Te volvés famosísimo entre gente que no escuchó un disco tuyo en su vida. Ganás una fortuna. Los músicos que te respetaban dejan de nombrarte.',
            efectos: {
              stats: { fama: 30, credibilidad: -26, cordura: -6 },
              dinero: 250000,
              flags: { reality: 1, famaTV: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Resultás ser buenísimo en eso. Sos el único jurado que le explica a los pibes cómo respirar y por qué. Ganás plata y ganás una generación de fans que no tenía cómo llegar a vos.',
            efectos: {
              stats: { fama: 28, credibilidad: -8, cordura: 6, talento: 4 },
              dinero: 250000,
              flags: { reality: 1, famaTV: 1, juradoRespetado: 1 },
            },
          },
        ],
      },
      {
        id: 'un-programa',
        texto: 'Ir como invitado a un solo programa',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Vas una noche, tocás un tema, decís dos cosas sensatas y te vas. La cantidad exacta de televisión que hay que hacer.',
            efectos: { stats: { fama: 10, credibilidad: -2 }, dinero: 15000 },
          },
        ],
      },
      {
        id: 'no',
        texto: 'No. Ni por toda la plata del mundo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Lo rechazás. Se lo dan a un colega tuyo que era mejor músico que vos y que a partir de ahí deja de ser músico.',
            efectos: { stats: { credibilidad: 14, cordura: 4 }, flags: { integro: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'leg-catalogo',
    titulo: 'Venden tu catálogo',
    categoria: 'plata',
    texto:
      'Un fondo de inversión ofrece comprar los derechos de todas tus canciones. Es una cifra que resuelve tres generaciones. Ellos decidirían para siempre dónde suena cada tema.',
    requiere: { edadMin: 48, discosMin: 4, stats: { fama: { min: 45 } }, sinFlags: ['vendioCatalogo'] },
    peso: 3,
    opciones: [
      {
        id: 'vender',
        texto: 'Vender todo',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Cobrás una cifra obscena. Tres años después escuchás tu canción más íntima en una publicidad de seguros y no podés hacer absolutamente nada al respecto.',
            efectos: {
              stats: { credibilidad: -18, cordura: -14, fama: 6 },
              dinero: 900000,
              flags: { vendioCatalogo: 1, arrepentimiento: 1 },
            },
          },
        ],
      },
      {
        id: 'parcial',
        texto: 'Vender la mitad y conservar los cinco temas que importan',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te quedás con el control de las cinco canciones que no querés escuchar en un supermercado. La cifra baja y dormís bien.',
            efectos: {
              stats: { cordura: 10, credibilidad: 4 },
              dinero: 450000,
              flags: { vendioCatalogo: 1, ordenado: 1 },
            },
          },
        ],
      },
      {
        id: 'no',
        texto: 'No vender nada',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te quedás con todo. Vas a cobrar menos y vas a decidir vos, hasta el último día, dónde suena cada cosa que escribiste.',
            efectos: { stats: { credibilidad: 16, cordura: 8 }, flags: { duenioDeLoSuyo: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'leg-voz',
    titulo: 'La voz ya no llega',
    categoria: 'salud',
    texto:
      'Hay tres notas del repertorio que ya no salen. El médico dice que se puede operar, con riesgo, o bajar todo dos tonos y aceptar que el instrumento envejeció.',
    requiere: { edadMin: 45, rol: ['Voz'], sinFlags: ['problemaVoz'] },
    peso: 3,
    opciones: [
      {
        id: 'operar',
        texto: 'Operarte',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Sale bien. Volvés con una voz que no es la de los veinte pero que llega a todos lados. Seis meses de silencio absoluto que casi te vuelven loco.',
            efectos: { stats: { talento: 10, cordura: -10, salud: -6, fama: 6 }, dinero: -40000, flags: { problemaVoz: 1 } },
          },
          {
            peso: 1,
            texto:
              'Sale mal. Te queda una voz rota, más grave, más quebrada. Resulta que esa voz cuenta mejor las canciones que la otra, y todo el mundo lo nota menos vos.',
            efectos: {
              stats: { talento: -8, credibilidad: 20, inspiracion: 12, cordura: -14 },
              dinero: -40000,
              flags: { problemaVoz: 1, vozRota: 1 },
            },
          },
        ],
      },
      {
        id: 'bajar',
        texto: 'Bajar los tonos y seguir',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Bajás todo dos tonos. Nadie del público lo nota. Los músicos sí, y ninguno dice nada, y así es como se envejece con dignidad en este oficio.',
            efectos: { stats: { cordura: 8, credibilidad: 6, fama: -4 }, flags: { problemaVoz: 1 } },
          },
        ],
      },
      {
        id: 'coro',
        texto: 'Meter dos coristas que tapen lo que no llega',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Funciona en vivo. En los últimos años te vas apoyando cada vez más en ellas hasta que en algunos temas casi no cantás. Nadie lo dice en voz alta.',
            efectos: { stats: { fama: 4, credibilidad: -10, cordura: -6 }, dinero: -20000, flags: { problemaVoz: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'leg-manos',
    titulo: 'Las manos',
    categoria: 'salud',
    texto:
      'Artrosis. El médico dice que si seguís tocando cuatro horas por día vas a perder movilidad más rápido. Hay infiltraciones que te dan seis meses sin dolor cada una.',
    requiere: { edadMin: 50, rol: ['Guitarra', 'Bajo', 'Teclados'], sinFlags: ['problemaManos'] },
    peso: 3,
    opciones: [
      {
        id: 'infiltrar',
        texto: 'Infiltrarte cada seis meses y no bajar el ritmo',
        riesgo: 'riesgoso',
        resultados: [
          {
            texto:
              'Seguís tocando como siempre durante ocho años más. Después, un día, no podés abrir una botella de agua y ahí se termina de verdad.',
            efectos: {
              stats: { fama: 10, talento: -14, salud: -18, cordura: -8 },
              dinero: 80000,
              flags: { problemaManos: 1, manosArruinadas: 1 },
            },
          },
        ],
      },
      {
        id: 'adaptar',
        texto: 'Cambiar la forma de tocar y simplificar todo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Sacás notas. Dejás espacios. Tocás la mitad de lo que tocabas y suena el doble de bien. Los guitarristas jóvenes copian eso sin saber por qué lo hacés.',
            efectos: {
              stats: { talento: 6, credibilidad: 16, cordura: 8, inspiracion: 10 },
              flags: { problemaManos: 1, estiloTardio: 1 },
            },
          },
        ],
      },
      {
        id: 'parar',
        texto: 'Dejar de tocar en vivo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te dedicás a componer y producir. No volvés a subirte a un escenario. Las manos te duran hasta el final y no te sirven para lo único que querías.',
            efectos: {
              stats: { fama: -20, salud: 12, cordura: -12, inspiracion: 8 },
              flags: { problemaManos: 1, retiroEscenario: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'leg-viejo-amigo',
    titulo: 'Se murió el primero',
    categoria: 'banda',
    texto:
      'Murió el que tocaba con vos en el garaje, el de la primera formación, el que se había ido antes de que fueran famosos. Te enterás por internet como todo el mundo.',
    requiere: { edadMin: 45, sinFlags: ['murioElPrimero'] },
    peso: 3,
    opciones: [
      {
        id: 'ir',
        texto: 'Ir al velorio, sin avisar y sin prensa',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Vas a un velorio en un barrio al que no volvías hace treinta años. Sos el único famoso y nadie te trata como tal. Es exactamente lo que necesitabas y no sabías.',
            efectos: {
              stats: { cordura: 10, inspiracion: 16, credibilidad: 10 },
              flags: { murioElPrimero: 1, volvioAlBarrio: 1 },
            },
          },
        ],
      },
      {
        id: 'homenaje',
        texto: 'Hacer un show homenaje con lo recaudado para la familia',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Se llena. Tocan los temas del primer demo, mal, como en el garaje. La familia se lleva lo suficiente para que nadie tenga que vender la casa.',
            efectos: {
              stats: { credibilidad: 18, quimica: 12, fama: 8, cordura: 6 },
              dinero: -20000,
              flags: { murioElPrimero: 1, tipoDecente: 1 },
            },
          },
        ],
      },
      {
        id: 'no-ir',
        texto: 'No ir. Hace treinta años que no se hablaban',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'No vas. Publicás un mensaje de dos líneas. Te lo vas a reprochar en una entrevista, doce años después, y vas a tener que parar la grabación.',
            efectos: {
              stats: { cordura: -16, credibilidad: -8, inspiracion: 8 },
              flags: { murioElPrimero: 1, culpa: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'leg-redescubrimiento',
    titulo: 'Una serie usó tu tema',
    categoria: 'prensa',
    texto:
      'Una serie que ven cincuenta millones de personas puso tu tema de 1978 en la escena final del último capítulo. En cuatro días sos el artista más escuchado del planeta.',
    requiere: { edadMin: 50, discosMin: 3, sinFlags: ['redescubrimiento'] },
    peso: 2,
    opciones: [
      {
        id: 'aprovechar',
        texto: 'Salir de gira ya mismo mientras dure',
        riesgo: 'dudoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Tocás para chicos de dieciséis años que se saben un tema tuyo y ninguno más. Es raro, es hermoso y dura dieciocho meses exactos.',
            efectos: {
              stats: { fama: 30, cordura: -6, salud: -10, credibilidad: 4 },
              dinero: 300000,
              flags: { redescubrimiento: 1, segundoAire: 1 },
              titular: '"Cuarenta y seis años después, {apodo} es número uno"',
            },
          },
          {
            peso: 1,
            texto:
              'El cuerpo no aguanta el ritmo. Cancelás la mitad de la gira. La ola pasa y vos te la perdiste por doce kilos y dos rodillas.',
            efectos: {
              stats: { fama: 14, salud: -22, cordura: -10 },
              dinero: 80000,
              flags: { redescubrimiento: 1 },
            },
          },
        ],
      },
      {
        id: 'disco-nuevo',
        texto: 'Usar el momento para editar un disco nuevo',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Sacás un disco nuevo en la cresta de la ola. No le importa a nadie que vino por el tema viejo, y le importa muchísimo a los que quedaron. Es un disco que envejece bien.',
            efectos: {
              stats: { credibilidad: 22, inspiracion: 12, fama: 16 },
              dinero: 120000,
              publicaDisco: true,
              flags: { redescubrimiento: 1, segundoAire: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'El disco nuevo aparece en todas las listas de "peores discos del año". La ola se retira y deja eso en la playa.',
            efectos: {
              stats: { credibilidad: -14, fama: 10 },
              dinero: 60000,
              publicaDisco: true,
              flags: { redescubrimiento: 1 },
            },
          },
        ],
      },
      {
        id: 'nada',
        texto: 'No hacer nada y dejar que pase',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Cobrás los derechos y no cambiás nada de tu vida. Es la reacción más sana y la que menos entiende tu manager.',
            efectos: { stats: { cordura: 12, fama: 12 }, dinero: 180000, flags: { redescubrimiento: 1 } },
          },
        ],
      },
    ],
  },

  {
    id: 'leg-casa-campo',
    titulo: 'La casa en el campo',
    categoria: 'salud',
    texto:
      'Aparece a la venta una casa vieja a cuatrocientos kilómetros de todo. Tiene un galpón que serviría de estudio y no llega señal de teléfono.',
    requiere: { edadMin: 42, dineroMin: 60000, sinFlags: ['casaCampo'] },
    peso: 3,
    opciones: [
      {
        id: 'comprar',
        texto: 'Comprarla y mudarte',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te mudás. Los primeros seis meses te aburrís como nunca. Después empezás a escuchar cosas que hacía veinte años que no escuchabas, empezando por el silencio.',
            efectos: {
              stats: { cordura: 24, salud: 16, adiccion: -20, inspiracion: 14, fama: -14 },
              dinero: -70000,
              flags: { casaCampo: 1, retirado: 1 },
            },
          },
        ],
      },
      {
        id: 'estudio',
        texto: 'Comprarla y convertirla en estudio para otros',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Se convierte en el lugar donde media escena va a grabar. Vos vivís ahí y les cocinás. Ganás plata, ganás compañía y ganás una excusa para no componer.',
            efectos: {
              stats: { cordura: 16, quimica: 14, credibilidad: 12, inspiracion: -8 },
              dinero: 20000,
              flags: { casaCampo: 1, estudioPropio: 1 },
            },
          },
        ],
      },
      {
        id: 'no',
        texto: 'No comprarla. Necesitás la ciudad',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Te quedás donde estás, con el ruido, los bares y la gente. Es peor para el cuerpo y mejor para las canciones, o eso te decís.',
            efectos: { stats: { inspiracion: 8, salud: -8, adiccion: 6 } },
          },
        ],
      },
    ],
  },

  {
    id: 'leg-ultimo-show',
    titulo: '¿Es el último?',
    categoria: 'carrera',
    texto:
      'El cuerpo no da. La voz no da. La ganas van y vienen. Alguien te pregunta, en una entrevista, cuándo vas a parar, y por primera vez no tenés una respuesta ingeniosa.',
    requiere: { edadMin: 58, sinFlags: ['anuncioRetiro'] },
    peso: 4,
    opciones: [
      {
        id: 'despedirse',
        texto: 'Anunciar una gira de despedida y cumplirla',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Anunciás el final con un año de anticipación. Se agota todo en todos lados. La última noche tocás dos horas y media y saludás desde el borde del escenario durante once minutos.',
            efectos: {
              stats: { fama: 22, credibilidad: 18, cordura: 16 },
              dinero: 200000,
              flags: { anuncioRetiro: 1, despedidaDigna: 1 },
              titular: '"El último show: {apodo} se despidió de los escenarios"',
            },
          },
        ],
      },
      {
        id: 'seguir',
        texto: 'Seguir hasta que el cuerpo diga basta',
        riesgo: 'riesgoso',
        resultados: [
          {
            peso: 2,
            texto:
              'Seguís tocando en teatros cada vez más chicos, con menos gente y con el mismo compromiso. Los que van, van a ver a alguien que no sabe hacer otra cosa. Eso también es una forma de grandeza.',
            efectos: {
              stats: { salud: -16, credibilidad: 14, cordura: 8, fama: -8 },
              dinero: 40000,
              flags: { anuncioRetiro: 1, hastaElFinal: 1 },
            },
          },
          {
            peso: 1,
            texto:
              'Seguís hasta que una noche, en la mitad de un tema, tenés que sentarte y no podés seguir. Terminan los músicos solos. Nunca más volvés a un escenario.',
            efectos: {
              stats: { salud: -26, fama: -10, cordura: -12 },
              flags: { anuncioRetiro: 1, retiroForzado: 1 },
            },
          },
        ],
      },
      {
        id: 'sin-avisar',
        texto: 'Dejar de tocar sin anunciar nada',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Un martes cualquiera no aceptás la fecha siguiente. Ni vos sabías que ese show de un jueves en un teatro de provincia iba a ser el último. Nadie aplaudió de pie porque nadie sabía.',
            efectos: {
              stats: { fama: -18, cordura: 10, credibilidad: 10 },
              flags: { anuncioRetiro: 1, retiroSilencioso: 1 },
            },
          },
        ],
      },
    ],
  },

  {
    id: 'leg-nieto',
    titulo: 'El chico con la guitarra',
    categoria: 'amor',
    texto:
      'Un pibe de la familia, catorce años, te muestra algo que compuso. Es malo. Pero hay dos compases, en la mitad, que no se le ocurrirían a nadie.',
    requiere: { edadMin: 55, flags: ['hijo'] },
    peso: 3,
    opciones: [
      {
        id: 'honesto',
        texto: 'Decirle la verdad completa, incluidos los dos compases',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Le decís que casi todo está mal y que dos compases son geniales, y le explicás por qué. Se enoja, se va, y a los tres días vuelve con otra cosa. Ahí ya está perdido, como vos.',
            efectos: { stats: { cordura: 16, credibilidad: 8, inspiracion: 10 }, flags: { herederoMusical: 1 } },
          },
        ],
      },
      {
        id: 'elogiar',
        texto: 'Decirle que está buenísimo',
        riesgo: 'seguro',
        resultados: [
          {
            texto:
              'Se va contento. Sigue componiendo igual durante años, sin que nadie le diga nada útil, hasta que se aburre y lo deja.',
            efectos: { stats: { cordura: 4, inspiracion: -4 } },
          },
        ],
      },
      {
        id: 'disuadir',
        texto: 'Decirle que se dedique a cualquier otra cosa',
        riesgo: 'dudoso',
        resultados: [
          {
            texto:
              'Le contás todo: los sellos, las giras, lo que le hiciste a tu cuerpo, la gente que quedó en el camino. Te escucha. Se dedica a otra cosa y es feliz. Nunca vas a saber si hiciste bien.',
            efectos: { stats: { cordura: -8, credibilidad: 6, inspiracion: 8 }, flags: { loDisuadio: 1 } },
          },
        ],
      },
    ],
  },
]
