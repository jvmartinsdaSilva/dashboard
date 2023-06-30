import { GetUserInfos } from "../../DataBase/getUserInfos.js";
import { GetGraphInfos } from "../../Graphs/GraphControllers/GetDatas.js";

export const GetUser = async  (req, res) => {
    const id = req.params.id
    try{
        const getUser = new GetUserInfos()
        const user = await getUser.getUserById(id)

        const {graphsPath} = user
        const graphs = await GetGraphInfos(graphsPath)

        return res.json({
            name: user.name,
            img: user.img,
            graphs: graphs.graphs,
            msg: graphs.msg
        })

    } catch(err) {
        return res.json("User not found")
    }

}