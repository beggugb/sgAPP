import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { cajaActions } from '../../../redux/actions/caja'
import { customf } from '../../../helpers/customStyles'
import Select from 'react-select'

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

const tipos =  [                                
                {"value":"ingreso","label":"ingreso"},
                {"value":"egreso","label":"egreso"},                                              
                ];



function CajasItemsForm () {     
  const dispatch = useDispatch()  
  const caja = useSelector(state => state.cajas.item)   
  const item = useSelector(state => state.cajasitems.item)

  const changeHandler = event => {    
  const { name, value } = event.target    
   dispatch({type:'CAJAS_ITEMS_CHANGE',name:name,value:value}) 
 }


 const changesHandler = prop => event => {                     
    const { value } = event ? event : ''     
    dispatch({type:'CAJAS_ITEMS_CHANGE',name:prop,value:value})
    
 }

const submitHandle = event => {       
    event.preventDefault()           
    
    let dat = {}
    dat.monto = parseInt(item.monto)
    dat.tipo = item.tipo
    dat.label = item.label
    dat.cajaId = caja.id    
    dispatch(cajaActions.createList('CAJAS_ITEMS_DATAS','cajasitems',dat))      
      
    dispatch({type:'CAJAS_ITEMS_RESET_ITEM'}) 
 }


         
  return (    
    <div className="w-full rounded-md text-xs text-gray-500">                
    <form onSubmit={ submitHandle} >
         <div className="flex flex-row">                                
            <div className="w-1/4 p-1">
              <label>Monto (BOB) :</label>
               <input 
                    className="h-9 border-gray-300 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                    id="monto" 
                    name="monto"
                    type="number" 
                    value={item.monto}
                    onChange={changeHandler}
                />                      
             </div>                  
             <div className="w-1/4 p-1">
             <label>Tipo :</label>
             <Select                                                               
               defaultValue={tipos[0]}
               name="tipo"    
               id="tipo"                    
               options={tipos}   
               styles={customf}   
               isClearable={false}                          
               value={defaultVal(tipos,item.tipo)}                                                                                                                                
               onChange={ changesHandler('tipo')}                           
               />                      
             </div>
             <div className="w-1/4 p-1">
             <label>Detalle :</label>
               <input 
                    className="h-9 border-gray-300 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                    id="label" 
                    name="label"
                    type="text" 
                    value={item.label}
                    onChange={changeHandler}
                />
             </div>
             <div className="w-1/4 pt-5">
                 <button
                     className="h-9 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                     type="submit"> Registrar
                 </button> 
             </div>
         </div>          
      </form>
 </div>                           
  );
}

export default CajasItemsForm