import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Jogo() {
  const [energia, setEnergia] = useState(100);
  const [foco, setFoco] = useState(80);
  const [xp, setXp] = useState(0);
  const [nivel, setNivel] = useState(1);
  const nome = localStorage.getItem('nomeDev');
  const navigate = useNavigate();

  const resolverBug = () => {
    setEnergia((prev) => Math.max(prev - 10, 0));
    setFoco((prev) => Math.max(prev - 5, 0));
    ganharXp(20);
  };

  const tomarCafe = () => {
    setEnergia((prev) => Math.min(prev + 5, 100));
    setFoco((prev) => Math.min(prev + 10, 100));
  };

  const ganharXp = (valor) => {
    const novoXp = xp + valor;
    if (novoXp >= 100) {
      setNivel(nivel + 1);
      setXp(novoXp - 100);
    } else {
      setXp(novoXp);
    }
  };

  const encerrarDia = () => {
    const dados = { energia, foco, xp, nivel };
    localStorage.setItem('statusFinal', JSON.stringify(dados));
    navigate('/resultado');
  };

  const barraStatus = (valor, cor) => (
    <div className="w-full bg-gray-700 h-4 rounded">
      <div
        className={`h-full rounded transition-all ${cor}`}
        style={{ width: `${valor}%` }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-bl from-zinc-900 to-gray-800 text-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gray-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-2">Olá, {nome}!</h2>
        <p className="text-center text-gray-300 mb-6">Simule seu dia como dev 👨‍💻</p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="text-sm text-gray-400">Energia: {energia}%</label>
            {barraStatus(energia, 'bg-green-500')}
          </div>
          <div>
            <label className="text-sm text-gray-400">Foco: {foco}%</label>
            {barraStatus(foco, 'bg-yellow-400')}
          </div>
          <div>
            <label className="text-sm text-gray-400">XP: {xp}/100</label>
            {barraStatus((xp / 100) * 100, 'bg-blue-500')}
          </div>
          <p className="text-right text-indigo-400 font-semibold">Nível: {nivel}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <button
            onClick={resolverBug}
            className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded font-semibold transition"
          >
            Resolver Bug 🐛
          </button>
          <button
            onClick={tomarCafe}
            className="bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded font-semibold transition"
          >
            Tomar Café ☕
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            to="/status"
            className="text-sm text-gray-300 hover:text-white underline"
          >
            Ver Status Completo
          </Link>
          <button
            onClick={encerrarDia}
            className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-md font-semibold transition"
          >
            Encerrar Dia
          </button>
        </div>
      </div>
    </div>
  );
}
