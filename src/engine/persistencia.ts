import type { Partida, RegistroLeyenda } from './types'
import { VERSION_PARTIDA } from './motor'

const CLAVE_PARTIDA = 'el-rockero:partida'
const CLAVE_LEYENDAS = 'el-rockero:leyendas'

function disponible(): boolean {
  try {
    return typeof window !== 'undefined' && !!window.localStorage
  } catch {
    return false
  }
}

export function guardarPartida(p: Partida): void {
  if (!disponible()) return
  try {
    window.localStorage.setItem(CLAVE_PARTIDA, JSON.stringify(p))
  } catch {
    // Sin espacio o en modo privado: seguimos sin guardar.
  }
}

export function cargarPartida(): Partida | null {
  if (!disponible()) return null
  try {
    const crudo = window.localStorage.getItem(CLAVE_PARTIDA)
    if (!crudo) return null
    const p = JSON.parse(crudo) as Partida
    if (p.version !== VERSION_PARTIDA) return null
    if (!p.personaje || !p.stats) return null
    return p
  } catch {
    return null
  }
}

export function borrarPartida(): void {
  if (!disponible()) return
  try {
    window.localStorage.removeItem(CLAVE_PARTIDA)
  } catch {
    // no-op
  }
}

export function leyendas(): RegistroLeyenda[] {
  if (!disponible()) return []
  try {
    const crudo = window.localStorage.getItem(CLAVE_LEYENDAS)
    if (!crudo) return []
    const lista = JSON.parse(crudo)
    return Array.isArray(lista) ? (lista as RegistroLeyenda[]) : []
  } catch {
    return []
  }
}

export function registrarLeyenda(p: Partida): void {
  if (!disponible() || !p.final) return
  const registro: RegistroLeyenda = {
    apodo: p.personaje.apodo,
    banda: p.banda?.nombre ?? null,
    rol: p.personaje.rol,
    genero: p.personaje.genero,
    nacionalidad: p.personaje.nacionalidad,
    anioInicio: p.anioInicio,
    anioFin: p.anio,
    edad: p.edad,
    finalId: p.final.final.id,
    finalTitulo: p.final.final.titulo,
    tono: p.final.final.tono,
    puntaje: p.final.puntaje,
    rango: p.final.rango,
    discos: p.discografia.length,
    fecha: Date.now(),
  }
  try {
    const lista = leyendas()
    // Evitamos duplicar si el usuario recarga la pantalla de final.
    const yaEsta = lista.some(
      (l) => l.apodo === registro.apodo && l.anioFin === registro.anioFin && l.finalId === registro.finalId,
    )
    if (yaEsta) return
    const nueva = [registro, ...lista].slice(0, 50)
    window.localStorage.setItem(CLAVE_LEYENDAS, JSON.stringify(nueva))
  } catch {
    // no-op
  }
}

export function borrarLeyendas(): void {
  if (!disponible()) return
  try {
    window.localStorage.removeItem(CLAVE_LEYENDAS)
  } catch {
    // no-op
  }
}
