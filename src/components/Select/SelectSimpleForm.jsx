import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { inventarioActions } from '../../redux/actions/inventario'
import Select from "react-select";
import { custom } from '../../helpers/customStyles'
import { defaultVal } from "../../helpers/functions"

const SelectSimpleForm = ({label,items,xredux,xreduxItem,payload,keyId,itemId}) =>{     
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
    }

    return(        
        <>
            <label for="nombre">{label} </label>         
            <Select
                defaultValue={items[0]}
                name={keyId}
                id={keyId}
                options={items}      
                isClearable={false}                                   
                styles={custom}
                value={defaultVal(items,itemId)}
                onChange={(e)=>handleChange(e)}
            />
        </>        
    )
}

export default SelectSimpleForm