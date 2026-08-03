import type { Final } from '../engine/types'

// Los finales. `prioridad` desempata cuando varios aplican: gana el más alto.
// Los `soloForzado` sólo se alcanzan si un evento los dispara explícitamente.

export const FINALES: Final[] = [
  // -------------------------------------------------------------------------
  // Finales forzados por eventos-mito
  // -------------------------------------------------------------------------
  {
    id: 'club-27',
    titulo: 'El club de los 27',
    tono: 'tragico',
    prioridad: 100,
    soloForzado: true,
    inspiracion: 'Robert Johnson, Brian Jones, Jimi Hendrix, Janis Joplin, Jim Morrison, Kurt Cobain, Amy Winehouse.',
    texto:
      'Te encontraron a la mañana siguiente. Tenías veintisiete años y tres discos, y el tercero acababa de entrar en todas las listas del mundo.\n\nEl obituario que sale en la revista importante ocupa nueve páginas y usa catorce veces la palabra "inevitable", que es la mentira más cómoda que se inventó para hablar de esto. No era inevitable. Había una hora, un llamado y una puerta, y ninguna de las tres cosas pasó.\n\nEn los años siguientes van a editar todo lo que grabaste, incluidas las tomas descartadas, los ensayos y una entrevista de radio de siete minutos. Vas a vender más muerto que vivo. Cada nueva generación te va a descubrir a los diecisiete y te va a poner en la pared, y ninguna te va a conocer.\n\nTe convertiste en un número de una lista. Es la clase de inmortalidad que no sirve para nada.',
    epitafio: 'Entró a la lista más famosa y más idiota de la historia de la música.',
  },
  {
    id: 'salto-fallido',
    titulo: 'Nueve pisos',
    tono: 'tragico',
    prioridad: 100,
    soloForzado: true,
    inspiracion: 'Charly García saltó del noveno piso de un hotel en Mendoza a la pileta, en 2000, y salió nadando.',
    texto:
      'Calculaste mal por un metro y medio.\n\nLa versión oficial habló de un accidente. Los diez que estaban en esa habitación dieron diez versiones distintas y ninguno de ellos volvió a hablar del tema en público, ni entre ellos.\n\nDurante años, en cada hotel de ese país, algún periodista iba a preguntar por la habitación del noveno piso. El hotel la renumeró. Después la clausuró. Después demolieron el edificio entero y siguieron preguntando.\n\nLo peor es que lo habías hecho para que se rieran.',
    epitafio: 'Le erró por un metro y medio a la inmortalidad.',
  },
  {
    id: 'el-silencio',
    titulo: 'El silencio',
    tono: 'tragico',
    prioridad: 100,
    soloForzado: true,
    sensible: true,
    texto:
      'Fue un martes. No hubo nota, no hubo señal y no hubo nada que nadie pudiera señalar después y decir "ahí estaba".\n\nLos que te querían van a pasar el resto de su vida rearmando los últimos meses buscando el momento en que podrían haber hecho algo distinto. Van a encontrar catorce momentos así. Ninguno de esos catorce era el momento, porque el momento no funciona de esa manera, pero eso no se lo va a poder explicar nadie.\n\nTus discos siguen ahí. La gente los va a seguir escuchando y a algunos les van a salvar la noche, que es más de lo que hace casi todo el mundo con su vida.\n\nLa parte de tu historia que se cuenta mal es esta. No fue poético, no fue una decisión de artista y no tuvo nada que ver con el talento. Fue una enfermedad que no se trató a tiempo.',
    epitafio: 'Nadie escribe la mejor parte de su historia al final.',
  },
  {
    id: 'el-invernadero',
    titulo: 'El invernadero',
    tono: 'tragico',
    prioridad: 100,
    soloForzado: true,
    sensible: true,
    inspiracion: 'Kurt Cobain, 1994. Tenía 27 años.',
    texto:
      'Un electricista te encontró tres días después.\n\nEl mundo entero decidió, en cuestión de horas, que eso significaba algo. Se escribieron miles de páginas sobre lo que tu decisión decía de una generación, de una industria y de un país. Se vendieron millones de discos y de remeras con tu cara.\n\nCasi nadie escribió sobre la parte médica. Sobre el dolor de estómago crónico que nadie te terminó de diagnosticar en años. Sobre la depresión sin tratar. Sobre la sustancia que estabas usando para tapar las dos cosas. Sobre lo poco poético y lo muy prevenible que era todo.\n\nLa gente que te quería tuvo que ver tu cara en un poster durante treinta años.\n\nHabía una lista de llamados sin devolver. El primero era el baterista.',
    epitafio: 'Convirtieron en símbolo lo que era una urgencia médica.',
  },
  {
    id: 'desaparecido',
    titulo: 'El auto en el puente',
    tono: 'misterioso',
    prioridad: 100,
    soloForzado: true,
    inspiracion: 'Richey Edwards, de Manic Street Preachers, desapareció en 1995. Nunca apareció.',
    texto:
      'El auto quedó estacionado en el puente con las llaves puestas. Nunca apareció nada más.\n\nDurante los primeros años hubo búsquedas, pistas falsas y una recompensa. Después hubo teorías. Después hubo un documental. Después hubo gente que juraba haberte visto en un mercado de otro país, con barba, comprando naranjas.\n\nTu familia no pudo cerrar nada durante décadas. Legalmente tardaron años en poder declarar lo que todos suponían y nadie sabía. Esa fue la parte cruel: no la ausencia, sino la ausencia sin punto final.\n\nTus discos se venden más que nunca. Cada tanto alguien encuentra en una letra vieja una pista que lo explicaría todo. Nunca explica nada.\n\nHay una versión en la que estás vivo en un pueblo de mil habitantes. Es la que prefiere todo el mundo.',
    epitafio: 'Se fue sin dejar una versión final.',
  },

  // -------------------------------------------------------------------------
  // Muertes por el cuerpo
  // -------------------------------------------------------------------------
  {
    id: 'sobredosis',
    titulo: 'La habitación del hotel',
    tono: 'tragico',
    prioridad: 80,
    requiere: { stats: { adiccion: { min: 75 } } },
    texto:
      'Fue en una habitación de hotel, en una ciudad en la que no conocías a nadie, después de un show que había estado bien.\n\nEl parte médico habla de una combinación. No fue una sola cosa: fueron seis, y ninguna de las seis te habría matado sola, y por eso nadie se alarmó nunca.\n\nHubo señales durante ocho años. Hubo gente que las vio y no dijo nada porque el show tenía que salir, porque las fechas estaban vendidas, porque hablar de eso era incómodo y porque siempre había alguien más grave alrededor. La industria tiene un mecanismo muy afinado para no ver esto: se llama "es su forma de ser".\n\nEn el homenaje tocaron tus temas quince artistas y todos dijeron que eras el más talentoso de tu generación. Es probable que fuera cierto.',
    epitafio: 'Nadie dijo nada durante ocho años porque las fechas estaban vendidas.',
  },
  {
    id: 'el-cuerpo-dijo-basta',
    titulo: 'El cuerpo dijo basta',
    tono: 'tragico',
    prioridad: 60,
    requiere: { stats: { salud: { max: 5 } } },
    texto:
      'No fue una noche épica ni un titular. Fue el hígado, o el corazón, o las dos cosas a la vez, después de treinta años de tratar a un cuerpo como si fuera un equipo de alquiler.\n\nHabías dejado casi todo hacía tiempo. Ese es el chiste cruel: la factura llega mucho después de que cerraste la cuenta.\n\nEn los últimos meses estuviste tranquilo, escuchando discos y hablando por teléfono con gente con la que no hablabas hace años. Alcanzaste a arreglar tres cosas de las siete que tenías pendientes, que es un porcentaje mejor que el de casi todo el mundo.\n\nEl show que tenías anunciado para el mes siguiente se convirtió en un homenaje. Se llenó.',
    epitafio: 'La factura llega mucho después de que cerraste la cuenta.',
  },
  {
    id: 'la-ruta',
    titulo: 'La ruta',
    tono: 'tragico',
    prioridad: 85,
    requiere: { flags: ['moto'], stats: { salud: { max: 28 } }, edadMax: 58 },
    inspiracion: 'Duane Allman y Berry Oakley murieron en moto, a once meses y tres cuadras de distancia.',
    texto:
      'Una curva que conocías de memoria, de noche, con el asfalto mojado por una lluvia que había pasado hace dos horas.\n\nNo hubo alcohol en sangre ni nada raro en el informe. Hubo una moto, una curva y muy mala suerte, que es la forma más injusta de terminar porque no le sirve a nadie como moraleja.\n\nLos que te conocían dicen que era el único momento del día en que se te veía tranquilo. Hay una foto tuya sobre esa moto, en blanco y negro, que va a ilustrar todas las notas que se escriban sobre vos durante cincuenta años.\n\nDejaste un disco a medio grabar. Lo terminan tus compañeros y queda mejor de lo que hubiera quedado, y eso es algo que ellos nunca van a poder decir en voz alta.',
    epitafio: 'Era el único momento del día en que se lo veía tranquilo.',
  },
  {
    id: 'el-avion',
    titulo: 'El avión',
    tono: 'tragico',
    prioridad: 88,
    requiere: {
      flags: ['avionGira'],
      stats: { fama: { min: 55 }, salud: { max: 30 } },
      edadMax: 58,
      chance: 0.5,
    },
    inspiracion:
      'Buddy Holly (1959), Otis Redding (1967), Lynyrd Skynyrd (1977), Randy Rhoads (1982): la lista es larga.',
    texto:
      'El avión de la gira, el barato, el que daba trabajo.\n\nCayó en un campo a cuarenta kilómetros del aeropuerto. Iban ocho personas: la banda, dos plomos y el piloto. Sobrevivieron tres.\n\nEl informe oficial habló de combustible. La versión de siempre: nadie revisó, nadie quiso gastar, todos tenían apuro por llegar a la fecha siguiente. La industria mata así, sin querer, por administración.\n\nEl disco que acababan de editar entra en el número uno tres semanas después. Los tres que sobrevivieron van a tardar quince años en volver a tocar juntos, y cuando lo hagan, van a tocar tus partes exactamente como las grabaste, nota por nota, porque cambiarlas les parecería una falta de respeto.',
    epitafio: 'La industria también mata por administración.',
  },

  // -------------------------------------------------------------------------
  // Finales por cordura
  // -------------------------------------------------------------------------
  {
    id: 'el-que-se-fue-de-la-cabeza',
    titulo: 'El faro',
    tono: 'misterioso',
    prioridad: 70,
    requiere: { stats: { cordura: { max: 10 } }, sinFlags: ['tratamiento'] },
    inspiracion: 'Syd Barrett y Peter Green: dos formas distintas de irse sin morirse.',
    texto:
      'No te moriste. Te fuiste, que es distinto y que en cierto modo es peor de contar.\n\nUn día dejaste de reconocer a la gente en los ensayos. Después dejaste de ir. Después volviste una tarde al estudio, con el pelo cortado al ras, y te quedaste parado en el fondo mirando cómo grababan una canción tuya, y nadie te reconoció hasta que te fuiste.\n\nViviste otros cuarenta años en la casa de tu vieja, pintando y andando en bicicleta. No tocaste nunca más. Cuando venían periodistas, tu hermana los atendía en la puerta y les decía que no.\n\nCada tanto llegaba un cheque enorme por regalías de canciones que habías escrito a los veintitrés años y que seguían siendo geniales. Vos no sabías bien de dónde venía esa plata y no te importaba.\n\nToda una industria construyó un mito hermoso sobre lo que te pasó. Lo que te pasó fue una enfermedad, y no tuvo nada de hermoso para los que estaban ahí.',
    epitafio: 'Se fue sin morirse, que es la forma más difícil de perder a alguien.',
  },

  // -------------------------------------------------------------------------
  // Finales épicos
  // -------------------------------------------------------------------------
  {
    id: 'el-inmortal',
    titulo: 'El inmortal',
    tono: 'epico',
    prioridad: 75,
    requiere: {
      edadMin: 64,
      algunaFlag: ['pasoCerca', 'casiMuerte', 'lineaCruzada', 'giraRecord', 'leyendaHotel'],
      stats: { adiccion: { min: 20 }, fama: { min: 52 } },
    },
    inspiracion: 'Keith Richards, Ozzy Osbourne, Iggy Pop: los que hicieron todo mal y siguen acá.',
    texto:
      'Hiciste absolutamente todo lo que no había que hacer durante cincuenta años y llegaste al final con una sonrisa incompleta y el hígado intacto contra toda evidencia científica.\n\nSos, oficialmente, un chiste que camina. Hay memes sobre tu inmortalidad. En cada catástrofe global alguien tuitea que lo único que va a sobrevivir sos vos y las cucarachas. Te causa mucha gracia y colaborás activamente con el chiste.\n\nEnterraste a casi todos los de tu generación. Fuiste a todos los velorios. En algunos tocaste. Eso no aparece en los memes.\n\nSeguís girando a una edad en la que la gente normal no sale de la casa. Tocás peor que antes y a nadie le importa, porque la gente no va a escucharte tocar: va a ver que seguís ahí.\n\nHay algo profundamente injusto en esto y vos sos el primero en admitirlo.',
    epitafio: 'Enterró a toda su generación y fue a todos los velorios.',
  },
  {
    id: 'la-leyenda-viva',
    titulo: 'La leyenda viva',
    tono: 'epico',
    prioridad: 72,
    requiere: {
      edadMin: 62,
      discosMin: 5,
      stats: { fama: { min: 78 }, credibilidad: { min: 65 } },
    },
    texto:
      'Llegaste al final siendo lo que casi nadie logra ser: importante y respetado al mismo tiempo, en vida.\n\nTus discos se estudian. Tus decisiones se citan. Hay tres generaciones de músicos que empezaron porque te escucharon, y muchos de ellos ya son más famosos que vos y siguen diciendo tu nombre en las entrevistas.\n\nNo te moriste joven, no te vendiste del todo, no te convertiste en una parodia y no dejaste de hacer canciones nuevas. Ese combo lo consiguen menos de veinte personas por siglo.\n\nEn el último show llenaste un estadio con gente de sesenta y gente de dieciocho cantando lo mismo, y hubo un momento, en el segundo bis, en que dejaste de tocar y se escuchó a cincuenta mil personas sosteniendo una canción que escribiste solo en una pieza alquilada.\n\nEso pasó. Nadie te lo puede sacar.',
    epitafio: 'Importante y respetado al mismo tiempo, en vida: menos de veinte por siglo.',
  },
  {
    id: 'muerte-en-el-escenario',
    titulo: 'Arriba del escenario',
    tono: 'epico',
    prioridad: 90,
    requiere: { edadMin: 55, flags: ['hastaElFinal'], stats: { salud: { max: 35 } } },
    texto:
      'Te fuiste haciendo exactamente lo que querías hacer.\n\nFue en el tercer bis, en un teatro de mil doscientas personas, en la mitad del tema que siempre cerraba. Te sentaste en el borde del escenario como hacías siempre en esa parte, sonreíste, y no te levantaste.\n\nHubo un momento largo en que el público no entendió y siguió cantando la parte que le tocaba. Los músicos tampoco entendieron enseguida. La grabación existe y nadie la publicó nunca, y todos los que estuvieron ahí están de acuerdo con esa decisión.\n\nMucha gente dice que es la forma en que hubieras querido irte. Es cierto, y también es cierto que preferías no irte todavía.\n\nEn los meses siguientes, todas las bandas del país cerraron sus shows con ese tema.',
    epitafio: 'Se sentó en el borde del escenario como siempre y no se levantó.',
  },
  {
    id: 'el-mito-que-volvio',
    titulo: 'El que volvió',
    tono: 'epico',
    prioridad: 78,
    requiere: { edadMin: 55, flags: ['rehabilitado'], stats: { fama: { min: 60 }, cordura: { min: 55 } } },
    texto:
      'Te diste por muerto tres veces y volviste tres veces, y la tercera fue la buena.\n\nHubo diez años en el medio de tu biografía que están documentados por partes médicos y expedientes judiciales en lugar de por discos. Todo el mundo te había dado por terminado, incluida la gente que te quería, que ya había empezado a hablar de vos en pasado.\n\nLa vuelta no fue épica: fue lentísima. Fueron tres años de terapia aburridísima, un divorcio, una mudanza y ciento cuarenta reuniones en sótanos de iglesias con gente que no sabía quién eras.\n\nEl disco que sacaste después de eso es tranquilo, corto y sin ninguna épica, y es el que más cartas te hizo recibir en toda tu vida. Cartas de gente contando que lo escuchó en su peor momento.\n\nDe todo lo que hiciste, esa pila de cartas es lo único que vas a llevarte.',
    epitafio: 'La vuelta no fue épica: fue lentísima, y por eso funcionó.',
  },

  // -------------------------------------------------------------------------
  // Finales agridulces
  // -------------------------------------------------------------------------
  {
    id: 'el-jubilado',
    titulo: 'La casa con jardín',
    tono: 'agridulce',
    prioridad: 26,
    requiere: { edadMin: 62 },
    texto:
      'Te moriste viejo, en tu cama, rodeado de gente que te quería, que es exactamente lo que jurabas a los veinte que no querías.\n\nLos últimos veinte años fueron tranquilos. Tocabas los sábados en un bar del pueblo con tres tipos que no sabían muy bien quién habías sido. Cobrabas la cena. Era la mejor banda en la que estuviste desde el garaje.\n\nEn el velorio hubo cuarenta personas y ningún periodista. Al día siguiente salió una nota de media página en un diario, con una foto de los setenta en la que estás irreconocible.\n\nEsa misma semana, en algún lugar del mundo, tres chicos de dieciséis años estaban aprendiendo a tocar un tema tuyo en un garaje sin saber que te habías muerto, y eso es tan cerca de la eternidad como llega cualquiera.',
    epitafio: 'La mejor banda en la que estuvo fue la de los sábados en el bar del pueblo.',
  },
  {
    id: 'el-que-eligio-vivir',
    titulo: 'El que eligió el aburrimiento',
    tono: 'agridulce',
    prioridad: 55,
    requiere: { edadMin: 55, flags: ['eligioVivir'], stats: { cordura: { min: 60 } } },
    texto:
      'En algún momento, en una habitación, elegiste la opción aburrida. Y después la volviste a elegir, y después otra vez, durante treinta años.\n\nNo hay épica en esa decisión. No hay foto, no hay tapa de revista y no hay documental. La gente que escribe sobre rock no sabe contar esta parte, así que no la cuenta: en tu biografía oficial hay un salto de doce años que se resuelve con la frase "se alejó un tiempo de los escenarios".\n\nEn esos doce años criaste a alguien, aprendiste a cocinar, te aburriste muchísimo y escribiste catorce canciones que no le mostraste a nadie.\n\nLlegaste a viejo. Fuiste a los velorios de casi todos tus amigos de aquella época y en cada uno pensaste lo mismo: que estuviste a un solo "sí" de distancia de estar en ese cajón.\n\nNadie te va a hacer una remera. Está bien.',
    epitafio: 'Estuvo a un solo "sí" de distancia y eligió la opción aburrida.',
  },
  {
    id: 'el-productor',
    titulo: 'Del otro lado del vidrio',
    tono: 'agridulce',
    prioridad: 58,
    requiere: { edadMin: 55, flags: ['productorDeOtros'] },
    texto:
      'Tu carrera como artista fue buena. Tu carrera como productor fue histórica.\n\nEn el estudio descubriste que servías más para escuchar que para tocar. Que sabías exactamente qué le faltaba a una canción ajena en los primeros treinta segundos, y que esa habilidad no la tenía casi nadie.\n\nHay cuarenta discos que existen gracias a vos y que no llevan tu nombre en la tapa. Hay siete bandas enormes que se hubieran separado si no las hubieras sentado en una habitación a hablar. Hay una generación entera de músicos que te llama para preguntarte cosas.\n\nDe vez en cuando, tarde, escuchás alguno de tus discos viejos y pensás en el pibe que los grabó y le tenés cariño y un poco de lástima.\n\nEn los créditos de los discos importantes, tu nombre está en letra chica. Sabés leer letra chica.',
    epitafio: 'Cuarenta discos que no llevan su nombre en la tapa.',
  },
  {
    id: 'el-tipo-del-barrio',
    titulo: 'El tipo del barrio',
    tono: 'agridulce',
    prioridad: 30,
    requiere: { edadMin: 50, discosMin: 2, stats: { fama: { max: 40 } } },
    texto:
      'No pasó. Eso es todo. No hubo estadios, no hubo tapas y no hubo un disco que te cambiara la vida.\n\nHubo cuatro discos que quinientas personas conocen de memoria y defienden con una violencia hermosa cada vez que alguien los menciona. Hubo veinte años de shows en lugares chicos donde nunca faltó gente. Hubo dos temas que en tu ciudad conoce todo el mundo aunque casi nadie sepa que son tuyos.\n\nTrabajaste de otra cosa la mayor parte de tu vida. Tocabas los fines de semana. Nunca dejaste.\n\nEn tu barrio sos "el músico". Los pibes te saludan. Un día, uno de esos pibes va a llegar mucho más lejos que vos y en la primera entrevista importante va a decir tu nombre, y el periodista no va a saber de quién habla, y él va a insistir.\n\nEso es todo lo que hay. Es más de lo que consigue el noventa y nueve por ciento.',
    epitafio: 'Cuatro discos que quinientas personas defienden con violencia hermosa.',
  },
  {
    id: 'el-que-se-fue-al-campo',
    titulo: 'El silencio del campo',
    tono: 'agridulce',
    prioridad: 62,
    requiere: { edadMin: 55, flags: ['casaCampo'] },
    texto:
      'Te fuiste a cuatrocientos kilómetros de todo y no volviste.\n\nLos primeros años la industria seguía llamando. Después llamaba cada tanto. Después dejó de llamar y ese fue el mejor día de todos, aunque te dolió más de lo que estabas dispuesto a admitir.\n\nSeguiste componiendo hasta el final, en un galpón, con un grabador viejo y sin ninguna intención de editar nada. Hay ciento sesenta canciones en unas cajas. Alguien va a encontrarlas. Vas a ser mucho más famoso muerto por esas cajas que vivo por tus discos, y la ironía te hubiera divertido bastante.\n\nTe moriste un invierno, en una casa con la estufa prendida, escuchando discos de otros. Tardaron dos días en enterarse en la ciudad.\n\nEn el pueblo fueron ochenta personas al velorio. Ninguna sabía que habías llenado estadios.',
    epitafio: 'Ciento sesenta canciones en unas cajas, en un galpón, a cuatrocientos kilómetros de todo.',
  },

  // -------------------------------------------------------------------------
  // Finales patéticos
  // -------------------------------------------------------------------------
  {
    id: 'el-sellout',
    titulo: 'La marca',
    tono: 'patetico',
    prioridad: 65,
    requiere: {
      edadMin: 50,
      algunaFlag: ['selloutPublico', 'famaTV', 'vendioCatalogo', 'jinglero'],
      stats: { credibilidad: { max: 52 } },
    },
    texto:
      'Terminaste siendo una marca, que es lo que le pasa a los que sobreviven sin decidir qué querían ser.\n\nTu cara está en una línea de auriculares. Tu tema más importante es la cortina de un programa de cocina. Diste una charla motivacional en un congreso de empresas donde explicaste el "espíritu rockero aplicado al liderazgo" y cobraste por eso más que por cualquier disco.\n\nLos músicos de tu generación no te invitan a nada. Los periodistas te llaman sólo para que opines de la muerte de otros. En los documentales aparecés en el minuto ochenta, con buena luz, diciendo generalidades.\n\nGanaste una cantidad de plata que no vas a poder gastar.\n\nCada tanto, muy tarde, ponés el primer disco y llegás hasta el cuarto tema y lo sacás, porque ese tipo que grabó eso te caía mejor que vos.',
    epitafio: 'Terminó explicando el espíritu rockero aplicado al liderazgo empresarial.',
  },
  {
    id: 'el-quebrado',
    titulo: 'El remate',
    tono: 'patetico',
    prioridad: 61,
    requiere: { dineroMax: -60000, edadMin: 45 },
    texto:
      'Vendiste todo. Las guitarras primero, después los discos de oro, después la casa.\n\nNo hubo una gran catástrofe: hubo cuarenta años de firmar cosas sin leerlas, de confiar en gente que no lo merecía y de gastar como si la plata fuera a seguir entrando para siempre. La industria está diseñada para que esto pase y pasa siempre, y aún así cada uno cree que es el primero al que le sucede.\n\nEl remate de tus instrumentos salió en los diarios. Tu guitarra principal la compró un coleccionista de otro país por una cifra que hubiera resuelto tus últimos quince años.\n\nSeguiste tocando hasta el final porque no había alternativa, en fiestas privadas y en shows de nostalgia, para gente que te aplaudía con lástima.\n\nLo peor no fue la plata. Lo peor fue tener que sonreír en esos shows.',
    epitafio: 'Cuarenta años de firmar cosas sin leerlas.',
  },
  {
    id: 'la-parodia',
    titulo: 'La gira de los muertos',
    tono: 'patetico',
    prioridad: 76,
    requiere: { edadMin: 58, flags: ['seQuedoConElNombre'] },
    texto:
      'Seguiste girando con el nombre de la banda durante veinticinco años sin un solo integrante original además de vos.\n\nLos músicos que te acompañan son buenísimos, tienen treinta años menos y aprendieron las partes de un disco. Te llaman de usted. Ninguno estuvo en la habitación donde se escribieron esas canciones.\n\nLos ex integrantes te ganaron dos juicios y perdieron uno. Uno de ellos se murió y no fuiste al velorio. Otro toca los mismos temas en teatros más chicos con un nombre casi igual al tuyo y en algunas ciudades tocan la misma semana.\n\nEl público que va sabe perfectamente lo que está viendo y va igual, porque necesita escuchar esas canciones en algún lado.\n\nHay una foto de la formación original en el fondo del escenario, enorme, todas las noches. Vos elegiste esa foto.',
    epitafio: 'Veinticinco años tocando con la foto de sus amigos de fondo.',
  },
  {
    id: 'el-olvidado',
    titulo: 'El asterisco',
    tono: 'patetico',
    prioridad: 34,
    requiere: { stats: { fama: { max: 24 } }, edadMin: 45 },
    texto:
      'Estuviste ahí. Eso es todo lo que se puede decir con certeza.\n\nHubo un momento, alrededor de tus veinticuatro años, en que todo estaba por pasar. Había interés, había una banda buena y había dos o tres canciones que servían. Y después algo no se dio, y no fue una sola cosa: fueron catorce cosas chiquitas, ninguna de las cuales fue enteramente culpa tuya y todas las cuales podrías haber manejado mejor.\n\nSeguiste tocando doce años más, cada vez con menos gente. Después conseguiste un trabajo estable y guardaste el equipo en un placard, no lo vendiste, que es distinto.\n\nApareces en un libro sobre la escena de tu ciudad, en una enumeración, entre comas, sin adjetivo.\n\nUna vez, en un bar, escuchaste a dos pibes hablar de una banda vieja que les habían pasado, y era la tuya, y no dijiste nada.',
    epitafio: 'Aparece en una enumeración, entre comas, sin adjetivo.',
  },

  // -------------------------------------------------------------------------
  // Finales raros
  // -------------------------------------------------------------------------
  {
    id: 'el-converso',
    titulo: 'La conversión',
    tono: 'agridulce',
    prioridad: 66,
    requiere: {
      edadMin: 45,
      algunaFlag: ['iluminado', 'guru'],
      stats: { adiccion: { max: 20 }, cordura: { min: 45 } },
    },
    inspiracion: 'Cat Stevens, Little Richard, Alice Cooper: todos volvieron distintos.',
    texto:
      'Un día encontraste algo y dejaste todo lo demás.\n\nRenunciaste a la música popular de un día para el otro. Vendiste los instrumentos y donaste la plata. Diste una entrevista incomodísima donde explicaste que todo lo anterior había sido un error, y cientos de miles de personas que habían crecido con esos discos lo tomaron como una traición personal.\n\nDurante quince años no tocaste una nota. Después volviste, distinto, con canciones más simples y menos interesantes, y una paz que no tenías antes y que a nadie le sirve para bailar.\n\nDe los dos, el que grabó los discos importantes te parece un pobre tipo asustado. De los dos, el que le interesa al mundo es él.\n\nMoriste tranquilo, lo cual, viendo cómo veníamos, no es poca cosa.',
    epitafio: 'Encontró la paz y la paz no sirve para bailar.',
  },
  {
    id: 'el-preso',
    titulo: 'Adentro',
    tono: 'patetico',
    prioridad: 82,
    requiere: { algunaFlag: ['causaPenal'], stats: { cordura: { max: 30 } }, edadMin: 35 },
    texto:
      'Terminaste preso, que es un final que la mitología del rock nunca supo cómo procesar.\n\nNo fue por drogas ni por una causa romántica: fue por algo estúpido, evitable y violento, que hiciste en un momento en que hacía años que nadie te decía que no.\n\nEse es el punto que casi nadie entiende sobre la fama: al principio te protege de las consecuencias, y esa protección es lo que te termina hundiendo. Durante veinte años, cada vez que hiciste algo grave, hubo un manager, un abogado o un sello que lo arregló. Aprendiste que no había fondo. Había.\n\nGrabaste dos discos adentro. Uno es malo y el otro es lo mejor que hiciste en treinta años.\n\nEn las entrevistas que diste desde ahí, decís que asumís tu responsabilidad. Es lo primero verdadero que decís en mucho tiempo.',
    epitafio: 'La fama te protege de las consecuencias hasta que te hunde.',
  },
  {
    id: 'el-mito-oscuro',
    titulo: 'Los que se lo tomaron en serio',
    tono: 'tragico',
    prioridad: 86,
    requiere: { nacionalidad: ['Noruega'], genero: ['Metal'], stats: { cordura: { max: 35 }, credibilidad: { min: 60 } } },
    inspiracion: 'La escena del black metal noruego de los primeros noventa: iglesias quemadas, dos muertos, varios presos.',
    texto:
      'La escena empezó como una pose y en algún momento, muy rápido, dejó de ser una pose.\n\nEran veinte pibes en una ciudad helada compitiendo por ser el más extremo, y esa competencia no tenía ningún freno adentro porque el freno estaba justamente en lo que decían despreciar. Primero fueron discursos. Después fueron iglesias de madera del siglo XII, que ardieron y que no van a volver.\n\nDos de ustedes están muertos. Tres están presos. La música que hicieron en esos tres años es genuinamente revolucionaria y va a influir a todo un género durante décadas, y no hay forma de separar eso de lo otro, y todos los que escriben sobre el tema fracasan al intentarlo.\n\nVos estuviste ahí. Hiciste algunas de esas cosas y no hiciste otras. La diferencia entre las dos listas es de suerte, no de carácter.\n\nTenés cuarenta años y hace veinte que sos una nota al pie de un crimen.',
    epitafio: 'La diferencia entre lo que hizo y lo que no hizo es de suerte, no de carácter.',
  },
  {
    id: 'el-invisible',
    titulo: 'El que nunca salió del garaje',
    tono: 'agridulce',
    prioridad: 38,
    requiere: { stats: { fama: { max: 16 } }, discosMax: 0, edadMin: 35 },
    texto:
      'Nunca grabaste un disco. Nunca tocaste para más de doscientas personas. Ensayaste dos veces por semana durante veinte años.\n\nLa banda nunca se separó formalmente: simplemente hubo un martes en que uno no pudo, y después otro martes, y después pasaron ocho meses.\n\nTenés setenta canciones grabadas en un grabador de cuatro canales. Son mejores de lo que te parecen. Nadie las escuchó nunca completas excepto tres personas y una de ellas todavía te dice, cada vez que te ve, que tendrías que haber hecho algo con eso.\n\nNo te arruinaste el cuerpo, no perdiste a nadie y no firmaste nada que te arrepintieras de firmar. Tuviste una vida normal con un secreto adentro.\n\nUn nieto va a encontrar esas cintas. Va a ser el momento más importante de su vida y vos no vas a estar para verlo.',
    epitafio: 'Setenta canciones en un grabador de cuatro canales, y son mejores de lo que le parecían.',
  },
]

export const FINAL_POR_DEFECTO = 'el-tipo-del-barrio'
