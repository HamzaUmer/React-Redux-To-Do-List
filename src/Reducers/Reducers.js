import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

const mainReducer = combineReducers({
    todoReducer
});

export default mainReducer;