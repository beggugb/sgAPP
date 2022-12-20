import React,{useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux'
import ClienteImagen from './ClienteImagen'
import { crudActions } from '../../../redux/actions/crud'
import { paises, tipos, sexos} from '../../../helpers/data'
import { custom } from '../../../helpers/customStyles'
import { defaultVal} from '../../../helpers/functions'
import Select from 'react-select'


const ClienteForm = ({setShowModal}) => {   
  const dispatch = useDispatch()  
  const { item, pagina , promp} = useSelector(state => state.cliente)   

  const onChange = event => {    
    const { name, value } = event.target        
    dispatch({type:'clienteChange',props:name,value:value})        
  }
  
  const onChanges = prop => event => {                     
    const { value } = event ? event : ''       
    dispatch({type:'clienteChange',props:prop,value:value})
 }



  const paisHandler = prop => event => { 
    const { value } = event ? event : '0'        
    dispatch({type:'clienteChange',props:prop,value:value})
  }
  const handleSave = event => {       
    event.preventDefault()    
    if(item.id)
    {        
      dispatch(crudActions.putUnit('clientes',item))            
    }else{
     dispatch(crudActions.createUnit('clienteAdd','clientes',item))      
    }    
  }
  const makeHttpRequestWithPage = (page,num) =>{        
    let iok={
        page:page,
        num:num, 
        nombres : promp,
        ci:'',
        nit:''
    }
    dispatch(crudActions.searchList('clientesData','clientes',iok))
  }

  
  useEffect(() =>{                
  return () =>{             
      dispatch({type:'clientesResetItem'})               
      makeHttpRequestWithPage(1,12)
    };
}, []);
    
    return ( 
        <>
        <div className="justify-center items-center flex-1 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-5xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <button 
            className="w-7 h-7 bg-red-500 rounded-full m-1"
            onClick={() => setShowModal(false)}>
            <FontAwesomeIcon icon={faTimes} color="#fff" />
          </button>  
            {/*body*/}

            <div className="p-1 flex flex-row min-h-4xl">
              <div className="w-full border rounded-md text-xs p-2">
                
                <form onSubmit={ handleSave}>
                <div className="grid grid-cols-2 gap-2 p-1"> 
                    <div className="col-span-2">
                        <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                            Nombres
                        </label>
                        <input 
                            className="h-8 border-gray-400 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                            id="nombres" 
                            name="nombres"
                            type="text" 
                            value={item.nombres}
                            onChange={onChange}
                            required={true}
                        /> 
                    </div>                      
                </div>
                <div className="grid grid-cols-2 gap-2 p-1"> 
                    <div className="">
                        <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                            CI
                        </label>
                        <input 
                            className="h-8 border-gray-400 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                            id="ci" 
                            name="ci"
                            type="text" 
                            value={item.ci}
                            onChange={onChange}
                        /> 
                    </div>  
                    <div >
                        <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                            NIT
                        </label>
                        <input 
                            className="h-8 border-gray-400 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                            id="nit" 
                            name="nit"
                            type="text" 
                            value={item.nit}
                            onChange={onChange}
                        />
                    
                    </div>                       
                </div>

                <div className="grid grid-cols-2 gap-2 p-1"> 
                    <div className="">
                        <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                            Genero
                        </label>
                        <Select                                   
                            defaultValue={sexos[0]} 
                                  name="sexo" 
                                  id="sexo" 
                                  options={sexos}     
                                  styles={custom}                              
                                  value={defaultVal(sexos,item.sexo)}                                                                                                                                
                                  onChange={ onChanges('sexo')}  />
                    </div> 
                    <div className="">
                        <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                            Email
                        </label>
                        <input 
                            className="h-8 border-gray-400 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                            id="email" 
                            name="email"
                            type="email" 
                            value={item.email}
                            onChange={onChange}
                        />
                    </div>                                
                </div>

                <div className="grid grid-cols-2 gap-2 p-1"> 
                    <div className="">
                        <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                            Celular
                        </label>
                        <input 
                            className="h-8 border-gray-400 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                            id="celular" 
                            name="celular"
                            type="text" 
                            value={item.celular}
                            onChange={onChange}
                        />
                    </div>  
                    <div >
                        <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                        Teléfono
                        </label>
                        <input 
                            className="h-8 border-gray-400 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                            id="telefono" 
                            name="telefono"
                            type="text" 
                            value={item.telefono}
                            onChange={onChange}
                        />
                    
                    </div>                       
                </div>

                <div className="grid grid-cols-2 gap-2 p-1"> 
                    <div className="">
                        <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                            Pais
                        </label>
                        <Select                                                               
                                  defaultValue={paises[0]}
                                  name="pais"    
                                  id="pais"                    
                                  options={paises}     
                                  styles={custom}                                                          
                                  value={defaultVal(paises,item.pais)} 
                                  onChange={ paisHandler('pais')}                           
                                  />
                    </div>  
                    <div >
                        <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                        Tipo
                        </label>
                        <Select                                                               
                                  defaultValue={tipos[0]}
                                  name="tipo"    
                                  id="tipo"                    
                                  options={tipos} 
                                  styles={custom}                                                         
                                  value={defaultVal(tipos,item.tipo)}                                                                                                                                
                                  onChange={ onChanges('tipo')}                          
                                  />
                    
                    </div>                       
                </div>
                <div className="grid grid-cols-2 gap-2 p-1"> 
                    <div className="col-span-2">
                        <label className="block text-gray-500 tracking-wide text-grey-darker text-xs font-bold ">
                           Dirección
                        </label>
                        <textarea 
                            className="resize h-12 border-gray-400 block w-full bg-grey-lighter text-gray-500 text-sm rounded px-2 " 
                            id="direccion" 
                            name="direccion"
                            type="textarea" 
                            value={item.direccion}
                            onChange={onChange}
                        />
                    </div>                                          
                </div>
                <div className="pl-2">                    
                    <button
                       className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                       type="submit" > {item.id ? 'Actualizar':'Guardar' }
                    </button>                        
                </div> 
               
                                      
                               
             </form>
            </div>            
            
            <div className="ml-1 w-3/6 border rounded-md">
                <ClienteImagen/>
            </div>            
            </div>
            {/*footer*/}                       
            </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
      </>
     );
}
 
export default ClienteForm;



                        
