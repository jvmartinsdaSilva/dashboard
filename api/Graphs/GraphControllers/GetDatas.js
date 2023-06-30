import fs from "fs"

class ReadFiles {
    readFile(graphsPath, file) {
        return new Promise((resolve, reject) => {
            const filePath = `${graphsPath}/${file}`

            fs.readFile(filePath, 'utf-8', (err, content) => {
                if (err) return reject(err)

                const fileContent = JSON.parse(content)
                return resolve(fileContent)
            })
        })
    }
}


class GetDatas {
    getDatas(graphsPath) {
        return new Promise((resolve, reject) => {
            fs.readdir(graphsPath, (err, files) => {
                if (err) return reject({ msg: "Erro ao pegar arquivos", err })

                return resolve(files)
            })
        })
    }
}

export const GetGraphInfos = async (graphsPath) => {
    try{
        const getFiles = new GetDatas()
        const readFiles = new ReadFiles()
        const allFiles = await getFiles.getDatas(graphsPath)
        const fileInfos = []
    
        for(let i = 0; i < allFiles.length; i++){
            const file = await readFiles.readFile(graphsPath, allFiles[i])
            fileInfos.push(file)
        }
        return {msg: "Dados coletados com sucesso", graphs: fileInfos}

    } catch (err) {
        return {msg: "Não foi possível recuperar os gráficos", err, graphs: []}
    }

}