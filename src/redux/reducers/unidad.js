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
        abreviacion: "" 
    }
}

export function unidad(state = initialState, action){
    switch(action.type){
        case 'unidadesLista':
            return{
                ...state,
                items: action.response
            }
        case 'unidadesData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total                
            }
        case 'unidadChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'unidadAdd':
            return{
                ...state,
                item: action.response
            }
        case 'unidadReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0
            } 
        case 'unidadesReset':
            return{
                ...state,
                data: [], 
                items:[],               
                pagina:0,
                paginas:0,
                total: 0,
                item: initialState.item
            }    
        case 'unidadIndicador':
            return{
                ...state,
                indicador: action.response
            }             
        default:
            return state;
    }

}