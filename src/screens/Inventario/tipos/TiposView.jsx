import React,{ useEffect} from "react";
import { useSelector, useDispatch} from 'react-redux'
import { inventarioActions } from '../../../redux/actions/inventario'
import Pagination from '../../../components/Pagination'
import TableTipo from "../../../components/Tables/TableSimple";
import FormSearch from "../../../components/Forms/FormSearch";
import FormTipo from '../../../components/Forms/FormSimple'

const TiposView = () =>{
    const dispatch = useDispatch()      
    const { data, item, total, pagina, paginas } = useSelector(state => state.tipo) 
    const chargeData = (page,num) =>{
        dispatch(inventarioActions.getData('tiposData','tipos',page,num,'nombre','ASC'))
    }  
  
    useEffect(() => {
        chargeData(1,12)
        return () => {
            dispatch({type:'tiposReset'})
        };
    }, []);
    
    const handleDelete = (pky) =>{        
        dispatch(inventarioActions.dDelete('tiposData','tipos',pky))        
    }   

    const handleEdit = (ite) =>{                
        dispatch({type:'tipoAdd',response:ite})          
    } 

    const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'tipoChange',name:name,value:value}) 
    }

    const submitHandle = event =>{
        event.preventDefault()    
        if(item.id){            
            dispatch(inventarioActions.putUpdate('tiposData','tipos',item,'unit'))
        }else{            
            dispatch(inventarioActions.postAdd('tiposData','tipos',item,'unit'))
        }
        dispatch({type:'tipoReset'}) 
    }
 return(   
    <div className="h-2/4 flex-1 mx-auto p-2 mb-10 border-2">  
    <div className="h-12">                                  
        <FormSearch
           xredux={'tiposData'}
           payload={'tipos'}
           model={"Tipos"}
        />            
    </div>
    <div className="flex flex-row mx-auto mt-1">                      
       <div className="w-3/12 border-2 p-4">                       
            <FormTipo
             handleChange={handleChange}                        
             item={item}
             submitHandle={submitHandle}
             
            />  
       </div>
       <div className="w-3/4 border-2">
           <div className="p-1">
            <TableTipo
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

export default TiposView
