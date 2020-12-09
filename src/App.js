import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Account from './pages_header/Account/Account';
import Log_in from './pages_header/Log_in/Log_in';
import Log_out from './pages_header/Log_out/Log_out';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path='/section' exact component={Section} />
        <Route path='/comments' exact component={Comments} />
        <Route path='/log_in' exact component={Log_in} />
        <Route path='/log_out' exact component={Log_out} />
        <Route path='/account' exact component={Account} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
