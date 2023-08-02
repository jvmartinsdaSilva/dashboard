import "dotenv/config"
import { setLocalStorage } from "../LocalStorage/LocalStorage"

const login = async userData => {
    const apiUrl = process.env.API_URL
    
    try{
        const data = await fetch(`${apiUrl}/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        const user = await data.json()
        
        return user
    } catch(err) {
        return {
            err,
            msg: "Desculpe não conseguimos conectar!"
        }
    }
}

export const LoginUser = async userDatas => {
    const user = await login(userDatas)
    if(user?.token){
        setLocalStorage("token", user.token)
        setLocalStorage("user", user.id)
    }

    return user
}