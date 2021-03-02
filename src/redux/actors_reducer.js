

const initial = {
    items: [],
    currentPage: 1,
    pageSize: 100,
    totalCount: 0,
    preloader: true,
    buttonDisable: false,
    idInFollowProgress: [],
}

const actors_reducer = (state = initial, action) => {
    switch (action.type) {
        case 'SET-ACTORS':
            return {
                ...state,
                items: [...action.data.items],
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.page,
            }
        case 'SET-TOTAL-COUNT':
            return {
                ...state,
                totalCount: action.totalCount,
            }
        case 'SET-PRELOADER':
            return {
                ...state,
                preloader: action.param,
            }
        case 'FOLLOW-USER':
            return {
                ...state,
                items: [...state.items].map(i => {
                    if(i.id === action.id) {
                        return {
                            ...i,
                            followed: true
                        }
                    }
                    return i
                })
            }
        case 'UNFOLLOW-USER':
            return {
                ...state,
                items: [...state.items].map( i => {
                    if(i.id === action.id) {
                        return {
                            ...i,
                            followed: false
                        }
                    }
                    return i
                })
            }
        case 'SET-DISABLE-BUTTON':
<<<<<<< HEAD
            console.log(action.isload)
            console.log(state.idInFollowProgress);
            console.log( [...state.idInFollowProgress, action.id]);
            console.log(state.idInFollowProgress.filter((i)=> i != action.id))
            return {
                ...state,
                idInFollowProgress: action.isload? [...state.idInFollowProgress, action.id] : state.idInFollowProgress.filter((i)=> i != action.id)
            }//if(true) {добавить id пользователя в массив}, как только запрос на серв кончится, и придет false
            //то удаляем из массива
=======
            return {
                ...state,
                idInFollowProgress: action.isload? [...state.idInFollowProgress, action.id] 
                : state.idInFollowProgress.filter((i)=> i != action.id)
            }
>>>>>>> a5fb32fed85bf90fee29751db412c5f1ed89bb8a
        default:
            return state;
    }
}



export default actors_reducer;