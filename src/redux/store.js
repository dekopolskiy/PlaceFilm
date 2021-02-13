const { createStore, combineReducers } = require("redux");
const { default: content_reducer } = require("./pageContent-reducer");
const { default: dialogs_reducer } = require("./pageDialogs-reducer");


let reducers = combineReducers({ 
    pageContent: content_reducer, //1)инициализирует state 2)меняет state  
    pageDialogs: dialogs_reducer, //1)инициализирует state 2)меняет state
})


let store = createStore(reducers); 



export default store;

//store.getState().pageContent.listSerials
/*
1)Запуск redux_store
2)Запуск reducers
3)Запуск content_reducers и dialogs_reducers
4)pageContent, PageDialogs проиинициализорваны, state заполнен
5)передача state через props в react
6)Соответственно названия pageContent и pageDialogs имеют значения
если до этого использовал их без redux библиотеки
store.getState().pageContent.listSerials
*/