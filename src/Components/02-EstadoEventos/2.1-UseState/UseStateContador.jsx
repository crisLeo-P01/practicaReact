import { useState } from "react";

const UseStateContador = () => {
    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador + 1)
    }

    return (
        <div>
            <button onClick={ incrementar }>Incrementar</button>
            <h2>Contador en: { contador }</h2>
            <button onClick={() => setContador(n => n - 1)}>Decrementar</button>
        </div>
    )
}

export default UseStateContador;