import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import EjerciciosHub from './Ejercicios/EjerciciosHub'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EjerciciosHub />
  </StrictMode>
)
