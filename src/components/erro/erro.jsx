import React from 'react';
import { Link } from 'react-router-dom'
import './erro.css';

const Erro = () => {
  return ( 
  <div className='erro'>
    <p className='erro-msg'>Verifique a Url, rota não encontrada!</p>
    <Link to='/' ><button>Voltar</button></Link>
  </div> 
  );
}

export default Erro;