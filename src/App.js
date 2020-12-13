import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Account from './components/Header/Pages_header/Account/Account';
import Log_in from './components/Header/Pages_header/Log_in/Log_in';
import Log_out from './components/Header/Pages_header/Log_out/Log_out';
import Content from './components/Content/Content';



const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path='/section'  render={ () => <Content picsImg={ props.picsImg } />} />
        <Route path='/comments' exact render={ () => <Comments dataUsers={props.jsonUser} dataMessages={props.jsonMessages}/> } />
        <Route path='/log_in' component={Log_in} />
        <Route path='/log_out' component={Log_out} />
        <Route path='/account' component={Account} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
