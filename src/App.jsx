import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// import Cadastro from './pages/cadastro';
// import Jogo from './pages/jogo';
// import Status from './pages/status';
// import Resultado from './pages/resultado';
// import BugFixMenu from './pages/MenuBug';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/status" element={<Status />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/menuBug" element={<BugFixMenu />} /> */}
      </Routes>
    </Router>
  );
}
