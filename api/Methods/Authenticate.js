import { SearchEmail } from "../DataBase/searchEmail.js"
import bcrypt from 'bcrypt'

class ComparePass{
    passwordValid(user, testPassword){
        return new Promise((resolve, reject) => {
            bcrypt.compare(testPassword, user.pass, (err, result) => {
                if(err) return reject(err)
                if(!result) return resolve({autheticate: false, status: 404, msg: "Senha incorreta"})
                
                
                return resolve({autheticate: true, status: 202, msg: "Credenciais validas"})
            })
        })
    }
}

export const Authenticate = async datas => {
    const getUser = await new SearchEmail().search(datas.email)
    if(getUser.length <= 0) return {autheticate: false, status: 404, msg: "Usúario não encontrado"}

    const checkPassword = await new ComparePass().passwordValid(getUser[0], datas.password)
    return checkPassword
}