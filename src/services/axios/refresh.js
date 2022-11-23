import { Instance } from "./axios";


export const refreshToken = async () => {
    const refresh = localStorage.getItem("refresh")
    try {
        const token = await Instance.post("token/refresh/", {
            "refresh": refresh
        })

        return token.data.access
    }
    catch (error) {
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
        return null
    }
}
