import  { useState } from "react";
const Formulario = () => {
    const [formulario, setFromulario] = useState({
        nombre: '',
        email: '',
        edad: '',
        genero: '',
        acepta: false
    })

    const manejarCambio = (e) => {
        const {  name, value, type, checked } = e.target

        setFromulario(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const manejarSubmit = (e) => {
        e.preventDefault()
        console.log('Datos del fomulario: ', formulario);
        
    }

    return (
        <form onSubmit={ manejarSubmit }>
            <div>
                <label>Nombre:</label>
                <input 
                    type="text"
                    name="nombre"
                    value={ formulario.nombre }
                    onChange={ manejarCambio }
                />
            </div>

            <div>
                <label>Email</label>
                <input 
                    type="email"
                    name="email"
                    value={ formulario.email }
                    onChange={ manejarCambio }
                />
            </div>

            <div>
                <label>Edad</label>
                <input 
                    type="number"
                    name="edad"
                    value={ formulario.edad }
                    onChange={ manejarCambio }
                />
            </div>

            <div>
                <label>Género</label>
                <select 
                    name="genero"
                    value={ formulario.genero }
                    onChange={ manejarCambio }
                >
                    <option value="">Seleccionar</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            <div>
                <label>
                    <input 
                        type="checkbox"
                        name="acepta"
                        checked={ formulario.acepta }
                        onChange={ manejarCambio }
                    />
                    Acepto los términos y condiciones
                </label>
            </div>

            <button type="submit">Enviar</button>
        </form>
    )
}

export default Formulario;