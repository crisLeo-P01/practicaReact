const PropsConDestructuring = ({ marca, modelo, anio = "Desconocido" }) => {
    return (
        <div>
            <h2>Marca de auto: { marca }</h2>
            <p>Modelo: { modelo }</p>
            <p>Año: { anio }</p>
        </div>
    )
}

export default PropsConDestructuring;