import { useCallback, useEffect, useState } from 'react'
import type { Partida } from './engine/types'
import type { ConfigCreacion } from './engine/motor'
import { continuar, elegirOpcion, nuevaPartida, siguienteAnio } from './engine/motor'
import {
  borrarPartida,
  cargarPartida,
  guardarPartida,
  registrarLeyenda,
} from './engine/persistencia'
import { Portada } from './ui/Portada'
import { CreacionPersonaje } from './ui/CreacionPersonaje'
import { PantallaEvento } from './ui/PantallaEvento'
import { ResumenAnio } from './ui/ResumenAnio'
import { PantallaFinal } from './ui/PantallaFinal'
import { SalonDeLaFama } from './ui/SalonDeLaFama'
import { Cabecera } from './ui/PanelStats'
import { ModalHistorial } from './ui/LineaDeTiempo'

type Pantalla = 'portada' | 'creacion' | 'partida' | 'salon'

export function App() {
  const [pantalla, setPantalla] = useState<Pantalla>('portada')
  const [partida, setPartida] = useState<Partida | null>(() => cargarPartida())
  const [verHistorial, setVerHistorial] = useState(false)

  // Guardado automático en cada cambio de estado de la partida.
  useEffect(() => {
    if (!partida) return
    guardarPartida(partida)
    if (partida.fasePartida === 'final') registrarLeyenda(partida)
  }, [partida])

  // Los textos son largos: al cambiar de situación conviene volver arriba.
  const claveScroll = partida ? `${partida.anio}-${partida.indiceAgenda}-${partida.fasePartida}` : ''
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [claveScroll, pantalla])

  const empezar = useCallback((cfg: ConfigCreacion) => {
    setPartida(nuevaPartida(cfg))
    setPantalla('partida')
  }, [])

  const nueva = useCallback(() => {
    borrarPartida()
    setPartida(null)
    setPantalla('creacion')
  }, [])

  if (pantalla === 'salon') {
    return <SalonDeLaFama onVolver={() => setPantalla(partida ? 'partida' : 'portada')} />
  }

  if (pantalla === 'creacion') {
    return <CreacionPersonaje onEmpezar={empezar} onVolver={() => setPantalla('portada')} />
  }

  if (pantalla === 'portada' || !partida) {
    return (
      <Portada
        hayPartida={!!partida}
        onContinuar={() => partida && setPantalla('partida')}
        onNueva={nueva}
        onSalon={() => setPantalla('salon')}
      />
    )
  }

  if (partida.fasePartida === 'final') {
    return (
      <PantallaFinal
        partida={partida}
        onNuevaPartida={nueva}
        onSalon={() => setPantalla('salon')}
      />
    )
  }

  return (
    <div className="app">
      <Cabecera partida={partida} onAbrirHistorial={() => setVerHistorial(true)} />

      <div className="pila">
        {partida.fasePartida === 'resumen' ? (
          <ResumenAnio partida={partida} onSeguir={() => setPartida(siguienteAnio(partida))} />
        ) : (
          <PantallaEvento
            partida={partida}
            onElegir={(id) => setPartida(elegirOpcion(partida, id))}
            onContinuar={() => setPartida(continuar(partida))}
          />
        )}

        <div className="fila">
          <button className="boton boton-fantasma" onClick={() => setPantalla('portada')}>
            ← Portada
          </button>
          <button className="boton boton-fantasma" onClick={() => setPantalla('salon')}>
            Salón de la fama
          </button>
        </div>
      </div>

      {verHistorial ? (
        <ModalHistorial historial={partida.historial} onCerrar={() => setVerHistorial(false)} />
      ) : null}
    </div>
  )
}
