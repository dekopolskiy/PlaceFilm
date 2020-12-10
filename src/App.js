import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Account from './components/Header/Pages_header/Account/Account';
import Log_in from './components/Header/Pages_header/Log_in/Log_in';
import Log_out from './components/Header/Pages_header/Log_out/Log_out';
import Section from './components/Section/Section';

//Database json users
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


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path='/section'  component={Section} />
        <Route path='/comments' render={ () => <Comments dataUsers={jsonUser} dataMessages={jsonMessages}/> } />
        <Route path='/log_in' component={Log_in} />
        <Route path='/log_in' component={Log_out} />
        <Route path='/log_in' component={Account} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
