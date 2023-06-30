import { GetUserInfos } from "../../DataBase/getUserInfos.js";
import { GetGraphInfos } from "../../Graphs/GraphControllers/GetDatas.js";

export const GetGraphs = async (req, res) => {
    const userId = req.params.id

    try{
        const getInfos = new GetUserInfos()
        const {graphsPath} = await getInfos.getUserById(userId)
        const graphs = await GetGraphInfos(graphsPath)
        return res.status(202).json({graphs})
    } catch(err) {
        return res.status(404).json({msg: "Desculpe não conseguimos resgatar seus gráficos", err})
    }
}