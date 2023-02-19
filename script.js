const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');


// initial state

let initialState = {
    count:0
}

// reducer

const reducer = (state = initialState , action) => {
    if(action.type === 'increment') {
        return{
            ...state,
            count : state.count + 1
        }
    
    }
    else if(action.type === 'decrement') {
        return {
            ...state,
            count : state.count - 1
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
    store.dispatch({ type: 'increment'})
})
decrementEl.addEventListener('click', () => {
    store.dispatch({ type: 'decrement'})
})

// render 

