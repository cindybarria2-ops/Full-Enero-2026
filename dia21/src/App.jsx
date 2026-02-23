import './App.css'
import Boton from './components/Boton/Boton'
import Perfil from './components/Perfil/Perfil'
import Producto from './components/Producto/Producto'
import Saludo from './components/Saludo/Saludo'

function App() {

  return (
    <>
      <Perfil nombre="Juan Pérez" edad={30} />
      <Producto productName="Producto de ejemplo" precio={100} />
      <Saludo name="Juan Pérez" />
      <Boton onClick={() => alert("¡Botón clickeado!")} label="Haz clic aquí" />
    </>
  )
}

export default App
