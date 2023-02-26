import { COLORCHANGED, STATUSCHANGED } from './actionType';
import initialState from './initialState';


const reducer = (state = initialState , action) =>{
    switch (action.type) {
        case STATUSCHANGED:
            return{
                ...state,
                status: action.payload,
            }
        case COLORCHANGED:
            const {color, colorType} = action.payload
           switch (colorType) {
            case 'added':
                return {
                    ...state,
                    color: [
                        ...state.color,
                        color,
                    ]
                }
                
            case 'removed':
                return{
                    ...state,
                    color: color.filter(cureent => cureent !== color) 
                }   
           
            default:
                return state;
           }   
          
    
        default:
            return state;
    }
}

export default reducer;