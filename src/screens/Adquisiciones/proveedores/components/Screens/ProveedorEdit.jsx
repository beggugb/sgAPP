import React,{ useState, useEffect} from "react";
import FormProveedor from "../Forms/FormProveedor";
import ProveedorImagen from '../../../../../components/Imagen/FormImagen'
import Mapas from "./ProveedorMapa";
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { inventarioActions }  from '../../../../../redux/actions/inventario'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ProveedorEdit = () =>{
    const dispatch = useDispatch()  
    const { item, indicador } = useSelector(state => state.proveedor)   
   
   useEffect(() => {    
    return () => {
        dispatch({type:'proveedorReset'}) 
    };
   }, []);
  
    return(
      <div className="justify-center items-center flex-1">      
        <div className="border-b h-8 flex flex-row pt-1 pl-2 text-sm text-gray-500 font-bold">       
          <Link to={"/admin/adquisiciones/proveedores/list"}>
          <div className="h-5 w-10 text-center rounded-l-md bg-sky-400 hover:bg-sky-300 mr-1">                        
            <FontAwesomeIcon icon={faArrowLeft} color="#fff" size="sm"/> 
          </div>
          </Link>
        </div>

        <div className="flex flex-row">
          <div className="w-2/3 p-1 border">
            <FormProveedor />
              <div className="h-40 flex-row flex">
                <Mapas 
                item={item}
                />
              </div> 
          </div>
          <div className="w-1/3 p-1">
              <ProveedorImagen 
                item={item}
                payload={'proveedor'}
                payloads={'proveedores'}
              />              
          </div>
        </div> 
    </div>
    )
}

export default ProveedorEdit