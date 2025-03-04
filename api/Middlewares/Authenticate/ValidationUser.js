import { SearchEmail } from '../../DataBase/User/searchEmail.js'
import * as Yup from 'yup'

const user_chema = Yup.object().shape({
    name: Yup.string().min(3, "No mínimo 3 letras").required("Nome obrigatório"),
    email: Yup.string().email().required("O campo email é obrigatório"),
    password: Yup.string().min(6, "Minimo 6").required("A senha é obrigatória"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], 'As senhas não conferem').required("Campo obrigatório"),
})


export const ValidationUser = async user => { 
    try{
        const correctSinttax = await  user_chema.validate(user).then(() => true).catch(err => err.errors[0])
        const searchEmail = new SearchEmail()    
        const users = await searchEmail.search(user.email) // Busca se ja temos um usuário utilizando o e-mail
        if (correctSinttax != true) return {valid: false, status: 401, msg: correctSinttax}
        if (users?.results?.length > 0) return {valid: false, status: 401, msg: "Usuario já cadastrado" }
    
        return {valid: true}

    } catch (err){
        return {valid: false, msg: "Estamos com problemas , tente novamente mais tarde"}
    }
}