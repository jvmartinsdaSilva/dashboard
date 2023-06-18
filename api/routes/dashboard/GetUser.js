import { GetUserInfos } from "../../DataBase/getUserInfos.js";

export const GetUser = async  (req, res) => {
    const id = req.params.id
    try{
        const getUser = new GetUserInfos()
        const user = await getUser.getUserById(id)
        return res.json(user)

    } catch(err) {
        return res.json("User not found")
    }

}