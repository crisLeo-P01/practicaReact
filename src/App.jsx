import ComponenteFuncional from './Components/01-ConceptosBasicos/1.1-ComponenteFuncional/ComponenteFuncional';
import PropsSinDestructiring from './Components/01-ConceptosBasicos/1.4-PropsSinDestructiring/PropsSinDestructiring';
import PropsConDestructuring from './Components/01-ConceptosBasicos/1.3-PropsConDestructuring/PropsConDestructuring';
import ChildrenProps from './Components/01-ConceptosBasicos/1.2-ChildrenProps/ChildrenProps';
import OperadorTernario from './Components/01-ConceptosBasicos/1.5-Renderizado-condicional/3.2-OperadorTernario/OperadorTernario';
import OperadorLogicoAnd from './Components/01-ConceptosBasicos/1.5-Renderizado-condicional/3.1-OperadorLogicoAnd/OperadorLogicoAnd';
import SwitchCaseObjeto from './Components/01-ConceptosBasicos/1.5-Renderizado-condicional/3.3-SwitchCaseObjeto/SwitchCaseObjeto';
import ListaFrutas from './Components/01-ConceptosBasicos/1.6-ListasKeys/ListaFrutas';
import ListaNumeros from './Components/01-ConceptosBasicos/1.6-ListasKeys/ListaNumeros';
import ListaObjetos from './Components/01-ConceptosBasicos/1.6-ListasKeys/ListaObjetos';
import ListaAnidada from './Components/01-ConceptosBasicos/1.6-ListasKeys/ListaAnidada';
import UseStateContador from './Components/02-EstadoEventos/2.1-UseState/UseStateContador';
import StringInput from './Components/02-EstadoEventos/2.1-UseState/StringInput';
import Boolean from './Components/02-EstadoEventos/2.1-UseState/Boolean';
import ButtonEvent from './Components/02-EstadoEventos/2.2-EventHandling/ButtonEvent';
import ColorsSelect from './Components/02-EstadoEventos/2.2-EventHandling/ColorsSelect';
import ControlledComponent from './Components/02-EstadoEventos/2.3-ControlledComponent/ControlledComponent'
import UncontrolledComponent from './Components/02-EstadoEventos/2.4-UncontrolledComponent/UncontrolledComponent';
import Formulario from './Components/02-EstadoEventos/2.5-Formulario/Formulario';
import Objeto from './Components/02-EstadoEventos/2.1-UseState/Objeto';
import CargarUsuario from './Components/02-EstadoEventos/2.1-UseState/CargarUsuario';
import ListaUsuarios from './Components/02-EstadoEventos/2.1-UseState/ListaUsuarios'

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

            <div className='divisor'></div>

            <ControlledComponent />

            <div className='divisor'></div>

            <UncontrolledComponent />

            <div className='divisor'></div>

            <Formulario />

            <div className='divisor'></div>

            <Objeto />

            <div className='divisor'></div>

            <CargarUsuario />

            <div className='divisor'></div>

            <ListaUsuarios />
        </>
    )
}

export default App
