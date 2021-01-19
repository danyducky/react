import { combineReducers, createStore } from "redux";
import profileReducer from './reducers/profile-reducer'
import imReducer from "./reducers/im-reducer";

const reducers = combineReducers({
    imPage: imReducer,
    profilePage: profileReducer,
})


let store = createStore(reducers)

window.state = store.getState()


export default store;

