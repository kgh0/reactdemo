import fetch from 'cross-fetch';
import { baseUrl } from "./constant";

// const headers = {
//     "Content-Type": "application/json; charset=UTF-8"
// };

export const REQUEST_POSTS = 'Login/REQUEST_POSTS';

// 发起请求
const requestPosts = () => {
    return {
        type: REQUEST_POSTS,
    }

};

export const RECEIVE_POSTS = 'Login/RECEIVE_POSTS'

//通知 reducer 请求成功的 action
const receviePostOnSuccess = (data) => {
    return {
        type: RECEIVE_POSTS,
        data: data
    }
}
//通知 reducer 请求失败的 action。
const receviePostOnError = (message) => {
    return {
        type: RECEIVE_POSTS,
        error: message
    }
}

//action fun xhr查询。
export const getUser = (username, password)=> {
    debugger;
    return (dispatch) => {
        let url = baseUrl + "/user/login/" + username + "/" + password;
        dispatch(requestPosts());
        fetch(url,{
            method:"Get",
            mode:"cors"
        }).then(rs => rs.json(), error => {
            debugger;
            dispatch(receviePostOnError(error.message));
        }).then(rs => {
            debugger;
            dispatch(receviePostOnSuccess(rs));
            console.log("hello")
        })
    }
}



