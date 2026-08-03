import type { EntradaHistorial } from '../engine/types'

export function LineaDeTiempo({ historial }: { historial: EntradaHistorial[] }) {
  if (historial.length === 0) return <p className="chico">Todavía no pasó nada.</p>

  return (
    <div className="timeline">
      {historial.map((e, i) => (
        <div key={i} className={`timeline-item tipo-${e.tipo}`}>
          <span className="timeline-anio">
            {e.anio} · {e.edad} años
          </span>
          <h3 className="timeline-titulo">{e.titulo}</h3>
          {e.detalle ? <p className="timeline-detalle">{e.detalle}</p> : null}
        </div>
      ))}
    </div>
  )
}

export function ModalHistorial({
  historial,
  onCerrar,
}: {
  historial: EntradaHistorial[]
  onCerrar: () => void
}) {
  return (
    <div className="modal-fondo" onClick={onCerrar} role="presentation">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="fila-entre" style={{ marginBottom: 18 }}>
          <h2 className="titulo" style={{ fontSize: '2rem' }}>
            Todo lo que pasó
          </h2>
          <button className="boton boton-fantasma" onClick={onCerrar}>
            Cerrar ✕
          </button>
        </div>
        <LineaDeTiempo historial={historial} />
      </div>
    </div>
  )
}
