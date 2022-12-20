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
        modeloId:0,
        marca:{
            id:0,
            nombre:''
        } 
    }
}

export function modelo(state = initialState, action){
    switch(action.type){
        case 'modelosLista':
            return{
                ...state,
                items: action.response
            }
        case 'modelosData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total                
            }
        case 'modeloChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'modeloAdd':
            return{
                ...state,
                item: action.response
            }
        case 'modeloReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0
            } 
        case 'modelosReset':
            return{
                ...state,
                data:[],
                pagina:0,
                paginas:0,
                total: 0,
                item: initialState.item
            }    
        case 'modeloIndicador':
            return{
                ...state,
                indicador: action.response
            }             
        default:
            return state;
    }

}