import 'dotenv/config'
import jwt from 'jsonwebtoken'


export const GenerateToken =  id => {
    const secret = `${process.env.SECRET_TOKEN}${id}`
    try{
        const token =  jwt.sign({
            id,
        }, id, {expiresIn: 10800})
        return token
    } catch(err){
        return err
    }
}