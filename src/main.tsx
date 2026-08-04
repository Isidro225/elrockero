import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

// Tipografías propias (van con el bundle: no dependen de lo que tenga instalado
// el que juega). Anton para los titulares grandes, Oswald para la interfaz y
// Newsreader para el cuerpo de texto, que es casi todo el juego.
import '@fontsource/anton/latin-400.css'
import '@fontsource-variable/oswald/wght.css'
import '@fontsource-variable/newsreader/wght.css'
import '@fontsource-variable/newsreader/wght-italic.css'

import './estilos.css'

const contenedor = document.getElementById('root')
if (!contenedor) throw new Error('Falta el nodo #root')

createRoot(contenedor).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
