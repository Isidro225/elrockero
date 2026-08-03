import type { Opcion, Partida, Riesgo } from '../engine/types'
import { cumple, interpolar, motivoBloqueo } from '../engine/reglas'
import { eventoActual, progresoAnio } from '../engine/motor'

const ETIQUETA_RIESGO: Record<Riesgo, string> = {
  seguro: 'Seguro',
  dudoso: 'Dudoso',
  riesgoso: 'Riesgoso',
  letal: 'Puede matarte',
}

function BotonOpcion({
  opcion,
  partida,
  onElegir,
}: {
  opcion: Opcion
  partida: Partida
  onElegir: (id: string) => void
}) {
  const habilitada = cumple(opcion.requiere, partida)
  const motivo = habilitada ? null : (opcion.bloqueo ?? motivoBloqueo(opcion.requiere, partida))

  return (
    <button
      className="opcion-boton"
      disabled={!habilitada}
      onClick={() => onElegir(opcion.id)}
      title={motivo ?? undefined}
    >
      <span className="opcion-texto">{interpolar(opcion.texto, partida)}</span>
      {motivo ? (
        <span className="bloqueo">{motivo}</span>
      ) : opcion.riesgo ? (
        <span className={`riesgo riesgo-${opcion.riesgo}`}>{ETIQUETA_RIESGO[opcion.riesgo]}</span>
      ) : null}
    </button>
  )
}

interface Props {
  partida: Partida
  onElegir: (id: string) => void
  onContinuar: () => void
}

export function PantallaEvento({ partida, onElegir, onContinuar }: Props) {
  const enCurso = eventoActual(partida)
  if (!enCurso) return null

  const { evento, resuelto } = enCurso
  const { actual, total } = progresoAnio(partida)
  const titular = resuelto?.resultado.efectos?.titular

  return (
    <article className="tarjeta tarjeta-evento">
      <p className="marca-agenda">
        {partida.anio} · situación {actual} de {total}
      </p>

      <h2 className="titulo">{interpolar(evento.titulo, partida)}</h2>
      {evento.epigrafe ? (
        <p className="epigrafe" style={{ marginTop: 8 }}>
          {interpolar(evento.epigrafe, partida)}
        </p>
      ) : null}

      <p className="cuerpo" style={{ marginTop: 18 }}>
        {interpolar(evento.texto, partida)}
      </p>

      {!resuelto ? (
        <div className="opciones-lista">
          {evento.opciones.map((o) => (
            <BotonOpcion key={o.id} opcion={o} partida={partida} onElegir={onElegir} />
          ))}
        </div>
      ) : (
        <div className="resultado">
          <p className="resultado-elegiste">
            Elegiste: {interpolar(evento.opciones.find((o) => o.id === resuelto.opcionId)?.texto ?? '', partida)}
          </p>
          <p className="resultado-texto">{interpolar(resuelto.resultado.texto, partida)}</p>

          {titular ? <p className="titular-prensa">{interpolar(titular, partida)}</p> : null}

          {evento.inspiracion ? (
            <div className="nota-inspiracion" style={{ marginTop: 18 }}>
              <strong>Pasó de verdad: </strong>
              {evento.inspiracion}
            </div>
          ) : null}

          <div style={{ marginTop: 22 }}>
            <button className="boton boton-principal" onClick={onContinuar} autoFocus>
              {actual < total ? 'Seguir' : 'Cerrar el año'}
            </button>
          </div>
        </div>
      )}
    </article>
  )
}
