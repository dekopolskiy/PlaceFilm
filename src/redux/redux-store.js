const { createStore, combineReducers } = require("redux");
const { default: content_reducer } = require("./pageContent-reducer");
const { default: dialogs_reducer } = require("./pageDialogs-reducer");


let reducers = combineReducers({ 
    pageContent: content_reducer, //1)инициализирует state 2)меняет state  
    pageDialogs: dialogs_reducer, //1)инициализирует state 2)меняет state
})


let redux_store = createStore(reducers); 



export default redux_store;