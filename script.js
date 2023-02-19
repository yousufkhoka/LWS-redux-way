const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
 
//   action indentifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

//  action creator 
 
const increment = value => {
    return{
        type: INCREMENT,
        payload: value
    }
}
const decrement = value => {
    return{
        type: DECREMENT,
        payload: value
    }
}
 


// initial state

let initialState = {
    count:0
}

// reducer

const reducer = (state = initialState , action) => {
    if(action.type === INCREMENT) {
        return{
            ...state,
            count : state.count + action.payload
        }
    
    }
    else if(action.type === DECREMENT) {
        return {
            ...state,
            count : state.count - action.payload
        }
    }
    else{
        return state;
    }
}

// create store

const store = Redux.createStore(reducer)

const render = () =>{
    const state = store.getState();
    counterEl.innerHTML = state.count.toString()
}
render()

store.subscribe(render)


// action dispatch

incrementEl.addEventListener('click', () => {
    store.dispatch(increment(5))
})
decrementEl.addEventListener('click', () => {
    store.dispatch(decrement(2))
})

// render 

