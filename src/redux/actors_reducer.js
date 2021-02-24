

const initial = {
    items: [],
    currentPage: 1,
    pageSize: 20,
    totalCount: 0,
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
                currentPage: action.page
            }
        case 'SET-TOTAL-COUNT':
            return {
                ...state,
                totalCount: action.totalCount
            }
        default:
            return state;
    }
}



export default actors_reducer;