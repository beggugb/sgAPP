import React,{useEffect} from 'react'
import Pagination from '../../../components/Pagination'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTags, faTrash, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../redux/actions/crud'
import Moment from 'react-moment'

const MemTable = ({setShowModal,setShowView}) => {   
    const dispatch = useDispatch()  
    const {data, total ,pagina, paginas, promp }= useSelector(state => state.membresias)
  
    const edit = (pky) =>{
        dispatch(crudActions.getItem('membresiaItem','mem','unit',pky)) 
        setShowModal(true)
    }
    const show = (pk) =>{
        dispatch(crudActions.getItem('membresiaItem','mem','inf',pk)) 
        setShowView(true)
    }
    const del = (pk) =>{
        dispatch(crudActions.deleteList('membresiasData','mem',pk))         
    }
    const submitHandle = (page,num) =>{        
        let iok={
            page:page ? page : 1,
            num:num ? num : 12,
            nombres : promp,
            
        }
        dispatch(crudActions.searchList('membresiasData','mem',iok))
      }
    useEffect(() =>{                
        submitHandle(1,12)
              
    }, []);

    return (  
        <>       
            <div className="flex-1 mx-auto border border-gray-300 p-1 rounded">
              <table className="border-collapse text-xs w-full">
                <thead>
                    <tr className="h-6 border-slate-300 bg-gray-200 border text-xs">                    
                    <th className="w-1/12">ID</th>
                    <th className="w-2/12">CLIENTE</th>                                  
                    <th className="w-2/12">PAQUETE</th>
                    <th className="w-1/12">USUARIO</th>
                    <th className="w-1/12">I.VIGENCIA</th>
                    <th className="w-1/12">F.VIGENCIA</th>
                    <th className="w-1/12 bg-gray-300"></th>
                    </tr>
                </thead>
                <tbody>
                    { data && (
                        data.map(item =>(
                            <tr key={item.id} className="hover:bg-gray-300 h-8 border-stone-300">
                                <td className="pl-1 border truncate">{item.id}</td>                                                       
                                <td className="pl-1 border truncate">{item.Cliente.nombres || ''}</td>
                                <td className="pl-1 border truncate">{item.Paquete.nombre || ''}</td>                                
                                <td className="pl-1 border truncate">{item.Usuario.nombre || ''}</td>

                                <td className="pl-1 border truncate"><Moment format="DD/MM/YYYY">{item.ivigencia}</Moment></td>
                                <td className="pl-1 border truncate"><Moment format="DD/MM/YYYY">{item.fvigencia}</Moment></td>

                                <td className="flex-row flex pt-1 justify-center truncate">
                               
                                    <button
                                        onClick={() => edit(item.id)}
                                        className="w-7 h-5 rounded bg-sky-400 hover:bg-sky-300 text-xs text-white">
                                        <FontAwesomeIcon icon={faEdit} size="sm"/>     
                                    </button>                                    
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
               makeHttpRequestWithPage={ submitHandle}
               total={total}
               paginas={paginas}
               current={pagina}
               pagina={12}
               />
            </div>
        </>
     );
}
 
export default MemTable;