import { SearchEmail } from '../DataBase/User/searchEmail.js'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    name: Yup.string().min(3, "No mínimo 3 letras").required("Nome obrigatório"),
    email: Yup.string().email().required("O campo email é obrigatório"),
    password: Yup.string().min(6, "Minimo 6").required("A senha é obrigatória"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], 'As senhas não conferem').required("Campo obrigatório"),
})


export const ValidationUser = async user => {
    try{
        const correctSinttax = await schema.isValid(user)
        const searchEmail = new SearchEmail()    
        const users = await searchEmail.search(user.email)
        if (!correctSinttax) return {valid: false, status: 401, msg: "Preencha os dados corretamente" }
        if (users?.results?.length > 0) return {valid: false, status: 401, msg: "Usuario já cadastrado" }
    
        return {valid: true}

    } catch (err){
        return {valid: false, msg: "Estamos com problemas , tente novamente mais tarde"}
    }
}