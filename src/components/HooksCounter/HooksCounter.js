import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/counter/action';
import Button from '../Button/Button';

const HooksCounter = () => {
    const count = useSelector((state) => state.value)
    const dispatch = useDispatch()

    const hendleIncrement =(value) => dispatch(increment(value))
    const hendleDecrement =(value) => dispatch(decrement(value))
    
    return (
        <div
        className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
      >
        <div className="text-2xl font-semibold" >{count}</div>
        <div className="flex space-x-3">

            <Button hendelar={() => hendleIncrement(8)}>
                Increment
            </Button>
            <Button hendelar={() => hendleDecrement(4)}>
                Dcrement
            </Button>
        
        </div>
      </div>
    );
};

export default HooksCounter;