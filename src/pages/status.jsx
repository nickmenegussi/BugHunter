import React from 'react';
import { Link } from 'react-router-dom';

export default function Status() {
  const nome = localStorage.getItem('nomeDev');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-slate-800 text-white flex flex-col items-center justify-center px-4">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Status Atual de {nome}</h2>

        <div className="space-y-3">
          <p className="text-lg text-gray-300">Energia, Foco e XP estão sendo atualizados ao vivo no jogo.</p>
          <p className="text-sm text-gray-400 italic">Volte ao jogo para continuar evoluindo!</p>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/jogo"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2 rounded transition"
          >
            Voltar ao Jogo
          </Link>
        </div>
      </div>
    </div>
  );
}
