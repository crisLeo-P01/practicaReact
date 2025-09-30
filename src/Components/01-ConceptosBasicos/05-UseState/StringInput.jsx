import { useState } from "react"

const StringInput = () => {
    const [nombre, setNombre] = useState('')

    return (
        <>
            <input 
                type="text"
                placeholder="Escribe tu nombre"
                value={ nombre }
                onChange={ (e) => setNombre(e.target.value) }
            />

            <p>{ nombre ? `Hola ${ nombre }` : 'Escriba su nombre por favor' }</p>
        </>
    )
}

export default StringInput;