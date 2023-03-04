import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/todos/thunk/fetchTodos';
import Todo from './Todo';

const Todolist = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos )
    const filter = useSelector((state) => state.filter)
   useEffect(() => {
    dispatch(fetchTodos)
   },[dispatch])

    const filterByStatus = todo => {
        switch (filter.status) {
         case 'Complete':
             return todo.completed
         case 'Incomplete':
             return !todo.completed                      
         default:
            return true;
        } 
     }
     const filterByColors = todo => {
        if(filter.colors.length > 0){
           return filter.colors.includes(todo?.color)
        }
        return true;
    }
    
    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {
                todos.filter(filterByStatus).filter(filterByColors).map((todo) => <Todo todo={todo} key={todo.id}/>)
            }
           
        </div>
    );
};

export default Todolist;