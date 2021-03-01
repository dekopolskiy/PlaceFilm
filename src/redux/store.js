import all_films_reducer from "./all_films_reducer";
import actors_reducer from "./actors_reducer";
import account_reducer from "./account_reducer";
import login_reducer from "./login_reducer";

const { createStore, combineReducers } = require("redux");
const { default: content_reducer } = require("./content_reducer");


let reducers = combineReducers({ 
    contentRDC: content_reducer, //{mainPoster:, listSerials:, newPosterBody}//запускается store, запускается каждый reducer, возвращает state 
    all_filmsRDC: all_films_reducer, //{all_films: []} //заполняет this._state 
    actorsRDC: actors_reducer,//{items:,currentPage:,pageSize:,}//каждый редьюсер отвечает за отдельную часть state
    accountRDC: account_reducer,//{acount: null}
    loginRDC: login_reducer, //{data: {login:,id:,email:,}}
})


let store = createStore(reducers); 



export default store;

//store.getState().pageContent.listSerials
/*
1)Запуск store
2)Запуск reducers
3)Запуск content_reducers, dialogs_reducers
4)pageContent, PageDialogs проиинициализорваны объектами, state заполнен
5)передача state через функционал react-redux функции map и connect
6)Соответственно названия pageContent, pageDialogs имеют значения
если до этого использовал их без redux библиотеки
store.getState().pageContent.listSerials
*/