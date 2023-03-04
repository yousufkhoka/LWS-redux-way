const store = require("./app/store");
const { counterAction } = require("./features/counter/counterSlice");
const { dynamicCounterAction } = require("./features/DynamicCounter/DynamicCounter");

// console.log(`old counter ${store.getState()}`)

store.subscribe( () => {
    // console.log(`updated counter ${JSON.stringify(store.getState())}`)
}
    
)

store.dispatch(counterAction.increment())
store.dispatch(counterAction.increment())
store.dispatch(counterAction.decrement())


store.dispatch(dynamicCounterAction.increment(5))
store.dispatch(dynamicCounterAction.increment(6))
store.dispatch(dynamicCounterAction.decrement(2))