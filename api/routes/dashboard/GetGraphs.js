import { GetUserInfos } from "../../DataBase/User/getUserInfos.js";
import { GetGraphInfos } from "../../DataBase/Graphs/GetGraphs.js";

export const GetGraphs = async (req, res) => {
    const userId = req.params.id

    try{
        const getInfos = new GetUserInfos()
        const {graphsId} = await getInfos.getUserById(userId)
        const graphs = await GetGraphInfos(graphsId)
        return res.status(202).json({graphs})
    } catch(err) {
        return res.status(404).json({msg: "Desculpe não conseguimos resgatar seus gráficos", err})
    }
}