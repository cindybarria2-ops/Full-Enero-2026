import { useState } from 'react'

function Contador() {
  const [count, setCount] = useState(0)
 const aumentarAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    setCount((prevCount) => prevCount + numeroAleatorio);
  };

  return (
    <>
      <h1>Nivel 1</h1>
      <h2 className='text-2xl font-bold text-blue-600'>Contador: {count}</h2>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={aumentarAleatorio}>
        Aumentar número aleatorio
      </button>
    </>
  )
}

export default Contador;