import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const TableModelo = ({data,handleDelete,handleEdit}) =>{
    return(   
        <div className="flex-1 mx-auto border-2 min-h-max border-gray-300 p-1 mt-1 rounded">
        <table className="border-collapse table-fixed text-xs">           
        <thead>
            <tr>                    
                <th className='w-1/12 border border-slate-300 bg-gray-200'>Código</th>                    
                <th className='w-2/5 border border-slate-300 bg-gray-200'>Nombre</th>
                <th className='w-1/4 border border-slate-300 bg-gray-200'>Abreviación</th>
                <th className='w-1/4 border border-slate-300 bg-gray-200'>Marca</th>
                <th className='w-1/12 border border-slate-300 bg-gray-200'></th>                    
            </tr>
        </thead>
        {data.length > 0 ?
        <tbody>
            { data.map((item,index) =>(
            <tr key={index} className="hover:bg-gray-100 h-8">                      
                <td className="border pl-1">{item.id}</td>
                <td className="border pl-1">{item.nombre}</td>
                <td className="border pl-1">{item.abreviacion}</td>
                <td className="border pl-1">{item.marca.nombre || ''}</td>                                                        
                <td className="border pl-1 flex-row flex">
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

export default TableModelo;