import { useState } from "react";

const UseStateContador = () => {
    const [numero, setNumero] = useState(0)

    const incrementar = () => {
        setNumero(numero + 1)
    }

    const decrementar = () => {
        setNumero(numero - 1)
    }

    return (
        <div>
            <button onClick={ incrementar }>Incrementar</button>
            <h2>Número: { numero }</h2>
            <button onClick={ decrementar }>Incrementar</button>
        </div>
    )
}

export default UseStateContador;