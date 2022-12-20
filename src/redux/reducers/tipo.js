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

export function tipo(state = initialState, action){
    switch(action.type){
        case 'tiposLista':
            return{
                ...state,
                items: action.response
            }
        case 'tiposData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total                
            }
        case 'tipoChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'tipoAdd':
            return{
                ...state,
                item: action.response
            }
        case 'tipoReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0
            } 
        case 'tiposReset':
            return{
                ...state,
                data: [], 
                items:[],               
                pagina:0,
                paginas:0,
                total: 0,
                item: initialState.item
            }    
        case 'tipoIndicador':
            return{
                ...state,
                indicador: action.response
            }             
        default:
            return state;
    }

}