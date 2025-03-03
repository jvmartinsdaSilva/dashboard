import { ModifyUser} from "../../DataBase/User/modifyUser.js"
import { GetUserInfos } from "../../DataBase/User/getUserInfos.js"
import { DeleteOld } from "../../MenuImagens/DeleteOld.js"

export const ToggleUserPhoto = async (req, res) => {
    const file = req.file  
    const fileName = file.filename  
    if(!file) return res.status(404).json({msg: "Arquivo não encontrado"})

    const id = req.params.id
    
    const getUser =  new GetUserInfos
    const user = await getUser.getUserById(id)
    if(!user) return res.status(404).json({msg: "User not found"})
    if(user.userImg !== "defaultUser.jpg") DeleteOld(user.userImg)
    
    
    try{
        const saveUser = new ModifyUser
        console.log(file)
        console.log(fileName)
        await saveUser.modifyUserPhoto(id, fileName)
                
        res.status(202).json({isSucess: true, msg: "Upload realizado com sucesso"})
    } catch(err){
        return res.status(404).json({isSucess: false, err: "É AKI?", msg: "Erro ao salvar imagem"})
    }

}