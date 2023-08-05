import { Authenticate } from "../Methods/Authenticate.js"
import { GenerateToken } from "../Methods/GenerateToken.js"

import { GetGraphInfos } from "../DataBase/Graphs/GetGraphs.js";


export const Login = async (req, res) => {
    console.log("login")
    const datas = {
        email: req.body.email,
        password: req.body.password
    }
    if(!datas.email || !datas.password) return res.status(401).json("Prencha corretamente os campos")

    const checkUser = await Authenticate(datas)
    const {isAuthenticate} = checkUser
    if(!isAuthenticate.authenticate) return res.status(isAuthenticate.status).json({msg: isAuthenticate.msg})

    const userInfos = checkUser?.user
    const token = GenerateToken(userInfos._id)
    const graphs = await GetGraphInfos(userInfos._id)


    const user = {
        name: userInfos.name,
        id: userInfos._id,
        img: userInfos.userImg,
        graphs
    }

    console.log("Finishing")

    return res.status(200).json({
        id: userInfos._id,
        user,
        token
    })
}