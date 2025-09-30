import './styleListaAnidada.css'

const ListaAnidada = () => {
    const categorias = [
        {
        id: 1,
        nombre: "Entrantes",
        platos: [
            { id: 101, nombre: "Ensalada César", precio: 8.50 },
            { id: 102, nombre: "Croquetas de jamón", precio: 6.00 },
            { id: 103, nombre: "Hummus con pan pita", precio: 5.50 }
        ]
        },
        {
        id: 2,
        nombre: "Platos Principales",
        platos: [
            { id: 201, nombre: "Paella Valenciana", precio: 15.00 },
            { id: 202, nombre: "Salmón a la plancha", precio: 18.00 },
            { id: 203, nombre: "Hamburguesa completa", precio: 12.00 }
        ]
        },
        {
        id: 3,
        nombre: "Postres",
        platos: [
            { id: 301, nombre: "Tiramisú", precio: 4.50 },
            { id: 302, nombre: "Tarta de chocolate", precio: 5.00 },
            { id: 303, nombre: "Helado artesanal", precio: 3.50 }
        ]
        }
    ];

    return (
        <div>
            <h3>Nuestro menú</h3>
            {
                categorias.map(categoria => (
                    <div key={ categoria.id } className="categoria">
                        <h2>{ categoria.nombre }</h2>
                        <div className="platos">
                            {
                                categoria.platos.map(plato => (
                                    <div key={ plato.id }>
                                        <p>{ plato.nombre }</p>
                                        <p>$ { plato.precio }</p>
                                        <button>Anadir al carrito</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListaAnidada;