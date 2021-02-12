import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import redux_store from './redux/redux_store';
import MyContext from './MyContext';


//store.dispatch внутри с this, если передавть то контекст меняется
//bind - чтобы не вызвать, а передать

export let rendering = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <MyContext.Provider value={redux_store}>
                    <App/>
                </MyContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

redux_store.subscribe(rendering)
//1.передаем определение функции в функцию(или ссылку
//на функцию)
//этим избегаем лишнего импорта в state.js 
//и после добавления данных в store.state отрисовываем столько сколько нужно

rendering()//1ая отрисовка


