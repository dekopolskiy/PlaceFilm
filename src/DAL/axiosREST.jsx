import axios from "axios"


const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

let instanse = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "46863c0e-deef-4610-a2f3-880014e38f6f"
    }
})

export const getUser = (count, page) => {
    return instanse(`${baseURL}users/?count=${count}&page=${page}`).then(response => response.data)
};

export const updateFollow = (id) => {
    return instanse.post(`${baseURL}follow/${id}`).then(response => response.data)
}

export const deleteFollow = (id) => {
    return instanse.delete(`${baseURL}follow/${id}`).then(response => response.data)
}



//DATA ACCESS LAYER - слой доступа к удаленным данным хранилища