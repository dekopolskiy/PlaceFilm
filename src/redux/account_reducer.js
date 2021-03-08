



const initial = {
    account: null,
    status: '',
}



const account_reducer = (state = initial, action) => {
    switch (action.type) {
        case 'SET-ACCOUNT':
            return {
                ...state,
                account: {...action.obj},
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}



export default account_reducer;