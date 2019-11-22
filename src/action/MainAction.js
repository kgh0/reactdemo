import fetch from 'cross-fetch';
import { baseUrl } from "./constant";

export const REQUEST_POSTS = 'Menu/REQUEST_POSTS';

// 发起请求
const requestPosts = () => {
    return {
        type: REQUEST_POSTS,
    }

};

export const RECEIVE_POSTS = 'Menu/RECEIVE_POSTS'

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

export const getMenus = (username) => {
    debugger;
    return (dispatch) => {
        let url =baseUrl +"/menu/getMenus/";
        dispatch(requestPosts());
        fetch(url, {
            method: "Get",
            mode: "cors"
        }).then(rs => rs.json(), error => {
            debugger;
            dispatch(receviePostOnError(error.message));
        }).then(rs => {
            debugger;
            dispatch(receviePostOnSuccess(rs));
            console.log(rs);
        })
    }
}
