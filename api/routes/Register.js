import { createUser } from '../DataBase/createUser.js'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    name: Yup.string().min(3, "No mínimo 3 letras").required("Nome obrigatório"),
    email: Yup.string().email().required("O campo email é obrigatório"),
    password: Yup.string().min(6, "Minimo 6").required("A senha é obrigatória"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], 'As senhas não conferem').required("Campo obrigatório"),
})


export const RegisterUser = async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    }
    const isValidUser = await schema.isValid(user)
    
    if(!isValidUser) return res.status(401).json("Insira um usuario valido")

    const create = await createUser(user)
    return res.status(create.status).json(create.msg)
}