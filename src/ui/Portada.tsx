import { TODOS_LOS_EVENTOS } from '../content/eventos'
import { FINALES } from '../content/finales'

interface Props {
  hayPartida: boolean
  onContinuar: () => void
  onNueva: () => void
  onSalon: () => void
}

export function Portada({ hayPartida, onContinuar, onNueva, onSalon }: Props) {
  return (
    <div className="app">
      <div className="portada">
        <div>
          <p className="subtitulo">Simulador de carrera · 1966–hoy</p>
          <h1 className="titulo-app">
            El
            <em>Rockero</em>
          </h1>
        </div>

        <p className="portada-bajada">
          Elegís de dónde venís, qué tocás y en qué década arrancás. Después empiezan a pasar los
          años, y cada año te obliga a decidir. Sellos, giras, sustancias de dudosa procedencia,
          dietas milagrosas, la banda que se pudre y la prensa que espera que te caigas.
          <br />
          <br />
          Hay muchas formas de terminar esta historia. Casi ninguna es tranquila.
        </p>

        <div className="fila">
          {hayPartida ? (
            <button className="boton boton-principal" onClick={onContinuar}>
              Seguir la carrera
            </button>
          ) : null}
          <button className={hayPartida ? 'boton' : 'boton boton-principal'} onClick={onNueva}>
            {hayPartida ? 'Empezar de cero' : 'Empezar'}
          </button>
          <button className="boton" onClick={onSalon}>
            Salón de la fama
          </button>
        </div>

        <div className="franja">
          <span>{TODOS_LOS_EVENTOS.length} situaciones</span>
          <span>{FINALES.length} finales</span>
          <span>8 atributos</span>
          <span>5 décadas</span>
        </div>

        <p className="chico" style={{ maxWidth: '54ch', margin: 0 }}>
          Ficción. Los eventos están inspirados en cosas que efectivamente le pasaron a músicos
          reales, pero el personaje es tuyo. Incluye temas duros: adicciones, muerte y suicidio.
        </p>
      </div>
    </div>
  )
}
