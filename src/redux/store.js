import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from './reducers/profile-reducer'
import imReducer from "./reducers/im-reducer";
import allUsersReducer from "./reducers/all-reducer";
import thunk from 'redux-thunk'
import authReducer from "./reducers/auth-reducer";
import appReducer from "./reducers/app-reducer";

const reducers = combineReducers({
    imPage: imReducer,
    profilePage: profileReducer,
    allUsers: allUsersReducer,
    auth: authReducer,
    app: appReducer
})


let store = createStore(reducers, applyMiddleware(thunk))

window.state = store.getState()


export default store;

