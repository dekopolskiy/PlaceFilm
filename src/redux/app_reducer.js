
let initial = {
    loadAuthisDone: false,
}



const app_reducer = (state = initial, action) => {
    switch (action.type) {
        case 'LOAD_IS_DONE':
            return {
                ...state,
                loadAuthisDone: true
            }
        default:
            return state;
    }
}

export default app_reducer;

