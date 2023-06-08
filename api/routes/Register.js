import * as Yup from 'yup'

const schema = Yup.object().shape({
    name: Yup.string().min(3, "No mínimo 3 letras").required("Nome obrigatório"),
    email: Yup.string().email().required("O campo email é obrigatório"),
    password: Yup.string().min(6, "Minimo 6").required("A senha é obrigatória"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], 'As senhas não conferem').required("Campo obrigatório"),
})



export const RegisterUser = async (req, res) => {
    const user = req.body
    const isValidUser = await schema.isValid(user)
    const message = isValidUser ? "Cadastrado com sucesso" : "Confira se as informaões estão correats"
   
    res.json(message)
}