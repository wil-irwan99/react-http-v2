import { combineReducers, createStore } from "redux";
import { hookReducer } from "./redux/hookReducer";

const rootReducer = combineReducers( {
    hookReducer
})

export const setupStore = () => {
    return createStore(rootReducer)
}