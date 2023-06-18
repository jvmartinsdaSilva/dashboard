import 'dotenv/config'
import jwt from 'jsonwebtoken'

const secreet = process.env.SECRET_TOKEN

export const GenerateToken =  id => {
    try{
        const token =  jwt.sign({
            id,
        }, secreet, {expiresIn: 10800})
        return token
    } catch(err){
        return err
    }
}