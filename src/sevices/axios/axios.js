import axios from "axios";
import {refreshToken} from "./refresh";

export const Instance = axios.create({
    baseURL: "http://localhost:8000/api/",
})

export const InstanceApi = axios.create({
    baseURL: "http://localhost:8000/api/",
})

InstanceApi.interceptors.request.use((config) => {
    const access = localStorage.getItem("access")
    if (!access) {
        localStorage.removeItem("access")

    }
    config.headers = {
        authorization:`Bearer ${access}`
    }

    return axios(config)

},(error) => {
    Promise.reject(error)
})

InstanceApi.interceptors.response.use((response) => {
    return response
}, (err) => {
    console.log(err)
    if (err?.response.status === 401) {
        const refresh = localStorage.getItem("refresh")
        if (!refresh){
            window.location.href = "/auth"
        }
        const access = refreshToken()
        if (!access){
            localStorage.removeItem("access")
            localStorage.removeItem("refresh")
        }
        err.config.headers = {
            authorization: `Bearer ${access}`
        }

    }
})