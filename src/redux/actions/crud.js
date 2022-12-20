import { crud } from "../services/crud";
import {toastr} from 'react-redux-toastr'
export const crudActions = {  
  getData,
  searchList,
  getItem,
  putUnit,
  putList,
  createUnit,
  createList,
  getList,
  postUnit,
  postList,
  deleteList,
  getDetalle,
  getNota,
  pagar,
  getListDetalle,
  cajaItems,
  informes
};

function informes(xredux, payload, dato, desde, hasta) {
  return (dispatch) => {   
    dispatch({type:"setLoading", state: true})  
    crud
      .informes(payload, dato)
      .then((response) => {         
          dispatch({type:xredux,response:response.result,desde:desde,hasta:hasta})
          dispatch({type:"setLoading", state: false})
      })
      .catch((err) => {
        toastr.error('Login', err) 
        dispatch({type:"setLoading", state: false})
      });
  };
}

function putList(xredux, payload, dato) {    
  return (dispatch) => {
    crud
      .putList(payload, dato)
      .then((response) => {     
                                              
        dispatch({type:xredux,response:response.result})   
        toastr.success(payload, 'Dato actualizado')                          
      })
      .catch((err) => {
        
      });
  };
}

function createList(xredux, payload, dato) {  
  return (dispatch) => {
    crud
      .createList(payload, dato)
      .then((response) => {              
        dispatch({type:xredux,response:response.result})
      })
      .catch((err) => {
        
        
      });
  };
}
function cajaItems(payload, pky) {  
  return (dispatch) => {
    crud
      .cajaItems(payload, pky)
      .then((response) => {   

        dispatch({type:'CAJAS_ITEM',response:response.result.cajau})
        dispatch({type:'CAJAS_ITEMS_DATAS',response:response.result.itemsu})               
      })
      .catch((err) => {
         
      });
  };
}
function getListDetalle(xredux, payload, page,num,dato) {  
  return (dispatch) => {
    crud
      .getListDetalle(payload, page,num,dato)
      .then((response) => {                                   
        dispatch({type:xredux,response:response.result})
      })
      .catch((err) => {
        toastr.error('Error', err)      
        
      });
  };
}

function pagar(xredux, payload, dato) {  
  return (dispatch) => {
    crud
      .pagar(payload, dato)
      .then((response) => {                                                 
        dispatch({type:xredux,response:response.result})
       toastr.success('Correcto', response.message)
      })
      .catch((err) => {        
          toastr.error('Caja', "No tiene caja abierta")          
      });
  };
}
function getNota(xredux, payload, pky) {  
  return (dispatch) => {
    crud
      .getNota(payload, pky)
      .then((response) => {       
        dispatch({type:'membresiaItem',response:response.result.mem.Membresia})
        dispatch({type:'notaItem',response:response.result})
      })
      .catch((err) => {
                
      });
  };
}
function getDetalle(xredux, payload, page,num,dato) {  
  return (dispatch) => {
    crud
      .getDetalle(payload, page,num,dato)
      .then((response) => {                                   
    
        dispatch({type:xredux,response:response.result})
      })
      .catch((err) => {
        toastr.error('Error', err)      
        
      });
  };
}

function deleteList(xredux, payload, dato) { 
  return (dispatch) => {
    crud
      .deleteList(payload, dato)
      .then((response) => {                                            
        dispatch({type:xredux,response:response.result})
        toastr.error(payload, 'Dato eliminado')     
      })
      .catch((err) => {        
        toastr.error(payload, err) 
      });
  };
}
function postList(xredux, payload, dato) {  
  return (dispatch) => {
    crud
      .postList(payload, dato)
      .then((response) => {              
        dispatch({type:xredux,response:response.result}) 
        toastr.success(payload, 'Dato creado')                    
      })
      .catch((err) => {
        toastr.error(payload, err) 
      });
  };
}

function postUnit(xredux, payload, dato) {  
  return (dispatch) => {
    crud
      .postUnit(payload, dato)
      .then((response) => {          
        if(response.result){
          dispatch({type:xredux,response:response.result})              
        }                              
        toastr.success(payload, 'Dato creado')       
      })
      .catch((err) => {       
        toastr.error(payload, err)       
      });
  };
}
function getList(xredux,payload){ 
  return(dispatch)=>{ 
    crud.getList(payload) 
      .then((response)=>{            
         dispatch({type:xredux,response:response.result})             
      })  
      .catch((err) => { 
         toastr.error(payload, err)
     });    
  }    
}
function createUnit(xredux, payload, dato) {  
  return (dispatch) => {
    crud
      .createUnit(payload, dato)
      .then((response) => {  
        if(response.result){          
          dispatch({type: xredux, response: response.result}); 
        }                              
        toastr.success(payload, 'Dato creado')       
      })
      .catch((err) => {       
        toastr.error(payload, err)       
      });
  };
}

function putUnit(payload, dato) {  
  return (dispatch) => {
    dispatch({type:"setLoading", state: true})
    crud
      .putUnit(payload, dato)
      .then((response) => {              
        toastr.success(payload, 'Dato actualizado') 
        dispatch({type:"setLoading", state: false})
      })
      .catch((err) => {
        dispatch({type:"setLoading", state: false})
      });
  };
}


function getItem(xredux, payload, tipo, pky) {  
  return (dispatch) => {
    crud
      .getItem(payload, tipo, pky)
      .then((response) => {      
   
        if(tipo === 'unit'){
          dispatch({type: xredux, response: response.result});        
        }else{
        
          dispatch({type: xredux, response: response.result.cliente});        
          dispatch({type: 'membresiasData', response: response.result.membresias});        
        }                  
        
      })
      .catch((err) => {
                
      });
  };
}

function searchList(xredux, payload, dato) {    
  return (dispatch) => {
    crud
      .searchList(payload, dato)
      .then((response) => {                            
        dispatch({type: xredux, response: response.result});
      })
      .catch((err) => {        
        
      });
  };
}

function getData(xredux, payload, page,num,prop,orden) {  
    return (dispatch) => {
      dispatch({type:"setLoading", state: true})

      crud
        .getData(payload, page,num,prop,orden)
        .then((response) => {                                
            dispatch({type: xredux, response: response.result});
            dispatch({type:"setLoading", state: false})
        })
        .catch((err) => {          
          dispatch({type:"setLoading", state: false})
        });
    };
  }

  