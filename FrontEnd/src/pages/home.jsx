import React from 'react'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-slate-800  text-white p-4'>
      <h1 className='text-4xl font-bold text-center mb-4'>Simulador de Vida Dev</h1>
      <p className='text-lg text-gray-300 mb-6 text-center max-w-md'>Descubra como é a vida de um(a) dev no dia a dia, enfretando bugs, reuniões e deadlines!</p>
      <Link to={'/cadastro'} className='bg-indigo-600 hover:bg-indigo-500 rounded-md p-3 text-gray-300 cursor-pointer'>
        Começar Jornada
      </Link>
    </div>
  )
}
