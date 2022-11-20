import axios from "axios";
import { refreshToken } from "./refresh";

export const Instance = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {

    }
})

export const InstanceApi = axios.create({
    baseURL: "http://localhost:8000/api/",
})

InstanceApi.interceptors.request.use(async (config) => {
    const access = localStorage.getItem("access")
    if (access) {
        config.headers = {
            ...config.headers,
            authorization: `Bearer ${access}`
        }
    }

    return config

}, (error) => {
    Promise.reject(error)
})

InstanceApi.interceptors.response.use((response) => {
    return response
}, async (err) => {
    const config = err?.config
    if (err?.response?.status === 401 && !config?.send) {
        config.send = true

        const access = await refreshToken()
        if (!access) {
            localStorage.removeItem("access")
            localStorage.removeItem("refresh")
            window.location.href = "/signup"
        }
        if (access) {
            localStorage.setItem("access", access)
            config.headers = {
                ...config.headers,
                authorization: `Bearer ${access}`
            }
        }

        return axios(config)
    }
    return Promise.reject(err)
})
