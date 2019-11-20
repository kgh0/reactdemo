import { combineReducers } from "redux";




function a(state = { }, action) {
    return state;
}

function b(state = [], action) {
    return state;
}

const LoginReduce = combineReducers({
    a,
    b
})

export default LoginReduce 