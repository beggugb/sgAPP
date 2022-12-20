import React,{useEffect, useState} from 'react'
import { crudActions } from '../../redux/actions/crud'
import Select from "react-select";
import { custom } from '../../helpers/customStyles'
import { defaultVal } from "../../helpers/functions"
import { useSelector, useDispatch } from 'react-redux'
import{ getFecha, addM, addMM, add_months, getInicio} from '../../helpers/functions'

const SelectSimple = () =>{     
    const dispatch = useDispatch()    
    const [startDate, setStartDate] = useState(new Date());   
    const [endDate, setEndDate] = useState(new Date());
    const { data, item }= useSelector(state => state.paquetes)
    const getCharge = () =>{        
         dispatch(crudActions.getList('paquetesLista','paquetes'))   
    }
    
    useEffect(() => {
        getCharge()
        return () => {
            /*dispatch({type:'resetMembresia'})*/
            };
    }, []);
    
    const handleChange = event =>{        
      
        let io = event ? event.value: 0
        let va = event ? event.valor: 0
        let da = event ? event.diario: false           
        let md = event ? event.meses: 0

        dispatch({type:'membresiasChange',props:'paqueteId',value:io})
        dispatch({type:'paquetesChange',props:'id',value:io})          
        dispatch({type:'paquetesChange',props:'valor',value:va}) 
        dispatch({type:'paquetesChange',props:'diario',value:da}) 

        let ivigencia = ""
        let fvigencia = ""
        
        
        if(va !== '0' && va !== 0 )
        {
            /** */
            if(md === '0.5')
            {            
                ivigencia = getInicio()
                fvigencia = addM(startDate)            
                
            }else if(da){              
                ivigencia = getInicio()
                fvigencia = getInicio()
            }
            else{         
                ivigencia = getFecha(startDate)
                let iok = parseInt(md) + 1            
                fvigencia = addMM(iok)
            }
            /** */
            dispatch({type:'membresiasChange',props:'ivigencia',value:ivigencia})
            dispatch({type:'membresiasChange',props:'fvigencia',value:fvigencia})
        }else{
            dispatch({type:'membresiasChange',props:'ivigencia',value:startDate})
            dispatch({type:'membresiasChange',props:'fvigencia',value:endDate})
        }
            
    }

    return(
        <> 
        <label htmlFor='paqueteId' > Paquetes</label>                 
            <Select
                defaultValue={data[0]}
                name="paqueteId"
                id="paqueteId"
                options={data}      
                isClearable={false}                                   
                styles={custom}
                value={defaultVal(data,item.id)}
                onChange={(e)=>handleChange(e)}
            />        
        </>        
    )
}

export default SelectSimple