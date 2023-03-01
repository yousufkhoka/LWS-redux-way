import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const Todolist = () => {
    const todos = useSelector((state) => state.todos )
    const filter = useSelector((state) => state.filter)
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