import { GetGraphInfos } from "../../DataBase/Graphs/GetGraphs.js";

export const GetGraphs = async (req, res) => {
    const userId = req.params.id
    try{
        const graphs = await GetGraphInfos(userId)
        return res.status(202).json({graphs})
    } catch(err) {
        return res.status(404).json({msg: "Desculpe não conseguimos resgatar seus gráficos", err})
    }
}