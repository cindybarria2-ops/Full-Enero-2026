import { useState } from 'react'

function Encendido() {
  const [encendido, setEncendido] = useState(false)

  return (
    <>
     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setEncendido(!encendido)}>
         {encendido ? <p>Encendido</p> : <p>Apagado</p>}
      </button>

    </>
  )
}

export default Encendido;