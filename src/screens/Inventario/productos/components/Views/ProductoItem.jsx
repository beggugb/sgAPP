import React,{useEffect, useRef} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux'
import { useReactToPrint } from 'react-to-print';
import Moment from 'react-moment';
import {api} from '../../../../../helpers/api'
import { nombreEmpresa } from '../../../../../helpers/data'
import QRCode from "qrcode.react";
import Barcode from "react-barcode"
const ComponentToPrint = React.forwardRef((props,ref)=>{    
    const fechaHoy = new Date();
    return ( 
        <div ref={ref}>
        <div className="p-3 flex flex-row justify-center text-xs">     
          <div className="h-650 w-full">     

            <div className="h-26 text-center">
                <div className="h-7 flex flex-row">
                    <h5 className="w-1/2 text-left p-1 font-bold text-sm">{nombreEmpresa}</h5>                      
                </div> 

                <div className="w-full text-center">
                    <p className="pr-2 text-right text-[10px] italic">Fecha emisión : <Moment format="DD/MM/YYYY - HH:mm">{ fechaHoy }</Moment></p>  
                    <p className="pr-2 text-right text-[10px] italic">Usuario : {props.usuario.nombre}</p>  
                </div>

                <h6 className="text-sm font-bold mt-2">PRODUCTO Nº {props.item.id}</h6>           
            </div>

           <div className="grid grid-cols-2 gap-2 mt-4">        
            <div>        
                <div className="p-1 flex flex-row justify-center">
                    <p className="w-1/3 font-bold">Nombres :</p> <p className="pl-3 w-3/5">{ props.item.nombre}</p>                                                                  
                </div>

                <div className="p-1 flex flex-row justify-center">                    
                    <p className="w-1/3 font-bold">Código :</p> <p className="pl-3 w-3/5">{ props.item.codigo}</p>                                                    
                </div>

                <div className="p-1 flex flex-row justify-center">                    
                    <p className="w-1/3 font-bold">Marca :</p> <p className="pl-3 w-3/5">{ props.item.marca.nombre || ''}</p>                                                    
                </div>


                <div className="p-1 flex flex-row justify-center">
                    <p className="w-1/3 font-bold">Categoría :</p> <p className="pl-3 w-3/5">{ props.item.categoria.nombre || ''}</p>                                                                  
                </div>

                <div className="p-1 flex flex-row justify-center">                    
                    <p className="w-1/3 font-bold">Origen :</p> <p className="pl-3 w-3/5">{ props.item.origen.nombre}</p>                                                    
                </div>

                <div className="p-1 flex flex-row justify-center">
                    <p className="w-1/3 font-bold">Modelo :</p> <p className="pl-3 w-3/5">{ props.item.modelo.nombre}</p>                                                                  
                </div>

                <div className="p-1 flex flex-row justify-center">
                    <p className="w-1/3 font-bold">Unidad :</p> <p className="pl-3 w-3/5">{ props.item.unidad.nombre}</p>                                              
                    
                </div>

                <div className="p-1 flex flex-row justify-center">                    
                    <p className="w-1/3 font-bold">Industria :</p> <p className="pl-3 w-3/5">{ props.item.industria.nombre}</p>                                                    
                </div>

                <div className="p-1 flex flex-row justify-center">
                    <p className="w-1/3 font-bold">Tipo :</p> <p className="pl-3 w-3/5">{ props.item.tipos.nombre}</p>                                                                  
                </div>

                <div className="p-1 flex flex-row justify-center">                    
                    <p className="w-1/3 font-bold">Volumen :</p> <p className="pl-3 w-3/5">{ props.item.volumen.nombre}</p>                                                    
                </div>

                <div className="p-1 flex flex-row justify-center">
                    <p className="w-1/3 font-bold">Precio Venta :</p> 
                    <p className="pl-3 w-3/5">{new Intl.NumberFormat('es-BO',{style: "currency",currency:'BOB',minimumFractionDigits: 2}).format(props.item.precioVenta)}</p>                                                                  
                </div>
                <div className="p-1 flex flex-row justify-center">                    
                    <p className="w-1/3 font-bold">Precio Costo :</p> 
                    <p className="pl-3 w-3/5">{new Intl.NumberFormat('es-BO',{style: "currency",currency:'BOB',minimumFractionDigits: 2}).format(props.item.precioCosto)}</p>                                                    
                </div>


                <div className="p-1 flex flex-row justify-center">
                    <p className="w-1/3 font-bold">Descripción :</p> 
                    <p className="pl-3  w-3/5 text-left">{props.item.nombreCorto}</p>                                                                  
                </div>  

                   
            </div>
            <div >        
                <div className="space-y-1 text-center border border-gray-300 p-1 rounded-lg">
                <img
                    alt="producto"
                    className="h-64"
                    /*src={api + `${api}/static/images/${payloads}/lg/` + item.filename}*/
                    src={`${api}/static/images/productos/lg/` + props.item.filename}
                    />       
                </div>
                <div className="h-32">
                  <div className="border border-gray-200 justify-center flex pt-4 m-2 rounded-md">
                  <Barcode value={props.item.codigo} width={1.5} height={43} fontSize={14} />
                  </div>
                  <div className="border border-gray-200 justify-center flex pt-2 m-2 rounded-md">
                  <QRCode value={props.item.codigo} style={{ width: 70, height: 70, padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>
                  </div>
            </div> 
            </div>

            </div>  

                </div>                 
            </div>
        </div>
        
     );
})

const ProductoItem = ({setShowModal}) => {    
    const dispatch = useDispatch()
    const componentRef = useRef();   
    const { item }= useSelector(state => state.producto)    
    let user = JSON.parse(localStorage.getItem('@usuarioFitt'))


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    
     useEffect(() =>{        
         return () =>{            
            dispatch({type:'productoReset'})
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
                    className="w-20 h-7 bg-red-500 rounded-md m-1 text-xs text-white">Imprimir</button>                           
                    
                    <button 
                        onClick={() => setShowModal(false)}
                        className="w-7 h-7 bg-red-500 rounded-full text-xs text-white mt-1 mr-4">
                        <FontAwesomeIcon icon={faTimes} color="#fff" />
                    </button>
                    </div>
                    <ComponentToPrint
                        ref={componentRef}       
                        item={item} 
                        usuario={user}
                    />                    
              </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
         )
    }
 
export default ProductoItem;