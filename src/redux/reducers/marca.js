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
        abreviacion: "",
        categoriaId:0,
        categoria:{
            id:0,
            nombre:''
        } 
    }
}

export function marca(state = initialState, action){
    switch(action.type){
        case 'marcasLista':
            return{
                ...state,
                items: action.response
            }
        case 'marcasData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total                
            }
        case 'marcaChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'marcaAdd':
            return{
                ...state,
                item: action.response
            }
        case 'marcaReset':
            return{
                ...state,
                item: initialState.item,                
                indicador: 0
            } 
        case 'marcasReset':
            return{
                ...state,
                data:[],
                items:[],
                pagina:0,
                paginas:0,
                total: 0,
                item: initialState.item,
           }               
        case 'marcaIndicador':
            return{
                ...state,
                indicador: action.response
            }             
        default:
            return state;
    }

}