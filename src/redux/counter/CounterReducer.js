import { DECREMENT, INCREMENT } from "./actionType";

  const initialState = {
    value:29
  }
const CounterReducer = (state=initialState , action) => {
   switch (action.type) {
    case INCREMENT:
        return{
            ...state,
            value: state.value + action.payload
        }  
        case DECREMENT:
        return{
            ...state,
            value: state.value + action.payload
        }   
    default:
        return state;
   }
}

export default CounterReducer;