import axios from 'axios'

const localHost = "http://localhost:4000/"
const remoteHost = "https://blood-line.herokuapp.com/"

let baseURL;

if(process.env.NODE_ENV === 'development'){
    baseURL = localHost
}else{
    baseURL = remoteHost
}

export const httpRequest =  axios.create({
    baseURL,
    withCredentials : true
})
