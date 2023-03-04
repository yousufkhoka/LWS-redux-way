const counterReducer = require('../features/counter/counterSlice')
const dynamicCounterReducer = require('../features/DynamicCounter/DynamicCounter')
const  {configureStore} = require('@reduxjs/toolkit')
const {createLogger} = require('redux-logger')
const logger = createLogger()
const store = configureStore({
    reducer:{
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})

module.exports = store