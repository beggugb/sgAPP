import React,{useState} from 'react'
import ClienteTable from './components/ClienteTable'
import ClienteCuadros from './components/ClienteCuadros'
import ClienteSearch from './components/ClienteSearch'
import ClienteForm from './components/ClienteForm'
import ClienteView from './components/ClienteView'

const ClienteInicio = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [showView, setShowView] = React.useState(false);
    const [estado, setEstado] = useState(true);    
    return ( 
        <div className="h-550 p-1 border">
            <ClienteSearch setShowModal={setShowModal} estado={estado} setEstado={setEstado}/>            
            {estado ?
              <ClienteTable 
                setShowModal={setShowModal}
                setShowView={setShowView}
                />:
              <ClienteCuadros setShowModal={setShowModal}/>   
            }
            {showModal ? (
            <ClienteForm setShowModal={setShowModal}/> ) : null}
            {showView ? (
            <ClienteView setShowView={setShowView}/> ) : null}
        </div>
     
     );
}
 
export default ClienteInicio;



