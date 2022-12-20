import React,{ useEffect} from "react";
import { useSelector, useDispatch} from 'react-redux'
import { inventarioActions } from '../../../redux/actions/inventario'
import Pagination from '../../../components/Pagination'
import TableCategoria from "../../../components/Tables/TableSimple";
import FormSearch from "../../../components/Forms/FormSearch";
import FormCategoria from '../../../components/Forms/FormSimple'

const CategoriasView = () =>{
    const dispatch = useDispatch()      
    const { data, item, total, pagina, paginas } = useSelector(state => state.categoria) 
    
    const chargeData = (page,num) =>{      
        dispatch(inventarioActions.getData('categoriasData','categorias',page,num,'nombre','ASC'))
    }  
  
    useEffect(() => {
        chargeData(1,12)
        return () => {
            dispatch({type:'categoriasReset'})
        };
    }, []);
    
    const handleDelete = (pky) =>{     
          
        dispatch(inventarioActions.dDelete('categoriasData','categorias',pky))        
    }   

    const handleEdit = (ite) =>{             
        dispatch({type:'categoriaAdd',response:ite})          
    } 

    const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'categoriaChange',name:name,value:value}) 
    }

    const submitHandle = event =>{
        event.preventDefault()         
        event.preventDefault()    
        if(item.id){            
            dispatch(inventarioActions.putUpdate('categoriasData','categorias',item,'unit'))
        }else{            
            dispatch(inventarioActions.postAdd('categoriasData','categorias',item,'unit'))
        }
        dispatch({type:'categoriaReset'}) 
    }
 return(   
    <div className="h-550 flex-1 p-1 border">  
        <div className="h-12">                                  
            <FormSearch
               xredux={'categoriasData'}
               payload={'categorias'}
               model={"Categorias"}
            />            
        </div>
        <div className="flex flex-row mx-auto mt-1">                      
           <div className="h-80 w-1/3 border p-3">
                <FormCategoria
                 handleChange={handleChange}                        
                 item={item}
                 submitHandle={submitHandle}
                 
                />  
           </div>
           <div className="w-2/3">
               <div className="ml-2">
                <TableCategoria
                data={data}                
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                />  
                <div className="h-12 border-r border-l border-b border-gray-300 p-3 rounded-b-lg">
               <Pagination
               makeHttpRequestWithPage={ chargeData}
               total={total}
               paginas={paginas}
               current={pagina}
               pagina={12}
               />
            </div>    
                </div>
           </div>
        </div>                
  </div>             
    )
}

export default CategoriasView
