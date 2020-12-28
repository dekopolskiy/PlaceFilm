import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import redux_store from './redux/redux-store';


//store.dispatch внутри с this, если передавть то контекст меняется
//bind - чтобы не вызвать, а передать

export let rendering = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state = {redux_store.getState()} 
                     dispatch = {redux_store.dispatch.bind(redux_store)} //bind сразу,чтобы потом не плодить import store
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

redux_store.subscribe(rendering)
//1.передаем определение функции в функцию(или ссылку
 //на функцию)
//этим избегаем лишнего импорта в state.js 
//и после добавления данных в store.state отрисовываем столько сколько нужно

rendering()//1ая отрисовка


