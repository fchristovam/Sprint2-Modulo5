import { useContext, useState } from "react";
import { ContextCliente } from "../../context/ContextCliente"
import './form.css';


const Form = () => {
    const [nome, setNome] = useState("");
    const [sobrenome, SetSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");
    const [endereco1, setEndereco1] = useState("");
    const [endereco2, setEndereco2] = useState("");
    const [data_nascimento, setData_Nascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [renda_mensal, setRenda_mensal] = useState("");
    const {clientes, setClientes} = useContext(ContextCliente);

    function handleCadastro(e){
        e.preventDefault();
        const novoCliente = {
            Nome: nome,
            Sobrenome: sobrenome,
            Email: email,
            Telefone: telefone,
            CEP: cep,
            Endereco1: endereco1,
            Endereco2: endereco2,
            Data_Nascimento: data_nascimento,
            CPF: cpf,
            Renda_Mensal: renda_mensal
        }

        setClientes([...clientes, novoCliente]);
        console.log(clientes);
    }

    return ( 
        <div className="cad-form">
            <h1 className="titleForm">Cadastro de clientes</h1>
            <form className="forms">
                <input onChange={(e)=> {setNome(e.target.value)}} type="text" name="Nome" placeholder="Nome" />
                <input onChange={(e) => {SetSobrenome(e.target.value)}} type="text" name="Sobranome" placeholder="Sobrenome" />
                <input onChange={(e) => {setEmail(e.target.value)}} type="email" name="E-mail" placeholder="E-mail" />
                <input onChange={(e) => {setTelefone(e.target.value)}} type="text" name="Telefone" placeholder="Telefone" />
                <input onChange={(e)=> {setCep(e.target.value)}} type="text" name="CEP" placeholder="CEP" />
                <input onChange={(e)=> {setEndereco1(e.target.value)}} type="text" name="Endereco1" placeholder="Endereço 1" />
                <input onChange={(e)=> {setEndereco2(e.target.value)}} type="text" name="Endereco2" placeholder="Endereço 2" />
                <input onChange={(e)=> {setData_Nascimento(e.target.value)}} type="text" name="Data_nascimento" placeholder="Data de Nascimento" />
                <input onChange={(e)=> {setCpf(e.target.value)}} type="text" name="Cpf" placeholder="CPF" />
                <input onChange={(e)=> {setRenda_mensal(e.target.value)}} type="text" name="Renda_mensal" placeholder="Renda Mensal" />
                <button onClick={(e)=>handleCadastro(e)}>Enviar</button>
                </form>
            </div>
    );
}

export default Form;