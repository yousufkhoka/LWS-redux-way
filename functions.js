const fetch = require('node-fetch')
const fetchTodos = async (dispatch , getState) => {
    const response =  await fetch('https://jsonplaceholder.typicode.com/todos?_limit=9')
    const todos = await response.json()
    console.log(todos + 'fetched')
    dispatch({
        type:'todosLoaded', 
        payload: todos
    })
   console.log( `number of updated todos: ${getState().length}`)
}
module.exports = {
    fetchTodos,
}



