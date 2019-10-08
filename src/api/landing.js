import axios from 'axios';

const API_HOST = 'https://frontend-test-assignment-api.abz.agency/api/v1'

export const getUsers = (page = 1, count = 6) => {
    return axios
        .get(`${API_HOST}/users`, {
            params: {
                page,
                count
            }
        })
}

export const getUsersOne = () => {
    return axios.get(`${API_HOST}/users/1`)
}

export const getToken = () => {
    return axios.get(`${API_HOST}/token`)
}

export const getPositions = () => {
    return axios.get(`${API_HOST}/positions`)
}

export const registerUser = (user, token) => {
    return axios.post(`${API_HOST}/users`, user, {
        headers: {
            Token: token,
            'Content-Type': 'multipart/form-data'
        }
    })
}

export default {
    getUsers,
    getUsersOne,
    getToken,
    getPositions,
    registerUser
}