import { tarea } from "../services/tarea";
import {toastr} from 'react-redux-toastr'
export const tareaActions = {  
    getList,
    postAdd,
    postSearch,
    putUpdate
    
  
};
/* dispatch({type:xredux,response:response.result})  */

function putUpdate(xredux,payload,dato,tipo){
    return(dispatch) =>{
        dispatch({type:"setLoading", state: true})
        tarea
        .putUpdate(payload,dato,tipo)
        .then((response)=>{
            dispatch({type:xredux,response:response.result})
            toastr.warning(payload, 'Dato actualizado') 
            dispatch({type:"setLoading", state: false})
        })
        .catch((err) => {                  
            toastr.error(payload, err) 
            dispatch({type:"setLoading", state: false})          
        });
    }
}
function postSearch(xredux,payload,dato){
    return(dispatch)=>{
        dispatch({type:"setLoading", state: true})
        tarea
        .postSearch(payload,dato)
        .then((response)=>{
    
            if(response.result){
                dispatch({type:xredux,response:response.result})
                dispatch({type:"setLoading", state: false})
            }
        })
        .catch((err) => {                  
            toastr.error(payload, err) 
            dispatch({type:"setLoading", state: false})          
        });
    }
}
function postAdd(xredux,payload,dato,tipo){
    return(dispatch) =>{
        dispatch({type:"setLoading", state: true})
        tarea
        .postAdd(payload,dato,tipo)
        .then((response)=>{            
            dispatch({type:xredux,response:response.result})
            toastr.success(payload, 'Dato registrado') 
            dispatch({type:"setLoading", state: false})
        })
        .catch((error)=>{
            toastr.error(payload, 'Error de registro') 
            dispatch({type:"setLoading", state: false})
        })
    }
}
function getList(xredux,payload,dato){ 
    return(dispatch)=>{ 
      tarea.getList(payload,dato) 
        .then((response)=>{ 
           dispatch({type:xredux,response:response.result})             
        })  
        .catch((err) => { 
           toastr.error(payload, err)
       });    
    }    
} 

