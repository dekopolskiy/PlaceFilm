import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Account from './components/Header/Pages_header/Account/Account';
import Log_in from './components/Header/Pages_header/Log_in/Log_in';
import Log_out from './components/Header/Pages_header/Log_out/Log_out';
import ContentContainer from './components/Content/ContentContainer';
import SelectFilmToBuyContainer from './components/SelectFilmToBuy/SelectFilmToBuyContainer';

/*Если где-то произойдет переход с помощью Navlink to='path'
          то Route отследит путь Navlink, соотнесет со своим,
          и выведет подходящую компоненту
        */
/* render чтобы пробросить объект props render={()=> <Log_in/> }*/

const App = () => {
  return (
    <div>
      <Header />
      <Route path='/content'
             render={ () => <ContentContainer />} />
      <Route path='/buy_film'
             render={ () => <SelectFilmToBuyContainer />} />  
      <Route path='/log_in' component={Log_in} />
      <Route path='/log_out' component={Log_out} />
      <Route path='/account' component={Account} />
      <Footer />
    </div>
  );
}



export default App;
