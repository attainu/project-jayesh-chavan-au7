import axios from 'axios'

const localHost = "http://localhost:4000/"

export const httpRequest =  axios.create({
    baseURL: localHost,
    withCredentials : true
})

export const httpFileUpload = axios.create({
    baseURL : localHost,
    withCredentials : true,
    headers : { 'Content-type' : 'multipart/form-data' }
})