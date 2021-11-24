import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger'; //thunk saga
import { reducerOne, reducerTwo } from './reducer';

const middelware = applyMiddleware(logger);




/*if we have multiple reducers lets say reducerOne and reducerTwo */

const rootStore = combineReducers({
    firstReducer: reducerOne,
    secondReducer: reducerTwo
});

const store = createStore(rootStore, middelware);

console.log(rootStore);
//export default rootStore;

export default store;


//const store = createStore(reducer); // single reducer
//export default store;

