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
        encargado: "",
        empresaId:1 
    }
}

export function sucursal(state = initialState, action){
    switch(action.type){
        case 'sucursalesLista':
            return{
                ...state,
                items: action.response
            }
        case 'sucursalesData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total                
            }
        case 'sucursalChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'sucursalAdd':
            return{
                ...state,
                item: action.response
            }
        case 'sucursalReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0
            } 
        case 'sucursalesReset':
            return{
                ...state,
                data: [], 
                items:[],               
                pagina:0,
                paginas:0,
                total: 0,
                item: initialState.item
            }    
        case 'sucursalIndicador':
            return{
                ...state,
                indicador: action.response
            }             
        default:
            return state;
    }

}