import { useState } from "react"

const Objeto = () => {
    const [usuarios, setUsuarios] = useState([
        {id:1, nombre:'Leonardo', ciudad: 'Barcelona' },
        {id:2, nombre:'Carlos', ciudad: 'Manchester' },
        {id:3, nombre:'Matias', ciudad: 'Miami' },
    ])

    // AGREGAR USUARIO DE FORMA MANUAL
    const ingresarUsuario = () => {
        const nuevo = {id:4, nombre:'Estefania', ciudad:'Los Angeles'}
        setUsuarios([...usuarios, nuevo])
    }

    const cambiarCiudad = (id, nuevaCiudad) => {
        setUsuarios(
            usuarios.map(usuario =>
                usuario.id === id
                    ? { ...usuario, ciudad: nuevaCiudad } // copiamos el objeto y actualizamos solo ciudad
                    : usuario
            )
        );
    }

    // ---------------------------------

    const eliminarUsuario = (id) => {
        setUsuarios(usuarios.filter(usuario => usuario.id !== id))
    }

    return (
        <div>
            <h3>Lista de usuarios</h3>
            <ul>
                {
                    usuarios.map(u => (
                        <li key={u.id}>
                            {u.nombre} - {u.ciudad}
                            <button onClick={() => cambiarCiudad(u.id, 'Roma')}>Mover a Roma</button>
                            <button onClick={() => eliminarUsuario(u.id)}>Eliminar</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={ingresarUsuario}>Agregar Ana</button>
        </div>
    )
}

export default Objeto