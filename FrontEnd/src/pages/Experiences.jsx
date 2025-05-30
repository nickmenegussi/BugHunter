import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

export default function Experiences() {
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem('@Auth:token'))

  const [experiencia, setExperiencia] = useState({
    degree: '',
    amoutOfExperiencie: 0,
    currentPosition: '',
    areaAtuation: '',
    userId: data.user.idUser
  })

  async function registerExperiencies(){
    try {
      const response = await api.post('/experiencies/experiencies/create', experiencia)
      alert(response.data.message)
      navigate('/jogo')
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
      <div className='p-10 min-md:w-[550px] h-full rounded-lg bg-[#121A2B] max-xl:w-[400px]'>
        <h1 className='font-bold text-3xl text-center'>Experiences</h1>
        <div className='text-start mt-5 flex flex-col gap-6'>
          <label className='text-sm font-medium '>
            Selecione o tipo de experiência: 
            <select onChange={(e) => setExperiencia({...experiencia, degree: e.target.value})} className='mt-3 block w-full rounded-md  bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3'>
              <option>Escolha uma opção</option>
              <option value="Técnico">Técnico</option>
              <option value="Graduação">Graduação</option>
              <option value="Pós-Graduação">Pós-Graduação</option>
              <option value="Doutorado">Doutorado</option>
              <option value="Mestrado">Mestrado</option>
            </select>
          </label>
          <label>
            Experiência na area: 
            <input onChange={(e) => setExperiencia({...experiencia, amountOfExperiencie: e.target.value})} type="text" required placeholder='Ex: 1 a 2 anos' maxLength={2} className='mt-3 block w-full rounded-md bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3' />
          </label>
          <label className='text-sm font-medium '>
            Cargo atual: 
            <select onChange={(e) => setExperiencia({...experiencia, currentPosition: e.target.value})} className='mt-3 block w-full rounded-md  bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3'>
              <option>Escolha uma opção</option>
              <option value="Dev Júnior">Dev Júnior</option>
              <option value="Dev Pleno">Dev Pleno</option>
              <option value="Dev Sênior">Dev Sênior</option>
              <option value="Técnico">Técnico</option>
              <option value="Estágiario">Estágiario</option>
            </select>
          </label>
          <label className='text-sm font-medium '>
            Area de Atuação: 
            <select onChange={(e) => setExperiencia({...experiencia, areaAtuation: e.target.value})} className='mt-3 block w-full rounded-md  bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 p-3'>
              <option>Escolha uma opção</option>
              <option value="Front-End">Front-End</option>
              <option value="Back-End">Back-End</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Mobile">Mobile</option>
            </select>
          </label>
          <button className='bg-[#4F46E5] hover:bg-indigo-500 rounded-sm h-10 cursor-pointer' onClick={registerExperiencies}>Entrar</button>
      </div>
      </div>
    </div>
  )
}
