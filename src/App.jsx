import React from 'react';
import SideBar from './components/Sidebar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/Navbar';

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/';

  return (
    <div className='flex'>
      {/* <SideBar />
      <NavBar /> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
