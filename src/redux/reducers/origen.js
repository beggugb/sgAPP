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

export function origen(state = initialState, action){
    switch(action.type){
        case 'origenesLista':
            return{
                ...state,
                items: action.response
            }
        case 'origenesData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total                
            }
        case 'origenChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'origenAdd':
            return{
                ...state,
                item: action.response
            }
        case 'origenReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0
            } 
        case 'origenesReset':
            return{
                ...state,
                data: [], 
                items:[],               
                pagina:0,
                paginas:0,
                total: 0,
                item: initialState.item
            }    
        case 'origenIndicador':
            return{
                ...state,
                indicador: action.response
            }             
        default:
            return state;
    }

}