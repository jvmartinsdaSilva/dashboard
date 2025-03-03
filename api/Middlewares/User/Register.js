import { createUser } from '../../DataBase/User/createUser.js'
import { ValidationUser } from '../Authenticate/ValidationUser.js'

export const RegisterUser = async (req, res) => {
    const userInfos = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    }
    const isValidUser = await ValidationUser(userInfos)
    console.log(isValidUser)
    if (!isValidUser.valid) return res.status(isValidUser.status).json({msg: isValidUser.msg})
    const create = await createUser(userInfos)

    return res.status(create.status).json({msg: create.msg, sucess: create.success, user: create.user, graphs: create.graphs, token: create.token})
}