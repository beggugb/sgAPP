import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux'
import { inventarioActions } from '../../redux/actions/inventario'


const SearchParametros = ({xredux,payload,inicial}) =>{
    const dispatch = useDispatch()    
    const [value, setValue] = useState("");  

    const submitSearch = event =>{
        event.preventDefault()
        let params = {
            value, 
            prop: inicial
        }
        dispatch(inventarioActions.postSearch(xredux,payload,params))        
    }      

    const handleDelete = () =>{        
        let params = {
            value:"",
            prop: inicial
        }
        dispatch(inventarioActions.postSearch(xredux,payload,params)) 
        setValue("")
    }

return(
    <div className="w-1/3 flex-row flex">                          
        <form  onSubmit={ submitSearch } className="w-full">                                        
            <input 
               type="text" 
               name="value" 
               value={value || ''} 
               onChange={(e) => setValue(e.target.value)} 
               className="w-full h-8 focus:border-gray-400 block shadow-sm sm:text-sm border-gray-300 rounded-md"/>                                                                                      
        </form> 
        { value ?  
        <button 
            onClick={() => handleDelete()}
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
)}

export default SearchParametros