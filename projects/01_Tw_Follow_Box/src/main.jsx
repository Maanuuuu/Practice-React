import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import './App.css'


const root = createRoot(document.getElementById('root'))


//El nombre de los componentes tiene que ser PascalCase (Ej: 'HolaMundo','SpecialButton')


root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
)
