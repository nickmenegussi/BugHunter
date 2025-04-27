import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api'; // ajuste o caminho

export default function Resultado() {
  const nome = JSON.parse(localStorage.getItem('@Auth:token'));
  const status = JSON.parse(localStorage.getItem('@Jogo:status')) || {
    energia: 0,
    foco: 0,
    xp: 0,
    nivel: 1
  };

  const progresso = (status.xp / 100) * 100;

  useEffect(() => {
    async function saveHistoric() {
      try {
        await api.post('/historic/create', {
          user_id: nome.user.idUser,   
          xp_ganho: status.xp,
          bugs_resolvidos: 0, 
          foco_gasto: status.foco,
          vida_restante: status.energia,
          tentativasErradas: 0, 
          encerradoPor: "Falta de vida"
        });
        console.log('Histórico salvo com sucesso!');
      } catch (error) {
        console.error('Erro ao salvar histórico:', error.response?.data || error.message);
      }
    }

    saveHistoric();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-zinc-900 to-gray-800 text-white flex flex-col items-center justify-center px-4">
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-4">Fim do Dia, {nome.user.nameUser}!</h2>

        <div className="space-y-3 text-gray-200">
          <p><span className="font-semibold">Energia:</span> {status.energia}</p>
          <p><span className="font-semibold">Foco:</span> {status.foco}</p>
          <p><span className="font-semibold">Nível:</span> {status.nivel}</p>

          <div>
            <span className="font-semibold">XP:</span> {status.xp}/100
            <div className="w-full h-4 bg-gray-700 rounded mt-1">
              <div
                className="h-4 bg-green-500 rounded"
                style={{ width: `${progresso}%`, transition: 'width 0.5s ease-in-out' }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/jogo"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2 rounded transition"
          >
            Jogar de Novo
          </Link>
        </div>
      </div>
    </div>
  );
}
