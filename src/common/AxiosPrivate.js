import axios from "axios";

import {MemorizedRefreshToken} from "./RefreshToken";


axios.defaults.url = "http://localhost:8000/api/"

axios.interceptors.request.use(
    async (config) => {
        const access = localStorage.getItem("access")

        if (access) {
            config.headers = {
                ...config.headers,
                authorization: `Bearer ${access}`
            }
        }
        return config

    },error => {
        console.log("onReject")
        Promise.reject(error)
    }
)

axios.interceptors.response.use((response) => response,
    async (error) =>{
        const config = error?.config
        if (error?.response?.status === 401) {
            const access = await MemorizedRefreshToken()
            if (access) {
                config.headers = {
                    ...config.headers,
                    authorization:`Bearer ${access}`
                }
            }
            return axios(config)
        }
        return Promise.reject(error)
    }

)