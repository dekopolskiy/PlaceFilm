import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Log_out from './components/Header/Pages_header/Log_out/Log_out';
import ContentContainer from './components/Content/ContentContainer';
import All_filmsContainer from './components/All_films/All_filmsContainer';
import ActorsContainer from './components/Actors/ActorsContainer';
import AccountContainer from './components/Header/Pages_header/Account/AccountContainer';

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
        render={() => <ContentContainer />} />
      <Route path='/all_films'
        render={() => <All_filmsContainer />} />
      <Route path='/Actors'
        render={() => <ActorsContainer />} />
      <Route path='/log_out' component={Log_out} />
      <Route path='/account' component={AccountContainer} />
      <Footer />
    </div>
  );
}



export default App;
