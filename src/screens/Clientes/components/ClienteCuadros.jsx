import React from 'react'
import Pagination from '../../../components/Pagination'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTags } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../redux/actions/crud'
import {api} from '../../../helpers/api'

const ClienteCuadros = ({setShowModal}) => {   
    const dispatch = useDispatch()      
    const {data, total ,pagina, paginas, promp }= useSelector(state => state.cliente)
    
  

    const edit = (pky) =>{
        dispatch(crudActions.getItem('clienteItem','clientes','unit',pky)) 
        setShowModal(true)
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
  
  
    return (  
        <>       
        <div className="flex-1 mx-auto">
            <div className="w-full">
            <ul className="h-430 w-full text-[11px] p-2 border">                
                { data &&                   
                     data.map((item, index)=>(
                       <li 
                       key={index}
                       className="h-48 w-44 rounded border hover:shadow-lg float-left mb-2 mr-1 p-2 hover:border-stone-300"
                       
                       >  
                        <p className="text-stone-600">{item.nombres}</p>                        
                        <p className="text-stone-600 font-bold">{item.ci}</p>
                        <img
                        alt="cliente"
                        className="h-28 w-full border p-1 rounded" 
                        src={`${api}/static/images/clientes/md/` + item.filename}
                        /> 
                        <div className="h-9 flex">
                            <button
                                className="h-4 w-1/2 flex mt-2 ml-8"
                                onClick={() => edit(item.id)}>
                                <FontAwesomeIcon icon={faEdit} size="xl" color="#0ea5e9" />
                            </button>
                            
                            <Link to={`/admin/membresia/${item.id}`}>
                            <button
                            className="h-4 w-1/2 flex mt-2 ml-2"
                            >
                                <FontAwesomeIcon icon={faTags} size="xl"  color="#f59e0b"/>
                            </button>
                            </Link>
                        </div>
                       </li>  
                    ))                    
                }                                                            
                </ul>
            </div>
            <div className="h-12 border-r border-l border-b border-gray-300 p-3 rounded-b-lg">
               <Pagination
               makeHttpRequestWithPage={ submitHandle }
               total={total}
               paginas={paginas}
               current={pagina}
               pagina={12}
               />
            </div>
        </div>           
        </>
     );
}
 
export default ClienteCuadros;