import React,{useEffect} from 'react'
import Pagination from '../../../components/Pagination'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTags, faTrash, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../redux/actions/crud'

const ClienteTable = ({setShowModal,setShowView}) => {   
    const dispatch = useDispatch()  
    const {data, total ,pagina, paginas, promp }= useSelector(state => state.cliente)
  
    const edit = (pky) =>{
        dispatch(crudActions.getItem('clienteItem','clientes','unit',pky)) 
        setShowModal(true)
    }
    const show = (pk) =>{
        dispatch(crudActions.getItem('clienteItem','clientes','inf',pk)) 
        setShowView(true)
    }
    const del = (pk) =>{
        dispatch(crudActions.deleteList('clientesData','clientes',pk))         
    }
    const submitHandle = (page,num) =>{        
        let iok={
            page:page ? page : 1,
            num:num ? num : 12,
            nombres : promp,
            ci:'',
            nit:''
        }
        dispatch(crudActions.searchList('clientesData','clientes',iok))
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
                    <th className="w-6/12">NOMBRES</th>                                  
                    <th className="w-2/12">CI</th>
                    <th className="w-1/12">TELEFONO</th>
                    <th className="w-1/12">ESTADO</th>                                        
                    <th className="w-1/12 bg-gray-300"></th>
                    </tr>
                </thead>
                <tbody>
                    { data && (
                        data.map(item =>(
                            <tr key={item.id} className="hover:bg-gray-300 h-8 border-stone-300">
                                <td className="pl-1 border">{item.id}</td>                                                       
                                <td className="pl-1 border">{item.nombres}</td>
                                <td className="pl-1 border">{item.ci}</td>                                
                                <td className="pl-1 border">{item.telefono}</td>
                                <td className="pl-1 border">{item.estado}</td>
                                <td className="flex-row flex pt-1 justify-center">
                                    <button
                                        onClick={() => show(item.id)}
                                        className="w-7 h-5 rounded bg-red-400 hover:bg-red-300 text-xs text-white mr-1">
                                        <FontAwesomeIcon icon={faFilePdf} size="sm"/>     
                                    </button>
                                    <button
                                        onClick={() => edit(item.id)}
                                        className="w-7 h-5 rounded bg-sky-400 hover:bg-sky-300 text-xs text-white">
                                        <FontAwesomeIcon icon={faEdit} size="sm"/>     
                                    </button>
                                    <Link to={`/admin/membresia/${item.id}`}>
                                    <button                                        
                                        className="w-7 h-5 rounded bg-green-400 hover:bg-green-300 text-xs text-white ml-1">
                                        <FontAwesomeIcon icon={faTags} size="sm"/>     
                                    </button>                                    
                                    </Link>
                                    <button
                                        onClick={() => del(item.id)}
                                        className="ml-1 w-7 h-5 rounded bg-red-400 hover:bg-red-300 text-xs text-white">
                                        <FontAwesomeIcon icon={faTrash} size="sm"/>     
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
 
export default ClienteTable;