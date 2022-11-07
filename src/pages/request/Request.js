import axios from "axios";

//TODO add url to make more flexible

//Function for making requests to urls and auto refresh if token has been expired
export const request = async (url,state) => {
    try {
        await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("access")}`
            }
        }).then((res) => {
            console.log(res.data)
            state(res.data)
        })
    } catch (error) {
        if (error?.response?.status === 401) {
            await axios.post('http://localhost:8000/api/token/refresh/', {refresh: localStorage.getItem("refresh")}).then((res) => {
                localStorage.setItem("access", res.data.access)
                request(url)
                console.log("working catch end")
            })
        }
    }
}