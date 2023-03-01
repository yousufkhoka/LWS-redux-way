import { loaded } from "../action"

export  const fetchTodos = async (dispatch ,getState) => {
    const res = await fetch('http://localhost:9000/todos')
    const todos = await res.json()
    dispatch(loaded(todos))
}