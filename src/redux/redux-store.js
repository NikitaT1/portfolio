import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'

let Reducer = combineReducers({
    form: formReducer,
})


let store = createStore(Reducer);


window.store = store;


export default store;