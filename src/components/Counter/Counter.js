import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/counter/action';
import Button from '../Button/Button';

const Counter = ({count , increment ,decrement}) => {
    return (
        <div
        className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
      >
        <div className="text-2xl font-semibold" >{count}</div>
        <div className="flex space-x-3">

            <Button hendelar={() => increment(2)}>
                Increment
            </Button>
            <Button hendelar={() => decrement(1)}>
                Dcrement
            </Button>
        
        </div>
      </div>
    );
};
const mapStateToProps=(state)=>{
    return{
        count:state.value
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        increment:(value) => dispatch(increment(value)),
        decrement:(value) => dispatch(decrement(value))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Counter);