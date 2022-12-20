import React,{ useEffect} from "react";
import FormProducto from "../Forms/FormProducto";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import FormImagen from '../../../../../components/Imagen/FormImagen'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

import QRCode from "qrcode.react";
import Barcode from "react-barcode"
const ProductoEdit = () =>{
    const dispatch = useDispatch() 
    const { item } = useSelector(state => state.producto)    
   useEffect(() => {    
    return () => {
        dispatch({type:'productoReset'}) 
    };
   }, []);
  
    return(
        <div className="justify-center items-center flex-1">
          <div className="border-b-2 h-8 flex flex-row pt-1 pl-2 text-sm text-gray-500 font-bold">       
            <Link to={"/admin/inventario/productos/list"}>
            <div className="h-5 w-10 text-center rounded-l-md bg-sky-400 hover:bg-sky-300 mr-1">                        
              <FontAwesomeIcon icon={faArrowLeft} color="#fff" size="sm"/> 
            </div>
            </Link>
              <span className="pl-2 text-xs">Edición de producto</span>
          </div>

          <div className="flex flex-row">                   
            <div className="w-2/3 border-2 border-gray-200 rounded-md p-1">              
                <FormProducto/>
            </div>                        
            <div className="w-1/3 border-2 border-gray-200 rounded-md p-1">
                <FormImagen
                  item={item}
                  payload={'producto'}
                  payloads={'productos'}
                />  
                <div className="flex-row flex">
                  <div className="w-3/5 border-2 border-gray-300 justify-center flex pt-4 m-2 rounded-md">
                  <Barcode value={item.codigo} width={1.5} height={43} fontSize={14} />
                  </div>
                  <div className="w-2/5 border-2 border-gray-300 justify-center flex pt-2 m-2 rounded-md">
                  <QRCode value={item.codigo} style={{ width: 90, height: 90, padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>
                  </div>
                </div>               
            </div>    
          </div>        
      </div> 
    )
}

export default ProductoEdit