
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
                isAuthorize: true
            }
        default:
            return state;
    }
}

export default login_reducer;


export let actionLogin = (data) => {
    return {
        type: 'LOGIN', data
    }
};