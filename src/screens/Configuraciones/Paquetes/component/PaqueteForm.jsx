import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../../redux/actions/crud'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";

const PaqueteForm = () => {     
  const dispatch = useDispatch()  
  const {item} = useSelector(state => state.paquetes)   

  const onChange = event => {    
    const { name, value } = event.target         
     dispatch({type:'paquetesChange',props:name,value:value}) 
  }
  
  const changeHa = (checked) => {               
     dispatch({type:'paquetesChange',props:'diario',value:checked}) 
  }


 const changeAA = (checked) => {               
    dispatch({type:'paquetesChange',props:'enabled',value:checked}) 
 }
  
  const submitHandle = event => {       
      event.preventDefault()    
      if(item.id)
      {
        
        dispatch(crudActions.putList('paquetesAdd','paquetes',item))            
      }else{
        dispatch(crudActions.createList('paquetesAdd','paquetes',item))      
      }    
      dispatch({type:'paqueteReset'})
   }

   const clean = () => {               
    dispatch({type:'paqueteReset'})
 }



 return (  
    <div className="bg-white px-2  mb-2 flex flex-col"> 
    <form onSubmit={ submitHandle}>    
    <div className="-mx-3">
        <div className="md:w-full mb-1">
        <label className="block text-gray-500 tracking-wide text-grey-darker text-[11px] font-bold mb-2">
            Nombre
        </label>
        <input 
            htmlFor="nombre" className="h-9 border-gray-300 block w-full bg-grey-lighter text-[11px] text-grey-darker rounded py-2 px-2 mb-2" 
            id="nombre" 
            name="nombre"
            value={item.nombre}
            onChange={(e)=>{ onChange(e)}} 
            type="text" />                
            {/*<p className="text-red text-xs italic">Please fill out this field.</p>*/}
        </div>   
    </div>


    <div className="-mx-3 flex flex-row">
        <div className="w-6/12 mb-1">
            <label htmlFor="valor" className="block text-gray-500 tracking-wide text-grey-darker text-[11px] font-bold mb-2">
                Valor (Bs.)
            </label>
            <input 
                className="h-8 border-gray-300 block w-full bg-grey-lighter text-[11px] odd:text-grey-darker rounded py-2 px-2 mb-2" 
                id="valor" 
                name="valor"
                type="number"             
                value={item.valor}
                onChange={(e)=>{ onChange(e)}} 
                />                
        </div>             
        <div className="w-5/12 mb-1 pl-8">
            <label htmlFor="enabled" className="block text-gray-500 tracking-wide text-grey-darker text-[11px] font-bold mb-2">
                Habilitado
            </label>
            <Switch                         
              onChange={ changeAA }  
              checked={item.enabled} 
              offColor="#ef4444"              
              />                 
        </div>             
    </div> 


    <div className="-mx-3 flex flex-row">
        <div className="w-1/2 mb-1">
            <label htmlFor="meses" className="block text-gray-500 tracking-wide text-grey-darker text-[11px] font-bold mb-2">
                Meses
            </label>
            <input 
                className="h-8 border-gray-300 block w-full bg-grey-lighter text-grey-darker  text-[11px] rounded py-2 px-2 mb-2" 
                id="meses" 
                name="meses"
                type="number" 
                step="0.01"
                value={item.meses}
                onChange={(e)=>{ onChange(e)}} 
            />                                                        
        </div>   
        <div className="w-1/2 mb-1 pl-8">
        <label htmlFor="diario" className="block text-gray-500 tracking-wide text-grey-darker text-[11px] font-bold mb-2">
                Diario
            </label>
            <Switch                         
              onChange={ changeHa }  
              checked={item.diario} 
              offColor="#ef4444"
              />                                                     
        </div>   
    </div>

    <div className="-mx-3 flex">
        <button 
            type="submit"
            className="h-10 border w-full mt-1 rounded bg-sky-400 hover:bg-sky-300 p-1 text-[11px] text-white">
            <FontAwesomeIcon icon={faSave} size="sm" />  
            {' '} {item.id ? " Actualizar" : " Guardar"}
        </button>
    </div>
  </form>  
</div>     
        
     );
}
 
export default PaqueteForm;