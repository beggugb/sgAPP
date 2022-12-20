import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../redux/actions/crud'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { defaultVal } from "../../helpers/functions"
import SelectSingleForm from "../../components/Select/SelectCompForm"
import SelectUsers from "../../components/Select/SelectCompUser"
import InputSingle from "../../components/Inputs/InputSingleSearch"
import Select from "react-select";
import Clientes from '../Informes/Clientes'
import Membresias from '../Informes/Membresias'
import Cajas from '../Informes/Cajas'
import Consolidado from '../Informes/Consolidado'
import Registro from '../Informes/Registro'
import Existencias from '../Informes/Existencias'
import Ventas from '../Informes/Ventas'



import { registerLocale } from  "react-datepicker";
import { customf } from '../../helpers/customStyles'
import es from 'date-fns/locale/es';
registerLocale('es', es)

const tipos = [
    {label:'Clientes',value:"Clientes"},
    {label:'Membresias',value:"Membresias"},
    {label:'Cajas',value:"Cajas"},
    {label:'Consolidado',value:"Consolidado"},
    {label:'Existencias',value:"Existencias"},
    {label:'Registro',value:"Registro"},
    {label:'Ventas',value:"Ventas"}

]

const ReportesView = () => {
    const dispatch = useDispatch()  
    const [value1, onChange1] = useState(new Date());    
    const [value2, onChange2] = useState(new Date());      
    const { categoriaId, productoId, usuarioId } = useSelector(state => state.informes)   
    const [tipo, settipo] = useState('Clientes');
    const [component, setcomponent] = useState(<Clientes/>);
    

          
    
    const handleChange = event =>{
        dispatch({type:'INFORMES_RESET'}) 
        switch(event.value){
            case 'Clientes':
                setcomponent(<Clientes/>);
                settipo(event.value)
            break;   
            case 'Cajas':
                setcomponent(<Cajas/>);
                settipo(event.value)
            break; 
            case 'Membresias':
                setcomponent(<Membresias/>);
                settipo(event.value);
            break;
            case 'Consolidado':
                setcomponent(<Consolidado/>);
                settipo(event.value)
            break;  
            case 'Registro':
                setcomponent(<Registro/>);
                settipo(event.value)
            break;
            case 'Existencias':
                setcomponent(<Existencias/>);
                settipo(event.value)
            break;
            case 'Ventas':
                setcomponent(<Ventas/>);
                settipo(event.value)
            break;
        
            default:
                setcomponent(null);
                break;    
        }
    }
   
    const submitHandle = event => {  
        dispatch({type:'INFORMES_RESET'})        
        event.preventDefault()           

        const item = {
         desde : value1,
         hasta : value2,
         usuarioId : usuarioId,
         categoriaId: categoriaId,         
         productoId: productoId,
        }

        switch(tipo){
            case 'Clientes':
                dispatch(crudActions.informes('INFORMES_CLIENTES','clientes',item,value1,value2))
            break;   
            case 'Cajas':
                dispatch(crudActions.informes('INFORMES_CAJAS','cajas',item,value1,value2))
            break; 
            case 'Membresias':
                dispatch(crudActions.informes('INFORMES_MEMBRESIAS','amembresias',item,value1,value2)) 
            break;  
            case 'Consolidado':
                dispatch(crudActions.informes('INFORMES_CONSOLIDADO','aconsolidado',item,value1,value2))          
            break; 
            case 'Registro':
                dispatch(crudActions.informes('INFORMES_REGISTROS','registro',item,value1,value2))   
            break;   
            case 'Existencias':
                dispatch(crudActions.informes('INFORMES_EXISTENCIAS','existencias',item,value1,value2))   
            break; 
            case 'Ventas':
                dispatch(crudActions.informes('INFORMES_VENTAS','ventas',item,value1,value2))   
            break; 
        
            default:
                setcomponent(null);
            break;  
        }
                  
        
    }
 
    return ( 
        <div className="h-580 p-1">
            <div className="text-sm shadow-md rounded-t-md flex-row p-1 bg-sky-500 hover:bg-orange-300">                
                <FontAwesomeIcon icon={faBarChart} size="xs" className="w-10 justify-center text-white"  />
                <span className="text-white">Reportes</span>                                            
            </div>

        <div className="flex flex-row border text-xs">            
            <div className="w-1/4 mr-2 border-r-2">
                <h6 className="bg-gray-200 border-b-2 border-gray-100 p-2">Parametros de busqueda</h6>
                <form  onSubmit={ submitHandle} className="w-full p-2 rounded">
                    <div > 
                        <div className="h-6 p-1 text-xs font-bold">Informe</div>
                        <Select
                                defaultValue={tipos[0]}
                                name="tipo"
                                id="tipo"
                                options={tipos}      
                                isClearable={false}                                   
                                styles={customf}
                                value={defaultVal(tipos,tipo)}
                                onChange={(e)=>handleChange(e)}
                            />
                    </div>

                    { (tipo === "Clientes" || tipo === "Membresias" || tipo === "Cajas" || tipo === "Consolidado" || tipo === "Ventas" || tipo === "Registro") ?
                    <>
                    <div> 
                        <div className="h-6 p-1 text-xs font-bold">Desde </div>
                        <DatePicker 
                            className="text-center p-1 h-8 w-full rounded border-gray-300 hover:bg-gray-100 hover:border-sky-200 text-xs"
                            locale="es"
                            selected={value1} 
                            onChange={(date) => onChange1(date)}
                            dateFormat="PP"
                        />
                    </div>
                    <div > 
                        <div className="h-6 p-1 text-xs font-bold">Hasta </div>
                        <DatePicker 
                            className="text-center p-1 h-8 w-full rounded border-gray-300 hover:bg-gray-100 hover:border-sky-200 text-xs"
                            locale="es"
                            selected={value2} 
                            onChange={(date) => onChange2(date)}
                            dateFormat="PP"
                            />
                    </div>
                    </>
                    :null}
                    { tipo === "Existencias" ?
                        <>
                        <SelectSingleForm/> 
                        <InputSingle/>                      
                        </>
                        : null      
                        }
                        { tipo === "Ventas" || tipo === "Cajas" ?
                        <>                      
                        <SelectUsers/>
                        </>
                        : null      
                    }
                    <div className="p-1"> 
                        <button
                            className="h-7 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"> Generar
                        </button>  
                    </div>

                </form>
            </div>     


            <div className="w-3/4">
            {component}
            </div>     
        </div>
      </div>   
     );
}
 
export default ReportesView;