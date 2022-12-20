import React from 'react'
import {api} from '../../../helpers/api'
import Moment from 'react-moment'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTags, faDollarSign, faTrash, faFile, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const MembresiaInfos = ({data,membresia,preaprobar}) => {  
  
 return (  
    <>           
      <div className="border-2 border-gray-300 p-1 w-2/6">
      <div className="mt-2 border-2 border-gray-300 rounded-lg p-2 text-xs text-gray-600 shadow-md">
        <h5 className="font-bold">Paquete:</h5>                 
        <h5 className="ml-2 border-b-2">{membresia.Paquete.nombre || ''}</h5>           
        <h5 className="font-bold">Total:</h5>                 
        <h5 className="ml-2 border-b-2">{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(membresia.Paquete.valor)}</h5>           
        <h5 className="font-bold">Fecha de registro:</h5>         
        <h5 className="ml-2 border-b-2"><Moment format="DD/MM/YYYY">{membresia.registro}</Moment></h5>
        <h5 className="font-bold">Fecha de vigencia:</h5>         
        <h5 className="ml-2 border-b-2"><Moment format="DD/MM/YYYY">{membresia.fvigencia}</Moment></h5>
        <h5 className="font-bold">Estado:</h5>         
        <h5 className="ml-2 border-b-2">{membresia.estado ? 'aprobado' :'pendiente'}</h5>                
      </div>
      <div className="mt-2 border-2 border-gray-300 rounded-lg p-2 text-xs text-gray-600 shadow-md">
      <div className="flex-1 mx-auto border-2 min-h-max border-gray-300 p-3 mt-2 rounded-md">
          <table className="border-collapse table-fixed text-xs">
            <thead>
                <tr>                    
                <th className="w-1/6 border border-slate-300 bg-gray-200 ">#</th>
                <th className="w-1/12 border border-slate-300 bg-gray-200 ">Cuota</th>                    
                <th className="w-1/5 border border-slate-300 bg-gray-200 ">F.Pago</th>
                <th className="w-1/3 border border-slate-300 bg-gray-200 ">Monto</th>
                <th className="w-1/6 border border-slate-300 bg-gray-200 ">Estado</th>                
                <th className="w-1/6 border border-slate-300 bg-gray-200 "></th>
                </tr>
            </thead>
            <tbody>
                { data && (
                    data.map(item =>(
                        <tr key={item.id} className="hover:bg-gray-100 h-8">
                            <td className="border pl-1 ">{item.id}</td>
                            <td className="border pl-1 ">{item.cuota}</td>                                
                            <td className="border pl-1 "><Moment format="DD/MM/YYYY">{item.fechaPago}</Moment></td>                            
                            <td className="border pl-1 ">
                                {new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.importe)}
                            </td>
                            <td className="border pl-1 ">{item.estado}</td>
                            
                            <td className="border pl-1">
                                {item.estado === 'pendiente' ?                                 
                                <button 
                                    onClick={() => {preaprobar(item)}}
                                    className="w-10 h-6 border-4 rounded-lg bg-sky-400 hover:bg-sky-300 text-xs text-white">
                                    <FontAwesomeIcon icon={faFile} />
                                </button>                                                            
                                : 
                                <button 
                                className="w-10 h-6 border-4 rounded-lg bg-red-400 hover:bg-red-300 text-xs text-white">
                                    <FontAwesomeIcon icon={faFilePdf} />
                                </button>}
                            </td>
                            
                        </tr>
                    ))
                )
                }                    
                
            </tbody>
            </table>
        </div>
      </div>         
      </div>     
    </>            
        
     );
}
 
export default MembresiaInfos;