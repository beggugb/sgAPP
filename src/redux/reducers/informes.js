const initialState = {
    clientes: [],    
    cajas: [],    
    membresias: [],
    consolidado: [],  
    registros:[],  
    ventas:[], 
    existencias:[],
    data: [],    
    pagina: 0,
    paginas: 0,
    total: 0,
    desde:'2021-01-01',
    hasta:'2021-12-01',
    detalle:0,
    categoriaId:0,
    productoId:0,
    usuarioId:0

  };
    
export function informes(state = initialState, action) {
    switch (action.type) {    
      case "INFORMES_SET":
        return {          
          ...state,
          [action.name]: action.value,          
        };   
      case "INFORMES_VENTAS":
        return {          
          ...state,
          detalle: action.response.detalle,
          ventas: action.response.data,
          total: action.response.data.total,      
          desde: action.desde,
          hasta: action.hasta
        }; 
      case "INFORMES_CLIENTES":
          return {          
            ...state,
            detalle: action.response.detalle,
            clientes: action.response.data,
            total: action.response.data.total,      
            desde: action.desde,
            hasta: action.hasta
       };   
      case "INFORMES_REGISTROS":
        return {          
          ...state,
          detalle: action.response.detalle,
          registros: action.response.data,
          total: action.response.data.total,      
          desde: action.desde,
          hasta: action.hasta
        }; 
      case "INFORMES_EXISTENCIAS":
          return {          
            ...state,
            detalle: action.response.suma,
            existencias: action.response.data,
            total: action.response.total,      
            desde: action.desde,
            hasta: action.hasta
        };        
      case "INFORMES_MEMBRESIAS":
        return {          
          ...state,
          detalle: action.response.detalle,
          membresias: action.response.data,
          total: action.response.data.total,      
          desde: action.desde,
          hasta: action.hasta
        };    
      case "INFORMES_CAJAS":
        return {          
          ...state,
          detalle: action.response.detalle,
          cajas: action.response.data,
          total: action.response.data.total,      
          desde: action.desde,
          hasta: action.hasta
        }; 
      case "INFORMES_CONSOLIDADO":
        return {          
          ...state,
          detalle: action.response.detalle,
          consolidado: action.response.data,
          total: action.response.data.total,      
          desde: action.desde,
          hasta: action.hasta
        };      

     case "INFORMES_RESET":
        return {
          ...state,
          clientes: [],          
          membresias:[],
          consolidado:[],
          registros:[],
          ventas:[],
          existencias:[],
          cajas:[],
          pagina: 0,
          paginas: 0,
          total: 0,
          desde:'2021-01-01',
          hasta:'2021-12-01',
          detalle:0,          
          categoriaId:0,
          productoId:0,
          usuarioId:0
        };          
        
      default:
        return state;
    }
  }
  