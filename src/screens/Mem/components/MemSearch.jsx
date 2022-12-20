import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faTimes, faList, faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { crudActions } from '../../../redux/actions/crud'
import { useSelector, useDispatch } from 'react-redux'

const MemSearch = ({estado, setEstado, setShowModal}) => {  
    const dispatch = useDispatch() 
    const { promp }= useSelector(state => state.membresias)
    
    const cleanSearch = () =>{              
        let iok={
          nombres : '',
          ci:'',
          nit:'',
          page:1,
          num:12
        }
        dispatch(crudActions.searchList('membresiasData','mem',iok))
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
        dispatch(crudActions.searchList('membresiasData','mem',iok))        
      }   
      const submitHandles = () =>{        
        let iok={
          nombres : promp,
          ci:'',
          nit:'',
          page:1,
          num:12
        }
        dispatch(crudActions.searchList('membresiasData','mem',iok))        
      } 

      const setParametro = (e) =>{
     
        dispatch({type:'setPromp',value:e}) 
      }
     
    return ( 
        <div className="flex flex-col mb-1">          

          <div className="h-10 flex flex-row w-full">
            <div className="w-1/4 pl-1 pt-2">
            <h6 className="pl-2 text-sm text-stone-600 font-bold">Gestión de Membresias</h6>
            </div>
            <div className="w-1/4 pt-2 pl-1">
               
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
 
export default MemSearch;



                        
