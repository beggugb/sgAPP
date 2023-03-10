import React,{ useEffect} from "react";
import { useSelector, useDispatch} from 'react-redux'
import { inventarioActions } from '../../../redux/actions/inventario'
import Pagination from '../../../components/Pagination'
import TableMarca from "./components/TableMarca";
import FormSearch from '../../../components/Forms/FormSearch'
import FormMarca from '../../../components/Forms/FormSimple'
import SelectSimple from "../../../components/Select/SelectSimples";

const MarcasView = () =>{
    const dispatch = useDispatch()      
    const { data, item, total, pagina, paginas } = useSelector(state => state.marca) 
    const { items } = useSelector(state => state.categoria) 

    const chargeData = (page,num) =>{
        dispatch(inventarioActions.getData('marcasData','marcas',page,num,'nombre','ASC'))
    }  
  
    useEffect(() => {
        chargeData(1,12)
        return () => {
            dispatch({type:'marcasReset'})
        };
    }, []);
    
    const handleDelete = (pky) =>{        
        dispatch(inventarioActions.dDelete('marcasData','marcas',pky))        
    }   

    const handleEdit = (ite) =>{                
        dispatch({type:'marcaAdd',response:ite})          
    } 

    const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'marcaChange',name:name,value:value}) 
    }

    const submitHandle = event =>{
        event.preventDefault()    
        if(item.id){            
            dispatch(inventarioActions.putUpdate('marcasData','marcas',item,'unit'))
        }else{            
            dispatch(inventarioActions.postAdd('marcasData','marcas',item,'unit'))
        }
        dispatch({type:'marcaReset'}) 
    }

 return(   
    <div className="h-550 flex-1 p-1 border">  
        <div className="h-12">                                 
            <FormSearch
               xredux={'marcasData'}
               payload={'marcas'}
               model={"Marcas"}
            />            
        </div>
        <div className="flex flex-row mx-auto mt-1">                      
           <div className="h-80 w-1/3 border p-3">          
                <SelectSimple
                        label={'Categor??as'}                        
                        items={items}
                        xredux={'categoriasLista'}
                        xreduxItem={'marcaChange'}
                        payload={'categorias'}
                        keyId={'categoriaId'}
                        itemId={item.categoriaId}                        
                /> 
                <FormMarca
                 handleChange={handleChange}                        
                 item={item}
                 submitHandle={submitHandle}
                 
                />  
           </div>
           <div className="w-2/3">
               <div className="ml-2">
                <TableMarca
                data={data}                
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                />  
                <div className="h-12 border-r border-l border-b border-gray-300 p-3 rounded-b-lg">
                <Pagination 
                makeHttpRequestWithPage={chargeData}
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

export default MarcasView
