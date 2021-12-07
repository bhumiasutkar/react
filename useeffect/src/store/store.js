import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { UserReducer, TodoReducer } from './reducer';
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "./sagas/rootSagas";
import thunk from "redux-thunk";


const rootStore = combineReducers({
    userRed: UserReducer,
    todoTask: TodoReducer
});

const sagaMiddleware = createSagaMiddleware();

//if multiple middleware

const middleware = [sagaMiddleware, thunk];

const store = createStore(rootStore, {}, composeWithDevTools(applyMiddleware(...middleware))); // {} is enhancer
sagaMiddleware.run(watcherSaga);

export default store;