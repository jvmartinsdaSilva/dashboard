import { client } from "../conection.js"


class GetGraphs{
    getById(graphId){
        return new Promise(async(resolve, reject) => {
            await client.connect().catch(err => reject({msg: "Não conseguimos conectar"}, err))
            const db = client.db("dashboard")
            const collection = db.collection("graphs")
            const graph = await collection.findOne({_id: graphId})
            return resolve(graph)
        })
    }
}

export const GetGraphInfos = async (graphsId) => {
    const graphs = []
    const getGraphs = new GetGraphs()

    for(const graphId of graphsId){
        const graph = await getGraphs.getById(graphId)
        graphs.push(graph.graph)
    }
    return graphs
}