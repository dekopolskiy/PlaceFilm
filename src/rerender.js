import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



export let rerender = (obj, func) => {

    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={obj} addUsr={func}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

