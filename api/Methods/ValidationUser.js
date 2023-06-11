import { SearchEmail } from '../DataBase/searchEmail.js'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    name: Yup.string().min(3, "No mínimo 3 letras").required("Nome obrigatório"),
    email: Yup.string().email().required("O campo email é obrigatório"),
    password: Yup.string().min(6, "Minimo 6").required("A senha é obrigatória"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], 'As senhas não conferem').required("Campo obrigatório"),
})


export const ValidationUser = async user => {
    const correctSinttax = await schema.isValid(user)
    const searchEmail = new SearchEmail()

    const userExist = await searchEmail.search(user.email)

    if (!correctSinttax) return {valid: false, status: 401, msg: "Preencha os dados corretamente" }
    if (userExist.length > 0) return {valid: false, status: 401, msg: "Usuario já cadastrado" }

    return {valid: true}
}