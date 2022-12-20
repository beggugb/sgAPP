import React,{useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useReactToPrint } from 'react-to-print';
import { Bars } from 'react-loader-spinner'
import Moment from 'react-moment';
import { nombreEmpresa } from '../../helpers/data'

const ComponentToPrint = React.forwardRef((props,ref)=>{    
    const fechaHoy = new Date();
    return ( 
        <div ref={ref}>
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

                <h6 className="text-sm font-bold mt-2">INFORME REGISTROS</h6>
                <h6 className="text-center" >
                    ( <Moment format="DD/MM/YYYY">{props.pdesde}</Moment> ) - 
                    ( <Moment format="DD/MM/YYYY">{props.phasta}</Moment> )
                </h6>                       
            </div>

            <div className="border-1 border-gray-300 p-1 rounded-md m-1">                                
                <table className="border-collapse table-fixed text-xs flex-1">
                <thead>
                    <tr>                                                                              
                    <th className="w-10 border border-slate-300 bg-gray-200">#</th>
                    <th className="w-1/6 border border-slate-300 bg-gray-200">Fecha</th>
                    <th className="w-4/6 border border-slate-300 bg-gray-200">Nombre</th>
                    <th className="w-1/6 border border-slate-300 bg-gray-200">Hora</th>                    
                    </tr>
                </thead>
                <tbody>
                    { props.pdata && (
                        props.pdata.map((item,index) =>(
                            <tr key={index} className="hover:bg-gray-100 h-5"> 
                                <td className="border pl-1">{index +1}</td>      
                                <td className="border pl-1"><Moment format="DD/MM/YYYY">{item.registro}</Moment></td>                           
                                <td className="border pl-1">{item.Cliente.nombres}</td>
                                <td className="border pl-1"><Moment format="HH:mm:ss">{item.createdAt}</Moment></td>                                                                                                         
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

const Registro = () => {    
    const dispatch = useDispatch()
    const componentRef = useRef();   
    const {detalle, registros, desde, hasta,total } = useSelector(state => state.informes)
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
                            color="#4fa94d"
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
                        pdetalle={total}
                        pdata={registros.data}
                        pdesde={desde}
                        phasta={hasta}
                    />                    
              </div>
            </div>
      
         )
    }



 
export default Registro;