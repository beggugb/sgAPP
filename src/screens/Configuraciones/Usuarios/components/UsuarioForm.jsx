import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../../redux/actions/crud'
import { roles } from '../../../../helpers/data'
import { defaultVal } from '../../../../helpers/functions'
import Select from 'react-select'
import { custom } from '../../../../helpers/customStyles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";


const UsuarioForm = () => {     
  const dispatch = useDispatch()  
  const {item} = useSelector(state => state.usuario)   
  const [password, setpassword] = useState('');

  const onChange = event => {    
    const { name, value } = event.target      
     dispatch({type:'changeUsuario',props:name,value:value}) 
  }
  const onChanges = prop => event => {    
    const { value } = event ? event : ''     
    dispatch({type:'changeUsuario',props:prop,value:value}) 
  }
  
 
  
  const submitHandle = event => {       
      event.preventDefault()    
      if(item.id)
      {
        
        dispatch(crudActions.putList('usuariosData','usuarios',item))            
      }else{
        dispatch(crudActions.createList('usuariosData','usuarios',item))      
      }    
      dispatch({type:'usuarioReset'})
      
  }
  const submitHandles = event => {       
    event.preventDefault()    
    let nn ={
      id: item.id,
      password : password,
      bandera: 'pin'
    }    
    if(item.id)
    {      
      dispatch(crudActions.putList('usuariosData','usuarios',nn))            
    }  
    setpassword('')
    dispatch({type:'usuarioReset'})

    
}

  const changeHa = (checked) => {               
    dispatch({type:'changeUsuario',props:'enabled',value:checked}) 
  }

  const clean = () => {               
    dispatch({type:'usuarioReset'})
  }

 


 return (  
  <div className="bg-white px-2  mb-2 flex flex-col"> 
    <form onSubmit={ submitHandle}>    
        <div className="-mx-3">
            <div className="md:w-full mb-1">
            <label className="block text-gray-500 tracking-wide text-grey-darker text-[10px] font-bold mb-2">
                Nombre
            </label>
            <input 
                className="h-9 text-[11px] border-gray-300 block w-full bg-grey-lighter text-grey-darker rounded py-2 px-2 mb-2" 
                id="nombre" 
                name="nombre"
                value={item.nombre}
                onChange={(e)=>{ onChange(e)}} 
                type="text" />                                
            </div>   
        </div>

        <div className="-mx-3">
          <div className="md:w-full mb-1">
            <label className="block text-gray-500 tracking-wide text-grey-darker text-[10px] font-bold mb-2">Rol</label>
            <Select                                                               
              defaultValue={roles[0]}
              name="rolId"    
              id="rolId"         
              styles={custom}           
              options={roles}                                                          
              value={defaultVal(roles,item.rolId)}                                                                                                                                
              onChange={ onChanges('rolId')}                          
              />
          </div>   
        </div> 

        <div className="-mx-3">
          <div className="md:w-full mb-1">
            <label className="block text-gray-500 tracking-wide text-grey-darker text-[10px] font-bold mb-2">Habilitado</label>
            <Switch                         
              onChange={ changeHa }  
              checked={item.enabled} 
              offColor="#ef4444"              
              /> 
          </div>   
        </div>


        <div className="-mx-3">
          <div className="md:w-full mb-1">
            <label className="block text-gray-500 tracking-wide text-grey-darker text-[10px] font-bold mb-2">
              Username
            </label>
            <input 
                className="h-9  text-[11px] border-gray-300 block w-full bg-grey-lighter text-grey-darker rounded py-2 px-2 mb-2" 
                id="username" 
                name="username"
                value={item.username}
                onChange={(e)=>{ onChange(e)}} 
                type="text" />     
          </div>   
        </div>

        <div className="-mx-3 flex">
            <button 
                type="submit"
                className="border w-full mt-1 rounded bg-sky-400 hover:bg-sky-300 p-1 text-sm text-white">
                <FontAwesomeIcon icon={faSave} size="sm" />  
                {' '} {item.id ? " Actualizar" : " Guardar"}
            </button>
        </div>
</form>  
{ item.id &&
  <form onSubmit={ submitHandles } >    
  <div className="-mx-3 mt-4">
      <div className="md:w-full mb-1">
      <label className="block text-gray-500 tracking-wide text-grey-darker text-[10px] font-bold mb-2">
          Password
      </label>
      <input 
          className="h-9 border-gray-300 block w-full bg-grey-lighter text-grey-darker rounded py-2 px-2 mb-2" 
          id="password" 
          name="password"
          value={password}
          onChange={(e)=>{ setpassword(e.target.value) }} 
          type="password" />                                
      </div>   
  </div>


  <div className="-mx-3 flex">
      <button 
          type="submit"
          className="border w-full mt-1 rounded bg-red-400 hover:bg-red-300 p-1 text-sm text-white">
          <FontAwesomeIcon icon={faSave} size="sm" />  
           {' '} Actualizar Password
      </button>
  </div>
</form> 
}

</div>          
        
     );
}
 
export default UsuarioForm;
