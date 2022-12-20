import React,{useEffect, useRef} from "react";
import { useSelector, useDispatch} from 'react-redux'
import { useReactToPrint } from 'react-to-print';
import { nombreEmpresa } from '../../../../../helpers/data'
import Moment from 'react-moment'
import 'moment/locale/es-mx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ComponentToPrint = React.forwardRef((props,ref)=>{    
    const fechaHoy = new Date()        
    return(
    <div ref={ref}>
      <div className="p-3 flex flex-row justify-center text-[10px]">     
          <div className="w-full">     

            <div className="h-26 text-center">
                <div className="h-7 flex flex-row">
                    <h5 className="w-1/2 text-left p-1 font-bold text-[10px]">{nombreEmpresa}</h5>                      
                </div> 

                <div className="w-full text-center">
                    <p className="pr-2 text-right text-[10px] italic">Fecha emisión : <Moment format="DD/MM/YYYY - HH:mm">{ fechaHoy }</Moment></p>  
                    <p className="pr-2 text-right text-[10px] italic">Usuario : {props.puser.nombre}</p>  
                </div>

                <h6 className="text-[10px] font-bold mt-4">RESUMEN DE COMPRAS</h6>
                <h6 className="text-center" >
                    ( <Moment format="DD/MM/YYYY">{props.pdesde}</Moment> ) - 
                    ( <Moment format="DD/MM/YYYY">{props.phasta}</Moment> )
                </h6>       
                 
            </div>
                   
                   
                   <h6 className="text-[10px] p-1 font-bold">Detalle</h6>
                   <div className="border rounded">

                    <div className="text-center mt-1 grid grid-cols-3 gap-1 ">
                            <div >
                                <div className="flex flex-row text-left">
                                    <p className="pl-1 w-1/3 font-bold">Código :</p> 
                                    <p className="pl-1 w-3/5 border-b">{ props.item.codigo}</p>                                                                  
                                </div>    
                            </div>

                            <div>
                                <div className="flex flex-row text-left">
                                    <p className="pl-1 w-1/3 font-bold">Fecha :</p> 
                                    <p className="pl-1 w-3/5 border-b"><Moment format="DD-MM-YYYY">{props.item.fechaCompra}</Moment></p>                                                                  
                                </div>    
                            </div>

                            <div >
                                <div className="flex flex-row text-left">
                                    <p className="pl-1 w-1/3 font-bold">Estado :</p> 
                                    <p className="pl-1 w-3/5 border-b">{props.item.estado}</p>                                                                  
                                </div>      
                            </div>
                    </div>
                    <div className="text-center mt-1 grid grid-cols-3 gap-1">
                            <div >
                                <div className="flex flex-row text-left">
                                    <p className="pl-1 w-1/3 font-bold">Tipo :</p> 
                                    <p className="pl-1 w-3/5 border-b">{ props.item.tipo}</p>                                                                  
                                </div>    
                            </div>
                            <div>
                                <div className="flex flex-row text-left">
                                    <p className="pl-1 w-1/3 font-bold">NºItems :</p> 
                                    <p className="pl-1 w-3/5 border-b">{ props.item.nroItems}</p>                                    
                                </div>    
                            </div>

                            <div>
                                <div className="flex flex-row text-left">
                                    <p className="pl-1 w-1/3 font-bold">Total :</p> 
                                    <p className="pl-1 w-3/5 border-b">
                                        {new Intl.NumberFormat('es-BO',{style: "currency",currency:"BOB",minimumFractionDigits: 2}).format(props.item.totalGeneral)}
                                    </p>                                                                  
                                </div>      
                            </div>

                          
                    </div>
                    <div className="text-center mt-1 grid grid-cols-3 gap-1">
                            <div className="col-span-2">
                                <div className="flex flex-row text-left">
                                    <p className="pl-1 w-1/5 font-bold">Proveedor :</p> 
                                    <p className="pl-1 w-4/5 border-b">{ props.item.proveedor.razonSocial}</p>                                                                  
                                </div>    
                            </div>
                            <div>
                                <div className="flex flex-row text-left">
                                    <p className="pl-1 w-1/3 font-bold">Tipo :</p> 
                                    <p className="pl-1 w-3/5 border-b">{ props.item.tipo}</p>                                                                  
                                </div>    
                            </div>
                           
                    </div>
                    <div className="text-center mt-1 grid grid-cols-3 gap-1">
                            <div className="col-span-2">
                                <div className="flex flex-row text-left">
                                    <p className="pl-1 w-1/5 font-bold">Sucursal :</p> 
                                    <p className="pl-1 w-4/5 border-b">{props.item.sucursal.nombre}</p>                                                                  
                                </div>      
                            </div>

                            <div>
                                <div className="flex flex-row text-left">
                                    <p className="pl-1 w-1/3 font-bold">Usuario :</p> 
                                    <p className="pl-1 w-3/5 ">{ props.item.usuario.nombre}</p>                                    
                                </div>    
                            </div>
                           
                    </div>
                    <div className="text-center mt-1 grid grid-cols-1 gap-1">
                            <div className="col-span-2">
                                <div className="flex flex-row text-left">
                                    <p className="pl-1 w-1/5 font-bold">Detalle :</p> 
                                    <p className="pl-1 w-4/5">{props.item.observaciones}</p>                                                                  
                                </div>      
                            </div>                           
                    </div>
                   </div>

                   <h6 className="text-[10px] p-1 font-bold mt-3">Items</h6>
                    <div className="flex-1 mx-auto border min-h-max border-gray-200 p-1 mt-2 rounded-t-md">
                            <table className="border-collapse table-fixed text-[10px]">             
                                <thead>
                                    <tr>                                                                             
                                        <th className="w-1/6 border border-slate-300 bg-gray-200">Código</th>
                                        <th className="w-1/5 border border-slate-300 bg-gray-200">Marca</th>                    
                                        <th className="w-1/3 border border-slate-300 bg-gray-200">Nombre</th>                    
                                        <th className="w-1/6 border border-slate-300 bg-gray-200">Cantidad</th>
                                        <th className="w-1/6 border border-slate-300 bg-gray-200">Precio</th>
                                        <th className="w-1/6 border border-slate-300 bg-gray-200">SubTotal</th>
                                    </tr>
                                </thead>
                                {props.items && 
                                <tbody>
                                    { props.items.map((it,index) =>(
                                    <tr key={index}>                                                          
                                        <td td className="border pl-1">{it.codigo}</td>                    
                                        <td td className="border pl-1">{it.marca}</td>
                                        <td td className="border pl-1">{it.nombre}</td>
                                        <td td className="border pl-1">{it.cantidad} / {it.unidad}</td>
                                        <td td className="border pl-1">
                                        {new Intl.NumberFormat('es-BO',{style: "currency",currency:"BOB",minimumFractionDigits: 2}).format(it.valor)} 
                                        </td>
                                        <td td className="border pl-1">
                                        {new Intl.NumberFormat('es-BO',{style: "currency",currency:"BOB",minimumFractionDigits: 2}).format(it.subTotal)}  
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>}           
                            </table> 
                    </div>  

                    <h6 className="text-[10px] p-1 font-bold">Información Financiera</h6>
                   <div className="h-32 text-center mt-1 text-[10px] flex flex-row">
                        
                        <div className="border w-2/5">
                            <div className="flex flex-row text-left">
                                <p className="pl-1 w-1/3 font-bold">Nro:</p> 
                                <p className="pl-1 w-3/5 border-b">{ props.nota.id}</p>                                                                  
                            </div>                                
                            <div className="flex flex-row text-left">
                                <p className="pl-1 w-1/3 font-bold">Vencimiento:</p> 
                                <p className="pl-1 w-3/5 border-b">{ props.nota.fechaVencimiento}</p>                                                                  
                            </div>
                            <div className="flex flex-row text-left">
                                <p className="pl-1 w-1/3 font-bold">N. Cuotas:</p> 
                                <p className="pl-1 w-3/5 border-b">{ props.nota.cuotas}</p>                                                                  
                            </div>
                            <div className="flex flex-row text-left">
                                <p className="pl-1 w-1/3 font-bold">Tipo:</p> 
                                <p className="pl-1 w-3/5 border-b">{ props.nota.tipo}</p>                                                                  
                            </div>
                            <div className="flex flex-row text-left">
                                <p className="pl-1 w-1/3 font-bold">Monto Total:</p> 
                                <p className="pl-1 w-3/5 border-b">
                                {new Intl.NumberFormat('es-BO',{style: "currency",currency:"BOB",minimumFractionDigits: 2}).format(props.nota.monto)}
                                </p>
                            </div>
                        </div>

                        <div className="border w-3/5 ml-1">                        
                            <div className="flex-1 mx-auto border min-h-max border-gray-200 p-1 mt-2 rounded-t-md">
                                    <table className="border-collapse table-fixed text-[11px]">             
                                        <thead>
                                            <tr>                                                                             
                                                <th className="w-1/6 border border-slate-300 bg-gray-200">Cuota</th>
                                                <th className="w-1/5 border border-slate-300 bg-gray-200">Monto</th>                    
                                                <th className="w-1/3 border border-slate-300 bg-gray-200">F.Pago</th>                    
                                                <th className="w-1/6 border border-slate-300 bg-gray-200">Estado</th>
                                                <th className="w-1/6 border border-slate-300 bg-gray-200">F.Pago</th>                                                
                                            </tr>
                                        </thead>
                                        {props.plan && 
                                        <tbody>
                                            { props.plan.map((it,index) =>(
                                            <tr key={index}>                                                          
                                                <td td className="border pl-1">{it.cuota}</td>                    
                                                <td td className="border pl-1">
                                                {new Intl.NumberFormat('es-BO',{style: "currency",currency:"BOB",minimumFractionDigits: 2}).format(it.importe)}
                                                </td>
                                                <td td className="border pl-1">{it.fechaPago}</td>
                                                <td td className="border pl-1">{it.estado}</td>
                                                <td td className="border pl-1">{it.fechaPagado ? it.fechaPagado : "sin pago"}</td>
                                            </tr>
                                            ))}
                                        </tbody>}           
                                    </table> 
                            </div>  
                        </div>

                   </div>

                </div>
            </div>       
       </div>    
    )
})


const CompraView = ({setShowModal}) =>{
    const dispatch = useDispatch()
    const { nota, plan,  item, items  } = useSelector(state => state.compra)
    let user = JSON.parse(localStorage.getItem('@usuarioFitt')) 
    const componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

    useEffect(() => {        
        return () => {
            dispatch({type:'compraReset'})
        };
    }, []);

    return(
        <>
        <div className="justify-center items-center flex-1 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-3 mx-auto max-w-xl flex-row justify-between">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex flex-row justify-between">                    
                    <button 
                    onClick={handlePrint}
                    className="w-20 h-7 bg-red-500 rounded-md m-1  text-white">Imprimir</button>                           
                    
                    <button 
                        onClick={() => setShowModal(false)}
                        className="w-7 h-7 bg-red-500 rounded-full  text-white mt-1 mr-4">
                        <FontAwesomeIcon icon={faTimes} color="#fff" />
                    </button>
                    </div>
                    <ComponentToPrint
                        ref={componentRef}       
                        item={item} 
                        items={items}
                        nota={nota}
                        plan={plan}
                        puser={user} 
                    />                    
              </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )

}

export default CompraView