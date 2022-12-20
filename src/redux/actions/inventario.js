import {inventarioService} from '../services/inventario'
import {toastr} from 'react-redux-toastr'

export const inventarioActions = {
    getData,
    getItem,
    getItems,
    getList,
    getLista,
    postSearch,
    postSearchs,
    postAdd,
    putUpdate,
    putUpdates,
    putFile,
    getCopy,
    dDelete,
    putAprobar,
    items
       
} 
function items(xredux,payload,dato){ 
    return(dispatch)=>{ 
      inventarioService.items(payload,dato) 
        .then((response)=>{  
           dispatch({type:xredux,response:response.result})             
        })  
        .catch((err) => { 
           toastr.error(payload, err)
       });    
    }    
} 

function putAprobar(xredux,payload,dato,tipo){
    return(dispatch) =>{
        dispatch({type:"setLoading", state: true})
        inventarioService
        .putAprobar(payload,dato,tipo)
        .then((response)=>{
            dispatch({type:xredux,response:response.result})
            toastr.warning(payload, 'Dato aprobado') 
            dispatch({type:"setLoading", state: false})
        })
        .catch((err) => {                  
            toastr.error(payload, err) 
            dispatch({type:"setLoading", state: false})          
        });
    }
}

function getLista(xredux,payload,pky){ 
    return(dispatch)=>{ 
        dispatch({type:"setLoading", state: true})
      inventarioService.getLista(payload,pky) 
        .then((response)=>{ 
           dispatch({type:xredux,response:response.result})             
           dispatch({type:"setLoading", state: false})
        })          
        .catch((err) => { 
           toastr.error(payload, err)
           dispatch({type:"setLoading", state: false})
       });    
    }    
} 
function getItems(xredux,payload){ 
    return(dispatch)=>{ 
      inventarioService.getItems(payload) 
        .then((response)=>{ 
           dispatch({type:xredux,response:response.result})             
        })  
        .catch((err) => { 
           toastr.error(payload, err)
       });    
    }    
} 

function getList(xredux,payload,dato){ 
     return(dispatch)=>{ 
       inventarioService.getList(payload,dato) 
         .then((response)=>{ 
            dispatch({type:xredux,response:response.result})             
         })  
         .catch((err) => { 
            toastr.error(payload, err)
        });    
     }    
}                  

function dDelete(xredux,payload,pky){
    return(dispatch)=>{
        dispatch({type:"setLoading", state: true})
        inventarioService
        .dDelete(payload,pky)
        .then((response)=>{
            dispatch({type:xredux,response:response.result})
            toastr.error(payload,'Item eliminado')
            dispatch({type:"setLoading", state: false})
        })
        .catch((err) => {                  
            toastr.error(payload, err)  
            dispatch({type:"setLoading", state: false})         
        });
    }
}

function getCopy(xredux,payload,pky){
    return(dispatch)=>{
        inventarioService
        .getCopy(payload,pky)
        .then((response)=>{
            dispatch({type:xredux,response:response.result})
            toastr.success(payload,'Item copiado')
        })
        .catch((err) => {                  
            toastr.error(payload, err)           
        });
    }
}

function postSearch(xredux,payload,dato){
    return(dispatch)=>{
        dispatch({type:"setLoading", state: true})
        inventarioService
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

function postSearchs(xredux,payload,dato){
    return(dispatch)=>{
        dispatch({type:"setLoading", state: true})
        inventarioService
        .postSearchs(payload,dato)
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

function putFile(payload,dato,datoId){
    return (dispatch) =>{
        dispatch({type:"setLoading", state: true})
        inventarioService
        .putFile(payload,dato,datoId)
        .then((response)=>{
            setTimeout(() => { 
                dispatch({type:'setLoading',state:false})
                toastr.success(payload, 'Imagen cargada')
                }, 1000);
        })
        .catch((err) => {                  
            toastr.error(payload, err) 
            dispatch({type:"setLoading", state: false})          
        });
    }
}
function putUpdates(xredux,payload,dato,pky,tipo){
    return(dispatch) =>{
        dispatch({type:"setLoading", state: true})
        inventarioService
        .putUpdates(payload,dato,pky,tipo)
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
function putUpdate(xredux,payload,dato,tipo){
    return(dispatch) =>{
        dispatch({type:"setLoading", state: true})
        inventarioService
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
function getItem(xredux,payload,pky){
    return(dispatch) =>{
        dispatch({type:"setLoading", state: true}) 
        inventarioService
        .getItem(payload,pky)
        .then((response)=>{     
                            
            dispatch({type:xredux,response:response.result})
            dispatch({type:"setLoading", state: false}) 
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
        inventarioService
        .postAdd(payload,dato,tipo)
        .then((response)=>{          
             
            dispatch({type:xredux,response:response.result})
            toastr.success(payload, 'Dato registrado') 
            dispatch({type:"setLoading", state: false})
        })
        .catch((error)=>{            
            toastr.error(payload, error) 
            dispatch({type:"setLoading", state: false})
        })
    }
}

function getData(xredux,payload,page,num,prop,orden){
    return (dispatch) =>{
        dispatch({type:"setLoading", state: true})
        inventarioService
        .getData(payload,page,num,prop,orden)
        .then((response)=>{        
          
            dispatch({type:"setLoading", state: false})
            dispatch({type:xredux,response:response.result}) 
        })
        .catch((err) =>{
            dispatch({type:"setLoading", state: false})
        })
    }
}
