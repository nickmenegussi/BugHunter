import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-zinc-900 to-slate-800 text-white p-4 justify-center items-center'>
        <div className='p-5 min-md:w-[450px] h-full rounded-lg bg-[#121A2B] max-xl:w-[400px]'>
            <h1 className='font-bold text-3xl text-center'>Login</h1>
            <div className='text-start mt-5 flex flex-col gap-6'>
                <label className='text-sm font-medium '>
                    Digte seu email: 
                    <input type="text" required placeholder='Ex: exemplo@gmail.com' className='mt-3 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3' />
                </label>
                <label className='text-sm font-medium'>
                    Digte sua senha: 
                    <input type="password" required placeholder='Ex: senha123' className='mt-3 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3' />
                </label>
                <Link to='/ForgottenPassword' className='text-end text-indigo-400 hover:text-white'>
                    Esqueceu a senha?
                </Link>
                <button className='bg-[#4F46E5] hover:bg-indigo-500 rounded-sm h-10 cursor-pointer' onClick={() => {
                    navigate('/home')
                }}>Entrar</button>
            </div>
        </div>
    </div>
  )
}
