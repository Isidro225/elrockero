import type { RegistroLeyenda, TonoFinal } from '../engine/types'
import { borrarLeyendas, leyendas } from '../engine/persistencia'
import { FINALES } from '../content/finales'

const ETIQUETA_TONO: Record<TonoFinal, string> = {
  tragico: 'trágico',
  epico: 'épico',
  agridulce: 'agridulce',
  patetico: 'patético',
  misterioso: 'abierto',
}

export function SalonDeLaFama({ onVolver }: { onVolver: () => void }) {
  const lista: RegistroLeyenda[] = leyendas()
  const descubiertos = new Set(lista.map((l) => l.finalId))
  const ordenada = [...lista].sort((a, b) => b.puntaje - a.puntaje)

  return (
    <div className="app">
      <div className="pila" style={{ paddingTop: 34 }}>
        <div className="fila-entre">
          <h1 className="titulo">Salón de la fama</h1>
          <button className="boton boton-fantasma" onClick={onVolver}>
            ← Volver
          </button>
        </div>

        <p className="chico" style={{ margin: 0 }}>
          Descubriste {descubiertos.size} de {FINALES.length} finales.
        </p>

        {ordenada.length === 0 ? (
          <div className="aviso">Todavía no terminaste ninguna carrera. Andá y arruinate la vida.</div>
        ) : (
          <div className="envoltorio-tabla">
            <table className="tabla">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Banda</th>
                  <th>Años</th>
                  <th>Final</th>
                  <th>Rango</th>
                  <th>Puntaje</th>
                </tr>
              </thead>
              <tbody>
                {ordenada.map((l, i) => (
                  <tr key={i}>
                    <td>
                      <strong>{l.apodo}</strong>
                      <br />
                      <span className="chico">
                        {l.rol} · {l.genero}
                      </span>
                    </td>
                    <td>{l.banda ?? '—'}</td>
                    <td className="mono">
                      {l.anioInicio}–{l.anioFin}
                      <br />
                      <span className="chico">{l.edad} años</span>
                    </td>
                    <td>
                      {l.finalTitulo}
                      <br />
                      <span className="chico">{ETIQUETA_TONO[l.tono]}</span>
                    </td>
                    <td>{l.rango}</td>
                    <td className="mono">{l.puntaje}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <section>
          <p className="subtitulo" style={{ marginBottom: 10 }}>
            Finales
          </p>
          <div className="opciones-grilla">
            {FINALES.map((f) => {
              const visto = descubiertos.has(f.id)
              return (
                <div key={f.id} className="opcion-tarjeta" style={{ opacity: visto ? 1 : 0.45 }}>
                  <span className="opcion-nombre">{visto ? f.titulo : '?????'}</span>
                  <span className="opcion-desc">
                    {visto ? f.epitafio : 'Todavía no llegaste hasta acá.'}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {ordenada.length > 0 ? (
          <div>
            <button
              className="boton boton-fantasma"
              onClick={() => {
                if (confirm('¿Borrar todas las carreras registradas?')) {
                  borrarLeyendas()
                  onVolver()
                }
              }}
            >
              Borrar el salón
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
