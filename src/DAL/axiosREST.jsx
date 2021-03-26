import axios from "axios"


const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

let instanse = axios.create({
    withCredentials: true, //флаг сообщающий браузеру, что необходимо цепляь куки при CORS
    headers: {
        "API-KEY": "3291f849-da91-4ce9-9921-6650bf28d2d0" //все запросы кроме GET требуют этого ключа
        //дополнительная безопастность
    }
})


export const users = {
    getUsers: (count, page ) => {
        return instanse(`${baseURL}users/?count=${count}&page=${page}`).then(response => response.data)
    },
    updateFollow: (id) => {
        return instanse.post(`${baseURL}follow/${id}`).then(response => response.data)
    },
    deleteFollow: (id) => {
        return instanse.delete(`${baseURL}follow/${id}`).then(response => response.data)
    },
}

export const login = {
    authentification: () => {
        return instanse(`${baseURL}auth/me`)
    },
}

export const profile = {
    getProfileInfo: (id) => {
        return instanse(`${baseURL}profile/${id}`)
    },
    setProfileInfo: (user) => {
        return instanse.put(`${baseURL}profile`, user)
    },
    getProfileStatus: (id) => {
        return instanse(`${baseURL}profile/status/${id}`)
    },
    setProfileStatus: (status) => {
        return instanse.put(`${baseURL}profile/status`, {status: status})
    }
}

export const registration = {
    log_into_account: (loginDataforSend) => {
        let {email, password, checkbox: rememberMe = false, captcha = ''} = loginDataforSend;
        return instanse.post(`${baseURL}auth/login`, {email, password, rememberMe, captcha})
    },
    log_out_account: () => {
        return instanse.delete(`${baseURL}auth/login`)
    },
}


export const get_captcha = () => {
    return instanse.get(`${baseURL}security/get-captcha-url`)
}


//DATA ACCESS LAYER - слой доступа к удаленным данным хранилища