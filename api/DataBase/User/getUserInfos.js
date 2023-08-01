import { client } from "../conection.js"


export class GetUserInfos{
    getUserById(id){
        return new Promise(async(resolve, reject) => {
            await client.connect().catch(err => reject({msg: "Erro ao conectar"}))
            const db = client.db("dashboard")
            const colletion = db.collection("users")
            const user = await colletion.findOne({_id: id})
            return resolve(user)
        })
    }
}