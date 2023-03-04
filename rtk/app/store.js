const counterReducer = require('../features/counter/counterSlice')
const  {configureStore} = require('@reduxjs/toolkit')
const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})

module.exports = store