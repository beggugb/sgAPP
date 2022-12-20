const initialState={
    data: [],
    items:[],
    pagina:0,
    paginas:0,
    total: 0,
    indicador:0,
    modalView:false,
    success:false,
    auth:false,
    loading:false,
    bandera:0,
    menuId:0,
    labelMenu:'Inicio',
    subMenuId:0,
    labelSubMenu:'',
    user:{},
    item:{  
        nombre:'',
        rolId:0,
        username:'',
        sucursalId:1
    }
}

export function usuario(state = initialState, action){

    switch(action.type){
        case 'usuariosLista':
            return{
                ...state,
                items: action.response
            }
        case "changeUsuario":
            return{
                ...state,
                item:
                {...state.item,
                    [action.props]: action.value
                }
            }
        case "setBandera":
            return{
                ...state,                
                bandera: action.response
        }    
        case "asignMenu":
            return{
                ...state,
                menuId: action.menuId,
                labelMenu: action.labelMenu
            } 
        case "asignSubMenu":
            return{
                ...state,
                subMenuId: action.subMenuId,
                labelSubMenu: action.labelSubMenu
            }       
        case "login":
            return{
                ...state,
                auth: action.result.auth,
                user: action.result.usuario
            }
        case "logout":
            return{
                ...state,
                auth: false,
                user: {}
            }    
        case "setLoading":
            return {
                ...state,
                loading: action.state
            }  
        case 'usuariosData':
            return{
                ...state,
                data: action.response.data,
                pagina: action.response.pagina,
                paginas: action.response.paginas,
                total: action.response.total
            }
        case 'usuarioChange':
            return{
                ...state,
                item:
                {...state.item,
                    [action.name]: action.value
                }
            } 
        case 'usuarioAdd':
            return{
                ...state,
                item: action.response
            }
        case 'usuarioItem':
                return{
                ...state,
                item: action.response
            }    
        case 'usuarioReset':
            return{
                ...state,
                item: initialState.item,
                indicador: 0
            } 
        case 'usuarioIndicador':
            return{
                ...state,
                indicador: action.response
            } 
     
        default:
            return state;
    }
}