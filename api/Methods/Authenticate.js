import { SearchEmail } from "../DataBase/User/searchEmail.js"
import bcrypt from 'bcrypt'

class ComparePass{
    passwordValid(user, testPassword){
        return new Promise((resolve, reject) => {
            bcrypt.compare(testPassword, user.password, (err, result) => {
                if(err) return reject(err)
                if(!result) return resolve({authenticate: false, status: 404, msg: "Senha incorreta"})
                
                return resolve({authenticate: true, status: 202, msg: ""})
            })
        })
    }
}

export const Authenticate = async datas => {
    try{
        const getUser = await new SearchEmail().search(datas.email)
    
        if(getUser?.results?.length <= 0) return {passwordIsValid: {
            authenticate: false, status: 404, msg: "Usúario não encontrado"
        }}
        const user = getUser?.results[0]
        const checkPassword = await new ComparePass().passwordValid(user, datas.password)
        return {
            isAuthenticate: checkPassword,
            user
        }

    } catch (err) {
        return {
            isAuthenticate: {authenticate: false, msg: `Erro: ${err}`}
        }
    }
}