import axios from "axios"


const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

let instanse = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "e811390c-3dfa-4cdc-b8f9-fba476829b23"
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

}



//DATA ACCESS LAYER - слой доступа к удаленным данным хранилища