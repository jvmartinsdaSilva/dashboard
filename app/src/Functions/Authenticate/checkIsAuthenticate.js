import 'dotenv/config'
import { getLocalStorage } from "../LocalStorage/LocalStorage";


export const checkAuthenticate = async () => {
    const apiUrl = "https://dashboardapi-bgpz.onrender.com"
    const token = getLocalStorage("token")
    const id = getLocalStorage("user")

    if(!token || !id) return {authenticate: false , msg: ""}

    const isAuthenticate = await fetch(`${apiUrl}/dashboard/${id}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await isAuthenticate.json()


    if(data.tokenDenied){
        return {
            authenticate: false,
            msg: data.msg
        }
    }

    return{
        authenticate: true,
        user: data
    }
}