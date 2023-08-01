import {client} from "../conection.js"

export class SearchEmail{
    search(email){
        return new Promise(async (resolve, reject) => {
            await  client.connect().catch(err => reject({msg: "Erro ao conetar", connect: false, err}))
            const db = client.db("dashboard")
            const collection =  db.collection("users")
            const results = await collection.find({email: email}).toArray()
            return resolve({results})
        })
    }
}