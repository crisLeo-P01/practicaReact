const ChildrenProps = ({ children, pais }) => {
    return (
        <div>
            <h2>Pais: { pais }</h2>
            <div className="contenido">
                { children }
            </div>
        </div>
        
    )
}

export default ChildrenProps;