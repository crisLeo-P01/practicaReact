// 🎯 EJERCICIO 2: LISTA DE TAREAS SIMPLE
// 
// OBJETIVO: Mostrar una lista de tareas con estado completado/pendiente
//
// REQUISITOS:
// 1. Recibir un array de tareas como prop
// 2. Cada tarea tiene: id, texto, completada (boolean)
// 3. Mostrar tareas completadas con estilo diferente
// 4. Usar renderizado condicional para mostrar mensaje si no hay tareas
// 5. Usar keys correctamente en la lista
//
// CONCEPTOS A USAR:
// - Props
// - map() para renderizar listas
// - Keys únicas
// - Renderizado condicional
// - Clases CSS condicionales

import React from 'react';
import './ListaTareas.css';

const ListaTareas = ({ tareas }) => {
    // TODO: Implementa tu componente aquí
    const listaTareas = [
        { id: 1, texto: 'Realizar las comprar al supermercado', completada: false },
        { id: 2, texto: 'Llamar por teléfono a la clínica para reservar un turno al médico', completada: true },
        { id: 3, texto: 'Comprar alimento balanceado para Max', completada: true },
        { id: 4, texto: 'Ir al gimnasio', completada: false },
    ]

    const listaFinal = tareas && tareas.length > 0 ? tareas : listaTareas
    
    return (
        <div className="lista-tareas">
            <h2>📝 Mi Lista de Tareas</h2>
            
            {/* TODO: Renderizado condicional si no hay tareas */}
            {tareas.length === 0 ? (
                <p>No hay tareas</p>
            ) : (
                <ul>
                    {
                        listaFinal.map(tarea => (
                            <div key={ tarea.id }>
                                <li  className={ tarea.completada ? 'completada' : 'pendiente' }>{ tarea.texto }</li>
                                <p className='estado'>Tarea completada: { (tarea.completada) ? '✅' : '⏳' }</p>
                            </div>
                        ))
                    }
                </ul>
            )}
        </div>
    );
};

export default ListaTareas;

// 📊 DATOS DE EJEMPLO para probar:
// const tareasEjemplo = [
//     { id: 1, texto: "Estudiar React", completada: true },
//     { id: 2, texto: "Hacer ejercicios", completada: false },
//     { id: 3, texto: "Revisar conceptos", completada: false },
//     { id: 4, texto: "Crear proyecto personal", completada: true }
// ];

// 💡 PISTAS:
// - Usa className condicional: className={completada ? 'completada' : 'pendiente'}
// - Recuerda que map() necesita return
// - Cada elemento de la lista debe tener una key única