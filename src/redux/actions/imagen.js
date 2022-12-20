import { imagenService } from "../services/imagenService";
import {toastr} from 'react-redux-toastr'
export const imagenActions = {  
  uploadCliente,  
  uploadArticulo
};

/*--------------------------------------------------------------------*/
function uploadArticulo(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadArticulo(payload, data, datoId)
      .then((response) => {       
       toastr.success(payload, 'Imagen cargada') 
      })
      .catch((err) => {        
       
      });
  };
}

/*--------------------------------------------------------------------*/
function uploadCliente(xredux, payload, data, datoId) {
  return (dispatch) => {   
    dispatch({type:"setLoading", state: true}) 
    imagenService
      .uploadCliente(payload, data, datoId)
      .then((response) => {       
        setTimeout(function(){
          toastr.success(payload, 'Imagen Cargada')
          dispatch({type:"setLoading", state: false})
        }, 3000);   
      })
      .catch((err) => {        
        dispatch({type:"setLoading", state: false})
      });
  };
}
