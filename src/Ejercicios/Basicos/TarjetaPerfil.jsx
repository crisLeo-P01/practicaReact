// 🎯 EJERCICIO 1: TARJETA DE PERFIL
// 
// OBJETIVO: Crear un componente que muestre una tarjeta de perfil de usuario
//
// REQUISITOS:
// 1. Recibir props: nombre, profesion, edad, imagen, email, telefono
// 2. Mostrar toda la información de forma atractiva
// 3. Usar destructuring para las props
// 4. Aplicar renderizado condicional para mostrar imagen por defecto si no hay imagen
//
// CONCEPTOS A USAR:
// - Componentes funcionales
// - Props y destructuring
// - Renderizado condicional (operador ternario)
// - JSX

import React from 'react';
import './TarjetaPerfil.css';

const TarjetaPerfil = ({ 
    nombre, 
    profesion, 
    edad, 
    imagen, 
    email, 
    telefono 
}) => {
    // TODO: Implementa aquí tu componente
    const imagenDefault = 'https://png.pngtree.com/png-vector/20220824/ourmid/pngtree-female-outline-human-profile-vector-png-image_33421792.png';
    
    return (
        <div className="tarjeta-perfil">
            {/* TODO: Estructura tu tarjeta aquí */}
            <h3>{ nombre }</h3>
            <p>Prefesion: { profesion }</p>
            <p>Edad: { edad }</p>
            <img src={ imagen ? imagen : imagenDefault }/>
            <p>Email: { email }</p>
            <p>Teléfono: { telefono }</p>
        </div>
    );
};

export default TarjetaPerfil;

// 💡 PISTAS:
// - Usa una imagen por defecto si no se proporciona imagen
// - Puedes usar Font Awesome o emojis para iconos
// - Estructura la información de forma clara y atractiva