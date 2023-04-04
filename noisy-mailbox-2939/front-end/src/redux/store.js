import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { authReducer } from "./Reducers/authenticated.reducer";

const rootReducer = combineReducers({
    authReducer: authReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)))

export { store }