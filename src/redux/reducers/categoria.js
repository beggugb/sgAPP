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

export function categoria(state = initialState, action){
    switch(action.type){
        case 'categoriasLista':
            return{
                ...state,
                items: action.response
            }
        case 'categoriasData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total                
            }
        case 'categoriaChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'categoriaAdd':
            return{
                ...state,
                item: action.response
            }
        case 'categoriaReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0
            } 
        case 'categoriasReset':
            return{
                ...state,
                data: [], 
                items:[],               
                pagina:0,
                paginas:0,
                total: 0,
                item: initialState.item
            }    
        case 'categoriaIndicador':
            return{
                ...state,
                indicador: action.response
            }             
        default:
            return state;
    }

}