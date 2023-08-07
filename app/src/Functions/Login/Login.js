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
    const {user, token, id, graphs} = res
    const userInfo = JSON.stringify(user)
    const graphsInfo = JSON.stringify(graphs)
    if(res.token){
        setLocalStorage("id", id)
        setLocalStorage("token", token)
        setLocalStorage("user", userInfo)
        setLocalStorage("graphs", graphsInfo)
    }

    return res
}