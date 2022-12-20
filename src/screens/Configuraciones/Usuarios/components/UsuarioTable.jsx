import React,{useEffect} from 'react'
import Pagination from '../../../../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faKey } from "@fortawesome/free-solid-svg-icons";
import { crudActions} from '../../../../redux/actions/crud'

const UsuarioTable = () => {  
    const dispatch = useDispatch()     
    const { data,total,pagina,paginas } = useSelector(state => state.usuario)  


    const makeHttpRequestWithPage = (page, num) =>{        
        dispatch(crudActions.getData('usuariosData','usuarios',page, num,'nombre','ASC'))    
    }
    const itemHandler = (pky) =>{
        dispatch(crudActions.getItem('usuarioItem','usuarios','unit',pky))        
    }

    const itemHandlers = (pky) =>{
        dispatch(crudActions.getItem('usuarioItem','usuarios','unit',pky))
    }

    useEffect(() =>{        
        makeHttpRequestWithPage(1,12);    
         return () =>{                                
            dispatch({type:'paquetesReset'})
        };
      }, []);

      
    return (  
        <div className="border-gray-300">     
            <div className="flex-1 mx-auto border min-h-max border-gray-300 p-3 mt-2 rounded-md">
              <table className="border-collapse table-fixed text-xs">
                <thead>
                    <tr>                    
                    <th className="w-3/4 border border-slate-300 bg-gray-200 ">Nombres</th>
                    <th className="w-1/6 border border-slate-300 bg-gray-200 ">Username</th>                    
                    <th className="w-1/6 border border-slate-300 bg-gray-200 ">Rol</th>                    
                    <th className="w-1/6 border border-slate-300 bg-gray-200 "></th>
                    </tr>
                </thead>
                <tbody>
                    { data && (
                        data.map(item =>(
                            <tr key={item.id} className="hover:bg-gray-100 h-8">
                                <td className="border pl-1">{item.nombre}</td>
                                <td className="border pl-1">{item.username}</td>                                            
                                <td className="border pl-1">{item.Rol.nombre}</td>                               
                                <td className="border pl-1  flex-row flex">                             
                                <button 
                                   className="w-10 h-6 border-4 rounded-lg bg-sky-400 hover:bg-sky-300 text-xs text-white"
                                   onClick={() => {itemHandler(item.id)}} >
                                   <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button 
                                   className="w-10 h-6 border-4 rounded-lg bg-red-400 hover:bg-red-300 text-xs text-white"
                                   onClick={() => {itemHandlers(item.id)}} >
                                   <FontAwesomeIcon icon={faKey} />
                                </button>
                                </td>
                            </tr>
                        ))
                    )
                    }                    
                    
                </tbody>
                </table>
            </div>
            <div className="h-12 border border-gray-300 p-3 mt-1 rounded-b-lg">
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
 
export default UsuarioTable;