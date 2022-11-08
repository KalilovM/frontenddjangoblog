import {Instance} from "../services/axios";
import axios from "axios";
import mem from "mem"
import {redirect} from "react-router-dom";




const RefreshToken = async () => {

    try {
        const response = await axios.post("http://localhost:8000/api/token/refresh/", {
            refresh: localStorage.getItem("refresh"),
        })
        const access = response.data.access;
        if (!access) {
            localStorage.removeItem("access")
            localStorage.removeItem("refresh")
            return redirect("/auth")
        }
        localStorage.setItem("access",access)
        console.log("refreshing")
        return access
    } catch (error) {
        console.log(error)
        console.log("error occured and deleted")
        return redirect("/auth")
        // localStorage.removeItem("access")
        // localStorage.removeItem("refresh")
    }
}

const maxAge = 1800

export const MemorizedRefreshToken = mem(RefreshToken, {
    maxAge,
})
