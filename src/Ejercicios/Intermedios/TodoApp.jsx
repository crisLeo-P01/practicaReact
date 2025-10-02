// 🎯 EJERCICIO 5: TODO APP COMPLETA
// 
// OBJETIVO: Crear una aplicación completa de gestión de tareas
//
// REQUISITOS:
// 1. Agregar nuevas tareas
// 2. Marcar tareas como completadas/pendientes
// 3. Eliminar tareas
// 4. Filtrar tareas (todas, pendientes, completadas)
// 5. Contador de tareas pendientes
// 6. Validación: no agregar tareas vacías
//
// CONCEPTOS A USAR:
// - useState complejo (array de objetos)
// - Formularios controlados
// - Event handling
// - map(), filter()
// - Renderizado condicional
// - Keys únicas

import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
    // TODO: Estados necesarios
    // - tareas: array de objetos {id, texto, completada}
    // - nuevaTarea: string para el input
    // - filtro: 'todas' | 'pendientes' | 'completadas'
    
    // TODO: Función para agregar nueva tarea
    const agregarTarea = (e) => {
        e.preventDefault();
        // Validar que no esté vacía
        // Crear nueva tarea con id único
        // Actualizar estado
        // Limpiar input
    };
    
    // TODO: Función para alternar estado de completada
    const alternarCompletada = (id) => {
        // Usar map para actualizar la tarea específica
    };
    
    // TODO: Función para eliminar tarea
    const eliminarTarea = (id) => {
        // Usar filter para remover la tarea
    };
    
    // TODO: Función para filtrar tareas
    const obtenerTareasFiltradas = () => {
        // Según el filtro actual, retornar tareas filtradas
    };
    
    // TODO: Función para contar tareas pendientes
    const contarPendientes = () => {
        // Usar filter para contar tareas no completadas
    };

    return (
        <div className="todo-app">
            <h1>📝 My Todo App</h1>
            
            {/* TODO: Formulario para agregar tareas */}
            <form onSubmit={agregarTarea} className="agregar-form">
                <input 
                    type="text"
                    placeholder="¿Qué necesitas hacer?"
                    // value y onChange
                />
                <button type="submit">➕ Agregar</button>
            </form>
            
            {/* TODO: Filtros */}
            <div className="filtros">
                <button 
                    className=""
                    // onClick para cambiar filtro
                    // className={filtro === 'todas' ? 'activo' : ''}
                >
                    Todas
                </button>
                <button 
                    className=""
                    // onClick para cambiar filtro
                    // className={filtro === 'pendientes' ? 'activo' : ''}
                >
                    Pendientes
                </button>
                <button 
                    className=""
                    // onClick para cambiar filtro
                    // className={filtro === 'completadas' ? 'activo' : ''}
                >
                    Completadas
                </button>
            </div>
            
            {/* TODO: Lista de tareas */}
            <ul className="lista-tareas">
                {/* Map de tareas filtradas */}
                {/* Cada tarea debe tener:
                    - Checkbox para marcar completada
                    - Texto de la tarea
                    - Botón eliminar
                */}
            </ul>
            
            {/* TODO: Contador */}
            <div className="contador">
                {/* Mostrar número de tareas pendientes */}
            </div>
        </div>
    );
};

export default TodoApp;

// 💡 PISTAS:
// - Para IDs únicos: Date.now() o Math.random()
// - Usa trim() para validar inputs
// - Estructura de tarea: {id: Date.now(), texto: input, completada: false}
// - Para filtros usa switch o objeto con funciones