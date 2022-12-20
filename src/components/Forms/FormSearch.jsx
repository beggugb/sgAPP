import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux'
import { inventarioActions } from '../../redux/actions/inventario'

const FormSearch = ({xredux,payload,model}) =>{
    const dispatch = useDispatch()
    const [prop, setProp] = useState('nombre');
    const [value, setValue] = useState("");  

    const submitSearch = event =>{
        event.preventDefault()
        let params = {
            value: value,
            prop: "nombre"
        }      
        dispatch(inventarioActions.postSearch(xredux,payload,params))        
    }    
       const handleDelete = () =>{        
        let params = {
            value:"",
            prop: "nombre"
        }
        dispatch(inventarioActions.postSearch(xredux,payload,params)) 
        setValue("")
    }
return(
    <div className="h-14 flex-1 mx-auto p-3">
            <div className="grid grid-cols-2 gap-2">
                <h6>Gestión de { model}</h6>
                <div className="flex-row flex">                          
                    <form  onSubmit={ submitSearch } className="w-full">                                        
                        <input 
                            type="text" 
                            name="parametro" 
                            value={value || ''} 
                            onChange={(e) => setValue(e.target.value)} 
                            className="w-full h-9 focus:border-gray-400 block shadow-sm sm:text-sm border-gray-300 rounded-md"/>                                                                                      
                    </form> 
                    { value ?  
                    <button 
                    onClick={() => handleDelete ()}
                    className="h-7 w-7 border z-10 -ml-9 mt-1 border-transparent shadow-sm text-sm font-medium rounded-full text-gray-600">
                          <FontAwesomeIcon icon={faTimes} />
                    </button>                   
                                                    
                    :
                    <button                       
                      className="h-7 w-7 border z-10 -ml-9 mt-1 border-transparent shadow-sm text-sm font-medium rounded-full text-gray-700">
                            <FontAwesomeIcon icon={faSearch} />
                    </button> 
                                                    
                    }
              </div>
        </div>
    </div>      
)}

export default FormSearch