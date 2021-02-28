

const initial = {
    items: [],
    currentPage: 1,
    pageSize: 100,
    totalCount: 0,
    preloader: true,
    isFollow: false
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
        case 'SET-FOLLOW-USER':
            return {
                ...state,
                isFollow: true
            }
        case 'SET-UNFOLLOW-USER':
            return {
                ...state,
                isFollow: false
            }
        default:
            return state;
    }
}



export default actors_reducer;