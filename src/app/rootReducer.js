import { combineReducers } from "redux";
import { menuReducer } from "../MenuRedux/state/MenuReducer";

export function rootReducer(){
    return combineReducers({
        menuReducer
    })
}