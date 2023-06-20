import { getLocalStorage } from "@/Functions/LocalStorage";

export const NewName = async datas => {
    const token = getLocalStorage("token")
    const userId = getLocalStorage("user")

    const data = await fetch(`http://localhost:8080/toggleName/${userId}`, {

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
