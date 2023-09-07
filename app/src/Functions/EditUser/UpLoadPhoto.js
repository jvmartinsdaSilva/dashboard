import { getLocalStorage } from "@/Functions/LocalStorage/LocalStorage"

export const UploadPhoto = async (photo) => {
    const apiUrl =  process.env.NEXT_PUBLIC_API_URL 
    const formData = new FormData()
    formData.append("avatar", photo )
    const userId = getLocalStorage("id")
    const token = getLocalStorage("token")
    const data = await fetch(`${apiUrl}/togglePhoto/${userId}`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    })

    const res = await data.json()
    return {msg: res.msg, sucess: res.isSucess}

    // try{
    // } catch(err) {
    //     const info = err.json()
    //     return {err, msg: "Erro ao realizar o uplaod"}
    // }
}