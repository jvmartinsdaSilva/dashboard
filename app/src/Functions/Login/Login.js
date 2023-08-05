import { setLocalStorage } from "../LocalStorage/LocalStorage"

const login = async userData => {
    const apiUrl =  process.env.NEXT_PUBLIC_API_URL
    try{                                          
        const data = await fetch(`${apiUrl}/login`, {
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
            msg: "Desculpe não conseguimos conectar"
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