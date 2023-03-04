const store = require("./app/store");
const { counterAction } = require("./features/counter/counterSlice");

console.log(`old counter ${store.getState().counter.counter}`)

store.subscribe( () => {
    console.log(`updated counter ${store.getState().counter.counter}`)
}
    
)

store.dispatch(counterAction.increment())
store.dispatch(counterAction.increment())
store.dispatch(counterAction.decrement())