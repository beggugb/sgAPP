import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";


const TableSimple = ({data,handleDelete,handleEdit}) =>{    
    return(   
        <div className="flex-1 mx-auto border border-gray-300 p-1 rounded">
            <table className="border-collapse text-xs w-full">          
            <thead>
                <tr className="h-6 border-slate-300 bg-gray-200 border">                
                    <th className='w-1/6'>Código</th>                    
                    <th className='w-4/6'>Nombre</th>
                    <th className='w-2/6'>Abreviación</th>
                    <th className='w-1/6 bg-gray-200'></th>                    
                </tr>
            </thead>
            {data.length > 0 ?
            <tbody>
                { data.map((item,index) =>(
                <tr key={index} className="hover:bg-gray-300 h-8 border-b border-stone-300">                     
                    <td className="pl-1">{item.id}</td>
                    <td className="pl-1">{item.nombre}</td>
                    <td className="pl-1">{item.abreviacion}</td>                                                        
                    <td className="pl-1 flex-row flex">
                        <button 
                        className="w-10 h-6 border-4 rounded-lg bg-red-400 hover:bg-red-300 text-xs text-white"
                        onClick={() => handleDelete(item.id)} >
                        <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button 
                        className="w-10 h-6 border-4 rounded-lg bg-sky-400 hover:bg-sky-300 text-xs text-white"
                        onClick={() => handleEdit(item)}>
                        <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </td>
                </tr>
                ))}
            </tbody>
            : 
            <tbody>                
                <tr>                    
                   <td colSpan={5}>Sin resultados</td>                                        
                </tr>                
            </tbody>
            }           
        </table> 
        </div>       
    )
}

export default TableSimple;