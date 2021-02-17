import storage_users_reducer from "./storageUsers-reducer";

const { createStore, combineReducers } = require("redux");
const { default: content_reducer } = require("./pageContent-reducer");
const { default: dialogs_reducer } = require("./pageDialogs-reducer");


let reducers = combineReducers({ 
    pageContent: content_reducer, //1)инициализирует часть state 2)меняет часть state  
    pageDialogs: dialogs_reducer, //1)инициализирует часть state 2)меняет часть state
    pageUsers: storage_users_reducer,
})


let store = createStore(reducers); 



export default store;

//store.getState().pageContent.listSerials
/*
1)Запуск redux_store
2)Запуск reducers
3)Запуск content_reducers и dialogs_reducers
4)pageContent, PageDialogs проиинициализорваны, state заполнен
5)передача state через функционал react-redux функции map и connect
6)Соответственно названия pageContent и pageDialogs имеют значения
если до этого использовал их без redux библиотеки
store.getState().pageContent.listSerials
*/