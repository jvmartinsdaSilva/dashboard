import { setLocalStorage } from "../LocalStorage/LocalStorage"

export const RegisterUser  = async datas => {
    const apiUrl =  process.env.NEXT_PUBLIC_API_URL
    
    try{
        const data = await fetch(`${apiUrl}/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(datas)
        })
    
        const res = await data.json()
        if(res.sucess){
            const {user, token, graphs} = res
            const userInfo = JSON.stringify(user)
            const graphsInfo = JSON.stringify(graphs)
            setLocalStorage("id", res.user.id)
            setLocalStorage("token",token)
            setLocalStorage("user", userInfo)
            setLocalStorage("graphs", graphsInfo)
        }
        return res
    } catch {
        return {msg: "Desculpe não conseguimos conetar"}
    }
}