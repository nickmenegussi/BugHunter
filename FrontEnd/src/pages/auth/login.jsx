import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'

export default function Login() {
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        emailUser: '',
        senhaUser: ''
    })

    async function loginUser(){ 
        try {
            const response = await api.post('/user/user/login', login)
            alert(response.data.message)
            localStorage.setItem('@Auth:token', JSON.stringify(response.data.data))
            navigate('/home')
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert(error)
            }
        }

    }

    return (
        <div className='min-h-screen flex flex-col bg-gradient-to-bl from-zinc-900 to-slate-800 text-white p-4 justify-center items-center'>
            <div className='p-5 w-full max-w-[450px] rounded-lg bg-[#121A2B] shadow-lg'>
                <h1 className='font-bold text-3xl text-center'>Login</h1>
                <div className='mt-6 flex flex-col gap-5'>
                    <label className='text-sm font-medium'>
                        Digite seu email:
                        <input
                            onChange={(e) => setLogin({ ...login, emailUser: e.target.value })}
                            type="text"
                            required
                            placeholder='Ex: exemplo@gmail.com'
                            className='mt-2 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3'
                        />
                    </label>
                    <label className='text-sm font-medium'>
                        Digite sua senha:
                        <input
                            onChange={(e) => setLogin({ ...login, senhaUser: e.target.value })}
                            type="password"
                            required
                            placeholder='Ex: senha123'
                            className='mt-2 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3'
                        />
                    </label>
                    <div className='flex flex-col items-end gap-2 mt-4 text-sm'>
                        <Link
                            to='/cadastro'
                            className='flex items-center gap-1 text-indigo-400 hover:text-white transition duration-200 underline underline-offset-2'
                        >
                            Cadastre-se aqui
                        </Link>
                        <Link
                            to='/ForgottenPassword'
                            className='text-indigo-400 hover:text-white transition duration-200'
                        >
                            Esqueceu a senha?
                        </Link>
                    </div>
                    <button
                        className='bg-[#4F46E5] hover:bg-indigo-500 rounded-md h-10 font-semibold transition duration-300'
                        onClick={loginUser}
                    >
                        Entrar
                    </button>


                </div>
            </div>
        </div>
    )
}
