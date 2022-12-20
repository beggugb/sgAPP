import React,{useEffect, useRef} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux'
import { useReactToPrint } from 'react-to-print';
import { nombreEmpresa } from '../../../helpers/data'
import Moment from 'react-moment';

const ComponentToPrint = React.forwardRef((props,ref)=>{    
    const fechaHoy = new Date();
    return ( 
        <div ref={ref}>
        <div className="p-1 flex flex-row">
            <div className="w-full p-2 justify-center items-center flex"> 
                <div className="w-full text-[10px]">     
                    
                    <div className="h-7 flex flex-row">
                       <h5 className="w-1/2 text-left p-1 font-bold text-sm">{nombreEmpresa}</h5>                         
                    </div>

                    <div class="w-full text-center">
                    <p className="pr-2 text-right text-[10px] italic">Fecha emisión : <Moment format="DD/MM/YYYY - HH:mm">{ fechaHoy }</Moment></p>  
                    <p className="pr-2 text-right text-[10px] italic">Usuario : {props.puser.nombre}</p>  
                </div>



                    <div className="h-16 text-center mt-5">
                        <h6 className="text-sm font-bold">Resumen Caja</h6>
                        <h6 className="text-sm font-bold">Fecha Caja : <Moment format="DD/MM/YYYY">{ props.pcaja.createdAt }</Moment></h6>
                        <h6 className="text-sm font-bold">Fecha Emisión : <Moment format="DD/MM/YYYY">{ fechaHoy }</Moment></h6>
                    </div>

                <div className="p-2">
                    <div className="p-1 flex flex-row justify-center border-b">
                        <p className="w-2/12 font-bold">Nro:</p>                    
                        <p className="w-4/12 ">{props.pcaja.id}</p>

                        <p className="w-2/12 font-bold">Usuario:</p>                    
                        <p className="w-4/12 ">{props.puser.nombre}</p>
                    </div>

                    <div className="p-1 flex flex-row justify-center border-b">
                        <p className="w-2/12 font-bold">Inicial:</p>                    
                        <p className="w-4/12 ">
                        {new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(props.pcaja.montoInicial)}
                        </p>

                        <p className="w-2/12 font-bold">Ingresos:</p>                    
                        <p className="w-4/12 ">
                        {new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(props.pcaja.montoIngreso)}
                        </p>
                    </div>

                    <div className="p-1 flex flex-row justify-center border-b">
                        <p className="w-2/12 font-bold">Egresos:</p>                    
                        <p className="w-4/12 ">
                        {new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(props.pcaja.montoEgreso)}
                        </p>

                        <p className="w-2/12 font-bold">Total:</p>                    
                        <p className="w-4/12 ">
                        {new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(props.pcaja.montoFinal)}
                        </p>
                    </div>
                </div>    

                <div className="p-2 m-2">   

                <table className="w-full text-[10px]">
                    <thead>
                        <tr>                    
                        <th className="w-1/12 border border-slate-300 bg-gray-200">#</th>
                        <th className="w-2/12 border border-slate-300 bg-gray-200">Fecha/Hora</th>                                            
                        <th className="w-3/12 border border-slate-300 bg-gray-200">Detalle</th>
                        <th className="w-1/12 border border-slate-300 bg-gray-200">Tipo</th>
                        <th className="w-2/12 border border-slate-300 bg-gray-200">Monto</th>
                        <th className="w-2/12 border border-slate-300 bg-gray-200">Membresia</th>
                        <th className="w-1/12 border border-slate-300 bg-gray-200">Vigencia</th>                    
                        </tr>
                    </thead>
                    <tbody>
                        { props.data && (
                            props.data.map(item =>(
                                <tr key={item.id} className="hover:bg-gray-100 h-8">
                                    <td className="border pl-1">{item.id}</td>  
                                    <td className="border pl-1"><Moment format="DD/MM/YYYY">{item.registro}</Moment> - {item.hora}</td>                                    
                                    <td className="border pl-1">{item.label}</td>    
                                    <td className="border pl-1">{item.tipo}</td>    
                                    <td className="border pl-1">{new Intl.NumberFormat('de-DE',{style: "currency",currency:"BOB"}).format(item.monto)}</td>
                                    <td className="border pl-1">{item.membresia}</td>
                                    <td className="border pl-1">{item.vigencia}</td>
                                </tr>
                            ))
                        )
                        }                    
                        
                    </tbody>
                </table>
                </div> 

                </div>                 
            </div>
        </div>
        </div>
     );
})

const CajaView = ({setShowModal }) => {    
    const dispatch = useDispatch()
    const componentRef = useRef();   
    const { item }= useSelector(state => state.cajas)
    const citems = useSelector(state => state.cajasitems.data)
    let user = JSON.parse(localStorage.getItem('@usuarioFitt'))

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    
     useEffect(() =>{        
         return () =>{            
            dispatch({type:'CAJAS_ITEMS_RESET'})
            dispatch({type:'RESET_CAJA'})
        };
      }, []);
    return(
        <>
        <div className="justify-center items-center flex-1 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl flex-row justify-between">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex flex-row justify-between">                    
                    <button 
                    onClick={handlePrint}
                    className="w-20 h-7 bg-red-500 rounded-md m-1 text-[10px] text-white">Imprimir</button>                           
                    
                    <button 
                        onClick={() => setShowModal(false)}
                        className="w-7 h-7 bg-red-500 rounded-full text-[10px] text-white mt-1 mr-4">
                        <FontAwesomeIcon icon={faTimes} color="#fff" />
                    </button>
                    </div>
                    <ComponentToPrint
                        ref={componentRef}          
                        puser={user}
                        pcaja={item}
                        data={citems}
                    />                    
              </div>
            </div>
        </div>
        <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
         )
    }
 
export default CajaView;