import { db } from "./conection.js"


export class ModifyUser{
    modifyUserPhoto(id, fileName){
        return new Promise((resolve, reject) => {
            
            db.query("UPDATE users SET `userIMG` = ? WHERE `userID` = ?", [fileName, id], (err) => {
                if(err) return reject(err)
                return resolve("Sucess")
            })

        })
    }


    modifyUserName(id, newNameUser){
        return new Promise((resolve, reject) => {
            db.query("UPDATE users SET `userName` = ? WHERE `userID` = ?", [newNameUser, id], (err) => {
                if(err) return reject(err)

                return resolve("Editado com sucesso")
            })
        })
    }
}