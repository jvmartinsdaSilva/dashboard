import { getLocalStorage } from "../LocalStorage/LocalStorage";

export const SaveGraph = async graphInfos => {
    const userId = getLocalStorage("user")
    const graphId = graphInfos.header.id
    


    const data = await fetch(`http://localhost:8080/dashboard/createGraph/${userId}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({graphId, graphInfos})
    })

    const res = await data.json()
    console.log(res)
    return res


}