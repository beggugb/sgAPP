import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { inventarioActions } from '../../redux/actions/inventario'
import Select from "react-select";
import { custom } from '../../helpers/customStyles'
import { defaultVal, defaultVals } from "../../helpers/functions"

const SelectCompuestoForm = ({items,xredux,xreduxItem,payload,keyId,itemId,parentId,yredux,ypayload}) =>{     
    const dispatch = useDispatch()      

    const getCharge = () =>{        
         dispatch(inventarioActions.getItems(xredux,payload))   
    }
    
    useEffect(() => {
        getCharge()
        return () => {
           
        };
    }, []);
    
    const handleChange = event =>{        
        let io = event ? event.value: 0            
        dispatch({type:xreduxItem,name:keyId,value:io})    
        dispatch(inventarioActions.getLista(yredux,ypayload,io))    
    }

    return(        
            <Select
                defaultValue={items[0]}
                name={keyId}
                id={keyId}
                options={defaultVals(items,parentId)}      
                isClearable={false}                                   
                styles={custom}
                value={defaultVal(items,itemId)}
                onChange={(e)=>handleChange(e)}
            />        
    )
}

export default SelectCompuestoForm