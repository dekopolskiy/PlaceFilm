

const initial = {
    items: [],
    pagesCount: 6
}

const actors_reducer = (state = initial, action) => {
    switch (action.type) {
        case 'SET-ACTORS':
            return {
                ...state,
                items: [...action.data.items],
            }
        default:
            return state;
    }
}



export default actors_reducer;