import React, {useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../redux/actions/crud'
import CajasTable from './components/CajasTable'

import CajaView from './components/CajaView'
import {toastr} from 'react-redux-toastr'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave  } from "@fortawesome/free-solid-svg-icons";

const CajasInicio = () => {
    const dispatch = useDispatch()    
    const [parametro, setparametro] = useState('');
    const [showModal, setShowModal] = React.useState(false);
    const { item}= useSelector(state => state.cajas)
    
    let us = JSON.parse(localStorage.getItem('@usuarioFitt'))

   
  
    const submitHandle = event => {       
        event.preventDefault()    
        if(parseInt(parametro) > 0)
        {
            let dat = {
                montoInicial : parseInt(parametro),
                estado : false,
                montoEgreso : 0,
                montoFinal : parseInt(parametro),
                montoIngreso : 0,
                usuarioId : us.id        
            }
        
            dispatch(crudActions.createList('CAJAS_DATA','cajas',dat))          
            setparametro('')
        }else{
            toastr.warning("Error", 'Debe ingresar un valor')
        }
        
          
     }

    const viewModal = (it) =>{        
        if(it){
            dispatch(crudActions.cajaItems('cajas',it))
            setShowModal(true)
          } 
    }

    const closeHandler = (pky) => {     
        let dato = pky
        dato.usuarioId = us.id       
        dato.estado = true
        dispatch(crudActions.putList('CAJAS_DATA','cajas',dato))            
     }

    return ( 

        <div className="h-550 border p-1">    
            <div className="h-14 flex-1 mx-auto border-gray-300 p-3">
            <div className="flex flex-row">
                <div className="w-2/4 col-span-2 p-2 font-bold text-stone-500">
                   Gestion de Cajas
                </div>
                <div className="w-2/4">
                    <div   className="flex flex-row">                                        
                        <div className="w-4/5">                        
                        <input 
                           type="number" 
                           name="parametro" 
                           value={parametro} 
                           onChange={(e) => setparametro(e.target.value)} 
                           className="w-full h-9 focus:border-gray-400 block shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
                        <div className="w-1/5 pt-1">                        
                        <button 
                            type="submit"
                            onClick={(e)=>submitHandle(e)}                      
                            className="h-7 w-8 ml-2 bg-sky-500 text-white rounded-full">
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
            <CajasTable              
               viewModal={viewModal}
               closeHandler={closeHandler}
               />
        
        {showModal ? (        
        <CajaView setShowModal={setShowModal}/>
      ) : null}   
      </div>      
     
     );
}
 
export default CajasInicio;