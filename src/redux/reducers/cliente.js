const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    modalView: false,
    promp:'',
    item:{
      nombres: '',
      direccion: '',
      telefono: '',      
      email: '',
      nit:'',
      ci:'',
      celular: '',
      filename: 'default.jpg',
      estado: true,
      ciudad: '',
      pais: '',
      tipo: '',
      isCliente: true,
      fnacimiento:'',
      sexo:''
    }  
  };
  
export function cliente(state = initialState, action) {
    switch (action.type) {
      case "setPromp":
        return {
          ...state,
          promp: action.value
        };
      case "clientesData":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          }; 
      case "clientesReset":
            return {
            ...state,
            item: initialState.item,
            data: [],
            pagina: 0,
            paginas: 0,
            total: 0
      }; 
      case "clienteReset":
            return {
            ...state,
            item: initialState.item
      }; 
      case "clientesResetItem":
        return {
          ...state,
          item: initialState.item          
        };   
      case "CLIENTES_VIEW":
        return {
          ...state,
          modalView: action.view
        }; 
      case "clienteChange":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "clienteAdd":
        return {
          ...state,
          item: action.response.cliente
        };
      case "clienteItem":
          return {
            ...state,
            item: action.response
          };  
                 
      
        
      default:
        return state;
    }
  }
  