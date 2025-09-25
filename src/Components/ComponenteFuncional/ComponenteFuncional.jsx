import './styles.css'

const ComponenteFuncional = () => {
    const personaje = {
        nombre: 'Mario',
        apellido: 'Bros',
        edad: 40,
        profesion: 'Plomero',
        isActivo: true
    }

    const obtenerEstado = () => {
        return personaje.isActivo ? 'Activo' : 'Desconectado'
    }
    
    return (
        <div>
            <h2>Usuario: {personaje.nombre}</h2>
            <p>Edad: {personaje.edad}</p>
            <span className={ `estado ${personaje.isActivo ? 'activo' : 'inactivo'}` }>{ obtenerEstado() }</span>
        </div>
    )
}

export default ComponenteFuncional