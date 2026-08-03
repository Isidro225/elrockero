# El Rockero

Simulador de carrera musical por turnos, en el navegador. Elegís de dónde venís, qué tocás
y en qué década arrancás; después pasan los años de a uno y cada uno te obliga a decidir.
La partida termina en uno de 27 finales, del Salón de la Fama al Club de los 27.

Todo el texto está en castellano rioplatense. Los eventos están inspirados en cosas que
efectivamente le pasaron a músicos reales, pero el personaje es propio: no se simula a
nadie en particular.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # bundle estático en dist/
```

No tiene backend ni dependencias en runtime más allá de React: la partida se guarda sola
en `localStorage` y `dist/` se puede subir a cualquier hosting estático.

## Cómo funciona

Ocho atributos de 0 a 100 (**talento, fama, salud, cordura, credibilidad, adicción,
química, inspiración**) más dinero sin techo ni piso. Cada año el motor arma una agenda de
2 o 3 situaciones, las jugás, y al cerrar el año se liquidan regalías, se edita disco si
corresponde y se aplica el desgaste anual.

La regla del módulo de sustancias, que es el corazón del juego: **el beneficio es inmediato
y visible, el costo es lento y se paga en salud, cordura y adicción.** Todas las trampas
del juego funcionan a corto plazo. Ese es el punto.

### Estructura

```
src/
  engine/          motor puro, sin React
    types.ts       modelo de datos y mini-DSL de condiciones
    rng.ts         azar determinista (mulberry32) guardado en la partida
    reglas.ts      stats, condiciones, efectos, interpolación de texto
    disparadores.ts   cuándo salta cada evento-mito
    motor.ts       ciclo anual, economía, discos, muerte y finales
    persistencia.ts   localStorage
  content/         todo el texto y los datos
    origenes.ts    nacionalidad, rol, género, década, origen social
    nombres.ts     generadores de bandas, discos, integrantes, titulares
    finales.ts     los 27 finales
    eventos/       89 situaciones repartidas por etapa
  ui/              componentes React
scripts/
  simular.ts       simulador headless para balancear
```

El motor no importa nada de React y el contenido no importa nada del motor salvo tipos, así
que se puede agregar contenido sin tocar lógica.

## Agregar contenido

Un evento es un objeto declarativo. `requiere` decide cuándo puede salir, cada opción puede
tener varios `resultados` con peso, y `efectos` toca stats, plata, flags, banda o dispara un
final:

```ts
{
  id: 'ascenso-multinacional',
  titulo: 'La multinacional',
  categoria: 'plata',
  requiere: { stats: { fama: { min: 40 } }, sinFlags: ['selloMulti'] },
  opciones: [{
    id: 'firmar',
    texto: 'Firmar. Es la puerta grande',
    riesgo: 'dudoso',
    resultados: [{
      peso: 2,
      texto: '…',
      efectos: {
        stats: { fama: 22, credibilidad: -12 },
        dinero: 40000,
        flags: { selloMulti: 1 },
        titular: '"{banda} firma con una multinacional"',
      },
    }],
  }],
}
```

Agregalo al array de su archivo en `src/content/eventos/` y ya entra al sorteo. En los textos
podés usar `{apodo}`, `{banda}`, `{companiero}`, `{edad}`, `{anio}`, `{rol}` y `{genero}`.

Los eventos marcados `guion: true` no entran al sorteo: los encola otro evento
(`efectos.encola`) o la tabla de `disparadores.ts`.

## Balancear

```bash
npm run simular -- 4000
```

Juega N partidas eligiendo al azar y reporta distribución de finales, edad de muerte,
puntajes y qué eventos o finales nunca aparecieron. Sirve sobre todo para detectar finales
inalcanzables: si uno figura con `⚠ NUNCA`, o sus condiciones son imposibles o hay otro
final con más prioridad que se lo come antes.

Referencia de la última corrida (4000 partidas, elección aleatoria): mediana de muerte a
los 63 años, los 27 finales alcanzables, los 89 eventos disparando.

Ojo: el simulador elige al azar. Un jugador que decide en serio llega mucho más seguido a
los finales raros.

## Sobre el contenido sensible

El juego incluye adicciones, muerte y suicidio, porque son parte de la historia real del
rock. Las decisiones de tratamiento fueron deliberadas:

- Los finales trágicos no son épicos ni recompensan. El texto insiste en que eran evitables.
- No hay detalle gráfico de ningún método.
- Los eventos que tocan suicidio siempre ofrecen salidas concretas (pedir ayuda, atender el
  teléfono, bajar a desayunar) y esas salidas dan las mejores stats del juego.
- Los finales marcados `sensible` muestran una nota al pie en pantalla. Si te sobra, sacá el
  bloque `f.sensible` de `src/ui/PantallaFinal.tsx`.
