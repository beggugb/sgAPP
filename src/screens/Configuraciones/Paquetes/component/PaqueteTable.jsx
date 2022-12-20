import React,{useEffect} from 'react'
import Pagination from '../../../../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { crudActions} from '../../../../redux/actions/crud'

const MembresiaTable = () => {  
    const dispatch = useDispatch() 
    const { data,total,pagina,paginas } = useSelector(state => state.paquetes)  


    const makeHttpRequestWithPage = (page, num) =>{
        dispatch(crudActions.getData('paquetesData','paquetes', page, num,'nombre','ASC'))   
    }
    const itemHandler = (pky) =>{
        dispatch(crudActions.getItem('paquetesItem','paquetes','unit',pky))
    }

    useEffect(() =>{        
        makeHttpRequestWithPage(1,12);    
         return () =>{                                
            dispatch({type:'paquetesReset'})
        };
      }, []);


    return (  
        <div className="p-1">     
            <div className="flex-1 mx-auto border min-h-max border-gray-200 p-1 mt-1 rounded-md">
              <table className="border-collapse table-fixed text-xs">
                <thead>
                    <tr>                    
                    <th className="w-7/12 border border-slate-300 bg-gray-200 ">Nombre</th>
                    <th className="w-1/12 border border-slate-300 bg-gray-200 ">Valor</th>                    
                    <th className="w-1/12 border border-slate-300 bg-gray-200 ">Tipo</th>                    
                    <th className="w-1/12 border border-slate-300 bg-gray-200 ">Meses</th>
                    <th className="w-1/12 border border-slate-300 bg-gray-200 ">Estado</th>
                    <th className="w-1/12 border border-slate-300 bg-gray-200 "></th>
                    </tr>
                </thead>
                <tbody>
                    { data && (
                        data.map((item,index) =>(
                            <tr key={index} className="hover:bg-gray-100 h-8">
                                <td className="border pl-1">{item.nombre}</td>
                                <td className="border pl-1">{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.valor)}</td>                      
                                <td className="border pl-1">{item.diario ? 'diario': 'normal'}</td>                                
                                <td className="border pl-1 text-center">{item.meses}</td>
                                <td className={item.enabled ? "border pl-1 bg-green-300 text-center":"text-center border pl-1 bg-red-300"}>{item.enabled ? "Habilitado":"Desabilitado"}</td>
                                <td className="border pl-1 flex justify-center items-center">                             
                                <button 
                                   className="w-10 h-5 border rounded-lg bg-sky-400 hover:bg-sky-300 text-xs text-white"
                                   onClick={() => {itemHandler(item.id)}} >
                                   <FontAwesomeIcon icon={faEdit} />
                                </button>
                                </td>
                            </tr>
                        ))
                    )
                    }                    
                    
                </tbody>
                </table>
            </div>
            <div className="h-12 border border-gray-200 p-3 mt-1 rounded-b-lg">
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