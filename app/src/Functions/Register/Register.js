export const RegisterUser  = async datas => {
    const apiUrl =  process.env.NEXT_PUBLIC_API_URL
    
    const data = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(datas)
    })

    const res = await data.json()
    return res
}