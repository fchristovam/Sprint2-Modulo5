import { createContext, useState } from "react";

export const ContextCliente = createContext();

export const ContextClienteProvider = ({ children }) => {
    const [clientes, setClientes] = useState([{
        Nome: "teste",
        Sobrenome: "teste",
        Email: "teste",
        Telefone: "teste"
    }]);
    return (
        <ContextCliente.Provider value={{ clientes, setClientes }}>
        {children}
        </ContextCliente.Provider>
    );
}