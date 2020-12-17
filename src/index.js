import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store';




export let rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App store={store}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.observeFunc(rerender); //1.передаем определение функции в функцию
//этим избегаем лишнего импорта в state.js 
//и после добавления данных в state отрисовываем с помощью rerender

rerender()


