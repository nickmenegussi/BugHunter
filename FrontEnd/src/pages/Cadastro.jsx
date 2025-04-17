import React from 'react'

export default function Cadastro() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-slate-800 text-white'>
        <div className='p-6 min-md:w-[450px] h-[570px] max-xl:w-[400px] bg-[#121A2B] rounded-lg shadow-ls'>
            <h1 className='text-3xl font-bold text-center'>Cadastro do(a) Dev</h1>
            <div className='text-start mt-5 flex flex-col gap-6'>
                <label htmlFor="NomeDev" className='block text-sm font-medium flex-col'>
                    Digite seu nome:
                    <input placeholder='Digite seu nome' type="text" className='mt-3 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3' required/>
                </label>
                <label htmlFor="Email" className='block text-sm font-medium flex-col'>
                    Digite seu email:
                    <input placeholder='Ex: exemplo@gmail.com' type="text" className='mt-3 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3 ' required/>
                </label>
                <label htmlFor="Email" className='block text-sm font-medium flex-col'>
                    Digite sua senha:
                    <input placeholder='Ex: senha123!@#' type="password" className='mt-3 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3 ' required/>
                </label>
                <label htmlFor="IdadeDev" className='block text-sm font-medium flex-col'>
                    Digite seu idade:
                    <input placeholder='Ex: 10' type="number" inputMode='numeric' pattern="[0-9]*" className='mt-3 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3' required/>
                </label>
                <button className='bg-indigo-600 rounded-sm h-10 cursor-pointer'>Cadastrar</button>
            </div>
        </div>
    </div>
  )
}
