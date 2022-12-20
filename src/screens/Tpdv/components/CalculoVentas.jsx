import React,{ useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { api } from '../../../helpers/api'
import { inventarioActions } from '../../../redux/actions/inventario'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const CalculoVentas = ({setShowModal}) => {    
    const dispatch = useDispatch()        
    const { items, item, categoriaId } = useSelector(state => state.venta) 

    const borrar = () => {  
        let ites = []
        let cTotal = 0        
        let gTotal = 0
        dispatch({type:'ventasSetItems',values:ites, cantidad: cTotal, value: gTotal})  

        let iok = {
            categoriaId: categoriaId,
            value: ""
          }   
        dispatch(inventarioActions.items('productosItems','stock',iok))
        
    } 

    return ( 
        <div className="h-16 p-1 grid grid-cols-4 gap-1">            
            <button 
                onClick={()=>borrar()}
                className="bg-red-500 rounded-lg">
                <FontAwesomeIcon icon={faTrash} size="xl" color="#eaeaea"/>
            </button>
            <button className="bg-sky-500 rounded-lg">
                <FontAwesomeIcon icon={faEdit} size="xl" color="#eaeaea" />
            </button>
            <button 
                onClick={() => setShowModal(true)}
                className="col-span-2 bg-green-600 rounded-lg">
                <FontAwesomeIcon icon={faMoneyBill} size="xl" color="#eaeaea"/>
            </button>                        
        </div>     
     );
}
 
export default CalculoVentas;



