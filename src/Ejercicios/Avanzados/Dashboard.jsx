// 🎯 EJERCICIO 7: DASHBOARD PERSONAL
// 
// OBJETIVO: Crear un dashboard con widgets personalizables
//
// REQUISITOS:
// 1. Widgets: Reloj, Contador, Lista de notas, Clima simulado
// 2. Posibilidad de mostrar/ocultar widgets
// 3. Editar configuración de algunos widgets
// 4. Diseño responsive con grid
// 5. Persistir preferencias en localStorage (BONUS)
//
// WIDGETS A CREAR:
// - Widget Reloj: hora actual que se actualiza
// - Widget Contador: incrementar/decrementar
// - Widget Notas: agregar/eliminar notas rápidas
// - Widget Clima: temperatura simulada con iconos
//
// CONCEPTOS A USAR:
// - useState complejo
// - useEffect (para reloj)
// - Múltiples componentes
// - Props drilling
// - Renderizado condicional
// - localStorage (opcional)

import React, { useState, useEffect } from 'react';
import './Dashboard.css';

// 🕒 WIDGET RELOJ
const WidgetReloj = () => {
    const [hora, setHora] = useState(new Date());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setHora(new Date());
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="widget widget-reloj">
            <h3>🕒 Reloj</h3>
            <div className="hora-display">
                {hora.toLocaleTimeString()}
            </div>
            <div className="fecha-display">
                {hora.toLocaleDateString()}
            </div>
        </div>
    );
};

// 🔢 WIDGET CONTADOR
const WidgetContador = () => {
    // TODO: Implementar useState para el contador
    // TODO: Funciones para incrementar/decrementar
    // TODO: Botones para +1, -1, +5, -5, reset
    
    return (
        <div className="widget widget-contador">
            <h3>🔢 Contador</h3>
            {/* TODO: Mostrar valor del contador */}
            {/* TODO: Botones de control */}
        </div>
    );
};

// 📝 WIDGET NOTAS
const WidgetNotas = () => {
    // TODO: useState para lista de notas
    // TODO: useState para nueva nota
    // TODO: Funciones agregar/eliminar nota
    
    return (
        <div className="widget widget-notas">
            <h3>📝 Notas Rápidas</h3>
            {/* TODO: Input para nueva nota */}
            {/* TODO: Lista de notas existentes */}
        </div>
    );
};

// 🌤️ WIDGET CLIMA
const WidgetClima = () => {
    // TODO: useState para datos del clima simulado
    // TODO: Diferentes estados de clima con iconos
    // TODO: Botón para "actualizar" clima (cambiar aleatoriamente)
    
    const climas = [
        { icono: '☀️', estado: 'Soleado', temp: 25 },
        { icono: '☁️', estado: 'Nublado', temp: 18 },
        { icono: '🌧️', estado: 'Lluvioso', temp: 15 },
        { icono: '❄️', estado: 'Nevando', temp: -2 },
    ];
    
    return (
        <div className="widget widget-clima">
            <h3>🌤️ Clima</h3>
            {/* TODO: Mostrar clima actual */}
            {/* TODO: Botón para cambiar clima */}
        </div>
    );
};

// 🎛️ COMPONENTE CONFIGURACIÓN
const ConfiguracionWidgets = ({ widgets, toggleWidget }) => {
    return (
        <div className="configuracion">
            <h3>⚙️ Configurar Widgets</h3>
            <div className="widget-toggles">
                {Object.entries(widgets).map(([nombre, visible]) => (
                    <label key={nombre} className="toggle-item">
                        <input 
                            type="checkbox"
                            checked={visible}
                            onChange={() => toggleWidget(nombre)}
                        />
                        <span>{nombre}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

// 🏠 COMPONENTE PRINCIPAL DASHBOARD
const Dashboard = () => {
    // TODO: Estado para controlar qué widgets están visibles
    const [widgetsVisibles, setWidgetsVisibles] = useState({
        reloj: true,
        contador: true,
        notas: true,
        clima: true
    });
    
    // TODO: Estado para mostrar/ocultar configuración
    const [mostrarConfig, setMostrarConfig] = useState(false);
    
    // TODO: Función para toggle de widgets
    const toggleWidget = (nombreWidget) => {
        setWidgetsVisibles(prev => ({
            ...prev,
            [nombreWidget]: !prev[nombreWidget]
        }));
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>🏠 Mi Dashboard Personal</h1>
                <button 
                    className="config-btn"
                    onClick={() => setMostrarConfig(!mostrarConfig)}
                >
                    ⚙️ {mostrarConfig ? 'Ocultar' : 'Configurar'}
                </button>
            </header>
            
            {mostrarConfig && (
                <ConfiguracionWidgets 
                    widgets={widgetsVisibles}
                    toggleWidget={toggleWidget}
                />
            )}
            
            <div className="widgets-grid">
                {widgetsVisibles.reloj && <WidgetReloj />}
                {widgetsVisibles.contador && <WidgetContador />}
                {widgetsVisibles.notas && <WidgetNotas />}
                {widgetsVisibles.clima && <WidgetClima />}
            </div>
            
            <footer className="dashboard-footer">
                <p>💡 Usa el botón de configuración para mostrar/ocultar widgets</p>
            </footer>
        </div>
    );
};

export default Dashboard;

// 💡 PISTAS:
// - Para el reloj usa setInterval en useEffect
// - Para localStorage: JSON.stringify/JSON.parse
// - Para clima aleatorio: Math.floor(Math.random() * climas.length)
// - Usa CSS Grid para layout responsive
// - Cada widget debe ser un componente separado