import React from "react";
import Moment from 'react-moment'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPencil } from "@fortawesome/free-solid-svg-icons";

const TableCompra = ({data,setIndicador,indicador}) =>{
    return(   
        <div className="flex-1 mx-auto border min-h-max border-gray-200 p-1 mt-2 rounded-t-md">
            <table className="border-collapse w-full text-[11px]">             
            <thead>
                <tr>                    
                    <th className="w-1/12 border border-slate-300 bg-gray-200"></th>                    
                    <th className="w-1/12 border border-slate-300 bg-gray-200">Fecha</th>
                    <th className="w-1/12 border border-slate-300 bg-gray-200">Tipo</th>
                    <th className="w-5/12 border border-slate-300 bg-gray-200">Detalle</th>
                    <th className="w-3/12 border border-slate-300 bg-gray-200">Proveedor</th>
                    <th className="w-1/12 border border-slate-300 bg-gray-200">Estado</th>
                </tr>
            </thead>
            {data.length > 0 ?
            <tbody>
                { data.map((item,index) =>(
                <tr key={index} className="hover:bg-gray-100 h-8">
                    <td className="border pl-1">
                        <input type="checkbox" 
                          onChange={() => { setIndicador(item.id, item.estado, item.totalGeneral) }} 
                          checked={ item.id === indicador ? true : false}
                          />
                    </td>                    
                    <td className="border pl-1"><Moment format="DD-MM-YYYY">{item.fechaCompra}</Moment></td>
                    <td className="border pl-1">{item.tipo}</td>
                    <td className="border pl-1">{item.observaciones}</td>
                    <td className="border pl-1">{item.proveedor.razonSocial || ''}</td>                   
                    <td className="border pl-1">{item.estado}{item.estado === 'pendiente' ? <FontAwesomeIcon icon={faPencil} size="sm" color="#38bdf8" />: null} </td>                   
                </tr>
                ))}
            </tbody>
            : 
            <tbody>                
                <tr>                    
                   <td className="border pl-1" colSpan={5}>Sin resultados</td>                                        
                </tr>                
            </tbody>
            }           
        </table> 
        </div>       
    )
}

export default TableCompra;