import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ListaView from '../Lists/ListaVista'

const ProductosLista = () =>{    
    const dispatch = useDispatch()
    const { item, items } = useSelector(state => state.compra)    
   
    const handleDelete = (it) =>{           
        if(item.totalGeneral > 0){
            let valor = parseFloat(item.totalGeneral) - (parseFloat(it.cantidad) * parseFloat(it.valor))
            let newData = items.filter(item => item.productoId !== it.productoId )                
            let nItems = parseInt(item.nroItems) - parseInt(it.cantidad)
            dispatch({type:"comprasItems",cantidad:nItems,value:valor,values:newData})            
        }        
    } 

    return(
        <div className="flex-1 mx-auto border min-h-max border-gray-300 p-3 mt-2 rounded-md">
            { items &&
            <table className="border-collapse table-fixed text-[11px]">
                <thead>
                    <tr>                        
                        <th className="w-1/12 border border-slate-300 bg-gray-200">Código</th>
                        <th className="w-1/6 border border-slate-300 bg-gray-200">Nombre</th>
                        <th className="w-1/6 border border-slate-300 bg-gray-200">Categoria</th>
                        <th className="w-1/6 border border-slate-300 bg-gray-200">Marca</th>
                        <th className="w-1/6 border border-slate-300 bg-gray-200">Precio</th>
                        <th className="w-1/6 border border-slate-300 bg-gray-200">Cantidad</th>
                        <th className="w-1/6 border border-slate-300 bg-gray-200">SubTotal</th>
                        <th className="w-1/6 border border-slate-300 bg-gray-200"></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item,index)=>(                       
                        <tr key={index}>                       
                                <ListaView
                                item={item}
                                index={index}                                
                                />
                                <td className="p-1">
                                    <button className="w-10 h-6 bg-red-500 hover:bg-red-400 p-1 rounded text-white" 
                                        onClick={()=>handleDelete(item)}>
                                        <FontAwesomeIcon icon={faTrash} className="btt"/>
                                    </button>                                
                               </td>
                        </tr>                 
                    ))}                    
                </tbody>
            </table>
            }
        </div>        
    )
}

export default ProductosLista