export const LoginUser = async userData => {
    try{
        const data = await fetch("http://localhost:8080/login", {
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