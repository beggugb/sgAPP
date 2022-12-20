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
        nombre: "",
        nombreCorto: "",
        codigo: "",
        estado: true,        
        inCatalogo: true,
        inOferta: false,
        precioVenta: 0,    
        filename: "default.png",
        colores: "",
        precioOferta: 0,
        pDescuento: 0,
        medida: "",        
        sma: 0,
        te: 0,
        cp: 0,
        ter: 0,
        smi: 0,
        ss: 0,
        ms: 0,
        pr: 0,
        nm: '',
        nv: 0,
        subcategoria: "",
        lote: "0",
        vencimiento: "2022-10-01",
        tipoId: 1,
        volumenId: 1,    
        origenId: 1,
        categoriaId: 0,
        marcaId: 0,
        unidadId: 0,
        modeloId: 1,
        industriaId: 0 ,
        categoria:{
            id:'',
            nombre:''
        },
        marca:{
            id:'',
            nombre:''
        },
        modelo:{
            id:'',
            nombre:''
        },
        origen:{
            id:'',
            nombre:''
        },
        unidad:{
            id:'',
            nombre:''
        },
        industria:{
            id:'',
            nombre:''
        },
        volumen:{
            id:'',
            nombre:''
        },
        tipos:{
            id:'',
            nombre:''
        }

    }
}

export function producto(state = initialState, action){
    switch(action.type){
        case 'productosData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total
            }
        case 'productosItems':
                return{
                ...state,
                items: action.response                
            }    
        case 'productoChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'productoAdd':
            return{
                ...state,
                item: action.response
            }
        case 'productoReset':
            return{
                ...state,
                item: initialState.item,
                modalView: false,
                indicador: 0
            } 
        case 'productoIndicador':
            return{
                ...state,
                indicador: action.response
            } 
        case 'productoView':
            return{
                ...state,
                modalView: action.response
            }  
        case 'productoLocation':
            return{
                ...state,
                item:
                {...state.item,
                    latitude: action.latitude,
                    longitude: action.longitude
                }
            }
        default:
            return state;
    }

}
