import React, { useState } from "react";

export default function BugFixMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);

  const bugFixOptions = [
    {
      title: "Erro de sintaxe",
      issues: [
        {
          description: "Esqueci de fechar parênteses em uma função.",
          solutionCode: `function somar(a, b) {\n  return a + b;\n}`,
          points: 10,
        },
        {
          description: "Faltou ponto e vírgula no final da linha.",
          solutionCode: `const nome = "Maria";`,
          points: 5,
        },
      ],
    },
    {
      title: "Variável não definida",
      issues: [
        {
          description: "Uso de variável antes da declaração.",
          solutionCode: `let idade = 25;\nconsole.log(idade);`,
          points: 8,
        },
        {
          description: "Erro de digitação no nome da variável.",
          solutionCode: `const nomeCorreto = "João";\nconsole.log(nomeCorreto);`,
          points: 5,
        },
      ],
    },
    {
      title: "Importação incorreta",
      issues: [
        {
          description: "Importando componente de caminho errado.",
          solutionCode: `import Header from './components/Header';`,
          points: 7,
        },
        {
          description: "Erro por esquecer extensão de arquivo.",
          solutionCode: `import util from './utils/util.js';`,
          points: 4,
        },
      ],
    },
    {
      title: "Componente quebrado",
      issues: [
        {
          description: "Componente React sem retorno válido.",
          solutionCode: `function MeuComponente() {\n  return <div>Olá mundo!</div>;\n}`,
          points: 9,
        },
        {
          description: "Props obrigatória não passada.",
          solutionCode: `<Botao texto="Clique aqui" />`,
          points: 6,
        },
      ],
    },
  ];

  function handleVerification() {
    const cleanedUser = userAnswer.replace(/\s/g, "");
    const cleanedSolution = selectedIssue.solutionCode.replace(/\s/g, "");
    if (cleanedUser === cleanedSolution) {
      setFeedback({
        correct: true,
        message: `✅ Correto! Você ganhou ${selectedIssue.points} pontos.`,
      });
    } else {
      setFeedback({
        correct: false,
        message: `❌ Resposta incorreta. Veja a solução correta abaixo.`,
      });
    }
  }

  return (
    <div className="p-6 font-sans">
      <button
        onClick={() => {
          setShowMenu(!showMenu);
          setSelectedOption(null);
          setSelectedIssue(null);
          setUserAnswer("");
          setFeedback(null);
        }}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-md transition"
      >
        Resolver Bug 🐞
      </button>

      {showMenu && (
        <div className="mt-4 bg-gray-100 p-5 rounded-xl shadow-lg w-full max-w-md">
          {!selectedOption && (
            <>
              <h3 className="text-lg font-semibold mb-4">🛠️ Selecione o tipo de problema:</h3>
              <ul className="space-y-2">
                {bugFixOptions.map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setSelectedOption(item)}
                      className="w-full text-left bg-white border border-gray-300 hover:bg-gray-200 px-4 py-2 rounded-lg transition"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}

          {selectedOption  && (
            <>
              <h4 className="text-md font-bold text-yellow-700 mb-2 mt-4">
                🔎 Escolha um problema:
              </h4>
              <ul className="space-y-3">
                {selectedOption.issues.map((issue, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setSelectedIssue(issue);
                        setUserAnswer("");
                        setFeedback(null);
                      }}
                      className="w-full bg-white border hover:bg-gray-200 px-4 py-2 rounded-md text-left transition"
                    >
                      {issue.description}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}

          {selectedIssue && (
            <div className="mt-6 bg-white border border-yellow-300 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-700 mb-2">
                ✏️ Corrija o seguinte problema:
              </h4>
              <p className="mb-3 text-gray-800">{selectedIssue.description}</p>

              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                rows={4}
                className="w-full p-3 rounded border text-sm border-gray-300 font-mono mb-3"
                placeholder="Digite aqui sua solução..."
              ></textarea>

              <button
                onClick={handleVerification}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
              >
                Verificar Resposta
              </button>

              {feedback && (
                <div
                  className={`mt-4 p-3 rounded ${
                    feedback.correct ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  <p className="font-medium">{feedback.message}</p>
                  {!feedback.correct && (
                    <pre className="mt-2 bg-gray-200 p-2 rounded text-sm overflow-x-auto text-gray-900">
                      {selectedIssue.solutionCode}
                    </pre>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
