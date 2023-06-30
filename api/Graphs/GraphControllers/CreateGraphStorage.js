import fs from "fs"

const PathStorageDefault = "./Graphs/UserGraphs"

export class CreateGraphsStorageByUser{
    createStorage(userId){
        return new Promise((resolve, reject) => {
            const pathStorageUser = `${PathStorageDefault}/${userId}`

            fs.mkdir(pathStorageUser, (err) => {
                if(err) return reject({msg: "Erro ao criar armazenamento", err})

                return resolve({msg: "Criado com sucesso", path: `Graphs\\UserGraphs\\${userId}`})
            })
        })
    }
}