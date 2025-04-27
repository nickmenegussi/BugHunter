import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cadastro from './pages/auth/Cadastro';
import PaginaErro from './pages/PaginaErro';
import Login from './pages/auth/login';
import Experiences from './pages/Experiences';
import Jogo from './pages/Jogo';
import Resultado from './pages/resultado';

// import Cadastro from './pages/cadastro';
// import Jogo from './pages/jogo';
// import Status from './pages/status';
// import Resultado from './pages/resultado';
// import BugFixMenu from './pages/MenuBug';

export default function App() {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro/>}  />
        <Route path="/experiences" element={<Experiences/>}  />
        <Route path='/jogo' element={<Jogo />}/>
        <Route path='/resultado' element={<Resultado />}/>
        {/* <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/status" element={<Status />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/menuBug" element={<BugFixMenu />} /> */}
        <Route path="*" element={<PaginaErro />} />
      </Routes>
  );
}
