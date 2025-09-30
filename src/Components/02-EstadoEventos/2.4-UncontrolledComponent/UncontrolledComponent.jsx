import { useRef } from "react";

const UncontrolledComponent = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const manejarSubmit = (e) => {
        e.preventDefault()
        console.log('Email: ', emailRef.current.value);
        console.log('Password: ', passwordRef.current.value);
    }

    return (
        <div>
            <h2>Formulario con Uncontrolled Component</h2>

            <form onSubmit={ manejarSubmit }>
                <div>
                    <label>Email del usuario</label>
                    <input 
                        type="email"
                        ref={ emailRef }
                        placeholder="Escribe un email"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        ref={ passwordRef }
                        placeholder="Escribe un password por favor"
                    />
                </div>

                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    )
}

export default UncontrolledComponent;