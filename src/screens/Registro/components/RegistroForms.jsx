import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../redux/actions/crud'

const RegistroForm = () => {  
    const dispatch = useDispatch()
    const [parametro, setparametro] = useState('');

    const submitHandle = event => {       
        event.preventDefault()                
        let dato = {
            clienteId : parametro
        }        
        dispatch(crudActions.createList('REGISTROS_ITEM','registros',dato))  
        setparametro('')   
        
        setTimeout(function(){
            /*toastr.success(payload, 'Imagen Cargada')*/
            dispatch({type:"REGISTROS_RESET"})
          }, 8000);         
     }
    
     
    return ( 
        <div className="flex-1">            
                <div className="flex-row flex">                          
                    <form  onSubmit={ submitHandle} className="w-full">                                        
                        <input 
                            type="text" 
                            name="parametro" 
                            value={parametro} 
                            onChange={(e) => setparametro(e.target.value)} 
                            className="w-full h-9 focus:border-gray-400 block shadow-sm sm:text-sm border-gray-300 rounded-md"/>                                                                                      
                    </form>                     
                    <button                       
                      className="h-7 w-7 border z-10 -ml-9 mt-1 border-transparent shadow-sm text-sm font-medium rounded-full text-gray-700">
                            <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>            
        </div>
     );
}
 
export default RegistroForm;



                        
