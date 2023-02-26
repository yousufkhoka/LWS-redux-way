import { combineReducers } from 'redux';
import filterReducer from './filters/reducer';
import todosReducer from './todos/todosReducer';

const rootReducer = combineReducers({
    filter:filterReducer,
    todos:todosReducer,
})

export default rootReducer;