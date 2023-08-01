import { client } from "../conection.js"

export class ModifyUser{
    constructor()
    {
        this.connect = async () => {
            await client.connect().catch(err => reject({msg: "Erro aoi conetar", err}))
        }
        this.db = client.db("dashboard")
        this.collection = this.db.collection("users")
    }
    
    modifyUserPhoto(id, fileName){
        return new Promise(async (resolve, reject) => {
            await this.connect()         
            await this.collection.updateOne({_id: id}, {$set: {userImg: fileName}})
                .then(() => resolve({msg: "Atualizado com sucesso"}))
                .catch(err => reject({msg: "Não conseguimos atualizar", err}))
        })
    }

    modifyUserName(id, newNameUser){
        return new Promise(async (resolve, reject) => {
            await this.connect()
            await this.collection.updateOne({_id: id}, {$set: {name: newNameUser}})
                .then(() => resolve({msg: "Atualizado com sucesso"}))
                .catch(err => reject({msg: "Não conseguimos atualizar", err}))
        })
    }

    addGraph(graphId, userId){
        return new Promise(async (resolve, reject) => {
            await this.connect()
            await this.collection.updateOne({_id: userId}, {$addToSet: {graphsId: graphId}})
                .then(() => resolve({msg: "Atualizado com sucesso"}))
                .catch(err => reject({msg: "Não conseguimos atualizar", err}))
        })
    }
}