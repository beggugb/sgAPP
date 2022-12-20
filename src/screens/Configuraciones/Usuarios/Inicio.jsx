import React from 'react'
import UsuarioTable from './components/UsuarioTable'
import UsuarioForm from './components/UsuarioForm'
import { useDispatch, useSelector } from 'react-redux'


const Inicio = () => {
    const dispatch = useDispatch()

    const handleReset = () =>{        
        dispatch({type:'usuarioReset'})
    }

    return ( 
    <div className="h-2/4 flex-1 mx-auto p-2 mb-10 border">  
    <div className="h-7 text-sm font-bold flex">                                  
       <div className="w-3/12 border text-sm font-bold flex justify-start pl-1 items-center">
        <button 
        onClick={() => handleReset()}
        className="h-6 w-14 border rounded text-[11px] bg-sky-500 hover:bg-sky-400 text-gray-50">
            Nuevo
        </button>
       </div>
       <div className="w-9/12 border text-right bg-gray-50 text-gray-600 text-sm font-bold pt-1 pr-2">
            Gestión de Clientes
       </div>
    </div>
    <div className="flex flex-row mx-auto mt-1">                      
       <div className="w-3/12 border p-4"> 
            <UsuarioForm/>
       </div>       

        <div className="w-3/4 border">
        <div className="p-1">
        <UsuarioTable/>
        </div>
        </div>
        </div>                
    </div>     
        
    );
}
 
export default Inicio;