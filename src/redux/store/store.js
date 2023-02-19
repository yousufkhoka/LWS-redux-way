import { createStore } from "redux";
import CounterReducer from "../counter/CounterReducer";
const store = createStore(CounterReducer)
export default store;