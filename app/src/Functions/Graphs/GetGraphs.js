import { getLocalStorage } from "../LocalStorage/LocalStorage";

export const getGaphs = async () => {
    const userId = getLocalStorage("user")

    const datas = await fetch(`http://localhost:8080/dashboard/getGraphs/${userId}`)
    const res = await datas.json()
    const graphs = res.graphs
    console.log(res)
    return graphs
}