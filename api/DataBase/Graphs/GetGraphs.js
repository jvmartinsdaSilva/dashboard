import { client } from "../conection.js"


class GetGraphs{
    constructor()
    {
        this.connect = async () => await client.connect().catch(err => ({msg: "Não conseguimos conectar ao Banco"}, err))
        this.db = client.db("dashboard")
        this.collection = this.db.collection("graphs")
    }
    getByUserId(userId){
        return new Promise((resolve, reject) => {
            this.connect().catch(err => reject(err.msg))  
            const graphs = this.collection.find({ownerUser: userId}).toArray()
            return resolve(graphs)
        })
    }
}

export const GetGraphInfos = async userId => {
    const getGraphs = new GetGraphs()
    const graphs = await getGraphs.getByUserId(userId)

    return graphs
}