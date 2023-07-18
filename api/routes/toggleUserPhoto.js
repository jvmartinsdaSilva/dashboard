import { ModifyUser} from "../DataBase/modifyUser.js"
import { GetUserInfos } from "../DataBase/getUserInfos.js"
import { DeleteOld } from "../MenuImagens/DeleteOld.js"

export const ToggleUserPhoto = async (req, res) => {
    const file = req.file    
    if(!file) return res.status(404).json({msg: "Arquivo não encontrado"})

    const fileSrc  = req.file.path
    const fileName = fileSrc.split("/")[1]
    const id = req.params.id
    
    const getUser =  new GetUserInfos
    const user = await getUser.getUserById(id)
    
    if(user.img !== 'defaultUser.jpg') DeleteOld(user.img)
    

    try{
        const saveUser = new ModifyUser
        await saveUser.modifyUserPhoto(id, fileName)

        res.status(202).json({isSucess: true, msg: "Uload realizado com sucesso"})
    } catch(err){
        return {isSucess: false, msm: err}
    }

}