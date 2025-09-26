import { useState } from "react";

const Boolean = () => {
    const [encendido, setEncendido] = useState(false)

    const alterar = () => {
        setEncendido(!encendido)
    }

    return (
        <>
            <h2 className={ `estado ${ encendido ? 'activo' : 'inactivo' }` }>
                La luz esta { encendido ? 'ENCENDIDA' : 'APAGADO' }
            </h2>
            <button onClick={ alterar }>{ encendido ? 'APAGAR' : 'ENCENDER' }</button>
        </>
    )
}

export default Boolean;