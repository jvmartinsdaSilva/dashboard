import { client } from "../conection.js"


class GetGraphs{
    constructor()
    {
        this.connect = () => client.connect().catch(err => reject({msg: "Não conseguimos conectar"}, err))
        this.db = client.db("dashboard")
        this.collection = this.db.collection("graphs")
    }
    getByUserId(userId){
        return new Promise(async(resolve, reject) => {
            await this.connect()   
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