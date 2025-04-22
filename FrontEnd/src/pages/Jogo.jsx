import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Jogo() {
  const [energia, setEnergia] = useState(100);
  const [foco, setFoco] = useState(65);
  const [xp, setXp] = useState(0);
  const [nivel, setNivel] = useState(0);
  const [cafe, setCafe] = useState(0)

  const encerrarDia = () => {

  };

  const ganharXp = (valor) => {
    const novoXp = xp + valor
    if (novoXp >= 100) {
      setNivel(nivel + 1)
      setXp(novoXp - 100)
    } else {
      setXp(novoXp)
    }
  };

  const resolverBug = () => {
    // a função Math.max é para previnir que o foco e a energia ultrapasse 100, antes da virgula ele fazer alguma alteração matemática e depois da vírgula dizer o máximo.
    if (foco <= 0 && energia <= 0) {
      alert('Por favor, tente jogar novamente. Você não tem mais energia e nem disposição.')
    } else {
      setEnergia((e) => Math.max(e - 10, 0))
      setFoco((e) => Math.max(e - 10, 0))
      ganharXp(10)
    }
  }

  const tomarCafe = () => {
    // a função Math.min é para previnir que o foco e a energia ultrapasse 100, antes da virgula ele fazer alguma alteração matemática e depois da vírgula dizer o máximo.
    if(energia <= 0){
      alert('Você não tem energia suficiente para tomar café, por tanto, você morreu.')
    } else {
      if (foco >= 100) {
        alert('Você já está com disposição suficiente para continuar')
      } 
      else {
        setCafe((e) => e + 1)
        setFoco((e) => Math.min(e + 5, 100))
        setEnergia((e) => Math.min(e + 5, 100))
      }
    }
    
  };

  const barraStatus = (valor, cor) => (
    <div className={`w-full h-4 rounded bg-gray-700 mt-2`}>
      <div
        className={`h-full rounded transition-all ${cor}`}
        style={{ width: `${valor}%`, maxWidth: "100%" }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-bl from-zinc-900 to-slate-800 text-white p-4 justify-center items-center">
      <div className="p-10 min-md:w-[450px] h-full rounded-lg bg-[rgb(18,26,43)] max-xl:w-[400px]">
        <h1 className="text-center font-bold text-3xl">Olá, Dev!</h1>
        <div className="space-y-4 mb-5">
          <div>
            <label className="text-sm text-gray-400">
              Energia: {energia}%{barraStatus(energia, "bg-green-500")}
            </label>
          </div>
          <div>
            <label className="text-sm text-gray-400">
              Foco: {foco}%{barraStatus(foco, "bg-yellow-500")}
            </label>
          </div>
          <div>
            {/* (xp / 100) * 100 é para sempre o xp não ultrapassar maior que 100 */}
            <label className="text-sm text-gray-400">
              Xp: {xp}%
              {barraStatus((xp / 100) * 100, "bg-blue-500")}

            </label>
          </div>
          <div>
            <label className="text-sm text-gray-400">
              Café tomados: {cafe}/30
            </label>
          </div>
          <div>
            <label className="text-sm text-gray-400">
              Nível: {nivel}/5
            </label>
          </div>
        </div>
        <div>
          <div className="flex gap-5 mb-3">
            <button
              className="bg-[#FF0000] hover:bg-red-700 rounded-sm h-10 w-[50%] cursor-pointer"
              onClick={resolverBug}
            >
              Resolver Bug
            </button>
            <button
              className="bg-[#FFA500] hover:bg-yellow-600 rounded-sm h-10 w-[50%] cursor-pointer"
              onClick={tomarCafe}
            >
              Tomar Café
            </button>
          </div>
          <div className="flex justify-space-around">
            <Link className="bg-">Ver status completo</Link>
            <button
              className="bg-[#FFA500] hover:bg-yellow-600 rounded-sm h-10 w-[40%] cursor-pointer"
              onClick={() => { }}
            >
              Encerrar Dia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
