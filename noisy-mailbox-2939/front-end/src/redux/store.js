import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { authReducer } from "./Reducers/authenticated.reducer";
import { DayReducer } from "./Reducers/day.reducer";

const rootReducer = combineReducers({
    authReducer: authReducer,
    dayReducer : DayReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)))

export { store }