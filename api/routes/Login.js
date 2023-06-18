import { Authenticate } from "../Methods/Authenticate.js"
import { GenerateToken } from "../Methods/GenerateToken.js"

export const Login = async (req, res) => {
    const datas = {
        email: req.body.email,
        password: req.body.password
    }
    if(!datas.email || !datas.password) return res.status(401).json("Prencha corretamente os campos")

    const checkUser = await Authenticate(datas)
    const {passwordIsValid: isAuthenticate} = checkUser
    if(!isAuthenticate.authenticate) return res.status(isAuthenticate.status).json({msg: isAuthenticate.msg})

    const user = checkUser.user[0]
    const token = GenerateToken(user.userId)

    return res.status(200).json({
        id: user.userId,
        token
    })
}