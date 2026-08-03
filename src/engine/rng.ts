// Generador pseudoaleatorio determinista (mulberry32).
// Guardamos el estado dentro de la partida para que un save reproduzca lo mismo.

export function siguiente(estado: number): { valor: number; estado: number } {
  let t = (estado + 0x6d2b79f5) | 0
  let x = t
  x = Math.imul(x ^ (x >>> 15), x | 1)
  x ^= x + Math.imul(x ^ (x >>> 7), x | 61)
  const valor = ((x ^ (x >>> 14)) >>> 0) / 4294967296
  return { valor, estado: t }
}

/** Envoltorio mutable cómodo para usar dentro de una transición. */
export class Azar {
  estado: number

  constructor(estado: number) {
    this.estado = estado
  }

  /** [0, 1) */
  float(): number {
    const r = siguiente(this.estado)
    this.estado = r.estado
    return r.valor
  }

  /** Entero en [min, max] inclusive. */
  entero(min: number, max: number): number {
    return min + Math.floor(this.float() * (max - min + 1))
  }

  /** true con probabilidad p. */
  chance(p: number): boolean {
    return this.float() < p
  }

  elegir<T>(lista: readonly T[]): T {
    return lista[Math.floor(this.float() * lista.length)]
  }

  /** Elige por peso. Los elementos sin peso valen 1. */
  elegirPorPeso<T>(lista: readonly T[], peso: (item: T) => number): T | null {
    if (lista.length === 0) return null
    let total = 0
    for (const item of lista) total += Math.max(0, peso(item))
    if (total <= 0) return lista[0]
    let corte = this.float() * total
    for (const item of lista) {
      corte -= Math.max(0, peso(item))
      if (corte <= 0) return item
    }
    return lista[lista.length - 1]
  }

  mezclar<T>(lista: readonly T[]): T[] {
    const copia = [...lista]
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(this.float() * (i + 1))
      ;[copia[i], copia[j]] = [copia[j], copia[i]]
    }
    return copia
  }
}
