import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importando React Router
import CrudUsuarios from './components/CrudUsuarios'
import Login from './components/Login';
import Pagina from './components/Pagina'
import Loginoficial from './components/Loginoficial';

function App() {
  return (
    <Router> {/* Envolvendo a aplicação com Router */}
      <Routes>
        {}
        <Route path="/" element={<CrudUsuarios />} /> {}
        <Route path="/login" element={<Login />} />  {}
        <Route path="/home" element={<Pagina />} /> {}
        <Route path="/loginoficial" element={<Loginoficial />} />

      </Routes>
    </Router>
  );
}

export default App;