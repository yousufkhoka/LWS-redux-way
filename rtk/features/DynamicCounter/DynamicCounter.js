const { createSlice } = require("@reduxjs/toolkit");
const { counterAction } = require("../counter/counterSlice");


const initialState = {
    count:0
}
const dynamicCounterSlice = createSlice({
    name: "dynamicCounter",
    initialState,
    reducers:{
        increment:  (state , action)=> {
            state.count  += action.payload
        },
        decrement:  (state , action)=> {
            state.count -= action.payload
        }
    },
    extraReducers:(builder) =>{
         builder.addCase(counterAction.increment , (state, action) => {
        state.count +=  1
    })
},
  extraReducers:{
    ['counter/increment']:(state, action) => {
        state.count += 1
    }
}
})

module.exports = dynamicCounterSlice.reducer
module.exports.dynamicCounterAction = dynamicCounterSlice.actions