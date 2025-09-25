const ListaFrutas = () => {
    const frutas = ['Manzana', 'Pera', 'Frutilla', 'Banana', 'Kiwi']

    return (
        <div>
            <h3>Lista de frutas</h3>
            <ul>
                {
                    frutas.map((fruta, index) => (
                        <li key={index}>{fruta}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ListaFrutas