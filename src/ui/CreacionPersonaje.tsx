import { useMemo, useState } from 'react'
import type { OpcionOrigen, StatKey, Stats } from '../engine/types'
import { STAT_META } from '../engine/types'
import {
  DECADAS,
  DINERO_BASE,
  GENEROS,
  NACIONALIDADES,
  ORIGENES,
  ROLES,
  STATS_BASE,
} from '../content/origenes'
import { aplicarStats } from '../engine/reglas'
import type { ConfigCreacion } from '../engine/motor'
import { PanelStats, formatearPlata } from './PanelStats'

function Efectos({ opcion }: { opcion: OpcionOrigen }) {
  const entradas = Object.entries(opcion.efectos) as [StatKey, number][]
  const items = entradas.filter(([, v]) => v !== 0)
  return (
    <div className="efectos-linea">
      {items.map(([k, v]) => (
        <span key={k} className={`pastilla ${v > 0 ? 'pos' : 'neg'}`}>
          {STAT_META[k].nombre} {v > 0 ? '+' : ''}
          {v}
        </span>
      ))}
      {opcion.dinero ? (
        <span className={`pastilla ${opcion.dinero > 0 ? 'pos' : 'neg'}`}>
          {formatearPlata(opcion.dinero)}
        </span>
      ) : null}
    </div>
  )
}

interface PasoProps {
  numero: number
  titulo: string
  ayuda: string
  opciones: OpcionOrigen[]
  valor: string
  onElegir: (id: string) => void
}

function Paso({ numero, titulo, ayuda, opciones, valor, onElegir }: PasoProps) {
  return (
    <section className="paso">
      <div className="paso-cabeza">
        <span className="paso-numero">{String(numero).padStart(2, '0')}</span>
        <div>
          <h2 className="titulo" style={{ fontSize: '1.6rem' }}>
            {titulo}
          </h2>
          <p className="chico" style={{ margin: 0 }}>
            {ayuda}
          </p>
        </div>
      </div>
      <div className="opciones-grilla">
        {opciones.map((o) => (
          <button
            key={o.id}
            className="opcion-tarjeta"
            aria-pressed={valor === o.id}
            onClick={() => onElegir(o.id)}
          >
            <span className="opcion-nombre">{o.nombre}</span>
            <span className="opcion-desc">{o.descripcion}</span>
            <Efectos opcion={o} />
          </button>
        ))}
      </div>
    </section>
  )
}

interface Props {
  onEmpezar: (cfg: ConfigCreacion) => void
  onVolver: () => void
}

export function CreacionPersonaje({ onEmpezar, onVolver }: Props) {
  const [apodo, setApodo] = useState('')
  const [nacionalidadId, setNacionalidad] = useState(NACIONALIDADES[0].id)
  const [rolId, setRol] = useState(ROLES[0].id)
  const [generoId, setGenero] = useState(GENEROS[0].id)
  const [decadaId, setDecada] = useState(DECADAS[1].id)
  const [origenId, setOrigen] = useState(ORIGENES[1].id)

  const elegidas = useMemo(() => {
    const lista: OpcionOrigen[] = [
      NACIONALIDADES.find((o) => o.id === nacionalidadId)!,
      ROLES.find((o) => o.id === rolId)!,
      GENEROS.find((o) => o.id === generoId)!,
      DECADAS.find((o) => o.id === decadaId)!,
      ORIGENES.find((o) => o.id === origenId)!,
    ]
    let stats: Stats = { ...STATS_BASE }
    let dinero = DINERO_BASE
    for (const o of lista) {
      stats = aplicarStats(stats, o.efectos)
      dinero += o.dinero ?? 0
    }
    return { stats, dinero, lista }
  }, [nacionalidadId, rolId, generoId, decadaId, origenId])

  const decada = DECADAS.find((o) => o.id === decadaId)!
  const listo = apodo.trim().length >= 2

  return (
    <div className="app">
      <div className="pila" style={{ paddingTop: 34 }}>
        <div className="fila-entre">
          <h1 className="titulo">Armá tu leyenda</h1>
          <button className="boton boton-fantasma" onClick={onVolver}>
            ← Volver
          </button>
        </div>

        <section className="paso" style={{ borderTop: 'none', paddingTop: 0 }}>
          <div className="campo">
            <label htmlFor="apodo">Nombre artístico</label>
            <input
              id="apodo"
              value={apodo}
              maxLength={22}
              placeholder="El Gato Peralta"
              onChange={(e) => setApodo(e.target.value)}
              autoComplete="off"
            />
          </div>
        </section>

        <Paso
          numero={1}
          titulo="¿De dónde salís?"
          ayuda="El lugar decide cómo empieza todo: la plata, la prensa y lo que se espera de vos."
          opciones={NACIONALIDADES}
          valor={nacionalidadId}
          onElegir={setNacionalidad}
        />

        <Paso
          numero={2}
          titulo="¿Qué tocás?"
          ayuda="La cara de la banda no vive lo mismo que el que está atrás de los platillos."
          opciones={ROLES}
          valor={rolId}
          onElegir={setRol}
        />

        <Paso
          numero={3}
          titulo="¿Qué clase de ruido hacés?"
          ayuda="El género abre unas puertas y clausura otras, para siempre."
          opciones={GENEROS}
          valor={generoId}
          onElegir={setGenero}
        />

        <Paso
          numero={4}
          titulo="¿En qué época?"
          ayuda={`Arrancás en ${decada.anio}, a los 17 años.`}
          opciones={DECADAS}
          valor={decadaId}
          onElegir={setDecada}
        />

        <Paso
          numero={5}
          titulo="¿Dónde aprendiste?"
          ayuda="De acá viene todo lo que sabés y casi todo lo que te falta."
          opciones={ORIGENES}
          valor={origenId}
          onElegir={setOrigen}
        />

        <section className="tarjeta">
          <p className="subtitulo" style={{ marginBottom: 12 }}>
            Con lo que arrancás
          </p>
          <PanelStats stats={elegidas.stats} />
          <p className="chico" style={{ marginTop: 14, marginBottom: 0 }}>
            En el bolsillo:{' '}
            <span className={`plata ${elegidas.dinero < 0 ? 'rojo' : ''}`}>
              {formatearPlata(elegidas.dinero)}
            </span>
          </p>
        </section>

        <div className="barra-inferior">
          <p className="chico" style={{ margin: 0, maxWidth: '42ch' }}>
            {listo
              ? 'Una vez que arranca, no se puede volver atrás. Las decisiones quedan.'
              : 'Poné un nombre artístico para empezar.'}
          </p>
          <button
            className="boton boton-principal"
            disabled={!listo}
            onClick={() =>
              onEmpezar({
                apodo: apodo.trim(),
                nombre: apodo.trim(),
                nacionalidadId,
                rolId,
                generoId,
                decadaId,
                origenId,
              })
            }
          >
            Enchufar y tocar
          </button>
        </div>
      </div>
    </div>
  )
}
