import { useState } from "react";

const ControlledComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const manejarSubmit = (e) => {
        e.preventDefault()
        console.log('Email: ', email);
        console.log('Password: ', password);
    }

    return (
        <div>
            <h2>Formulario con Controlled Component</h2>
            <form onSubmit={ manejarSubmit }>
                <div>
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input 
                        type="text"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>

                <button type="submit">Iniciar sesión</button>

                <p>Email actual: { email }</p>
            </form>
        </div>
    )
}

export default ControlledComponent;