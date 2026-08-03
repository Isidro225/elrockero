import { useState } from 'react'
import type { Partida, TonoFinal } from '../engine/types'
import { LineaDeTiempo } from './LineaDeTiempo'
import { formatearPlata } from './PanelStats'

const ETIQUETA_TONO: Record<TonoFinal, string> = {
  tragico: 'Final trágico',
  epico: 'Final épico',
  agridulce: 'Final agridulce',
  patetico: 'Final patético',
  misterioso: 'Final abierto',
}

interface Props {
  partida: Partida
  onNuevaPartida: () => void
  onSalon: () => void
}

export function PantallaFinal({ partida, onNuevaPartida, onSalon }: Props) {
  const [verTodo, setVerTodo] = useState(false)
  const final = partida.final
  if (!final) return null

  const { final: f, puntaje, rango, edad, anio } = final
  const mejorDisco = [...partida.discografia].sort((a, b) => b.puntaje - a.puntaje)[0]

  return (
    <div className="app">
      <div className="pila final">
        <div>
          <p className={`final-tono tono-${f.tono}`}>{ETIQUETA_TONO[f.tono]}</p>
          <h1 className="final-titulo">{f.titulo}</h1>
          <p className="subtitulo">
            {partida.personaje.apodo}
            {partida.banda ? ` · ${partida.banda.nombre}` : ''} · {partida.anioInicio}–{anio} · {edad} años
          </p>
        </div>

        <p className="final-texto">{f.texto}</p>

        <blockquote className="epitafio">{f.epitafio}</blockquote>

        <div className="marcador">
          <div>
            <span>Rango</span>
            <b>{rango}</b>
          </div>
          <div>
            <span>Puntaje</span>
            <b>{puntaje}</b>
          </div>
          <div>
            <span>Pico de fama</span>
            <b>{partida.picoFama}</b>
          </div>
          <div>
            <span>Discos</span>
            <b>{partida.discografia.length}</b>
          </div>
          <div>
            <span>Dejaste</span>
            <b style={{ fontSize: '1.2rem' }}>{formatearPlata(partida.dinero)}</b>
          </div>
        </div>

        {partida.discografia.length > 0 ? (
          <section>
            <p className="subtitulo" style={{ marginBottom: 10 }}>
              Discografía
            </p>
            <div className="envoltorio-tabla">
              <table className="tabla">
                <thead>
                  <tr>
                    <th>Año</th>
                    <th>Título</th>
                    <th>Crítica</th>
                    <th>Ventas</th>
                  </tr>
                </thead>
                <tbody>
                  {partida.discografia.map((d, i) => (
                    <tr key={i}>
                      <td className="mono">{d.anio}</td>
                      <td>
                        {d.titulo}
                        {mejorDisco && d.titulo === mejorDisco.titulo ? ' ★' : ''}
                      </td>
                      <td className="mono">{d.puntaje}/100</td>
                      <td className="mono">{d.ventas.toLocaleString('es-AR')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {f.inspiracion ? (
          <div className="nota-inspiracion">
            <strong>De dónde sale este final: </strong>
            {f.inspiracion}
          </div>
        ) : null}

        {f.sensible ? (
          <div className="nota-ayuda">
            Esto es ficción. Si algo de lo que leíste se parece a lo que estás viviendo, hablalo con
            alguien de confianza o con un servicio de salud mental de tu país. No es un final
            inevitable en ningún lado, y mucho menos acá.
          </div>
        ) : null}

        <hr className="separador" />

        <div className="fila">
          <button className="boton boton-principal" onClick={onNuevaPartida}>
            Otra vida
          </button>
          <button className="boton" onClick={onSalon}>
            Salón de la fama
          </button>
          <button className="boton boton-fantasma" onClick={() => setVerTodo((v) => !v)}>
            {verTodo ? 'Ocultar historia' : 'Ver la historia completa'}
          </button>
        </div>

        {verTodo ? (
          <section>
            <p className="subtitulo" style={{ marginBottom: 12 }}>
              {partida.anioInicio}–{anio}
            </p>
            <LineaDeTiempo historial={partida.historial} />
          </section>
        ) : null}
      </div>
    </div>
  )
}
