import React,{ useEffect} from "react";
import { useSelector, useDispatch} from 'react-redux'
import { inventarioActions } from '../../../redux/actions/inventario'
import Pagination from '../../../components/Pagination'
import TableIndustria from "./components/TableIndustria";
import FormSearch from "../../../components/Forms/FormSearch";
import FormIndustria from './components/FormIndustria'
import SelectLocal from "../../../components/Select/SelectLocal";
import { locations } from "../../../helpers/locations"

const IndustriasView = () =>{
    const dispatch = useDispatch()      
    const { data, item, total, pagina, paginas } = useSelector(state => state.industria) 
    const chargeData = (page,num) =>{
        dispatch(inventarioActions.getData('industriasData','industrias',page,num,'nombre','ASC'))
    }  
  
    useEffect(() => {
        chargeData(1,12)
        return () => {
            dispatch({type:'industriasReset'})
        };
    }, []);
    
    const handleDelete = (pky) =>{        
        dispatch(inventarioActions.dDelete('industriasData','industrias',pky))        
    }   

    const handleEdit = (ite) =>{                
        dispatch({type:'industriaAdd',response:ite})          
    } 

    const handleChange = (e) =>{
        const { value, name } = e.target
        dispatch({type:'industriaChange',name:name,value:value}) 
    }

    const submitHandle = event =>{
        event.preventDefault()    
        if(item.id){            
            dispatch(inventarioActions.putUpdate('industriasData','industrias',item,'unit'))
        }else{            
            dispatch(inventarioActions.postAdd('industriasData','industrias',item,'unit'))
        }
        dispatch({type:'industriaReset'}) 
    }
 return(   
    <div className="h-550 flex-1 p-1 border">  
    <div className="h-12">                                 
        <FormSearch
           xredux={'industriasData'}
           payload={'industrias'}
           model={"Industria"}
        />            
    </div>
    <div className="flex flex-row mx-auto mt-1">                      
           <div className="h-80 w-1/3 border p-3">
            <SelectLocal
                        label={'Paises'}
                        item={item}
                        items={locations}                        
                        xreduxItem={'industriaChange'}                        
                        keyId={'pais'}
                        itemId={item.pais}                        
            />                       
            <FormIndustria
             handleChange={handleChange}                        
             item={item}
             submitHandle={submitHandle}
             
            />  
       </div>
       <div className="w-2/3">
               <div className="ml-2">
            <TableIndustria
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

export default IndustriasView
