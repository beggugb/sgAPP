import React,{ useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector} from 'react-redux'
import { inventarioActions } from '../../../../../redux/actions/inventario'

const InputSearch = () =>{
    const dispatch = useDispatch()    
    const pitems  = useSelector(state => state.producto.items)
    const {items, item }  = useSelector(state => state.compra)
    const [name, setname] = useState("");
    const [view, setview] = useState(false);    
    const [cantidad, setCantidad] = useState(0);
    const [valor, setValor] = useState(0);    
    const [producto, setproducto] = useState();
    const fechaHoy = new Date()
    const mes = fechaHoy.getMonth() + 1
    const anio = fechaHoy.getFullYear()

    const handleSearch = () =>{
        let dato = {
            prop: 'nombre',
            value: name
        }        
        dispatch(inventarioActions.postSearchs('productosItems','productos',dato))
        setview(true)
    }
    const asignar = (it) =>{        
        setproducto(it)
        setname(it.nombre)
        setview(false)

    }
    const agregar = () =>{                
        let newItems = [...items]
        let repeat = false   

        newItems.map((ite,index)=>{            
            if(ite.productoId === producto.id)
            {
                repeat = true
            }
            return null
        })

        if(!repeat){
            let newItem ={
                cantidad: cantidad,
                codigo:producto.codigo,
                nombre: producto.nombre,
                valor: valor,
                categoria: producto.categoria.nombre,
                marca: producto.marca.nombre,
                gestion: anio,
                mes: mes,
                subTotal: parseFloat(cantidad) * parseFloat(valor),
                unidad: producto.unidad.nombre,
                compraId: item.id,
                productoId: producto.id                
            }        
            newItems.push(newItem)                
            let nTotal = parseFloat(item.totalGeneral) + (parseFloat(cantidad) * parseFloat(valor))
            let nItems = parseInt(item.nroItems) + parseInt(cantidad)
            dispatch({type:"comprasItems",cantidad:nItems,value:nTotal,values:newItems})
            
        }        
        clear()        
    }
    

    const clear = () =>{
        setname('')
        setview(false)
        setproducto('')
        setCantidad(0)
        setValor(0)
    }

    /*console.log(items)*/


    return( 
        <>
        <div className="h-11 bg-white w-full rounded">
        <div className="grid grid-cols-3 gap-2">

    <div className="border flex-row flex">
        <label className="w-2/5 block text-gray-500 tracking-wide text-grey-darker text-xs font-bold p-3">
            Producto
        </label>
        <input 
            className="h-9 w-3/5 border-gray-300 block bg-grey-lighter text-gray-500 text-xs rounded px-2 " 
            id="name" 
            name="name"
            type="text" 
            value={name}
            onChange={(e) => setname(e.target.value)}
        /> 
        <button 
        onClick={() => handleSearch()}
        className="h-7 w-7 border z-10 -ml-9 mt-1 border-transparent shadow-sm text-xs font-medium rounded-full text-gray-600">
            <FontAwesomeIcon icon={faSearch} />
        </button> 
    </div>  

<div className="border flex-row flex">
    <label className="w-2/5 block text-gray-500 tracking-wide text-grey-darker text-xs font-bold p-3">
        Cantidad
    </label>
    <input 
        className="h-9 w-3/5 border-gray-300 block bg-grey-lighter text-gray-500 text-xs rounded px-2 " 
        id="cantidad" 
        name="cantidad"
        type="text" 
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
    /> 
</div>

<div className="border flex-row flex">
    <label className="w-2/5 block text-gray-500 tracking-wide text-grey-darker text-xs font-bold p-3">
       Valor
    </label>
    <input 
        className="h-9 w-3/5 border-gray-300 block bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
        id="valor" 
        name="valor"
        type="text" 
        value={valor}
        onChange={(e) => setValor(e.target.value)}
    /> 
    <button 
    onClick={() => agregar()}
    className="w-9 h-9 bg-green-500 hover:bg-green-400 p-1 rounded text-white">
          <FontAwesomeIcon icon={faPlus} />
    </button> 

</div>
</div>
        </div>            
        { view ?  
        <div className="mt-1 w-1/3 bg-sky-100 p-2 text-white rounded-md  text-base font-medium">          
            <ul className="border ">
                { pitems.map((item,index) =>(
                    <li
                        key={index}
                        onClick={(e) => asignar(item)}
                        className="text-xs text-gray-500 hover:text-gray-400"
                    >
                    {item.nombre} - ({item.categoria.nombre})
                    </li>                
                ))}
            </ul>                    
            </div>    : null
        }           

        </> 
    )

}


export default InputSearch