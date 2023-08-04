import 'dotenv/config'
import { getLocalStorage } from "@/Functions/LocalStorage/LocalStorage";

export const NewName = async datas => {
    const apiUrl = "https://dashboardapi-bgpz.onrender.com"
    // const apiUrl = "http://localhost:8080"

    const token = getLocalStorage("token")
    const userId = getLocalStorage("id")

    const data = await fetch(`${apiUrl}/toggleName/${userId}`, {

        method: "POST",
        headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${token}`
            
        },
        body: JSON.stringify(datas)
    })

    const res = await data.json()

    return{
        sucess: res.isSucess,
        msg: res.msg
    }
}
