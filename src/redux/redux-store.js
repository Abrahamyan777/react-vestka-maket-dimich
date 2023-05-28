import { combineReducers, createStore } from "redux";
import DialogsReduser from "./dialogs-reduser";
import PeopleReduser from "./people-reduser";
import ProfileReduser from "./profile-reduser";


let redusers = combineReducers({
    ProfileReduser,
    DialogsReduser,
    UsersPage: PeopleReduser
})

let store = createStore(redusers)
window.state = store;

export default store; 