import { GetUserInfos } from "../../DataBase/User/getUserInfos.js";
import { GetGraphInfos } from "../../DataBase/Graphs/GetGraphs.js";

export const GetUser = async (req, res) => {
    const id = req.params.id
    try {
        const getUser = new GetUserInfos()
        const user = await getUser.getUserById(id)
        const { graphsId } = user

        const graphs = await GetGraphInfos(graphsId)

        return res.json({
            name: user.name,
            img: user.userImg,
            graphs
            // graphs: graphs.graphs,
            // msg: graphs.msg
        })

    } catch (err) {
        console.log(err)
        return res.json("User not found")
    }

}