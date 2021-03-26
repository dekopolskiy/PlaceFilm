import { SubmissionError } from "redux-form";
import { stopSubmit } from "redux-form";
import { get_captcha, login, profile, registration, users } from "./DAL/axiosREST";
/*________________ACTION_CREATOR_____________ */
export let setActors = (data) => {
  return { type: "SET-ACTORS", data: data };
};

export let setCurrentPage = (page) => {
  return { type: "SET-CURRENT-PAGE", page: page };
};

export let setTotalCount = (totalCount) => {
  return { type: "SET-TOTAL-COUNT", totalCount: totalCount };
};

export let onloadPage = (param) => {
  return { type: "SET-PRELOADER", param: param };
};

export let followUser = (id) => {
  return { type: "FOLLOW-USER", id: id };
};

export let unfollowUser = (id) => {
  return { type: "UNFOLLOW-USER", id: id };
};

export let setDisableButton = (isload, id) => {
  return { type: "SET-DISABLE-BUTTON", isload: isload, id: id };
};

export let setAccount = (data) => {
  return { type: "SET-ACCOUNT", data };
};

export let actionLogin = (data) => {
  return { type: "LOGIN", data };
};

export let setStatus = (status) => {
  return { type: "SET_STATUS", status };
};

export let load_authdata_is_done = () => {
  return { type: "LOAD_IS_DONE" };
};

export let set_captcha = (captcha) => {
  return {type: 'SET_CAPTCHA', captcha}
}

function refactorGetUsers({count=20, page, dispatch}) {
  dispatch(onloadPage(true));
  return users.getUsers(count, page).then((data) => {
    dispatch(setActors(data));
    dispatch(onloadPage(false));
    return data;
  });
}

/*_________________THUNK_CREATOR________________ */
export let getUsersThunkPage = ({page}) => {
  //для подгрузки из-за перехода по страницам
  return (dispatch) => {
    dispatch(setCurrentPage(page));
    refactorGetUsers({page, dispatch});
  };
};

export let getUsersThunk = ({count, page}) => {
  //1-ый запуск
  return (dispatch) => {
    refactorGetUsers({count, page, dispatch}).then((data) =>
      dispatch(setTotalCount(data.totalCount))
    );
  };
};

function updateOrDelete(dispatch, id, updateDeleteMethod, followOrUnfollow) {
  dispatch(setDisableButton(true, id));
  updateDeleteMethod(id).then((data) => {
    dispatch(followOrUnfollow(id));
    dispatch(setDisableButton(false, id));
  });
}

//thunkcreator return thunk refact
export let follow = (id) => {
  return (dispatch) => {
    updateOrDelete(
      dispatch,
      id,
      users.updateFollow.bind(users),
      followUser.bind(this)
    );
  };
};

export let unfollow = (id) => {
  return (dispatch) => {
    updateOrDelete(
      dispatch,
      id,
      users.deleteFollow.bind(users),
      unfollowUser.bind(this)
    );
  };
};

export let get_status_thunk = (id) => {
  return (dispatch) => {
    profile
      .getProfileStatus(id)
      .then((response) => dispatch(setStatus(response.data)));
  }; //_________________________________________________
};

export let set_profile_status_thunk = (status) => {
  return (dispatch) => {
    profile.setProfileStatus(status).then((response) => {
      if (response.data.resultCode === 0) dispatch(setStatus(status));
    });
  };
};

export let get_profile_info_thunk = (id) => {
  return (dispatch) => {
    profile
      .getProfileInfo(id)
      .then((response) => dispatch(setAccount(response.data)));
  };
};

export let set_profile_info_thunk = (user) => {
  return (dispatch) => {
    profile.setProfileInfo(user).then((data) => {
      if (data.data.resultCode === 1) {
        let regexp = data.data.messages[0]
          .match(/->([a-z]+)/i)[1]
          .toLowerCase();
        let action = stopSubmit("profile_form", {
          contacts: { [regexp]: data.data.messages[0] },
        });
        dispatch(action);
      } else {
        dispatch(setAccount(user));
      }
    });
  };
};

export let pass_auth = () => {
  //5 Если не залогинен на samurai, то соотвестенно придет пустой объект
  return (dispatch) => {
    login
      .authentification() //6.дождаться ответа от сервака, всё это время приложение ждет
      .then((response) => {
        dispatch(actionLogin(response.data.data)); //7.ответ получили
        dispatch(load_authdata_is_done()); //8.данные пришли - отрисовка
      });
  };
};

export const login_samurai_thunk = (dataLoginForSend) => {
  debugger
  return (dispatch) => {
    registration.log_into_account(dataLoginForSend).then((data) => {
      if (data.data.resultCode === 0) {
        login
          .authentification()
          .then((response) => {
            dispatch(actionLogin(response.data.data))
            dispatch(set_captcha(''))
          });
      } else {
        if(data.data.resultCode === 10) {
          get_captcha().then( response => dispatch(set_captcha(response.data.url)))
        }
        let action = stopSubmit("login", { _error: `${data.data.messages}` });
        dispatch(action);
      }
    });
  };
};

export const logout_samurai_thunk = () => {
  return (dispatch) => {
    registration
      .log_out_account()
      .then(() =>
        dispatch(actionLogin({ id: null, login: null, email: null }))
      );
  };
};

/*export let log_into_account = (login, password, rememberMe) => {
  return (dispatch) => {
      registration.log_into_account(login, password, rememberMe).then(data => console.log(data))
  }
} */
//Для чего функция возвращает функцию? можно же дописать сразу несколько параметров и делать без return
//Но dispatch в ActorApiContainer ожидает функцию с одним параметром , и даст ей его и сам вызовет эту функцию
//поэтому лучше сделать обертку

//Что это Thunk ? функция возвращающая функцию с параметром dispatch, которая может множество раз использовать dispatch.
//предназначение для асинхронных запросов
//install https://github.com/reduxjs/redux-thunk
//middleware между dispatch({}) и store, dispatch работает только с объектами(action), которые возвразают ActionCreator
//библиотека призвана расширить функционал dispatch
//Thunk меняет архитектуру приложения, ui => dal => bll => ui
//Thunk ===> ui => bll => dll => ui
