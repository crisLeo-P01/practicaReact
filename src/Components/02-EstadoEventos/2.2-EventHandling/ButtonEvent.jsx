import { useState } from "react";

const ButtonEvent = () => {
    const [mensaje, setMensaje] = useState('')

    const manejarClick = () => {
        setMensaje('Diste clic')
    }

    const manejarMouseOver = () => {
        setMensaje('Cursor dentro del botón')
    }

    const manejarMouseOut = () => {
        setMensaje('Cursor fuera del botón')
    }

    const manejarSubmit = (e) => {
        e.preventDefault();
        setMensaje('Formulario enviado')
    }

    return (
        <>
            <button
                onClick={ manejarClick }
                onMouseOver={ manejarMouseOver }
                onMouseOut={ manejarMouseOut }
            >
                Hover y clic
            </button>

            <form onSubmit={ manejarSubmit }>
                <button type="submit">Enviar</button>
            </form>

            <p>{ mensaje }</p>

        </>
    )
}

export default ButtonEvent;