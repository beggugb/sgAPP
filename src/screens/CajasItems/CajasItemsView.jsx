import React, { useEffect } from 'react';
import {  useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import { cajaActions } from '../../redux/actions/caja'
import CajasItemsTable from './components/CajasItemsTable'
import CajaDetalle from '../Cajas/components/CajaDetalle'
import CajasItemsForm from './components/CajasItemsForm'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

function CajasItemsView({...props}) {     
  const dispatch = useDispatch()  
  let { cajaId } = useParams();   
  
  useEffect(() =>{            
    dispatch(cajaActions.getItemo('CAJAS_ITEMS_DATA','cajas',cajaId))     
    return () =>{            
      dispatch({type:'resetMembresia'}) 
      dispatch({type:'clientesResetItem'}) 
    };
  }, []);

  return (
    <div className="h-550 p-2 border">
    <div className="border-b h-8 flex flex-row text-sm text-gray-500 font-bold">       
      <div className="w-3/5 flex">
        <Link to={"/admin/cajas"}>
          <div className="h-8 w-10 text-center rounded-l-md bg-sky-400 hover:bg-sky-300 pt-1">                        
            <FontAwesomeIcon icon={faArrowLeft} color="#fff" size="lg"/>
          </div>
        </Link>
      </div>
      <div className="w-2/5 pt-1">
        <span className="pl-2 text-xs"></span>
      </div>
    </div>
     <div className="flex flex-row">            
        <CajaDetalle/>
        <div className="w-9/12">    
        <CajasItemsForm/>
        <CajasItemsTable/>   
        </div>     
      </div>
  </div>     
 );  
}

export default CajasItemsView