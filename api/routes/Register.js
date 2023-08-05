import { createUser } from '../DataBase/User/createUser.js'
import { ValidationUser } from '../Methods/ValidationUser.js'

export const RegisterUser = async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    }
    const isValidUser = await ValidationUser(user)

    if (!isValidUser.valid) return res.status(isValidUser.status).json({msg: isValidUser.msg})


    const create = await createUser(user)
    return res.status(create.status).json({msg: create.msg, sucess: create.success})
}