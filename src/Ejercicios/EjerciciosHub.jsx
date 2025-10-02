// 🎮 CENTRO DE EJERCICIOS - REACT FASE 1
// 
// Este archivo te permite probar todos los ejercicios desde un solo lugar
// Simplemente descomenta el ejercicio que quieras probar

import React from 'react';
import TarjetaPerfil from './Basicos/TarjetaPerfil';
import ListaTareas from './Basicos/ListaTareas';
import Semaforo from './Basicos/Semaforo';

// 🟢 EJERCICIOS BÁSICOS
// import TarjetaPerfil from './Basicos/TarjetaPerfil';
// import ListaTareas from './Basicos/ListaTareas';
// import Semaforo from './Basicos/Semaforo';

// 🟡 EJERCICIOS INTERMEDIOS  
// import Calculadora from './Intermedios/Calculadora';
// import TodoApp from './Intermedios/TodoApp';

// 🔴 EJERCICIOS AVANZADOS
// import RegistroUsuario from './Avanzados/RegistroUsuario';
// import Dashboard from './Avanzados/Dashboard';

const EjerciciosHub = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>
                🚀 Centro de Ejercicios - React Fase 1
            </h1>
            
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <p>Descomenta el ejercicio que quieras probar en el archivo EjerciciosHub.jsx</p>
            </div>

            {/* 🟢 EJERCICIOS BÁSICOS */}
            <section>
                <h2>🟢 Ejercicios Básicos</h2>
                
                {/* EJERCICIO 1: Tarjeta de Perfil */}
                <TarjetaPerfil 
                    nombre="Ana García"
                    profesion="Desarrolladora Frontend"
                    edad={28}
                    imagen="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                    email="ana.garcia@email.com"
                    telefono="+34 123 456 789"
                />
                
                {/* EJERCICIO 2: Lista de Tareas */}
                <ListaTareas tareas={[
                    { id: 1, texto: "Estudiar React", completada: true },
                    { id: 2, texto: "Hacer ejercicios", completada: false },
                    { id: 3, texto: "Revisar conceptos", completada: false },
                    { id: 4, texto: "Crear proyecto personal", completada: true }
                ]} />
                
                {/* EJERCICIO 3: Semáforo */}
                <Semaforo />
            </section>

            {/* 🟡 EJERCICIOS INTERMEDIOS */}
            <section>
                <h2>🟡 Ejercicios Intermedios</h2>
                
                {/* EJERCICIO 4: Calculadora */}
                {/* <Calculadora /> */}
                
                {/* EJERCICIO 5: Todo App */}
                {/* <TodoApp /> */}
            </section>

            {/* 🔴 EJERCICIOS AVANZADOS */}
            <section>
                <h2>🔴 Ejercicios Avanzados</h2>
                
                {/* EJERCICIO 6: Registro de Usuario */}
                {/* <RegistroUsuario /> */}
                
                {/* EJERCICIO 7: Dashboard Personal */}
                {/* <Dashboard /> */}
            </section>

            {/* INSTRUCCIONES */}
            <div style={{ 
                marginTop: '40px', 
                padding: '20px', 
                background: '#c579ffff', 
                borderRadius: '10px' 
            }}>
                <h3>📋 Instrucciones:</h3>
                <ol>
                    <li>Ve a la carpeta del ejercicio que quieras resolver</li>
                    <li>Lee las instrucciones en los comentarios del archivo</li>
                    <li>Implementa la funcionalidad requerida</li>
                    <li>Descomenta el componente aquí para probarlo</li>
                    <li>¡Experimenta y diviértete aprendiendo!</li>
                </ol>
                
                <h3>💡 Consejos:</h3>
                <ul>
                    <li>Empieza por los ejercicios básicos</li>
                    <li>No tengas miedo de consultar los ejemplos en las carpetas de conceptos</li>
                    <li>Usa console.log() para debuggear</li>
                    <li>Experimenta con diferentes casos de prueba</li>
                </ul>
            </div>
        </div>
    );
};

export default EjerciciosHub;