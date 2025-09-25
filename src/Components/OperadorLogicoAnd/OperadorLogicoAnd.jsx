const OperadorLogicoAnd = ({ notificaciones, isAdmin, isOnline }) => {
    
    return (
        <div>
            <h3>Centro de notificaciones</h3>
            {notificaciones.length > 0 && (
                <div className="contador">
                    Tienes { notificaciones.length } notificaciones nuevas
                </div>
            )}

            {isAdmin && (
                <button className="admin-panel">
                    Acceder al panel de Administración
                </button>
            )}

            {isOnline && (
                <div className="estado-online">
                    🟢 En línea
                </div>
            )}

            {notificaciones.length === 0 && (
                <div>No tienes notificaciones pendientes</div>
            )}

        </div>
    )
}

export default OperadorLogicoAnd;