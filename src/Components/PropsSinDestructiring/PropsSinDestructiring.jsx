const PropsSinDestructiring = (props) => {
    return (
        <div>
            <h2>Usuario: { props.nick }</h2>
            <p>Nombre y apellido: { props.nombre } { props.apellido }</p>
            <p>Profesión: { props.profesion }</p>
        </div>
    )
}

export default PropsSinDestructiring;