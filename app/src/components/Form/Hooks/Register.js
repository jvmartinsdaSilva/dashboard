export const RegisterUser  = async datas => {
    console.log(datas)
    const data = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(datas)
    })

    const res = await data.json()
    return res
}