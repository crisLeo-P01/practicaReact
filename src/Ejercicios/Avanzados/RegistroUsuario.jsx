// 🎯 EJERCICIO 6: REGISTRO DE USUARIO CON VALIDACIONES
// 
// OBJETIVO: Crear un formulario completo de registro con validaciones
//
// REQUISITOS:
// 1. Campos: nombre, email, password, confirmar password, fecha nacimiento, términos
// 2. Validaciones en tiempo real
// 3. Mostrar errores específicos para cada campo
// 4. Deshabilitar submit si hay errores
// 5. Confirmación de envío exitoso
//
// VALIDACIONES:
// - Nombre: mínimo 3 caracteres
// - Email: formato válido
// - Password: mínimo 8 caracteres, al menos 1 número
// - Confirmar password: debe coincidir
// - Fecha: mayor de 18 años
// - Términos: debe estar marcado
//
// CONCEPTOS A USAR:
// - useState complejo
// - Formularios controlados
// - Validación en tiempo real
// - Renderizado condicional
// - Regex para validaciones

import React, { useState } from 'react';
import './RegistroUsuario.css';

const RegistroUsuario = () => {
    // TODO: Estado para los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmarPassword: '',
        fechaNacimiento: '',
        aceptaTerminos: false
    });
    
    // TODO: Estado para errores
    const [errores, setErrores] = useState({});
    
    // TODO: Estado para el envío
    const [enviado, setEnviado] = useState(false);
    
    // TODO: Función para validar nombre
    const validarNombre = (nombre) => {
        // Mínimo 3 caracteres, solo letras y espacios
    };
    
    // TODO: Función para validar email
    const validarEmail = (email) => {
        // Usar regex para formato de email
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    };
    
    // TODO: Función para validar password
    const validarPassword = (password) => {
        // Mínimo 8 caracteres, al menos 1 número
    };
    
    // TODO: Función para validar edad
    const validarEdad = (fecha) => {
        // Calcular edad y verificar que sea >= 18
    };
    
    // TODO: Función para manejar cambios
    const manejarCambio = (e) => {
        const { name, value, type, checked } = e.target;
        
        // Actualizar formData
        
        // Validar campo específico en tiempo real
        
        // Actualizar errores
    };
    
    // TODO: Función para validar todo el formulario
    const validarFormulario = () => {
        // Validar todos los campos y retornar objeto de errores
    };
    
    // TODO: Función para manejar submit
    const manejarSubmit = (e) => {
        e.preventDefault();
        
        // Validar formulario completo
        // Si no hay errores, simular envío exitoso
    };

    return (
        <div className="registro-container">
            <h2>👤 Registro de Usuario</h2>
            
            {!enviado ? (
                <form onSubmit={manejarSubmit} className="registro-form">
                    {/* TODO: Campo Nombre */}
                    <div className="campo">
                        <label>Nombre completo *</label>
                        <input 
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={manejarCambio}
                            className={errores.nombre ? 'error' : ''}
                        />
                        {errores.nombre && <span className="error-msg">{errores.nombre}</span>}
                    </div>
                    
                    {/* TODO: Campo Email */}
                    <div className="campo">
                        <label>Email *</label>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={manejarCambio}
                            className={errores.email ? 'error' : ''}
                        />
                        {errores.email && <span className="error-msg">{errores.email}</span>}
                    </div>
                    
                    {/* TODO: Campo Password */}
                    <div className="campo">
                        <label>Contraseña *</label>
                        <input 
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={manejarCambio}
                            className={errores.password ? 'error' : ''}
                        />
                        {errores.password && <span className="error-msg">{errores.password}</span>}
                    </div>
                    
                    {/* TODO: Campo Confirmar Password */}
                    
                    {/* TODO: Campo Fecha Nacimiento */}
                    
                    {/* TODO: Checkbox Términos */}
                    
                    {/* TODO: Botón Submit (deshabilitado si hay errores) */}
                    <button 
                        type="submit"
                        disabled={Object.keys(errores).length > 0}
                        className="submit-btn"
                    >
                        🚀 Registrarse
                    </button>
                </form>
            ) : (
                <div className="exito">
                    <h3>✅ ¡Registro Exitoso!</h3>
                    <p>Bienvenido, {formData.nombre}</p>
                    <button onClick={() => {setEnviado(false)}}>
                        🔄 Registrar otro usuario
                    </button>
                </div>
            )}
        </div>
    );
};

export default RegistroUsuario;

// 💡 PISTAS:
// - Para calcular edad: new Date().getFullYear() - new Date(fecha).getFullYear()
// - Password regex: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/
// - Usa Object.keys(errores).length para contar errores
// - Valida en tiempo real en onChange