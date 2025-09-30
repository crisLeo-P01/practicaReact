const ListaNumeros = ({ numero }) => {
    let resultados = [];

    for(let i = 1; i <= 10; i++) {
        resultados.push(i)
    }

    return (
        <div>
            <h3>Lista de numeros</h3>
            <ul>
                {
                    resultados.map(i => (
                        <li key={i}>{ numero } x { i } = { numero * i }</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ListaNumeros