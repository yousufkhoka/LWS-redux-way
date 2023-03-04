const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    counter:0
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment:  (state)=> {
            state.counter ++
        },
        decrement:  (state)=> {
            state.counter --
        }
    }

})

module.exports = counterSlice.reducer
module.exports.counterAction = counterSlice.actions