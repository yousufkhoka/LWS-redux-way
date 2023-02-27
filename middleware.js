
const fetch = require('node-fetch')

const todosFatchMiddleware = (store) => (next) =>async (action) =>{
    if(action.type === 'todos/fatching'){
         const response =  await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
         const todos = await response.json()
         console.log(todos.length)
        store.dispatch({ type:'todosLoaded' , payload:todos})
         return;
    }
  
   return next(action)
}

const deleyMiddleware = (store) => (next) => (action) => {
    if(action.type === 'todoadded'){
        console.log('deley')
        setTimeout(() => next(action),2000)
        return;
    }
}

module.exports = {todosFatchMiddleware ,deleyMiddleware}