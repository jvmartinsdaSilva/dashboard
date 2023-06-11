import { Authenticate } from "../Methods/Authenticate.js"

export const Login = async (req, res) => {
    const datas = {
        email: req.body.email,
        password: req.body.password
    }
    if(!datas.email || !datas.password) return res.status(401).json("Prencha corretamente os campos")

    const user = await Authenticate(datas)
    if(!user.autheticate) return res.status(user.status).json(user.msg)

    return res.status(user.status).json(user.msg)
}