import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const FormIndustria = ({handleChange,item,submitHandle}) =>{      
           return(        
            <div className="bg-white px-2  mb-2 flex flex-col"> 
            <form onSubmit={ submitHandle}>
            <div className="-mx-3">
                <div className="md:w-full mb-1">
                <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Código
                </label>
                <input 
                    className="h-9 border-gray-300 block w-full bg-grey-lighter text-grey-darker rounded py-2 px-2 mb-2" 
                    id="codigo" 
                    name="codigo"
                    type="text" 
                    value={item.codigo}
                    onChange={(e)=>{ handleChange(e)}} 
                    />                
                    {/*<p className="text-red text-xs italic">Please fill out this field.</p>*/}
                </div>   
            </div>  
            <div className="-mx-3">
                <div className="md:w-full mb-1">
                <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Nombre
                </label>
                <input 
                    className="h-9 border-gray-300 block w-full bg-grey-lighter text-grey-darker rounded py-2 px-2 mb-2" 
                    id="nombre" 
                    name="nombre"
                    value={item.nombre}
                    onChange={(e)=>{ handleChange(e)}} 
                    type="text" />                
                    {/*<p className="text-red text-xs italic">Please fill out this field.</p>*/}
                </div>   
            </div>
            <div className="-mx-3 flex">
                <button 
                    type="submit"
                    className="border-2 w-full mt-1 rounded bg-sky-400 hover:bg-sky-300 p-1 text-sm text-white">
                    <FontAwesomeIcon icon={faSave} size="sm" />  
                    {' '} {item.id ? " Actualizar" : " Guardar"}
                </button>
            </div>
          </form>  
        </div>                    
    )    
}

export default FormIndustria