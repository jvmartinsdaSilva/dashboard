import "dotenv/config"
import { getLocalStorage } from "../LocalStorage/LocalStorage";

export const getGaphs = async () => {
    const apiUrl = "https://dashboardapi-bgpz.onrender.com"

    const userId = getLocalStorage("user")

    const datas = await fetch(`${apiUrl}/dashboard/getGraphs/${userId}`)
    const res = await datas.json()
    const graphs = res.graphs
    console.log(res)
    return graphs
}