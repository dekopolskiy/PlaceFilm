import axios from "axios"


const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

let instanse = axios.create({
    withCredentials: true, //флаг сообщающий браузеру, что необходимо цепляь куки при CORS
    headers: {
        "API-KEY": "46863c0e-deef-4610-a2f3-880014e38f6f" //все запросы кроме GET требуют этого ключа
        //дополнительная безопастность
    }
})


export const users = {
    getUsers: ({ count = 20, page }) => {
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
    getProfileStatus: (id) => {
        return instanse(`${baseURL}profile/status/${id}`)
    },
    setProfileStatus: (status) => {
        return instanse.put(`${baseURL}profile/status`, {status: status})
    }
}

export const registration = {
    log_into_account: (email, password, rememberMe) => {
        return instanse.post(`${baseURL}auth/login`, {email, password, rememberMe})
    },
    log_out_account: () => {
        return instanse.delete(`${baseURL}auth/login`)
    },
}


//DATA ACCESS LAYER - слой доступа к удаленным данным хранилища