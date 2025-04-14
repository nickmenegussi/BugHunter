import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('nomeDev', nome);
    navigate('/jogo');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-zinc-800 flex items-center justify-center px-4">
      <div className="bg-gray-900 w-full max-w-md p-6 rounded-xl shadow-xl text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Cadastro do(a) Dev</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-1">
              Digite seu nome:
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ex: João Dev"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition text-white font-semibold py-2 rounded-md"
          >
            Iniciar Jornada
          </button>
        </form>
      </div>
    </div>
  );
}
