import React from 'react'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-'>
      <h1 className=''>Simulador de Vida Dev</h1>
      <p>Descubra como é a vida de um(a) dev no dia a dia, enfretando bugs, reuniões e deadlines!</p>
      <Link to={'/'} className='bg-indigo-600 hover:bg-indigo-500 rounded-md p-3 text-gray-300 cursor-pointer'>
        Começar Jornada
      </Link>
    </div>
  )
}
