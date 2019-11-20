import { combineReducers } from "redux";
import LoginReduce from "./LoginReducer";
import {REQUEST_POSTS,RECEIVE_POSTS} from "../action/LoginAction";


const HttpEcho = (state = { isFetching: false }, action) => {
    debugger;
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                data:action.data,
                error:action.error
            })
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    HttpEcho,
    LoginReduce
})

export default rootReducer;