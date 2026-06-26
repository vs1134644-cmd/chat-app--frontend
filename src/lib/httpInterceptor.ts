import axios from "axios"

const httpInterceptor = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true
})


export default httpInterceptor