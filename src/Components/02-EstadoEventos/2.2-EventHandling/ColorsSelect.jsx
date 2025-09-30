import { useState } from "react";

const ColorsSelect = () => {
    const [colorSeleccionado, setColorSeleccionado] = useState('')

    const colores = ['red', 'green', 'yellow', 'blue']


    return (
        <div>
            <h3>Color seleccionado: { colorSeleccionado }</h3>
            {
                colores.map(color => (
                    <button 
                        key={ color }
                        onClick={ () => setColorSeleccionado(color) }
                        style={{ backgroundColor: colorSeleccionado === color ? color : '' }}
                        className="estado"
                    >
                        { color }
                    </button>
                ))
            }
        </div>
    )
}

export default ColorsSelect;