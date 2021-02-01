import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    // headers: {
    //     'API-KEY': '3c8eaec0-ed46-4c77-96aa-ae8c79446bf6'
    // }
})


const usersAPI = {

    getProfile: (userId) => {
        return instance.get(`/profile/${userId}`)
    },

    getUsers: (pageSize, currentPage) => {
        return instance.get(`/users?count=${pageSize}&page=${currentPage}`)
    },

    getAuthStatus: () => {
        return instance.get(`/auth/me`)
    },

    postAuthRequest: (email, password) => {
        return instance.post(`/auth/login`, {
            email: email,
            password: password
        })
    },

    deleteAuthSession: () => {
        return instance.delete(`/auth/login`)
    }
}

export default usersAPI;