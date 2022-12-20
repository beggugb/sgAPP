const initialState = {    
    cliente:{
      id:"",
      nombres:"",
      filename:"default.jpg",
      ci:""
    },    
    bandera:0,
    membresia:{
      orden: '',
      num: '',
      ivigencia: '2021/01/01',      
      fvigencia: '2021/01/01',      
      ingresos:'',
      tipo:'normal',
      estado: false,
      renovacion: false,
      paqueteId:0,
      membresiaId:0,
      usuarioId:0,
      Paquete:{
        id:'',
        nombre:''
      }},
    mensaje:""    
  };
  
export function registros(state = initialState, action) {
    switch (action.type) {      
      case "REGISTROS_ITEM":
          return {
            ...state,
            cliente: action.response.cliente ? action.response.cliente: initialState.cliente,
            membresia: action.response.membresia ? action.response.membresia: initialState.membresia,
            mensaje: action.response.message,
            bandera: action.response.bandera
          };  
      case "REGISTROS_DATA":
          return {
            ...state,
            data: action.response
          };            
      case "REGISTROS_RESET":
        return {
          ...state,
          cliente: initialState.cliente,
          membresia: initialState.membresia,
          bandera: 0,
          mensaje:""
        };
        
      default:
        return state;
    }
  }
  