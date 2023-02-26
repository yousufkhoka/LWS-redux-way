import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const Todolist = () => {
    const state = useSelector((state) => state.todos )

    return (
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {
                state.map((todo) => <Todo todo={todo} key={todo.id}/>)
            }
           
        </div>
    );
};

export default Todolist;