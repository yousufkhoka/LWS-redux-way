
//  initial state 
const {todosFatchMiddleware ,deleyMiddleware} = require('./middleware')
const { createStore, applyMiddleware } = require("redux");

const initialState = [{
    id:1,
    text:'learn redux'
}]

//  reducer function 
const mextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id),-1)
  return maxId +1;
}

const reducer = (state = initialState, action) => {
      switch (action.type) {
        case 'todoadded':
            return[
                ...state,
                {
                    id: mextTodoId(state),
                    text: action.payload
                }
            ]
            
        case 'todosLoaded':
          return [
            ...state,
            ...action.payload
          ]
        default:
           return state;
      }
}



const store = createStore(reducer , applyMiddleware(todosFatchMiddleware ,deleyMiddleware))


store.subscribe(() => console.log(store.getState()))
console.log(store.getState())


store.dispatch({ type:'todoadded' , payload: 'learn react'})
// store.dispatch({ type:'todos/fatching'})
