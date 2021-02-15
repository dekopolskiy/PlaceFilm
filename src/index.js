import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';


//store.dispatch внутри с this, если передавть то контекст меняется
//bind - чтобы не вызвать, а передать

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
/*
Provider ===> return MyContenxt.Provider value={redux_store}
*/




