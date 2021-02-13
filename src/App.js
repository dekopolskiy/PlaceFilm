import { Route } from 'react-router-dom';
import './App.css';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Account from './components/Header/Pages_header/Account/Account';
import Log_in from './components/Header/Pages_header/Log_in/Log_in';
import Log_out from './components/Header/Pages_header/Log_out/Log_out';
import ContentContainer from './components/Content/ContentContainer';
import CommentsContainer from './components/Comments/CommentsContainer';

/*Если где-то произойдет переход с помощью Navlink to='path'
          то Route отследит путь Navlink, соотнесет со своим,
          и выведет подходящую компоненту
        */
/* render чтобы пробросить объект props render={()=> <Log_in/> }*/

const App = (props) => {

  return (
    <div>
      <Header />
      <Route path='/content' component={ContentContainer} />
      <Route exact path='/comments' render={() => <CommentsContainer/>} />
      <Route path='/log_in' component={Log_in} />
      <Route path='/log_out' component={Log_out} />
      <Route path='/account' component={Account} />
      <Footer />
    </div>
  );
}




export default App;
