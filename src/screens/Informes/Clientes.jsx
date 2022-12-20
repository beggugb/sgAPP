import React,{useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useReactToPrint } from 'react-to-print';
import Moment from 'react-moment';
import { Bars } from 'react-loader-spinner'
import { nombreEmpresa } from '../../helpers/data'

const ComponentToPrint = React.forwardRef((props,ref)=>{    
    const fechaHoy = new Date();
    return ( 
        <div ref={ref} >
        <div className="p-3 flex flex-row justify-center text-xs">     
          <div className="w-full">     
            <div className="h-26 text-center">

                <div className="h-7 flex flex-row">
                       <h5 className="w-1/2 text-left p-1 font-bold text-sm">{nombreEmpresa}</h5>                         
                </div>

                <div className="w-full text-center">
                    <p className="pr-2 text-right text-[10px] italic">Fecha emisión : <Moment format="DD/MM/YYYY - HH:mm">{ fechaHoy }</Moment></p>  
                    <p className="pr-2 text-right text-[10px] italic">Usuario : {props.puser.nombre}</p>  
                </div>
                                   
                <h6 className="text-sm mt-2 font-bold">INFORME DE CLIENTE REGISTRADOS</h6>
                <h6 className="text-center" >
                    ( <Moment format="DD/MM/YYYY">{props.pdesde}</Moment> ) - 
                    ( <Moment format="DD/MM/YYYY">{props.phasta}</Moment> )
                </h6>       
                <h6 className="ml-3" >Total: { props.pdetalle }</h6>    
            </div>

            <div className="border-1 border-gray-300 p-1 rounded-md m-1">                                
                <table className="border-collapse w-full text-xs flex-1">
                <thead>
                    <tr>                                        
                    <th className="w-1/12 border border-slate-300 bg-gray-200">Fecha</th>                    
                    <th className="w-1/12 border border-slate-300 bg-gray-200">Código</th>
                    <th className="w-6/12 border border-slate-300 bg-gray-200">Nombre</th>
                    <th className="w-2/12 border border-slate-300 bg-gray-200">CI</th>
                    <th className="w-2/12 border border-slate-300 bg-gray-200">Teléfono</th>                    
                    </tr>
                </thead>
                <tbody>
                    { props.pdata && (
                        props.pdata.map(item =>(
                            <tr key={item.id} className="hover:bg-gray-100 h-5">
                                <td className="border pl-1"><Moment format="DD/MM/YYYY">{item.createdAt}</Moment></td>                                
                                <td className="border pl-1">{item.id}</td>                                  
                                <td className="border pl-1">{item.nombres}</td>
                                <td className="border pl-1">{item.ci}</td>
                                <td className="border pl-1">{item.telefono}</td>
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
     );
    }
)

const Clientes = () => {    
    const dispatch = useDispatch()
    const componentRef = useRef();   
    const {detalle, clientes, desde, hasta } = useSelector(state => state.informes)
    const {loading }= useSelector(state => state.usuario) 
    let user = JSON.parse(localStorage.getItem('@usuarioFitt'))
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    
     useEffect(() =>{        
         return () =>{                       
           dispatch({type:'INFORMES_RESET'})  
        };
      }, []);

    return(
        <div className="h-550 overflow-y-scroll">
           <div className="h-full w-auto mx-auto max-w-3xl flex-row justify-between ">
                <div className="h-11 flex flex-row p-1 ">                    
                    <div className="w-2/5">
                            <button 
                            onClick={handlePrint}
                            className="w-20 h-7 bg-red-500 rounded-md m-1 text-xs text-white">Imprimir</button>                                                                   
                    </div>
                    <div className="w-2/4 text-center justify-center">                            
                            <Bars
                            height="40"
                            width="80"
                            color="#bae6fd"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={loading}
                            />                            
                    </div>                    
                </div>
                <ComponentToPrint
                  ref={componentRef}          
                  puser={user}
                  pdetalle={detalle}
                  pdata={clientes.data}
                  pdesde={desde}
                  phasta={hasta}
                />

           </div>             
        </div>
         )
    }



 
export default Clientes;