import { useState } from "react"

const CargarUsuario = () => {
    const [lista, setLista] = useState([])
    const [usuario, setUsuario] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [profesion, setProfesion] = useState('')

    const agregarUsuario = () => {
        if (usuario.trim() === "" || ciudad.trim() === "" || profesion.trim === "") return

        const nuevoUsuario = {
            id: lista.length + 1,
            usuario,
            ciudad,
            profesion
        }

        setLista([...lista, nuevoUsuario])
        setUsuario("")
        setCiudad("")
        setProfesion("")
    }

    const eliminarUsuario = (id) => {
        setLista(lista.filter(u => u.id !== id))
    }

    return (
        <div>
            <h3>Agregar nuevo usuario</h3>
            <div>
                <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Ingresa tu ciudad"
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Ingresa tu profesión"
                    value={profesion}
                    onChange={(e) => setProfesion(e.target.value)}
                />
                <button onClick={agregarUsuario}>Ingresar usuario</button>
            </div>

            <div>
                <ul>
                    {
                        lista.map(user => (
                            <div key={user.id}>
                                <p>Nombre: {user.usuario}</p>
                                <p>Ciudad: {user.ciudad}</p>
                                <p>Profesión: {user.profesion}</p>
                                <button onClick={() => eliminarUsuario(user.id)}>Eliminar usuario</button>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default CargarUsuario