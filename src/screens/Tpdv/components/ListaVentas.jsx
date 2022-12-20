import React,{ useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { api } from '../../../helpers/api'

const ListaVentas = () => {    
    const dispatch = useDispatch()        
    const { items, item } = useSelector(state => state.venta) 

    const handleAsignar = (producto) => {         
        
      } 

    return (                
        <div className="h-5/6 p-1 w-full">            
            { items.length > 0 ?          
                items.map((it,index)=>(   
                    <div key={index} className="flex-1 mx-auto border-b min-h-max p-1">            
                        <div className="h-4 flex flex-row text-[11px]">
                            <span className="pl-2">{it.nombre}</span>                            
                        </div>    
                        <div className="h-4 italic text-[10px] flex">
                            <span className="pl-2 w-3/12 ">p/u{' '} 
                            {new Intl.NumberFormat('es-BO',{style: "currency",currency:'BOB',minimumFractionDigits: 2}).format(it.valor)}
                            </span>
                            <span className="pl-2 w-3/12 ">{it.cantidad}/{it.unidad.nombre}</span>                            
                            <span className="pl-2 w-2/4 text-right pr-2 font-bold">
                                {new Intl.NumberFormat('es-BO',{style: "currency",currency:'BOB',minimumFractionDigits: 2}).format(it.subTotal)}
                            </span>                            
                        </div>    
                    </div>
                ))
            : null
            }                
        </div>             
     );
}
 
export default ListaVentas;



