import ComponenteFuncional from './Components/ComponenteFuncional/ComponenteFuncional';
import PropsSinDestructiring from './Components/PropsSinDestructiring/PropsSinDestructiring';
import PropsConDestructuring from './Components/PropsConDestructuring/PropsConDestructuring';
import ChildrenProps from './Components/ChildrenProps/ChildrenProps';
import OperadorTernario from './Components/OperadorTernario/OperadorTernario';
import OperadorLogicoAnd from './Components/OperadorLogicoAnd/OperadorLogicoAnd';
import SwitchCaseObjeto from './Components/SwitchCaseObjeto/SwitchCaseObjeto';
import ListaFrutas from './Components/ListasKeys/ListaFrutas';
import ListaNumeros from './Components/ListasKeys/ListaNumeros';
import ListaObjetos from './Components/ListasKeys/ListaObjetos';
import ListaAnidada from './Components/ListasKeys/ListaAnidada';
import UseStateContador from './Components/Hooks/UseState/UseStateContador';
import StringInput from './Components/Hooks/UseState/StringInput';
import Boolean from './Components/Hooks/UseState/Boolean';

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
        </>
    )
}

export default App
