/** [payloadAction] */
const initialState = {
    data: [],
    items:[],
    nota:{
        nro: "",
        tipo: "",
        montoTotal: 0,
        pagoTotal: 0,
        saldoTotal: 0,
        fechaVencimiento: "",
        cuotas: 0,
        isVenta: false,
        detalle: "",
        compraId: 0,
        ventaId: 0
    },
    plan:[],
    pagina:0,
    paginas:0,
    total: 0,
    indicador:0,
    indicadorEstado:false,
    indicadorTotal:0,
    categoriaId:0,
    modalView:false,
    modalViews:false,
    item:{  
        nro: "",
        fechaVenta: "",
        tipo: "",
        nroItems: 0,
        total: 0,
        observaciones: "",
        estado: "",
        proveedors: "",
        nroPagos: 0,
        fechaAprobacion: "",
        gestion: 0,
        mes: 0,
        subTotal: 0.00,
        iva: 0,
        descuento: 0,
        impuesto: 0,
        totalGeneral: 0,
        origen: "",
        clienteId: 0,
        sucursalId: 0,
        usuarioId: 0,
        cliente:{
            id:'',
            razonSocial:'',            
        },
        sucursal:{
            id:'',
            nombre:'',            
        },
        usuario:{
            id:'',
            nombres:'',            
            apellidos:''
        },
    }
}

export function venta(state = initialState, action){
    switch(action.type){
        case 'ventasSetItems':
            return{
                ...state,                
                item:
                {...state.item,
                    totalGeneral: action.value,
                    nroItems : action.cantidad                    
                },
                items: action.values                
            }
        case 'ventasItems':
            return{
                ...state,                
                item:
                {...state.item,
                    totalGeneral: action.value,
                    nroItems : action.cantidad
                },
                items: action.values                
            }
        case 'ventasLista':
            return{
                ...state,
                items: action.response
            }
        case 'ventasData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total,
                modalView: false,
                modalViews: false,
                indicador:0,
                indicadorEstado:false           
            }
        case 'ventaChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'ventaAdd':
            return{
                ...state,
                item: action.response.item,
                items:action.response.items,
                nota: action.response.nota,
                plan:action.response.plan
            }
        case 'ventaReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0,
                indicadorTotal:0,
                modalView: false,
                nota: {},
                plan: []
            } 
        case 'ventasReset':
            return{
                ...state,
                data: [], 
                items:[],               
                pagina:0,
                paginas:0,
                total: 0,
                item: initialState.item
            }  
        case 'ventasCategoria':
            return{
                ...state,
                categoriaId: action.value
            }      
        case 'ventaIndicador':
            return{
                ...state,
                indicador: action.response,
                indicadorEstado : action.estado,
                indicadorTotal: action.total
            }  
        case 'ventaView':
            return{
                ...state,
                  modalView: action.response
            }  
            case 'ventaViews':
                return{
                    ...state,
                      modalViews: action.response
                }               
        default:
            return state;
    }

}