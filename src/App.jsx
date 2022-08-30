import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextClienteProvider } from './context/ContextCliente';

import Menu from './components/menu/menu';
import Home from './pages/home/home';
import Cadastro from './pages/cadastro/cadastro';
import Clientes from './pages/clientes/clientes';
import Cliente from './pages/cliente/cliente';
import Erro from './components/erro/erro';
import './App.css'



function App() {
  return (
    <div className="app">
      <ContextClienteProvider>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/clientes' element={<Clientes />} />
            <Route path='/cliente/:id' exact element={<Cliente />} />
            <Route path='*' element={<Erro />} />
          </Routes>
        </BrowserRouter>
      </ContextClienteProvider>
  </div>
  )
}

export default App;
