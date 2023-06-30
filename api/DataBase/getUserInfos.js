import { db } from "./conection.js"

export class GetUserInfos{
    getUserById(id){
        return new Promise((resolver, reject) => {
            db.query("SELECT * FROM users WHERE userId = ?", [id], (err, result) => {
                if(err) return reject(err)

                const user = result[0]
                return resolver({
                    name: user.userName,
                    img: user.userIMG,
                    graphsPath: user.userGraphs
                })
            })
        })
    }
}
