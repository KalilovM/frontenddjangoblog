import axios from "axios";

const API = "http://localhost:8000/api/"

export const signIn = async (data,authMode) => {
    try {
        if (authMode === "signin"){
            await axios.post("http://localhost:8000/api/auth/jwt/create/", data).then((res) => {
                localStorage.setItem("access",res.data.access)
                localStorage.setItem("refresh",res.data.refresh)
            })} else {
            await axios.post("http://localhost:8000/api/auth/users/",data).then((res) => {
                console.log(res)
                axios.post("http://localhost:8000/api/auth/jwt/create/", {username:data.username, password:data.password}).then((res) => {
                    localStorage.setItem("access",res.data.access)
                    localStorage.setItem("refresh",res.data.refresh)
                })
            })
        }
    } catch (error) {
        if (error) {
            throw error.response.data.detail
        }
    }
}