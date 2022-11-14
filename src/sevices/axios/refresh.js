import {Instance} from "./axios";


export const refreshToken = () => {
    const refresh = localStorage.getItem("refresh")
    Instance.post("token/refresh/",{
        "refresh":refresh
    }).then((access) => {
        return access
    })
}
