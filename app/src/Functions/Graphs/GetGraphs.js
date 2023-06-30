import { getLocalStorage } from "../LocalStorage";

export const getGaphs = async () => {
    const userId = getLocalStorage("user")

    const datas = await fetch(`http://localhost:8080/dashboard/getGraphs/${userId}`)

    const graphs = await datas.json()
    return graphs
}