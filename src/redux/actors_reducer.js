

const initial = {
    items: []
}

const actors_reducer = (state = initial, action) => {
    switch (action.type) {
        case 'SET-ACTORS':
            debugger
            return {
                ...state,
                items: [...action.data.items]
            }
        default:
            return state;
    }
}



export default actors_reducer;