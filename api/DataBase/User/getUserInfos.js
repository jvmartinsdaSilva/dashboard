import { client } from "../conection.js"


export class GetUserInfos{
    getUserById(id){
        return new Promise((resolve, reject) => {
            client.connect().catch(err => reject({msg: "Erro ao conetar", connect: false, err}))
            const db = client.db("dashboard")
            const colletion = db.collection("users")
            const user = colletion.findOne({_id: id})
            return resolve(user)
        })
    }
}