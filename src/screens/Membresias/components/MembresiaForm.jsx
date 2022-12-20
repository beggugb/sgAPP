import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toastr} from 'react-redux-toastr'
import SelectSimple from '../../../components/Select/SelectSimple'
import{ getFecha, addM, addMM, add_months, getday} from '../../../helpers/functions'
import { crudActions } from '../../../redux/actions/crud'
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';




const MembresiaForm = () => {     

    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState(new Date());   
    const [endDate, setEndDate] = useState(new Date());
    const item = useSelector(state => state.membresias.item)
    const paquete = useSelector(state => state.paquetes.item)  
    const cliente = useSelector(state => state.cliente.item) 
    let us = JSON.parse(localStorage.getItem('@usuarioFitt'))
     
    const submitHandle = event => {  
    event.preventDefault()    
    let dat = item
    dat.orden = '1'
    dat.num = 1
    dat.ingresos = parseInt(paquete.valor)
    dat.intros = 30
    /*dat.ivigencia = getFecha(startDate)
    dat.fvigencia = paquete.diario ? getFecha(startDate) : paquete.meses === '0.5' ? addM(startDate,15)  :  getFecha(endDate)*/
    dat.clienteId = cliente.id     
    dat.usuarioId = us.id
   
  
    if(dat.paqueteId){
        dispatch(crudActions.postList('membresiasData','membresias',item))  
        dispatch({ type: 'resetMembresia' }); 
        dispatch({ type: 'paqueteReset' });             
    }else{
        toastr.error('Error', 'debe seleccionar paquete') 
    }
    
 }

 const handleChange = (e) =>{
    /*console.log(e)*/
    dispatch({type:'membresiasChange',props:'ivigencia',value:e})  
 }
 const handleChanges = (e) =>{
    /*console.log(e)*/
    dispatch({type:'membresiasChange',props:'fvigencia',value:e})  
 }

 return (  
        <div className="w-full border rounded-md text-xs text-gray-500 m-1">                
           <form onSubmit={ submitHandle} >
                <div className="flex flex-row">                    
                    <div className="w-1/4 p-1">
                       <SelectSimple/>                      
                    </div>                  
                    <div className="w-1/4 p-1">                    
                        <label htmlFor='ivigencia' className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                            Ivigencia
                        </label>
                        <input 
                            className="h-8 border-gray-400 block w-full bg-grey-lighter text-gray-500 text-xs rounded px-2 text-center" 
                            id="ivigencia" 
                            name="ivigencia"
                            type="date" 
                            value={item.ivigencia}
                            onChange={(e) => handleChange(e.target.value)}
                            required={true}                                             
                        />
                                   
                    </div>
                    <div className="w-1/4 p-1">
                        <label htmlFor='fvigencia'>Fecha vigencia :</label>                    
                        <input 
                            className="h-8 border-gray-400 block w-full bg-grey-lighter text-gray-500 text-xs rounded px-2 text-center" 
                            id="fvigencia" 
                            name="fvigencia"
                            type="date" 
                            value={item.fvigencia}
                            onChange={(e) => handleChanges(e.target.value)}
                            required={true}                         
                        />
                         
                    </div>
                    <div className="w-1/4 pt-5">
                        <button
                            className="h-9 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"> Registrar
                        </button> 
                    </div>
                </div>          
             </form>
        </div>    
        
     );
}
 
export default MembresiaForm;