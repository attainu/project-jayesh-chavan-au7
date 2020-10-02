import axios from 'axios'

const localHost = "http://localhost:4000/"

export const httpRequest =  axios.create({
    baseURL: localHost,
    withCredentials : true
})
