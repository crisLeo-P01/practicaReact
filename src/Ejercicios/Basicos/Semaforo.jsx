// 🎯 EJERCICIO 3: SEMÁFORO INTERACTIVO
// 
// OBJETIVO: Crear un semáforo que cambie de color al hacer clic
//
// REQUISITOS:
// 1. Mostrar un semáforo con 3 luces: roja, amarilla, verde
// 2. Solo una luz debe estar activa a la vez
// 3. Al hacer clic en el semáforo, debe cambiar al siguiente color
// 4. Secuencia: Rojo → Amarillo → Verde → Rojo (ciclo infinito)
// 5. Mostrar texto indicando el estado actual
//
// CONCEPTOS A USAR:
// - useState hook
// - Event handling (onClick)
// - Renderizado condicional
// - Clases CSS condicionales

import React, { useState } from 'react';
import './Semaforo.css';

const Semaforo = () => {
    const [color, setColor] = useState('')
    // TODO: Define el estado para el color actual
    // Pista: puedes usar números (0, 1, 2) o strings ('rojo', 'amarillo', 'verde')
    const colores = ['rojo', 'amarillo', 'verde']
    
    // TODO: Función para cambiar al siguiente color
    const cambiarColor = () => {
        // Implementa la lógica del ciclo de colores
    };
    
    // TODO: Función para obtener el texto del estado actual
    const obtenerTextoEstado = () => {
        // Retorna el texto correspondiente al color actual
    };

    return (
        <div className="semaforo-container">
            <h2>🚦 Semáforo Interactivo</h2>
            
            <div className="semaforo" onClick={cambiarColor}>
                {/* TODO: Crear las tres luces del semáforo */}
                {/* Ejemplo de estructura:
                <div className={`luz roja ${colorActual === 'rojo' ? 'activa' : ''}`}></div>
                <div className={`luz amarilla ${colorActual === 'amarillo' ? 'activa' : ''}`}></div>
                <div className={`luz verde ${colorActual === 'verde' ? 'activa' : ''}`}></div>
                */}
            </div>
            
            <p className="estado-texto">
                {/* TODO: Mostrar el estado actual */}
                Estado: <span className="estado">{/* obtenerTextoEstado() */}</span>
            </p>
            
            <p className="instruccion">👆 Haz clic en el semáforo para cambiar el color</p>
        </div>
    );
};

export default Semaforo;

// 💡 PISTAS:
// - Usa un array para los colores: ['rojo', 'amarillo', 'verde']
// - Para el ciclo: (indiceActual + 1) % colores.length
// - Usa template literals para las clases CSS
// - Cada luz debe tener una clase base y una clase condicional para 'activa'