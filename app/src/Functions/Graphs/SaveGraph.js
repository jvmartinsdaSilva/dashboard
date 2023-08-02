import "dotenv/config"
import { getLocalStorage } from "../LocalStorage/LocalStorage";

export const SaveGraph = async graphInfos => {
    const apiUrl = "https://dashboardapi-bgpz.onrender.com"
    
    const userId = getLocalStorage("user")
    const graphId = graphInfos.header.id
    


    const data = await fetch(`${apiUrl}/dashboard/saveGraphs/${userId}`, {
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