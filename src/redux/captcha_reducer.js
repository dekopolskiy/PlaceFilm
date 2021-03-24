const initialState = {
    captcha: ''
}

export const captcha_reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SET_CAPTCHA':
        return { captcha :action.captcha }

    default:
        return state
    }
}
