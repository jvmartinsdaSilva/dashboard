import { getLocalStorage, setLocalStorage } from "../LocalStorage/LocalStorage";


export const getGaphs = async () => {
    const apiUrl =  process.env.NEXT_PUBLIC_API_URL

    const userId = getLocalStorage("id")

    const datas = await fetch(`${apiUrl}/dashboard/getGraphs/${userId}`)
    const res = await datas.json()
    const graphs = res.graphs
    const graphJson = JSON.stringify(graphs)
    setLocalStorage("graphs", graphJson)

    return graphs
}