/** [payloadAction] */
const initialState = {
    data: [],
    items:[],
    pagina:0,
    paginas:0,
    total: 0,
    indicador:0,
    modalView:false,
    item:{  
        codigo:'',
        tipoFiscal:'',
        tipoProveedor:'',
        razonSocial:'',
        direccion:'',
        pais:'',
        ciudad:'',
        contacto:'',
        email:'',
        web:'',
        telefono:'',
        nit:'',
        filename:'',
        fundempresa:'',
        formaPago:'',
        banco:'',
        cuenta:'',
        observaciones:'',
        latitude: -17.78148697551103, 
        longitude: -63.18350470249461
    }
}

export function proveedor(state = initialState, action){
    switch(action.type){
        case 'proveedoresLista':
            return{
                ...state,
                items: action.response
            }
        case 'proveedorView':
            return{
                ...state,
                modalView: action.response
            }     
        case 'proveedoresData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total                
            }
        case 'proveedorChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'proveedorMapas':
                return{
                ...state,
                item:
                {...state.item,
                   latitude: action.latitude,
                   longitude: action.longitude
               }
        }             
        case 'proveedorAdd':
            return{
                ...state,
                item: action.response
            }
        case 'proveedorReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0,
                modalView: false
            } 
        case 'proveedoresReset':
            return{
                ...state,
                data: [], 
                items:[],               
                pagina:0,
                paginas:0,
                total: 0,
                item: initialState.item
            }    
        case 'proveedorIndicador':
            return{
                ...state,
                indicador: action.response
            }             
        default:
            return state;
    }

}