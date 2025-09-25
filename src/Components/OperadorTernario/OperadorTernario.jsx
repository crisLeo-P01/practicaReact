const OperadorTernario = ({ nombre, esPremium, email, edad }) => {
    return (
        <div className="perfil">
            <h2>{nombre}</h2>

            {esPremium ? (
                <div className="premium">
                    <span className="badge">⭐ Premium</span>
                    <p>Acceso completo a todas las funciones</p>
                </div>
            ) : (
                <div className="basico">
                    <span className="badge">🆓 Gratuito</span>
                    <button>Actualizar a Premium</button>
                </div>
            )}

            <p>Email: {email}</p>

            {edad >= 18 ? (
                <p className="adulto">✅ Usuario verificado</p>
            ) : (
                <p className="menor">⚠️ Requiere supervisión parental</p>
            )}
        </div>
    );
}

export default OperadorTernario;