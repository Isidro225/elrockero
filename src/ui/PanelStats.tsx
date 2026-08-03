import type { Partida, StatKey, Stats } from '../engine/types'
import { STAT_KEYS, STAT_META } from '../engine/types'

function clase(key: StatKey, valor: number): string {
  const invertida = STAT_META[key].invertida
  const efectivo = invertida ? 100 - valor : valor
  if (efectivo <= 20) return 'stat peligro'
  if (efectivo <= 40) return 'stat alerta'
  if (efectivo >= 75) return 'stat bien'
  return 'stat'
}

interface Props {
  stats: Stats
  cambios?: Partial<Stats>
}

export function PanelStats({ stats, cambios }: Props) {
  return (
    <div className="stats">
      {STAT_KEYS.map((key) => {
        const meta = STAT_META[key]
        const valor = stats[key]
        const delta = cambios?.[key]
        return (
          <div key={key} className={clase(key, valor)} title={meta.descripcion}>
            <div className="stat-cabeza">
              <span className="stat-nombre">{meta.nombre}</span>
              <span className="stat-valor">
                {valor}
                {delta ? (
                  <span className={`stat-delta ${delta > 0 ? 'delta-pos' : 'delta-neg'}`}>
                    {' '}
                    {delta > 0 ? '+' : ''}
                    {delta}
                  </span>
                ) : null}
              </span>
            </div>
            <div className="stat-barra">
              <div className="stat-relleno" style={{ width: `${valor}%` }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function formatearPlata(n: number): string {
  const signo = n < 0 ? '-' : ''
  return `${signo}$${Math.abs(Math.round(n)).toLocaleString('es-AR')}`
}

export function Cabecera({ partida, onAbrirHistorial }: { partida: Partida; onAbrirHistorial: () => void }) {
  const { personaje, banda, edad, anio, dinero, discografia } = partida
  return (
    <header className="cabecera">
      <div className="cabecera-fila">
        <div className="identidad">
          <strong>{personaje.apodo}</strong>
          {banda ? <span className="chico">{banda.nombre}</span> : <span className="chico">sin banda</span>}
        </div>
        <div className="fila" style={{ alignItems: 'center' }}>
          <button className="boton boton-fantasma" onClick={onAbrirHistorial}>
            Historial
          </button>
          <div className="reloj">
            <b>{anio}</b> · {edad} años · {discografia.length} {discografia.length === 1 ? 'disco' : 'discos'}
            <br />
            <span className={`plata ${dinero < 0 ? 'rojo' : ''}`}>{formatearPlata(dinero)}</span>
          </div>
        </div>
      </div>
      <PanelStats stats={partida.stats} />
    </header>
  )
}
