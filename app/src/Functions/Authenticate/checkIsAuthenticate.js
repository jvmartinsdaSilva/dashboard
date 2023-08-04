import 'dotenv/config'
import { getLocalStorage } from "../LocalStorage/LocalStorage";


export const checkAuthenticate = async () => {
    const apiUrl = "https://dashboardapi-bgpz.onrender.com"
    const token = getLocalStorage("token")
    const id = getLocalStorage("id")

    if(!token || !id) return {authenticate: false , msg: ""}

    const isAuthenticate = await fetch(`${apiUrl}/dashboard/${id}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await isAuthenticate.json()
    const {acess} = data
    if(!acess){
        return {
            authenticate: false,
            msg: data.msg
        }
    }
    const userInfos = getLocalStorage("user")
    const user = JSON.parse(userInfos)

    return{
        authenticate: true,
        user
    }

}