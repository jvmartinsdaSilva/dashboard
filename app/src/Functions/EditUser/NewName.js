import { getLocalStorage } from "@/Functions/LocalStorage/LocalStorage";

export const NewName = async datas => {
    const apiUrl =  process.env.NEXT_PUBLIC_API_URL


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
