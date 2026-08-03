import type { Partida } from '../engine/types'
import { STAT_META } from '../engine/types'
import type { StatKey } from '../engine/types'
import { FASE_NOMBRE } from '../engine/types'
import { faseActual } from '../engine/reglas'
import { formatearPlata } from './PanelStats'

export function ResumenAnio({ partida, onSeguir }: { partida: Partida; onSeguir: () => void }) {
  const r = partida.resumenAnio
  if (!r) return null

  const cambios = Object.entries(r.cambios) as [StatKey, number][]
  const relevantes = cambios.filter(([, v]) => v !== 0).sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))

  return (
    <article className="tarjeta">
      <p className="marca-agenda">Cierre de temporada · {FASE_NOMBRE[faseActual(partida)]}</p>
      <h2 className="titulo" style={{ fontSize: '3.4rem' }}>
        {r.anio}
      </h2>
      <p className="chico" style={{ marginTop: 4 }}>
        Terminás el año con {r.edad} años.
      </p>

      <ul className="resumen-lineas" style={{ marginTop: 20 }}>
        {r.lineas.map((linea, i) => (
          <li key={i}>{linea}</li>
        ))}
      </ul>

      {r.disco ? (
        <div className="disco-ficha">
          <div className="fila-entre" style={{ alignItems: 'flex-start' }}>
            <div>
              <h3 className="disco-titulo">{r.disco.titulo}</h3>
              <p className="chico" style={{ margin: 0 }}>
                {r.disco.ventas.toLocaleString('es-AR')} copias vendidas
              </p>
            </div>
            <span className="puntaje-disco">{r.disco.puntaje}</span>
          </div>
          <p className="epigrafe" style={{ marginTop: 10 }}>
            «{r.disco.resenia}»
          </p>
        </div>
      ) : null}

      {relevantes.length > 0 ? (
        <div style={{ marginTop: 22 }}>
          <p className="subtitulo" style={{ marginBottom: 8 }}>
            El año te dejó
          </p>
          <div className="efectos-linea">
            {relevantes.map(([k, v]) => (
              <span key={k} className={`pastilla ${v > 0 ? 'pos' : 'neg'}`}>
                {STAT_META[k].nombre} {v > 0 ? '+' : ''}
                {v}
              </span>
            ))}
            {r.dinero !== 0 ? (
              <span className={`pastilla ${r.dinero > 0 ? 'pos' : 'neg'}`}>{formatearPlata(r.dinero)}</span>
            ) : null}
          </div>
        </div>
      ) : null}

      <div style={{ marginTop: 26 }}>
        <button className="boton boton-principal" onClick={onSeguir} autoFocus>
          {partida.anio + 1} →
        </button>
      </div>
    </article>
  )
}
