import "dotenv/config"
import { setLocalStorage } from "../LocalStorage/LocalStorage"
import { set } from "react-hook-form"

const login = async userData => {
    const apiUrl = "https://dashboardapi-bgpz.onrender.com"
    
    try{                                          
        const data = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(userData)
        })
        const res = await data.json()
        
        return res
    } catch(err) {
        return {
            err,
            msg: "Desculpe não conseguimos conectar!"
        }
    }
}

export const LoginUser = async userDatas => {
    const res = await login(userDatas)
    const {user, token} = res
    const userInfo = JSON.stringify(user)
    if(res.token){
        setLocalStorage("id", res.id)
        setLocalStorage("token",res.token)
        setLocalStorage("user", userInfo)
    }

    return res
}