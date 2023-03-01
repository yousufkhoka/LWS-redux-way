import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import doubleImage from '../assets/images/double-tick.png';
import notesImage from '../assets/images/notes.png';
import plusImage from '../assets/images/plus.png';
import { added, allcompleted, clearcompleted } from '../redux/todos/action';

const Header = () => {
    const dispatch = useDispatch()
    const [input , setInput] = useState('')
    const inputHendler = (e) =>{
       setInput(e.target.value)
    }
    const submithendler = (e) =>{
        e.preventDefault()
        dispatch(added(input))
    }
    const allCompleteHendler = () => dispatch(allcompleted())
    const clearCompleteHendler = () => dispatch(clearcompleted())
    return (
        <div>
            <form
               onSubmit={submithendler}
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img
                    src={notesImage}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    onChange={inputHendler}
                    value={input}
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={allCompleteHendler}>
                    <img
                        className="w-4 h-4"
                        src={doubleImage}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={clearCompleteHendler}>Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;