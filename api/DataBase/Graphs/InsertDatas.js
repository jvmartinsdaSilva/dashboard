import { client } from "../conection.js"

import { ModifyUser } from "../User/modifyUser.js"

const modifyUser = new ModifyUser()



export class InsertDatas{
    constructor(){
        this.connect = async () => {
            await client.connect().catch(err => reject({msg: "Erro ao conectar", err}))
        }
        this.db = client.db("dashboard")

        this.collection = this.db.collection("graphs")
    }
    createGraph(userId, graphInfos, graphId){
        return new Promise(async (resolve, reject) => {
            this.connect()

            await modifyUser.addGraph(graphId, userId)
            await this.collection.insertOne({_id: graphId, ownerUser:userId , graph: graphInfos})
                .then(() => resolve({msg: "Dados salvos com sucesso"}))
                .catch(err => reject({msg: "Desculpe não conseguimos salvar", err}))
            
        })
    }
    updateGraph(graphInfos, graphId){
        return new Promise(async (resolve, reject) => {
            this.connect()
            
            this.collection.updateOne({_id: graphId}, {$set: {graph: graphInfos}})
                .then(() => resolve({msg: "Dados atualizados com sucesso"}))
                .catch(err => {
                    console.log(err)
                    reject({msg: "Desculpe não conseguimos atualizar"})
                })
        })
    }

}