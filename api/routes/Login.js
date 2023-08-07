import { Authenticate } from "../Methods/Authenticate.js"
import { GenerateToken } from "../Methods/GenerateToken.js"

import { GetGraphInfos } from "../DataBase/Graphs/GetGraphs.js";


export const Login = async (req, res) => {
    const datas = {
        email: req.body.email,
        password: req.body.password
    }
    if (!datas.email || !datas.password) return res.status(401).json("Prencha corretamente os campos")

    const checkUser = await Authenticate(datas)
    if (!checkUser.authenticate) return res.status(checkUser.status).json({ msg: checkUser.msg })

    const userInfos = checkUser?.user
    const token = GenerateToken(userInfos._id)
    const graphs = await GetGraphInfos(userInfos._id)


    const user = {
        name: userInfos.name,
        id: userInfos._id,
        img: userInfos.userImg,
    }
    return res.status(200).json({
        id: userInfos._id,
        user,
        token,
        graphs
    })
}