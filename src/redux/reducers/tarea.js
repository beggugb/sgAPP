const initialState = {
    data: [],
    item:{
      id:'',
      title:'',
      start:'',
      end:'',      
      backgroundColor:'',
      selectable:false,
      usuarioId:0,
      detalle:''      
    },
};

export function tarea(state = initialState, action) {
    switch (action.type) {
      case "tareaAdd":
        return {
          ...state,
            data: action.response,
            item: initialState.item
        };
      case "tareaChange":
        return {          
          ...state,
          item:
          {...state.item,
              [action.props]: action.value
          }
       };  
      case "tareaItem":
          return {
            ...state,
            item: action.response
          }; 
      case "tareaData":
        return {
          ...state,
          data: action.response
        };          
      case "tareaReset":
        return {
          ...state,
          data: [],
          item: initialState.item
        };
      case "tareaItemReset":
          return {
            ...state,            
            item: initialState.item
          };  
      default:
        return state;
    }
  }
  