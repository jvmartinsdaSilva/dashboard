import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const checkToken = (req, res, next) => {
    const id = req.params.id
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token) return res.status(404).json({tokenDenied: true, msg: "Acesso negado"})

    try{
        jwt.verify(token, id)
        next()
    } catch(err){
        return res.status(404).json({tokenDenied: true, msg: "Tolken invalido"})
    }   
}