
import './App.css'
import Products from './components/Products'
import Usuarios from './components/Usuarios'

function App() {
  const frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Fresa"]


  return (
    <>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul> 
      <Products />
      <Usuarios />
    </>
  )
}

export default App
