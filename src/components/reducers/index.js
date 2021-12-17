import changeNumber from "./addSub";
import addTask from "./addTask";
import addContact from "./addContact";
import { combineReducers } from "redux";

const reducer = combineReducers({
    changeNumber, addTask, addContact
})

export default reducer
