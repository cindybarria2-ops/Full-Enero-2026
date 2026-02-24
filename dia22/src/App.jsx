import { useState } from 'react'
import './App.css'
import Contador from './components/Contador'
import Encendido from './components/Encendido'
import Lista from './components/Lista'
import CampoTexto from './components/CampoTexto'
import Temporizador from './components/Temporizador'

function App() {

  return (
    <>
      <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
        <Contador />
      </div>
      <div className='bg-gray-100 p-4 rounded-lg shadow-md mt-4'>
        <Encendido />
      </div>
      <div className='bg-blue-400 p-4 rounded-lg shadow-md mt-4'>
        <Lista />
      </div>
      <div className='bg-green-300 p-4 rounded-lg shadow-md mt-4'>
        <CampoTexto />
      </div>
      <div className='bg-yellow-300 p-4 rounded-lg shadow-md mt-4'>
        <Temporizador />
      </div>
    </>
  )
}

export default App
