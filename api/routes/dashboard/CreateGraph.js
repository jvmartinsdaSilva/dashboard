import { InsertDatas } from "../../Graphs/GraphControllers/InsertDatas.js";

export const CreateGraph = async (req, res) => {
    const userId = req.params.id
    const { graphId, graphInfos } = req.body

    if (!userId || !graphInfos) return res.status(404).json({ msg: "Dados incompletos" })

    try {
        const createGraph = new InsertDatas()
        const create = await createGraph.insertDatas(userId, graphInfos, graphId)
        return res.status(202).json(create.msg)
    } catch (err) {
        return res.status(404).json({ msg: "Erro ao criar" })
    }

}