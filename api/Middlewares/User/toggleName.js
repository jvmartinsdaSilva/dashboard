import { GetUserInfos } from "../../DataBase/User/getUserInfos.js";
import { ModifyUser } from "../../DataBase/User/modifyUser.js";

export const ToggleName = async (req, res) => {
    const newNameUser = req.body.newName
    const id = req.params.id
    if(!newNameUser || newNameUser.length < 3) return res.status(404).json({msg: "Por favor digite um nome válido"})

    const getUser = new GetUserInfos
    const user = await getUser.getUserById(id)
    if(!user) return res.status(404).json({msg: "Usuario não encontrado"})

    try{
        const modifyUser = new ModifyUser
        const modifyName =await  modifyUser.modifyUserName(id, newNameUser)

        return res.status(202).json({isSucess: true, msg: modifyName.msg})
    } catch(err){
        res.status(404).json({isSucess: false, msg: err })
    }

}