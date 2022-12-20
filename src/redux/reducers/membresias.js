const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    promp:'',
    item:{
      orden: '',
      num: '',
      ivigencia: new Date(),
      fvigencia: new Date(),
      ingresos:'',
      tipo:'normal',
      estado: false,
      renovacion: false,
      total:0,
      paqueteId:0,
      membresiaId:0,
      usuarioId:0,
      Paquete:{
        id:'',
        nombre:'',
        valor:0
      },
      Cliente:{
        id:'',
        nombres:'',
        ci:''
      }
    }    
  };
  
export function membresias(state = initialState, action) {
    switch (action.type) {
      case "setPromp":
        return {
          ...state,
          promp: action.value
        };
      case "membresiasChange":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "membresiasADD":
        return {
          ...state,
          item: action.response.membresia
        };
      case "membresiaItem":
          return {
            ...state,
            item: action.response
          };  
      case "membresiasData":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };            
      case "membresiasRESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "resetMembresia":
        return {
          ...state,
          item: initialState.item
        };  
      default:
        return state;
    }
  }
  