import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faTimes, faList, faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { crudActions } from '../../../redux/actions/crud'
import { useSelector, useDispatch } from 'react-redux'

const ClienteSearch = ({estado, setEstado, setShowModal}) => {  
    const dispatch = useDispatch() 
    const { promp }= useSelector(state => state.cliente)
    
    const cleanSearch = () =>{              
        let iok={
          nombres : '',
          ci:'',
          nit:'',
          page:1,
          num:12
        }
        dispatch(crudActions.searchList('clientesData','clientes',iok))
        dispatch({type:'setPromp',value:''}) 
      }
            
      const submitHandle = event =>{
        event.preventDefault() 
        let iok={
          nombres : promp,
          ci:'',
          nit:'',
          page:1,
          num:12
        }
        dispatch(crudActions.searchList('clientesData','clientes',iok))        
      }   
      const submitHandles = () =>{        
        let iok={
          nombres : promp,
          ci:'',
          nit:'',
          page:1,
          num:12
        }
        dispatch(crudActions.searchList('clientesData','clientes',iok))        
      } 

      const setParametro = (e) =>{
     
        dispatch({type:'setPromp',value:e}) 
      }
     
    return ( 
        <div className="flex flex-col mb-1">
          <h6 className="pl-2 text-sm text-stone-600 font-bold">Gestión de Clientes</h6>

          <div className="h-10 flex flex-row w-full">
            <div className="w-1/4 pl-1 pt-2">
                  <button 
                    className="text-xs font-bold h-6 w-20 bg-sky-500 rounded text-white hover:bg-white hover:text-sky-500 hover:border-sky-500 hover:border"
                    onClick={() =>setShowModal(true)}>
                    <FontAwesomeIcon icon={faPlus} size="sm"/>                                              
                  </button> 
            </div>
            <div className="w-1/4 pt-2 pl-1">
                <button
                  onClick={()=>setEstado(true)}
                  className={estado ? "w-2/4 text-center text-white bg-sky-500" : "w-2/4 text-center text-stone-400"}>
                  <FontAwesomeIcon icon={faList} size="sm" />
                </button>
                <button 
                  onClick={()=>setEstado(false)}
                  className={estado ? "w-2/4 text-center text-stone-400" : "w-2/4 text-center text-white bg-sky-500"}>
                  <FontAwesomeIcon icon={faBorderAll} size="sm" />
                </button>
            </div>
            <div className="w-1/4 p-1">
                { promp &&                  
                  <div                   
                  onClick={() => cleanSearch()}
                  className="w-auto2/3 bg-stone-200 h-7 text-[12px] rounded p-1"
                  >
                  <FontAwesomeIcon icon={faTimes} />
                  <span className="ml-4">{promp}</span>
                  </div>                                
                } 
            </div>
            <div className="w-1/4 flex">
                <form  onSubmit={ submitHandle} className="w-full">                                        
                        <input 
                            type="text" 
                            name="parametro" 
                            value={promp} 
                            onChange={(e) => setParametro(e.target.value)} 
                            className="w-full h-9 focus:border-gray-400 block shadow-sm sm:text-sm border-gray-300 rounded-md"/>                                                                                      
                </form> 
                <button 
                  onClick={()=>submitHandles()}                      
                  className="h-7 w-7 border z-10 -ml-9 mt-1 border-transparent shadow-sm text-sm font-medium rounded-full text-gray-700">
                  <FontAwesomeIcon icon={faSearch} />
                </button>   
            </div>
          </div>
          
        </div>
     );
}
 
export default ClienteSearch;



                        
