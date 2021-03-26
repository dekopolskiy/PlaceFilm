import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ContentContainer from "./components/Content/ContentContainer";
import ActorsContainer from "./components/Actors/ActorsContainer";
import AccountContainer from "./components/Header/Pages_header/Account/AccountContainer";
import RegistrationContainer from "./components/Registration/RegistrationContainer";
import React from "react";
import { connect } from "react-redux";
import { pass_auth } from "./actionCreator";
import logo from "./images/max.gif";
import MyProfileContainer from "./components/Header/Pages_header/MyProfileContainer";

/*Если где-то произойдет переход с помощью Navlink to='path'
          то Route отследит путь Navlink, соотнесет со своим,
          и выведет подходящую компоненту
        */
/* render чтобы пробросить объект props render={()=> <Log_in/> }*/

class App extends React.Component {
  componentDidMount() {
    this.props.isCurrentUser(); // 2.получить данные аутентификации 3.то есть зареганы ли мы на сайте?
    //если да, то actioncreator`ом установить свои данные пользователя, и управлять приложением отталкиваясь от них
    // document.body.addEventListener('mousedown',function(e){ 
    //   e.preventDefault(); 
    // })

  }
  

  render() {
    if (!this.props.loadAuthisDone) {
      //1.данные аутентификации не загружены (..внизу все расписано)
      return (
        <div className="preload">
          <img src={logo} />
        </div>
      );
    }
    return (
      <div className="wrapped_main">
        <Header />
        <main>
          <Switch>{/*Отлавливает первое совпадение, важно ставить /content/something/234 первым
          а потом /content, иначе отработает /content, без switch отработают оба*/}
          <Route path="/content" render={() => <ContentContainer/>} />
          <Route path="/content/767" render={() => <div>hello</div>} />
          <Route path="/myprofile" render={() => <MyProfileContainer />} />
          <Route path="/Actors" render={() => <ActorsContainer />} />
          <Route path="/account/:userId" component={AccountContainer} />
          <Route path="/registration" render={() => <RegistrationContainer />}/>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadAuthisDone: state.appRDC.loadAuthisDone,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isCurrentUser: () => {
      return dispatch(pass_auth()); //4. сделать запрос на проверку аутентификации через ThunkCreator
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//без создания новых данных (app_reducer), просто посылать запрос на auth/me в ComponentDidMont помогает
//но происходит мерцание,
//1.отрисовка isAuthorize в компонентах false, одна картинка, 2.данные приходят через секунду ,картинка
//oтрисовывается заново
//если оперировать только данными IsAuthorize и использовать их как проверку перед отрисовкой App
//1 отрисовка false, прелоадер,  2 отрисовка -- мерцание, нужен boolean индикатора загрузки данных
