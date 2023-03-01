import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from "./actionType";
import initialState from "./initialState";

const nextTodoId = (todos) =>{
    const maxId = todos.reduce((maxId , current)=> Math.max(current.id, maxId),-1)
    return maxId + 1
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload
        case ADDED:
            return [
                ...state,
                {
                    id:nextTodoId(state),
                    text: action.payload,
                    completed: false,
                
                },
        
            ]
            
    case TOGGLED:
        return state.map((todo) =>{
            if(todo.id !== action.payload){
                 return todo
            }
            else{
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
        }) 
    
    case COLORSELECTED:
        return state.map((todo) =>{
            const {todoId , color} = action.payload
            if(todo.id !== todoId){
                return todo
            }
            else{
              return{
                ...todo,
                color: color,
              }  

            }
        })    
    
    case DELETED:
        return  state.filter((todo) => todo.id !== action.payload)    

    case ALLCOMPLETED:
        return state.map((todo) =>{
            return {
                ...todo,
                completed: true,
            }
        })  
    case CLEARCOMPLETED:
        return state.filter(todo => !todo.completed)      
        default:
         return state;   
    }
}

export default todosReducer;