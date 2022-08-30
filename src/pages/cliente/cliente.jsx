import { useContext, useState } from "react"
import { ContextCliente } from "../../context/ContextCliente"
import { useParams, Link } from 'react-router-dom';

import './cliente.css'

const Cliente = () => {
let { id } = useParams()
const { clientes, setClientes } = useContext(ContextCliente)

const cliente = clientes.filter((cliente, index) => index + 1 == id)

const [final, setFinal] = useState(false)

const deletarCliente = () => {
    const NovaLista = clientes.filter((cliente, index) => index + 1 != id)
    setClientes([...NovaLista])
    setFinal(true)
}

return ( 
    <div className="cliente">
    {(final === true) && (
    <div className="final">
        <h1>Cliente deletado com sucesso!</h1>
        <Link to='/clientes' ><button>Verificar lista de clientes</button></Link>
    </div>
    )}
    {(final === false) && (
    <div className="cliente-container">
    <h1>Detalhes do Cliente</h1>
        <div>
            <p>Nome: {cliente[0].Nome} {cliente[0].Sobrenome}</p>
            <p>E-mail: {cliente[0].Email}</p>
            <p>Telefone: {cliente[0].Telefone}</p>
            <p>CEP: {cliente[0].CEP}</p>
            <p>Endereco1: {cliente[0].Endereco1}</p>
            <p>Endereco2: {cliente[0].Endereco2}</p>
            <p>Data de Nascimento: {cliente[0].Data_Nascimento}</p>
            <p>CPF: {cliente[0].CPF}</p>
            <p>Renda Mensal: {cliente[0].Renda_Mensal}</p>
        </div>   
        <div className="botoes">
            <Link to='/clientes' ><button className="btn-voltar">Voltar</button></Link>
            <button className="btn-delete" onClick={(e)=> {deletarCliente(e)}}>Deletar Cadastro</button>
        </div>  
    </div>
    )}
    </div>
    )
}

export default Cliente;