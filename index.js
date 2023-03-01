
//  initial state 

const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require('./functions');
const thunk = require('redux-thunk');

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
  console.log( 'action.payload' + action.payload )
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
          console.log('payload: ' + action.payload)
          return [
            ...state,
            ...action.payload
          ]
        default:
           return state;
      }

    }



const store = createStore(reducer , applyMiddleware(thunk.default))


store.subscribe(() => console.log(store.getState()))



// store.dispatch({ type:'todoadded' , payload: 'learn react'})
store.dispatch(fetchTodos)
