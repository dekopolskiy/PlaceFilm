import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let jsonUser = [
  { id: 1, nameUser:'Ivan'},
  { id: 2, nameUser:'Aleksey'},
  { id: 3, nameUser:'Fedor'},
  { id: 4, nameUser:'Dmitry'},
  { id: 5, nameUser:'Smerdyakov'}
]

//Database json messages
let jsonMessages = [
  { name: 'first', value: 'Hi all!!!' },
  { name: 'second', value: 'How are you?' },
  { name: 'third', value: 'What kind of ...?' },
];


//Database films
let picsImg = [
  { name: 'Game of Thrones', img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/49/Game_of_Thrones.jpg/224px-Game_of_Thrones.jpg' },
  { name: 'Breaking bad', img: 'https://static.wikia.nocookie.net/breakingbad/images/0/00/BB_S2_poster.jpg/revision/latest?cb=20170524134840' },
  { name: 'Whiplash', img: 'https://static.my-shop.ru/product/3/273/2720666.jpg' },
  { name: 'Batman Begins', img: 'https://www.hdclub.ua/files/film/big/bigi4cfadcf220845.jpg' },
  { name: '1917', img: 'https://gl.weburg.net/00/movies/8/37869/original/7496930.jpg' },
  { name: 'Breaking bad', img: 'https://static.wikia.nocookie.net/breakingbad/images/0/00/BB_S2_poster.jpg/revision/latest?cb=20170524134840' },
  { name: 'Batman Begins', img: 'https://www.hdclub.ua/files/film/big/bigi4cfadcf220845.jpg' },
  { name: 'Whiplash', img: 'https://static.my-shop.ru/product/3/273/2720666.jpg' },
  { name: 'Batman Begins', img: 'https://www.hdclub.ua/files/film/big/bigi4cfadcf220845.jpg' },
  { name: '1917', img: 'https://gl.weburg.net/00/movies/8/37869/original/7496930.jpg' },
  { name: 'Joker', img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/84934543-5991-4c93-97eb-beb6186a3ad7/600x900' },
  { name: 'Game of Thrones', img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/49/Game_of_Thrones.jpg/224px-Game_of_Thrones.jpg' },
]

ReactDOM.render(
  <React.StrictMode>
    <App jsonUser={jsonUser} jsonMessages={jsonMessages} picsImg={picsImg}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
