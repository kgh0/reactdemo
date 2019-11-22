import { createStore, applyMiddleware,combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from 'history';
import LoginReducer from "./reduce/LoginReducer";
import MainReducer from "./reduce/MainReducer";

export const history = createBrowserHistory()

const rootReducer = combineReducers({
    // router: connectRouter(history),
    login: LoginReducer,
    main: MainReducer
})
const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
}