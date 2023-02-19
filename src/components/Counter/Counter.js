import React from 'react';
import Button from '../Button/Button';

const Counter = ({counter , increment , decrement}) => {
    
  
    return (
        <div
        className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
      >
        <div className="text-2xl font-semibold" >{counter.value}</div>
        <div className="flex space-x-3">

            <Button hendelar={()=>increment(counter.id)}>
                Increment
            </Button>
            <Button hendelar={()=>decrement(counter.id)}>
                Dcrement
            </Button>
        
        </div>
      </div>
    );
};

export default Counter;