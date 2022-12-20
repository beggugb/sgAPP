import React, {useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import { crudActions } from '../../redux/actions/crud'
import MembresiaInfos from '../Membresias/components/MembresiaInfos'
import Recibo from './components/Recibo'
import { useReactToPrint } from 'react-to-print';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const NotasInicio = () => {
    const dispatch = useDispatch()         
    let { notaId } = useParams();    
    const cliente = useSelector(state => state.cliente.item) 
    const {item, plan, viewRecibo } = useSelector(state => state.notas)  
    const membresia  = useSelector(state => state.membresias.item)
    let user = JSON.parse(localStorage.getItem('@usuarioFitt'))
    const [recibo, setRecibo] = useState({    
      "importe" : 0,        
      "cliente" : "",
      "membresia" : "",
      "usuario" : ""
    })

    useEffect(() =>{        
      dispatch(crudActions.getNota('notasItem','membresias',notaId))      
      return () =>{            
        /*dispatch(crudActions.setReset('MEMBRESIAS_RESET'))*/
      };
    }, []);

  
    const preaprobar = (plan) => {    //xredux, payload, dato     
      let dato ={}
      dato.id = plan.id
      dato.notaId = item.id
      dato.importe = parseInt(plan.importe)
      dato.usuarioId = user.id 
      dato.cliente = cliente.nombres
      dato.membresia = membresia.Paquete.nombre
      dato.usuario = user.nombre    
      dato.vigencia = membresia.fvigencia 	

      setRecibo(dato)
      dispatch(crudActions.pagar('notasPagar','planes',dato))       
      handlePrint()          
    };
    const componentRef = useRef();
    
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,    
    });    
    return ( 
      <div className="h-2/4 flex-1 mx-auto p-2 mb-10">
         <div className="border-b-2 h-9 flex flex-row text-sm text-gray-500 font-bold">       
          <div className="w-3/5 flex">
            <Link to={`/admin/membresia/${membresia.clienteId}`}>
              <div className="h-9 w-10 text-center rounded-l-md bg-sky-400 hover:bg-sky-300 pt-2">                        
                <FontAwesomeIcon icon={faArrowLeft} color="#fff" size="xl"/>
              </div>
            </Link>
          </div>
          <div className="w-2/5 pt-1">
            <span className="pl-2 text-xs">Edición de nota - paquete: ( {membresia.Paquete.nombre || ''} )</span>
          </div>
        </div>
        
         <div className="flex flex-row">  
            <MembresiaInfos
              data={plan}
              membresia={membresia}
              preaprobar={preaprobar}
            />                                   
            <div className="w-4/6"> 
            {viewRecibo &&          
              <Recibo        
                ref={componentRef}          
                user= {user}
                recibo={recibo}
                membresia={membresia}
              /> }
            </div>     
          </div>
      </div>      
     );
}
 
export default NotasInicio;