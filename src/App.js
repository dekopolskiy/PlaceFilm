import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Log_in from './pages/Log_in/Log_in';
import Page_fifa from './pages/Page_fifa/Page_fifa';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path='/section' component={ Section } />
        <Route path='/comments' component={ Comments } />
        <Route path='/fifa' component={Page_fifa}/>
        <Route path='/log_in' component={Log_in} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
