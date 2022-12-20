import { cajaService } from "../services/caja";
import { crud } from "../services/crud";
import {toastr} from 'react-redux-toastr'

export const cajaActions = {  
  
  getListDetalle,
  getItems,
  viewModal,
  getItemo,
  createList
};

/*---------------------------------------------------------------*/
function createList(xredux, payload, dato) {  
  return (dispatch) => {
    crud
      .createList(payload, dato)                
      .then((response) => {                                         
        dispatch({type:'CAJAS_ITEMS_DATA',response:response.result.items}) 
        dispatch({type:"CAJAS_ITEM",response:response.result.caja})    
        toastr.success(payload, 'Dato creado')     
      
      })
      .catch((err) => {        
        
      });
  };
}




/*---------------------------------------------------------------*/
function viewModal(xredux, est) {  
  return (dispatch) => {    
    dispatch({type: xredux, view:est});
  };
}
/*---------------------------------------------------------------*/
function getItems(xredux, payload, pky) {  
  return (dispatch) => {
    cajaService
      .getItems(payload, pky)
      .then((response) => {                                         
          dispatch({type:"CAJAS_ITEM",response:response.result.cajau}) 
          dispatch({type:"CAJAS_ITEMS_DATAS",response:response.result.itemsu}) 
      })
      .catch((err) => {
         
      });
  };
}

/*---------------------------------------------------------------*/
function getListDetalle(xredux, payload, page,num,dato) {  
  return (dispatch) => {
    cajaService
      .getListDetalle(payload, page,num,dato)
      .then((response) => {                                              
       dispatch({type:xredux,response:response.result})  
        
      })
      .catch((err) => {
        toastr.error('Error', err)      
        
      });
  };
}

function getItemo(xredux, payload, pky) {  
  return (dispatch) => {
    cajaService
      .getItem(payload, pky)
      .then((response) => {                                        
        dispatch({type:"CAJAS_ITEM",response:response.result.cajau}) 
        dispatch({type:"CAJAS_ITEMS_DATA",response:response.result.itemsu})              
       
      })
      .catch((err) => {        
        
      });
  };
}