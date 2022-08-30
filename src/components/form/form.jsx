import { useContext, useState } from "react";
import { ContextCliente } from "../../context/ContextCliente"
import "./form.css";


const Form = () => {
    const [nome, setNome] = useState("");
    const [sobrenome, SetSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const {clientes, setClientes} = useContext(ContextCliente);

    function handleCadastro(e){
        e.preventDefault();
        const novoCliente = {
            Nome: nome,
            Sobrenome: sobrenome,
            Email: email,
            Telefone: telefone
        }

        setClientes([...clientes, novoCliente]);
        console.log(clientes);
    }

    return ( 
        <div className="cad-form">
            <h1 className="titleForm">Cadastro de clientes</h1>
            <form>
                <input onChange={(e)=> {setNome(e.target.value)}} type="text" name="Nome" placeholder="Nome" />
                <input onChange={(e) => {SetSobrenome(e.target.value)}} type="text" name="Sobranome" placeholder="Sobrenome" />
                <input onChange={(e) => {setEmail(e.target.value)}} type="email" name="E-mail" placeholder="E-mail" />
                <input onChange={(e) => {setTelefone(e.target.value)}} type="text" name="Telefone" placeholder="Telefone" />
                <button onClick={(e)=>handleCadastro(e)}>Enviar</button>
                </form>
            </div>
    );
}

export default Form;