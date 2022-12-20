import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inventarioActions } from '../../redux/actions/inventario'
import Select from "react-select";
import { customf } from '../../helpers/customStyles'
import { defaultVal } from "../../helpers/functions"

const SelectCompForm = () =>{     
    const dispatch = useDispatch()      
    const { categoriaId } = useSelector(state => state.informes) 
    const items = useSelector(state => state.categoria.items)
    const getCharge = () =>{        
         dispatch(inventarioActions.getItems('categoriasLista','categorias'))   
    }
    
    useEffect(() => {
        getCharge()
        return () => {
           
        };
    }, []);
    
    const handleChange = event =>{        
        let io = event ? event.value: 0            
        dispatch({type:'INFORMES_SET',name:'categoriaId',value:io})            
    }

    return(  
            <>
            <label>Categorias</label>      
            <Select
                defaultValue={items[0]}
                name="categoriaId"
                id="categoriaId"
                options={items}      
                isClearable={true}                                   
                styles={customf}
                value={defaultVal(items,categoriaId)}
                onChange={(e)=>handleChange(e)}
            />
            </>        
    )
}

export default SelectCompForm