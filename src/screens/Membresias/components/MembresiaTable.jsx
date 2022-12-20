import React from 'react'
import Pagination from '../../../components/Pagination'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faTrash, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Moment from 'react-moment';

const MembresiaTable = ({data,total,pagina,paginas,makeHttpRequestWithPage,delHandler}) => {  
     
    return (  
        <div >     
            <div className="flex-1 mx-auto border min-h-max border-gray-300 p-1 rounded-md">
              <table className="border-collapse table-fixed text-xs">
                <thead>
                    <tr className="h-6 border-slate-300 bg-gray-200 border">                    
                    <th className="w-1/3 ">Paquete</th>
                    <th className="w-1/6 ">Total</th>                    
                    <th className="w-1/6 ">F.Registro</th>
                    <th className="w-1/6 ">F.Vencimiento</th>
                    <th className="w-1/6 ">Estado</th>
                    <th className="w-1/6 ">Ingresos</th>
                    <th className="w-1/6 "></th>
                    </tr>
                </thead>
                <tbody>
                    { data && (
                        data.map((item,index) =>(
                            <tr key={index} className="hover:bg-gray-100 h-8">
                                <td className="border-b pl-1 ">{item.paquete}</td>
                                <td className="border-b pl-1 ">                                    
                                    {new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.ingresos)}
                                </td>                                
                                <td className="border-b pl-1 "><Moment format="DD/MM/YYYY">{item.ivigencia}</Moment></td>
                                <td className="border-b pl-1 "><Moment format="DD/MM/YYYY">{item.fvigencia}</Moment></td>
                                <td className="border-b pl-1 ">{item.est}</td>
                                <td className="pl-1 pt-1  flex-row flex">
                                    {item.estado === false ? 
                                    <>
                                    <button 
                                        className="w-10 h-6 reounded  bg-sky-400 hover:bg-sky-300 text-xs text-white"
                                        onClick={() => {delHandler(item.id)}} >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <Link to={`/admin/notas/${item.id}`}>
                                        <button className="w-10 h-6 reounded bg-orange-400 hover:bg-orange-300 text-xs text-white">
                                            <FontAwesomeIcon icon={faDollarSign} />
                                        </button>
                                    </Link>
                                    </>
                                    : 
                                    <button 
                                    className="w-10 h-6 rounded bg-red-400 hover:bg-red-300 text-xs text-white">
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
            <div className="h-12 border-r border-l border-b border-gray-300 p-3 rounded-b-lg">
               <Pagination
               makeHttpRequestWithPage={ makeHttpRequestWithPage}
               total={total}
               paginas={paginas}
               current={pagina}
               pagina={12}
               />
            </div>
        </div>
     );
}
 
export default MembresiaTable;