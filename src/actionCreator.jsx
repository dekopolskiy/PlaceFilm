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
