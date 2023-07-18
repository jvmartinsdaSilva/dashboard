import jwt from 'jsonwebtoken'
import 'dotenv/config'

const secreet = process.env.SECREET_TOKEN


export const checkToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token) return res.status(404).json({tokenDenied: true, msg: "Acesso negado"})

    try{
        jwt.verify(token, secreet)
        next()
    } catch(err){
        return res.status(404).json({tokenDenied: true, msg: "Tolken invalido"})
    }   
}