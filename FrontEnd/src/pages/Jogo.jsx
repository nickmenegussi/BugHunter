import React from 'react'

export default function Jogo() {

  const barraStatus = (valor, cor) => (
    <div className={`w-full h-4 rounded bg-gray-700 mt-2`}>
      <div className={`h-full rounded transition-all ${cor}`} style={{ width: `${valor}%`, maxWidth: '100%' }}></div>
    </div>
  )

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-bl from-zinc-900 to-slate-800 text-white p-4 justify-center items-center'>
        <div className='p-10 min-md:w-[450px] h-full rounded-lg bg-[rgb(18,26,43)] max-xl:w-[400px]'>
            <h1 className='text-center font-bold text-3xl'>Olá, Dev!</h1>
            <div className='space-y-4 mb-5'>
                <div>
                    <label className='text-sm text-gray-400'>
                        Energia: {barraStatus(100, 'bg-green-500')}
                    </label>
                </div>
                <div>
                    <label className='text-sm text-gray-400'>
                        Energia: {barraStatus(70, 'bg-yellow-500')}
                    </label>
                </div>
                <div>
                    <label className='text-sm text-gray-400'>
                        Xp: {barraStatus(10, 'bg-blue-500')}
                    </label>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}
