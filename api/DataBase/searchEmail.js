import { db } from "./conection.js"

export class SearchEmail{
    search(email){
       return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE email = ?", [email],
            (err, result) => {
                if(err) return reject(err)

                return resolve(result)
            })
        })
    }
}