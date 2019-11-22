// import { combineReducers } from "redux";
import {RECEIVE_POSTS,REQUEST_POSTS} from "../action/LoginAction";



const LoginReduce = (state = { isFetching: false }, action) => {
    debugger;
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data,
                error: action.error
            })
        default:
            return state;
    }
}

export default LoginReduce ;