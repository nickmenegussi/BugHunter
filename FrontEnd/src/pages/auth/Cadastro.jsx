import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'

export default function Cadastro() {
    const navigate = useNavigate()
    const [cadastro, setCadastro] = useState({
        nameUser: '',
        emailUser: '',
        senhaUser: '',
        ageUser: 0
    })

    async function register() {
        try {
            const response = await api.post('/user/user/register', cadastro)
            alert(response.data.message)
            navigate('/')
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert(error)
            }
        }
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-slate-800 text-white'>
            <div className='p-6 min-md:w-[450px] h-full max-xl:w-[400px] bg-[#121A2B] rounded-lg shadow-ls'>
                <h1 className='text-3xl font-bold text-center'>Cadastro do(a) Dev</h1>
                <div className='text-start mt-5 flex flex-col gap-6'>
                    <label htmlFor="NomeDev" className='block text-sm font-medium flex-col'>
                        Digite seu nome:
                        <input value={cadastro.nameUser} onChange={(e) => setCadastro({ ...cadastro, nameUser: e.target.value })} placeholder='Digite seu nome' type="text" className='mt-3 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3' required />
                    </label>
                    <label htmlFor="Email" className='block text-sm font-medium flex-col'>
                        Digite seu email:
                        <input placeholder='Ex: exemplo@gmail.com' onChange={(e) => setCadastro({ ...cadastro, emailUser: e.target.value })} type="text" className='mt-3 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3 ' required />
                    </label>
                    <label htmlFor="Email" className='block text-sm font-medium flex-col'>
                        Digite sua senha:
                        <input placeholder='Ex: senha123!@#' onChange={(e) => setCadastro({ ...cadastro, senhaUser: e.target.value })} type="password" className='mt-3 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3 ' required />
                    </label>
                    <label htmlFor="IdadeDev" className='block text-sm font-medium flex-col'>
                        Digite seu idade:
                        <input placeholder='Ex: 10' onChange={(e) => setCadastro({ ...cadastro, ageUser: e.target.value })} type="number" inputMode='numeric' maxLength={3} pattern="[0-9]*" className='mt-3 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3' required />
                    </label>
                    <Link
                        to='/'
                        className='flex items-center gap-1 text-indigo-400 hover:text-white transition duration-200 underline underline-offset-2'
                    >
                        Voltar para o login
                    </Link>
                    <button onClick={register} className='bg-indigo-600 hover:bg-indigo-500 rounded-sm h-10 cursor-pointer'
                    >Cadastrar</button>
                </div>
            </div>
        </div>
    )
}
