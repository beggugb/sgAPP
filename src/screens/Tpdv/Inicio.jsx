import React,{ useState, useRef} from 'react'
import ListaCategorias from './components/ListaCategorias'
import ListaProductos from './components/ListaProductos'
import ListaVentas from './components/ListaVentas'
import CalculoVentas from './components/CalculoVentas'
import DetalleVentas from './components/DetalleVentas'
import FormVenta from './components/FormVenta'
import { useReactToPrint } from 'react-to-print';

import { useSelector, useDispatch} from 'react-redux'
const Inicio = () => {    
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()        
    const { items, item } = useSelector(state => state.venta) 
   
    return ( 
        <div className="h-550 p-1 border border-stone-200 flex">
            <div className="w-3/12 p-1 border">
             <DetalleVentas
                item={item}/>
                <ListaVentas/>
                <CalculoVentas
                setShowModal={setShowModal}
                />
            </div>
            <div className="w-7/12 p-1 border flex">
                <ListaProductos/>
            </div>
            <div className="w-2/12 p-1 border">
                <h5 className="h-1/12 p-2 text-xs  bg-sky-600 text-white">Categorías</h5>  
                <ListaCategorias/>
            </div>            
            {showModal &&
                <FormVenta
                setShowModal={setShowModal}
                />
            } 
        </div>
     );
}
 
export default Inicio;



