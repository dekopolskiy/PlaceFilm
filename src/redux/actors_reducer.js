

const initial = {
    items: [],
    currentPage: 1,//увеличить шрифт, по нажатию
    pageSize: 20,//сколько на странице
    totalCount: 0, //всего придет от запроса
    preloader: true,
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
            return {
                ...state,
                idInFollowProgress: action.isload? [...state.idInFollowProgress, action.id] : state.idInFollowProgress.filter((i)=> i != action.id)
            }//if(true) {добавить id пользователя в массив}, как только запрос на серв кончится, и придет false
            //то удаляем из массива
        default:
            return state;
    }
}



export default actors_reducer;

