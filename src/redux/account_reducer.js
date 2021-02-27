



const initial = {
    account: null,
}



const account_reducer = (state = initial, action) => {
    switch (action.type) {
        case 'SET-ACCOUNT':
            return {
                ...state,
                account: {...action.obj},
            }
        default:
            return state;
    }
}



export default account_reducer;