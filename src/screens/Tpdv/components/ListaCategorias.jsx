import React,{ useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { inventarioActions } from '../../../redux/actions/inventario'
import Pagination from '../../../components/Pagination'

const ListaCategorias = () =>{ 
    const dispatch = useDispatch()
    const [showModal, setShowModal] = React.useState(false);
    const [estado, setEstado] = useState(true);    
    const { data, total, pagina, paginas } = useSelector(state => state.categoria) 

    const chargeData = (page,num) =>{      
      dispatch(inventarioActions.getData('categoriasData','categorias',page,num,'nombre','asc'))
    }
    
    const chargeProductos = (pky) =>{   
      let iok = {
        categoriaId: pky,
        value: ""
      }   
      dispatch(inventarioActions.items('productosItems','stock',iok))
      dispatch({type:"ventasCategoria",value:pky})
    }

    useEffect(() => {
        chargeData(1,14)
        return () => {
            dispatch({type:'categoriasReset'})
        };
    }, []);



 return(   
  <div className="h-[500px] justify-center items-center flex-1 border mt-2 border-stone-200 overflow-scroll">    
    <div className="relative w-auto mx-auto max-w-3xl flex-row justify-between">    
    {data &&
          <div className="rounded-lg flex-col w-full p-1">
            {data.map((item,index)=>(
              <button 
                key={index}
                onClick={() => chargeProductos(item.id)}
                className="h-9 w-full pl-3 pt-1 mb-1 text-left text-xs border-2 rounded text-stone-500">
                {item.nombre}</button>
            ))}
          </div>  
        }
    </div>
  </div>            
    )
}

export default ListaCategorias
