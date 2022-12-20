import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inventarioActions } from '../../redux/actions/inventario'
import Select from "react-select";
import { customf } from '../../helpers/customStyles'
import { defaultVal } from "../../helpers/functions"

const SelectCompUser = () =>{     
    const dispatch = useDispatch()      
    const { usuarioId } = useSelector(state => state.informes) 
    const items = useSelector(state => state.usuario.items)
    const getCharge = () =>{        
         dispatch(inventarioActions.getItems('usuariosLista','usuarios/intro'))   
    }
    
    useEffect(() => {
        getCharge()
        return () => {
           
        };
    }, []);
    
    const handleChange = event =>{        
        let io = event ? event.value: 0            
        dispatch({type:'INFORMES_SET',name:'usuarioId',value:io})            
    }

    return(  
            <>
            <label>Usuarios</label>      
            <Select
                defaultValue={items[0]}
                name="usuarioId"
                id="usuarioId"
                options={items}      
                isClearable={true}                                   
                styles={customf}
                value={defaultVal(items,usuarioId)}
                onChange={(e)=>handleChange(e)}
            />
            </>        
    )
}

export default SelectCompUser