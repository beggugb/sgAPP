import React,{useState} from 'react'
import MemTable from './components/MemTable'
import MemSearch from './components/MemSearch'
import MemForm from './components/MemForm'
import MemView from './components/MemView'

const MemInicio = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [showView, setShowView] = React.useState(false);
    const [estado, setEstado] = useState(true);    
    return ( 
        <div className="h-550 p-1 border">
            <MemSearch setShowModal={setShowModal} estado={estado} setEstado={setEstado}/>                        
            <MemTable 
                setShowModal={setShowModal}
                setShowView={setShowView}
            />
            {showModal ? (
            <MemForm setShowModal={setShowModal}/> ) : null}
            {showView ? (
            <MemView setShowView={setShowView}/> ) : null}
        </div>
     
     );
}
 
export default MemInicio;



