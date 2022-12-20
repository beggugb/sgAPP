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
        codigo:"",
        nombre: "",
        pais: "" 
    }
}

export function industria(state = initialState, action){
    switch(action.type){
        case 'industriasLista':
            return{
                ...state,
                items: action.response
            }
        case 'industriasData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total                
            }
        case 'industriaChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'industriaAdd':
            return{
                ...state,
                item: action.response
            }
        case 'industriaReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0
            } 
        case 'industriasReset':
            return{
                ...state,
                data: [], 
                items:[],               
                pagina:0,
                paginas:0,
                total: 0,
                item: initialState.item
            }    
        case 'industriaIndicador':
            return{
                ...state,
                indicador: action.response
            }             
        default:
            return state;
    }

}