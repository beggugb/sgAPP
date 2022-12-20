import React,{useState} from "react";
import { tiposFiscal, tiposProveedor } from '../../../../../data/dataLoad'
import Select from 'react-select'  
import { inventarioActions }  from '../../../../../redux/actions/inventario'
import { custom } from '../../../../../helpers/customStyles'
import { locations} from "../../../../../helpers/locations"
import { defaultVal } from "../../../../../helpers/functions"
import SelectLocalForm from "../../../../../components/Select/SelectLocalForm"
import {ciudades } from "../../../../../helpers/locations"
import {useDispatch, useSelector} from 'react-redux'

const FormCliente = () =>{   
    const dispatch = useDispatch()  
    const { item, indicador } = useSelector(state => state.proveedor) 
    const [citys, setcitys] = useState([]);   
    
    const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'proveedorChange',name:name,value:value}) 
    }
    const handleChangePais = (e) =>{
        const { value, indice  } = e ? e : ''
        dispatch({type:'proveedorChange',name:'pais',value:value}) 
        let dat = ciudades.filter(d=>(d.indice === indice))
        setcitys(dat)   
    }
    const submitHandle = event =>{
        event.preventDefault()    
        if(item.id){
            console.log('existe')
            dispatch(inventarioActions.putUpdate('proveedorAdd','proveedores',item,'unit'))
        }else{
            console.log('nell')
            dispatch(inventarioActions.postAdd('proveedorAdd','proveedores',item,'unit'))
        }
    }

    return(     
        <div className="bg-white flex flex-col rounded">
        <h5 className="text-md p-1 text-gray-700 rounded-t-lg bg-gray-100 font-bold  text-sm mb-1">
                Datos Proveedor</h5> 
        <form onSubmit={ submitHandle}>
          <div className="grid grid-cols-3 gap-2 p-1"> 
              <div className="col-span-2">
                  <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                      Razon Social
                  </label>
                  <input 
                      className="h-8 border-gray-300 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                      id="razonSocial" 
                      name="razonSocial"
                      type="text" 
                      value={item.razonSocial}
                      onChange={(e)=>{ handleChange(e)}} 
                  /> 
              </div>  
              <div >
                  <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                      Nit
                  </label>
                  <input 
                      className="h-8 border-gray-300 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                      id="nit" 
                      name="nit"
                      type="text" 
                      value={item.nit}
                      onChange={(e)=>{ handleChange(e)}} 
                  />
                  
              </div>                         
          </div>  

          <div className="grid grid-cols-2 gap-2 p-1"> 
              <div >
                  <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                      Tipo Fiscal
                  </label>
                  <SelectLocalForm
                            label={'Tipo Fiscal'}                        
                            items={tiposFiscal}                        
                            xreduxItem={'proveedorChange'}                        
                            keyId={'tipoFiscal'}
                            itemId={item.tipoFiscal} 
                        />
              </div>  
              <div >
                  <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                     Tipo Proveedor
                  </label>
                  <SelectLocalForm
                            label={'Tipo Proveedor'}                        
                            items={tiposProveedor}                        
                            xreduxItem={'proveedorChange'}                        
                            keyId={'tipoProveedor'}
                            itemId={item.tipoProveedor} 
                        />
              </div>                                             
          </div>  

          <div className="grid grid-cols-2 gap-2 p-1"> 
              <div >
                  <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                      Pais
                  </label>
                  <Select                                                               
                            defaultValue={locations[0]}
                            styles={custom} 
                            name="pais"    
                            id="pais"                    
                            options={locations}  
                            value={defaultVal(locations,item.pais)}    
                            onChange={ (e) => handleChangePais(e)}
                        /> 
              </div>  
              <div >
                  <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                     Ciudad
                  </label>
                  <SelectLocalForm
                            label={'Ciudad'}                        
                            items={citys}                        
                            xreduxItem={'proveedorChange'}                        
                            keyId={'ciudad'}
                            itemId={item.ciudad} 
                        />
              </div>                                             
          </div>   

          <div className="grid grid-cols-3 gap-2 p-1"> 
              <div className="col-span-2">
                  <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                      Dirección
                  </label>
                  <input 
                      className="h-8 border-gray-300 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                      id="direccion" 
                      name="direccion"
                      type="text" 
                      value={item.direccion}
                      onChange={(e)=>{ handleChange(e)}} 
                  />
              </div>  
              <div >
                  <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                     Email
                  </label>
                  <input 
                      className="h-8 border-gray-300 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                      id="email" 
                      name="email"
                      type="text" 
                      value={item.email}
                      onChange={(e)=>{ handleChange(e)}} 
                  />
              </div>                                             
          </div>
  
         
    
         
          
          <div>                    
              <button
                    className="mt-3 ml-1 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"> {item.id ? "Actualizar":"Registrar"}
              </button>                        
          </div> 
  
  
        </form>  
      </div>   
    )
}

export default FormCliente