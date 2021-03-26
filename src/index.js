import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(//Рендерит React-элемент в DOM-элемент,соблюдая правила сравнения VDOM DOM,
    // сравнения  VDOM1 VDOM2 => DOM
    <React.StrictMode>
        <BrowserRouter> {/*Добавляет функциональность роутинга*/}
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
/*
MyContext =React.createContext();
<MyContext.Provider  store={store}></MyContenxt.Provider>
<MyContext.Consumer> (value) => {}</MyContext.Consumer>
Provider ===> return MyContenxt.Provider value={redux_store}
*/




