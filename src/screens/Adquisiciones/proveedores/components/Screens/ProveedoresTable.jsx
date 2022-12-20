import React,{ useEffect} from "react";
import { useSelector, useDispatch} from 'react-redux'
import { inventarioActions }  from '../../../../../redux/actions/inventario'
import TableProveedor from '../Tables/TableProveedor'
import Pagination from '../../../../../components/Pagination'
import FormSearch from "../../../../../components/Forms/SearchParametros";
import { mProveedor } from '../../../../../data/dataLoad'
import { useNavigate} from 'react-router-dom'
import ProveedorItem from "../Views/ProveedorItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport, faPlus, faCopy, faTrash, faFilePdf } from "@fortawesome/free-solid-svg-icons";


const ProveedoresTable = () =>{
    const dispatch = useDispatch()  
    let navigate = useNavigate();        
    const [showModal, setShowModal] = React.useState(false);
    const { data, item, total, pagina, paginas,indicador,modalView } = useSelector(state => state.proveedor)    
    
    const chargeData = (page,num) =>{
        dispatch(inventarioActions.getData('proveedoresData','proveedores',page,num,'razonSocial','ASC'))
    }  
    const setIndicador = (pky) => {            
        let iok = pky === indicador  ? 0 : pky
        dispatch({type:'proveedorIndicador',response:iok}) 
      };
    useEffect(() => {
        chargeData(1,12)
        return () => {
            //*cleanup
        };
    }, []);
     
    const editar = () =>{
        if(indicador !==0){
            dispatch(inventarioActions.getItem('proveedorAdd','proveedores',indicador))
            navigate('/admin/adquisiciones/proveedores/new');
        }else{
            navigate('/admin/adquisiciones/proveedores/new');
        }        
    }

    const toggleModalView = (view) => {  
                  
        if(indicador !== 0){
            setShowModal(true)
            dispatch(inventarioActions.getItem('proveedorAdd','proveedores',indicador))
        }                 
    };  
    
    const copyItem = () =>{
        if(indicador !== 0){
            dispatch(inventarioActions.getCopy('proveedoresData','proveedores',indicador))
        }        
    }

    const deleteItem = () =>{
        if(indicador !== 0 ){
            dispatch(inventarioActions.dDelete('proveedoresData','proveedores',indicador))
        }
    }
   

    return(
        <>
       <div className="h-2/4 flex-1 mx-auto mb-10 p-1"> 
            <div className="h-8 flex flex-row border-gray-100">
                <div className=" w-3/4 p-1 flex-row flex">
                    <div 
                        onClick={()=> editar(indicador)}
                        className="w-10 shadow-md text-center rounded bg-sky-400 hover:bg-sky-300 mr-1">                        
                        <FontAwesomeIcon icon={faPlus} color="#fff" size="sm"/>
                    </div>
                    <div 
                    onClick={()=> editar(indicador)}
                    className={indicador === 0 ? "w-10 shadow-md text-center rounded bg-sky-200 mr-1" :"w-10 shadow-md text-center rounded bg-sky-400 hover:bg-sky-300 mr-1"}>                        
                    <FontAwesomeIcon icon={faFileExport} color="#fff" size="sm"/>
                    </div>
                    <div 
                    onClick={()=> copyItem()}
                    className={indicador === 0 ? "w-10 shadow-md text-center rounded bg-sky-200 mr-1" :"w-10 shadow-md text-center rounded bg-sky-400 hover:bg-sky-300 mr-1"}>
                    <FontAwesomeIcon icon={faCopy} color="#fff" size="sm"/>
                    </div>
                    <div 
                    onClick={()=> deleteItem()}
                    className={indicador === 0 ? "w-10 shadow-md text-center rounded bg-sky-200 mr-1" :"w-10 shadow-md text-center rounded bg-sky-400 hover:bg-sky-300 mr-1"}>
                    <FontAwesomeIcon icon={faTrash} color="#fff" size="sm"/>
                    </div>
                    <div 
                    onClick={()=> toggleModalView()}
                    className={indicador === 0 ? "w-10 shadow-md text-center rounded bg-sky-200 mr-1" :"w-10 shadow-md text-center rounded bg-sky-400 hover:bg-sky-300 mr-1"}>
                    <FontAwesomeIcon icon={faFilePdf}  color="#fff" size="sm"/>
                    </div>                    
                </div>
                <FormSearch
                    xredux= {'proveedoresData'}
                    payload={'proveedores'}
                    items={mProveedor}
                    inicial={'razonSocial'}
                />
            </div>         

            <div className="mt-1">
                <TableProveedor
                    data={data}
                    setIndicador={setIndicador}
                    indicador={indicador}
                />            
            </div>  
            <div className="h-12 border-r border-l border-b border-gray-300 p-3 rounded-b-lg">
               <Pagination
               makeHttpRequestWithPage={ chargeData}
               total={total}
               paginas={paginas}
               current={pagina}
               pagina={12}
               />
            </div>   
        </div>         
        {showModal &&
            <ProveedorItem
            item={item}
            setShowModal={setShowModal}
            />
        } 
        </>
    )
}

export default ProveedoresTable