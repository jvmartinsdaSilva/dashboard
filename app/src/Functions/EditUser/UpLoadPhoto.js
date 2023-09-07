import { getLocalStorage } from "@/Functions/LocalStorage/LocalStorage"

export const UploadPhoto = async (photo) => {
    const apiUrl =  process.env.NEXT_PUBLIC_API_URL
    
    const formData = new FormData()
    formData.append("avatar", photo )
    const userId = getLocalStorage("id")
    const token = getLocalStorage("token")


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
        return {err, msg: err}
    }
}