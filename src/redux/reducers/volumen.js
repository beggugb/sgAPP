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

export function volumen(state = initialState, action){
    switch(action.type){
        case 'volumenesLista':
            return{
                ...state,
                items: action.response
            }
        case 'volumenesData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total                
            }
        case 'volumenChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'volumenAdd':
            return{
                ...state,
                item: action.response
            }
        case 'volumenReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0
            } 
        case 'volumenesReset':
            return{
                ...state,
                data: [], 
                items:[],               
                pagina:0,
                paginas:0,
                total: 0,
                item: initialState.item
            }    
        case 'volumenIndicador':
            return{
                ...state,
                indicador: action.response
            }             
        default:
            return state;
    }

}