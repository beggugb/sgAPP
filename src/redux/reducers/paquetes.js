const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{        
        nombre: '',
        valor: 0,
        diario:false,
        medio:false,
        enabled:false,
        meses: 0
    }    
  };
  
export function paquetes(state = initialState, action) {
    switch (action.type) {
      case "paquetesChange":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "paquetesAdd":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "paquetesItem":
          return {
            ...state,
            item: action.response
          };  
      case "paquetesData":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "paquetesLista":
            return {
              ...state,
              data: action.response
            };                
      case "paquetesReset":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "paqueteReset":
          return {
            ...state,
            item: initialState.item
          };  
      default:
        return state;
    }
  }
  