import { useState } from 'react'
import './App.css'

function App() {
  const [activo, setActivo] = useState(false)
  const [hover, setHover] = useState(false)
  const [changeBorder, setChangeBorder] = useState(false)

  const [changeColor, setChangeColor] = useState(false)

  return (
    <>
    <h1 className='mt-4'>Nivel 1</h1>
      <div>
        <button className={activo ? 'bg-green-500 p-4 rounded' : 'bg-gray-500 p-4 rounded'} onClick={() => setActivo((activo) => !activo)}>
          {activo ? "Desactivar" : "Activar"}
        </button>
      </div>
      <div
        className={`w-24 h-24 p-4 rounded ${hover ? 'bg-blue-600' : 'bg-green-400'} ${changeBorder ? 'border-4 border-red-500' : ''}`}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={changeBorder ? () => setChangeBorder(false) : () => setChangeBorder(true)}>
      </div>

      <h1 className='mt-4'>Nivel 2</h1>
      <div>
        <ul className='list-disc list-inside'>
          <li onClick={() => setChangeColor(!changeColor)} className={`mb-2 ${changeColor ? 'text-red-500' : 'text-blue-500'}`}>ejemplo 1</li>
          <li onClick={() => setChangeColor(!changeColor)} className={`mb-2 ${changeColor ? 'text-red-500' : 'text-blue-500'}`}>ejemplo 2</li>
          <li onClick={() => setChangeColor(!changeColor)} className={`mb-2 ${changeColor ? 'text-red-500' : 'text-blue-500'}`}>ejemplo 3</li>
        </ul>
      </div>
    </>
  )
}

export default App
