import { getUsers } from "./DAL/axiosREST"

export let setActors = (data) => {
  return {
    type: 'SET-ACTORS', data: data
  }
}

export let setCurrentPage = (page) => {
  return {
    type: 'SET-CURRENT-PAGE', page: page
  }
}

export let setTotalCount = (totalCount) => {
  return {
    type: 'SET-TOTAL-COUNT', totalCount: totalCount
  }
}

export let onloadPage = (param) => {
  return {
    type: 'SET-PRELOADER', param: param
  }
}

export let followUser = (id) => {
  return {
    type: 'FOLLOW-USER', id: id
  }
}

export let unfollowUser = (id) => {
  return {
    type: 'UNFOLLOW-USER', id: id
  }
}


export let setDisableButton = (isload, id) => {
  return {
    type: 'SET-DISABLE-BUTTON', isload: isload, id: id
  }
}


export let getUsersThunk = (page) => {
  return (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(onloadPage(true));
    getUsers(20, page).then(data => {
      dispatch(setActors(data));
      dispatch(onloadPage(false));
    })
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