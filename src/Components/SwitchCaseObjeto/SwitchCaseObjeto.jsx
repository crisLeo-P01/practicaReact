import './styles.css';

const SwitchCaseObjeto = ({ estado }) => {
    const iconos = {
    pendiente: "⏳",
    procesando: "⚙️",
    completado: "✅",
    error: "❌",
    cancelado: "🚫"
  };
  
  const colores = {
    pendiente: "naranja",
    procesando: "azul",
    completado: "verde",
    error: "rojo",
    cancelado: "gris"
  };

  return (
    <div className={`estado ${ colores[estado] }`}>
        <span className="icono">{ iconos[estado] }</span>
        <span className="texto">{ estado.toUpperCase() }</span>
    </div>
  )
}

export default SwitchCaseObjeto;