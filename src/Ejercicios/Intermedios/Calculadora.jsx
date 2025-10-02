// 🎯 EJERCICIO 4: CALCULADORA SIMPLE
// 
// OBJETIVO: Crear una calculadora básica con las 4 operaciones
//
// REQUISITOS:
// 1. Dos inputs para números
// 2. Botones para: +, -, *, /
// 3. Mostrar el resultado
// 4. Manejar errores (división por cero, números inválidos)
// 5. Botón para limpiar
//
// CONCEPTOS A USAR:
// - useState (múltiples estados)
// - Event handling
// - Controlled components
// - Renderizado condicional
// - Funciones de cálculo

import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
    // TODO: Define los estados necesarios
    // - numero1
    // - numero2  
    // - resultado
    // - operacion
    // - error
    
    // TODO: Función para manejar cambios en los inputs
    const manejarCambioNumero = (e) => {
        // Implementa el manejo de cambios
    };
    
    // TODO: Funciones para cada operación
    const sumar = () => {
        // Implementa la suma
    };
    
    const restar = () => {
        // Implementa la resta
    };
    
    const multiplicar = () => {
        // Implementa la multiplicación
    };
    
    const dividir = () => {
        // Implementa la división (¡cuidado con división por cero!)
    };
    
    // TODO: Función para limpiar
    const limpiar = () => {
        // Resetea todos los estados
    };

    return (
        <div className="calculadora">
            <h2>🧮 Calculadora Simple</h2>
            
            <div className="inputs">
                {/* TODO: Inputs para los números */}
                <input 
                    type="number"
                    placeholder="Primer número"
                    // value y onChange
                />
                <input 
                    type="number"
                    placeholder="Segundo número"
                    // value y onChange
                />
            </div>
            
            <div className="operaciones">
                {/* TODO: Botones para las operaciones */}
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <button onClick={multiplicar}>×</button>
                <button onClick={dividir}>÷</button>
            </div>
            
            <button className="limpiar" onClick={limpiar}>
                🗑️ Limpiar
            </button>
            
            {/* TODO: Mostrar resultado o error */}
            <div className="resultado">
                {/* Renderizado condicional para resultado/error */}
            </div>
        </div>
    );
};

export default Calculadora;

// 💡 PISTAS:
// - Convierte los strings a números con Number() o parseFloat()
// - Valida que los números sean válidos con isNaN()
// - Para división por cero: if (numero2 === 0) return 'Error: División por cero'
// - Usa toFixed(2) para limitar decimales