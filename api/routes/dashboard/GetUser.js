import { GetUserInfos } from "../../DataBase/User/getUserInfos.js";
import { GetGraphInfos } from "../../DataBase/Graphs/GetGraphs.js";

export const GetUser = async (req, res) => {
    const id = req.params.id
    try {
        const getUser = new GetUserInfos()
        const userInfos = await getUser.getUserById(id)
        
        const graphs = await GetGraphInfos(id)
        const user = {
            name: userInfos.name,
            id: userInfos._id,
            img: userInfos.userImg,
            graphs
            
        }

        return res.json(user)

    } catch (err) {
        console.log(err)
        return res.json("User not found")
    }

}