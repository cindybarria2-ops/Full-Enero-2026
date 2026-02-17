import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Calculator from './components/calculator/Calculator'
import Footer from './components/layout/Footer'


function App() {
const links = [
  { text: "Inicio", href: "#home" },
  { text: "Calculadora", href: "#calculadora" },
  { text: "Contacto", href: "#contact" },
  { text: "Configuración", href: "#settings" }
]

  return (
    <>
     <Header title={"Mi pagina web"} links={links} />
     <Main title={"titulo de la pagina"} children={<Calculator />} />
     <Footer text={"2026 Mi pagina web. Todos los derechos reservados."} />
    </>
  )
}

export default App
