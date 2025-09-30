import ComponenteFuncional from './Components/01-ConceptosBasicos/01-ComponenteFuncional/ComponenteFuncional';
import PropsSinDestructiring from './Components/PropsSinDestructiring/PropsSinDestructiring';
import PropsConDestructuring from './Components/PropsConDestructuring/PropsConDestructuring';
import ChildrenProps from './Components/01-ConceptosBasicos/02-ChildrenProps/ChildrenProps';
import OperadorTernario from './Components/01-ConceptosBasicos/03-Renderizado-condicional/3.2-OperadorTernario/OperadorTernario';
import OperadorLogicoAnd from './Components/01-ConceptosBasicos/03-Renderizado-condicional/3.1-OperadorLogicoAnd/OperadorLogicoAnd';
import SwitchCaseObjeto from './Components/01-ConceptosBasicos/03-Renderizado-condicional/3.3-SwitchCaseObjeto/SwitchCaseObjeto';
import ListaFrutas from './Components/01-ConceptosBasicos/04-ListasKeys/ListaFrutas';
import ListaNumeros from './Components/01-ConceptosBasicos/04-ListasKeys/ListaNumeros';
import ListaObjetos from './Components/01-ConceptosBasicos/04-ListasKeys/ListaObjetos';
import ListaAnidada from './Components/01-ConceptosBasicos/04-ListasKeys/ListaAnidada';
import UseStateContador from './Components/01-ConceptosBasicos/05-UseState/UseStateContador';
import StringInput from './Components/01-ConceptosBasicos/05-UseState/StringInput';
import Boolean from './Components/01-ConceptosBasicos/05-UseState/Boolean';
import ButtonEvent from './Components/EventHandling/ButtonEvent';
import ColorsSelect from './Components/EventHandling/ColorsSelect';

import './App.css'

function App() {

    return (
        <>
            <ComponenteFuncional />

            <div className='divisor'></div>

            <PropsSinDestructiring profesion="Developer" nombre="Cristian" apellido="Ronaldo" nick="homero7p" />

            <div className='divisor'></div>

            <PropsConDestructuring marca="Peogeot" modelo="206" />

            <div className='divisor'></div>

            <ChildrenProps pais="Argentina">
                <p>Cantidad de provincias: 24</p>
                <p>Ubicación: Hemisferio Sur</p>
            </ChildrenProps>

            <div className='divisor'></div>

            <OperadorTernario nombre="martin" esPremium={true} email="martin@gmail.com" edad={16} />

            <div className='divisor'></div>

            <OperadorLogicoAnd notificaciones={['Comprar leche', 'Ir a buscar al niño al colegio', 'Cocinar lo que hay en la heladera']} isAdmin={true} isOnline={true}/>

            <div className='divisor'></div>

            <SwitchCaseObjeto estado="procesando" />
            <SwitchCaseObjeto estado="completado" />
            <SwitchCaseObjeto estado="error" />
            <SwitchCaseObjeto estado="cancelado" />
            <SwitchCaseObjeto estado="pendiente" />

            <div className='divisor'></div>

            <ListaFrutas />

            <div className='divisor'></div>

            <ListaNumeros numero={2}/>

            <div className='divisor'></div>

            <ListaObjetos />

            <div className='divisor'></div>

            <ListaAnidada />

            <div className='divisor'></div>

            <UseStateContador />

            <div className='divisor'></div>

            <StringInput />

            <div className='divisor'></div>

            <Boolean />

            <div className='divisor'></div>

            <ButtonEvent />

            <div className='divisor'></div>

            <ColorsSelect />
        </>
    )
}

export default App
