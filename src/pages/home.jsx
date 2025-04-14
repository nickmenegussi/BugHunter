import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-slate-800 text-white p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Simulador de Vida Dev</h1>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-md">
        Descubra como é a vida de um(a) dev no dia a dia, enfrentando bugs, reuniões e deadlines!
      </p>
      <Link
        to="/cadastro"
        className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded-md font-semibold transition"
      >
        Começar Jornada
      </Link>
    </div>
  )
}
