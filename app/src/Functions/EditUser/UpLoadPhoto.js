import 'dotenv/config'

import { getLocalStorage } from "@/Functions/LocalStorage/LocalStorage"

export const UploadPhoto = async (photo) => {
    
    const formData = new FormData()
    formData.append("avatar", photo )
    const userId = getLocalStorage("id")
    const token = getLocalStorage("token")
    // const apiUrl = "http://localhost:8080/togglePhoto/" +  userId
    const apiUrl = "https://dashboardapi-bgpz.onrender.com"

    try{
        const data = await fetch(`${apiUrl}/togglePhoto/${userId}`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })

        const res = await data.json()
        return {msg: res.msg, sucess: res.isSucess}
    } catch(err) {
        return {err, msg: "Erro ao realizar o uplaod"}
    }
}