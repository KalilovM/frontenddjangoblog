import {Instance} from "./axios";


export const refreshToken = async() => {
    const refresh = localStorage.getItem("refresh")
    const token = await Instance.post("token/refresh/",{
        "refresh":refresh
    })
    return token.data.access

}
