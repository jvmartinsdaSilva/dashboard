import 'dotenv/config'

import { getLocalStorage } from "@/Functions/LocalStorage/LocalStorage"

export const UploadPhoto = async (photo) => {
    const apiUrl = process.env.API_URL

    const formData = new FormData()
    formData.append("avatar", photo )
    console.log("ola")
    const userId = getLocalStorage("user")
    const token = getLocalStorage("token")
    console.log(token)

    try{
        const data = await fetch(`${apiUrl}/togglePhoto/${userId}`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })

        const res = await data.json()
        return {msg: res, sucess: res.isSucess}
    } catch(err) {
        return {err, msg: "Erro ao realizar o uplaod"}
    }
}