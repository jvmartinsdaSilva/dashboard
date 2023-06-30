import fs from "fs"

const PathStorageDefault = "./Graphs/UserGraphs"

export class InsertDatas{
    insertDatas(userId, graphInfos, graphId){
        return new Promise((resolve, reject) => {
            if(!userId) return reject({msg: "Usuário não encontrado"})
            if(!graphInfos) return reject({msg: "O gráfico não pode estar vazio"})

            const filePath = `${PathStorageDefault}/${userId}/${graphId}`
            const strean = fs.createWriteStream(filePath)
            strean.write(JSON.stringify(graphInfos))
            
            strean.on("finish", resolve({msg: "Dados  salvos com sucesso"}))
            strean.on("error", () => reject({msg: "Erro ao armazenar"}))
        })
    }
}