const ListaObjetos = () => {
    const usuarios = [
        { id: 1, nombre: "Ana García", edad: 28, ciudad: "Madrid" },
        { id: 2, nombre: "Carlos López", edad: 32, ciudad: "Barcelona" },
        { id: 3, nombre: "María Rodríguez", edad: 25, ciudad: "Valencia" },
        { id: 4, nombre: "David Martín", edad: 35, ciudad: "Sevilla" }
    ]

    return (
        <div>
            <h3>Usuarios Registrados: {usuarios.length}</h3>
            <div>
                {
                    usuarios.map(usuario => (
                        <div key={ usuario.id }>
                            <h3>Usuario: { usuario.nombre }</h3>
                            <p>Edad: { usuario.edad } años</p>
                            <p>Ciudad de Nacimiento: { usuario.ciudad }</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListaObjetos