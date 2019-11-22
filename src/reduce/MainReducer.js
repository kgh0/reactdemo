import { REQUEST_POSTS, RECEIVE_POSTS } from "../action/MainAction";

const MainReducer = (state = { isFetching: false }, action) => {
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
export default MainReducer;