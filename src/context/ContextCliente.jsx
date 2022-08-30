import { createContext, useState } from "react";

export const ContextCliente = createContext();

export const ContextClienteProvider = ({ children }) => {
    const [clientes, setClientes] = useState([{
        Nome: "nome",
        Sobrenome: "sobrenome",
        Email: "email",
        Telefone: "telefone",
        CEP: "cep",
        Endereço1: "endereco1",
        Endereço2: "endereco2",
        Data_Nascimento: "data_nascimento",
        CPF: "cpf",
        Renda_Mensal: "renda_mensal"
    }]);
    return (
        <ContextCliente.Provider value={{ clientes, setClientes }}>
        {children}
        </ContextCliente.Provider>
    );
}