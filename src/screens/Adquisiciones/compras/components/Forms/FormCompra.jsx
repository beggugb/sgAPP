import React from "react";
import { useSelector } from 'react-redux'
import Moment from 'react-moment'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave  } from "@fortawesome/free-solid-svg-icons";
import { tiposCompra, tiposOrigen } from '../../../../../data/dataLoad'
import SelectLocalForm from "../../../../../components/Select/SelectLocalForm"
import SelectSimpleForm from "../../../../../components/Select/SelectSimpleForm";

const FormCompra = ({handleChange,item,submitHandle}) =>{
    const { items } = useSelector(state => state.proveedor)    
    return(        
        <div className="bg-white px-2  mb-2 flex flex-col"> 
        <form onSubmit={ submitHandle}>
        <div className="-mx-3">
            <div className="md:w-full mb-1">
                <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold mb-2">
                Proveedor
                </label>
                <SelectSimpleForm
                    label={''}
                    items={items}
                    xredux={'proveedoresLista'}
                    xreduxItem={'compraChange'}
                    payload={'proveedores'}
                    keyId={'proveedorId'}
                    itemId={item.proveedorId}
                />
            </div>   
        </div>  
        <div className="-mx-3">
            <div className="md:w-full mb-1">
            <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold mb-2">
                Tipo
            </label>
            <SelectLocalForm
                label={'Tipo'}
                items={tiposCompra}
                xreduxItem={'compraChange'}
                keyId={'tipo'}
                itemId={item.tipo}
            />
            </div>   
        </div>
        <div className="-mx-3">
            <div className="md:w-full mb-1">
            <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold mb-2">
                Origen
            </label>
            <SelectLocalForm
                label={'Origen'}
                items={tiposOrigen}
                xreduxItem={'compraChange'}
                keyId={'origen'}
                itemId={item.origen}
            />
            </div>   
        </div>       

        <div className="-mx-3">
            <div className="md:w-full mb-1">
                <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Cantidad
                </label>
                <input 
                    className="h-9 border-gray-300 text-xs block w-full bg-grey-lighter text-grey-darker rounded py-2 px-2 mb-2" 
                    id="nroItems" 
                    name="nroItems"
                    type="text" 
                    value={item.nroItems}
                    onChange={(e)=>{ handleChange(e)}} 
                    readOnly={true}
                />                        
            </div>   
        </div>

        <div className="-mx-3">
            <div className="md:w-full mb-1">
                <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Total
                </label>
                <input 
                    className="h-9 border-gray-300 block text-xs w-full bg-grey-lighter text-grey-darker rounded py-2 px-2 mb-2" 
                    id="totalGeneral" 
                    name="totalGeneral"
                    type="text" 
                    value={item.totalGeneral}
                    onChange={(e)=>{ handleChange(e)}} 
                    readOnly={true}
                />                        
            </div>   
        </div> 

        <div className="-mx-3">
            <div className="md:w-full mb-1">
                <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold mb-2">
                    Detalle
                </label>
                <textarea 
                    className="h-12 border-gray-300 text-xs block w-full bg-grey-lighter text-grey-darker rounded py-2 px-2 mb-2" 
                    id="observaciones" 
                    name="observaciones"
                    type="textarea"
                    rows="4"
                    value={item.observaciones}
                    onChange={(e)=>{ handleChange(e)}} 
               
                />                        
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


export default FormCompra