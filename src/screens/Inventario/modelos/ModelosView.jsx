import React,{ useEffect} from "react";
import { useSelector, useDispatch} from 'react-redux'
import { inventarioActions } from '../../../redux/actions/inventario'
import Pagination from '../../../components/Pagination'
import TableModelo from "./TableModelo";
import FormSearch from "../../../components/Forms/FormSearch";
import FormModelo from '../../../components/Forms/FormSimple'
import SelectSimple from "../../../components/Select/SelectSimples";

const ModelosView = () =>{
    const dispatch = useDispatch()      
    const { data, item, total, pagina, paginas } = useSelector(state => state.modelo) 
    const { items } = useSelector(state => state.marca) 
    const chargeData = (page,num) =>{
        dispatch(inventarioActions.getData('modelosData','modelos',page,num,'nombre','ASC'))
    }  
  
    useEffect(() => {
        chargeData(1,12)
        return () => {
            dispatch({type:'modelosReset'})
        };
    }, []);
    
    const handleDelete = (pky) =>{        
        dispatch(inventarioActions.dDelete('modelosData','modelos',pky))        
    }   

    const handleEdit = (ite) =>{                
        dispatch({type:'modeloAdd',response:ite})          
    } 

    const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'modeloChange',name:name,value:value}) 
    }

    const submitHandle = event =>{
        event.preventDefault()    
        if(item.id){            
            dispatch(inventarioActions.putUpdate('modelosData','modelos',item,'unit'))
        }else{            
            dispatch(inventarioActions.postAdd('modelosData','modelos',item,'unit'))
        }
        dispatch({type:'modeloReset'}) 
    }
 return(   
    <div className="h-2/4 flex-1 mx-auto p-2 mb-10 border-2">  
        <div className="h-12">                                  
            <FormSearch
            xredux={'modelosData'}
            payload={'modelos'}
            model={"Modelos"}
            />            
    </div>
    <div className="flex flex-row mx-auto mt-1">                      
       <div className="w-3/12 border-2 p-4">           
            <SelectSimple
                label={'Marcas'}
                item={item}
                items={items}
                xredux={'marcasLista'}
                xreduxItem={'modeloChange'}
                payload={'marcas'}
                keyId={'marcaId'}
                itemId={item.marcaId}                        
            /> 
            <FormModelo
             handleChange={handleChange}                        
             item={item}
             submitHandle={submitHandle}
             
            />  
       </div>
       <div className="w-3/4 border-2">
           <div className="p-1">
            <TableModelo
            data={data}                
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            />  
            <div className="h-12 border-2 border-gray-300 p-3 mt-1 rounded-b-lg">
            <Pagination 
            makeHttpRequestWithPage={chargeData}
            total={total}
            paginas={paginas}
            current={pagina}            
            />
            </div>    
            </div>
       </div>
    </div>                
</div>                        
)      
    
}

export default ModelosView
