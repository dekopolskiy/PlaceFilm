
let initial = {
    data: {
        id: null,
        login: null,
        email: null
    },
    isAuthorize: false,
}



const login_reducer = (state = initial, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                data: {...action.data},
                isAuthorize: Object.values(action.data).every(i => i === undefined || i === null)? false : true,
            }
        default:
            return state;
    }
}

export default login_reducer;

