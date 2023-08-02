import { client } from "../conection.js"


class GetGraphs{
    getByUserId(userId){
        return new Promise(async(resolve, reject) => {
            await client.connect().catch(err => reject({msg: "Não conseguimos conectar"}, err))
            const db = client.db("dashboard")
            const collection = db.collection("graphs")
            const graph = await collection.find({ownerUser: userId}).toArray()
            return resolve(graph)
        })
    }
}

export const GetGraphInfos = async userId => {
    const getGraphs = new GetGraphs()
    const graphs = await getGraphs.getByUserId(userId)
    

    return graphs
}