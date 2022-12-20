import { usuarioService } from "../services/usuario";
import {toastr} from 'react-redux-toastr'
export const usuarioActions = {
    login,
    logout
};

function login(params){
    return (dispatch) =>{
        usuarioService
        .login(params)
        .then((response)=>{                         
            if(response.user.usuario)
            {
                dispatch({type:'login',result:response.user})
                toastr.success('Login', response.user.message)
            }else{
                dispatch({type:'setBandera',response:response.user.bandera})
                toastr.error('Login', response.user.message)  
            }                           
        })
        .catch((err)=>{
            toastr.error('Login', err)  
        })
    }
}

function logout(){
    return(dispatch) =>{        
        usuarioService.logout()
        dispatch({type:'logout'})
    }
}



