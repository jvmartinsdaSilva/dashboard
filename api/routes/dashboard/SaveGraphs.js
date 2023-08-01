import { InsertDatas } from "../../DataBase/Graphs/InsertDatas.js";
import { GetUserInfos } from "../../DataBase/User/getUserInfos.js";

export const SaveGraphs = async (req, res) => {
    const userId = req.params.id
    const { graphId, graphInfos } = req.body
    if (!userId || !graphInfos) return res.status(404).json({ msg: "Dados incompletos" })

    const getUser = new GetUserInfos()
    const {graphsId} = await getUser.getUserById(userId)
    const thisGraphExist = graphsId.includes(graphId)

    const insertDatas = new InsertDatas()

    try {
        if(!thisGraphExist){
            const create = await insertDatas.createGraph(userId, graphInfos, graphId)
            return res.status(202).json(create.msg)
        }
        const update = await insertDatas.updateGraph(graphInfos, graphId)
        return res.status(202).json(update.msg)
    } catch (err) {
        return res.status(404).json({ msg: "Erro ao criar" , err})
    }

}