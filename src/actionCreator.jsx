import {  login, profile, users } from "./DAL/axiosREST"
/*________________ACTION_CREATOR_____________ */
export let setActors = (data) => {
  return { type: 'SET-ACTORS', data: data }
}

export let setCurrentPage = (page) => {
  return { type: 'SET-CURRENT-PAGE', page: page }
}

export let setTotalCount = (totalCount) => {
  return { type: 'SET-TOTAL-COUNT', totalCount: totalCount }
}

export let onloadPage = (param) => {
  return { type: 'SET-PRELOADER', param: param }
}

export let followUser = (id) => {
  return { type: 'FOLLOW-USER', id: id }
}

export let unfollowUser = (id) => {
  return { type: 'UNFOLLOW-USER', id: id }
}

export let setDisableButton = (isload, id) => {
  return { type: 'SET-DISABLE-BUTTON', isload: isload, id: id }
}

export let setAccount = (obj) => {
  return { type: 'SET-ACCOUNT', obj }
}

export let actionLogin = (data) => {
  return { type: 'LOGIN', data }
}

export let setStatus = (status) => {
  return { type: 'SET_STATUS', status}
}


/*_________________THUNK_CREATOR________________ */
export let getUsersThunkPage = (page) => {
  return (dispatch) => { 
    dispatch(setCurrentPage(page));
    dispatch(onloadPage(true));
    users.getUsers({ page }).then(data => {   
      dispatch(setActors(data));
      dispatch(onloadPage(false));
    }) }
}

export let getUsersThunk = (count, page) => {
  return (dispatch) => { 
    dispatch(onloadPage(true));
    users.getUsers({ count, page }).then(data => {   
      dispatch(setActors(data));
      dispatch(onloadPage(false));
      dispatch(setTotalCount(data.totalCount));
    }) }
}

export let follow = (id) => {
  return (dispatch) => { 
    dispatch(setDisableButton(true, id));
    users.updateFollow(id)
      .then(data => {     
        dispatch(followUser(id))
        dispatch(setDisableButton(false, id));
      }) }
}

export let unfollow = (id) => {
  return (dispatch) => { 
    dispatch(setDisableButton(true, id));
    users.deleteFollow(id)
      .then(response => {     
        dispatch(unfollowUser(id));
        dispatch(setDisableButton(false, id));
      }) }
}

export let get_status_thunk = (id) => {
  return (dispatch) => { 
    profile.getProfileStatus(id)
      .then(response => dispatch(setStatus(response.data))) } //_________________________________________________
}

export let set_profile_status_thunk = (status) => {
  return (dispatch) => {
    profile.setProfileStatus(status)
    .then(response => {
      if(response.data.resultCode === 0) dispatch(setStatus(status));
    })
  }
}

export let get_profile_info_thunk = (id) => {
  return (dispatch) => { 
    profile.getProfileInfo(id)
      .then(response => dispatch(setAccount(response.data))) }
}

export let pass_auth = () => {
  return (dispatch) => {
    login.authentification()
    .then(response => 
      dispatch(actionLogin(response.data.data)))
  }
}
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



