const validUser = values => {
    const itisNull = Object.keys(values).filter(value => !values[value])
    if(itisNull.length > 0) return {status: false, msg: `Os campos ` + itisNull + " são obrigatórios"}

}



export const RegisterUser = (req, res) => {
    // const values = req.body

}
const values = {
    name: "joao",
    email: "",
    password: ""
}
console.log(validUser(values))