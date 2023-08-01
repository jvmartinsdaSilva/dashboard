import { useContext, useState, React } from "react"

import { GraphContext } from "@/context/GraphContext/GraphContext"

import { SaveGraph } from "@/Functions/Graphs/SaveGraph"

import { Message } from "@/components/Message/Message"
import { GraphHeader } from "../GraphHeader/GraphHeader"
import { Dataset } from "../Dataset/Dataset"
import { Labels } from "../Labels/Labels"
import { SaveButton } from "@/components/Buttons/SaveButton/SaveButton"

import * as S from "./style"
import { getGaphs } from "@/Functions/Graphs/GetGraphs"


export const GraphMenu = () => {
    const [serverMessage, setServerMessage] = useState()
    const { graphOn, graphMethods } = useContext(GraphContext)

    const graphMethod = new graphMethods

    const labelsLength = graphOn.datas.labels.length
    const datasetsLength = graphOn.datas.datasets.length

    const messgeMenu = message => {
        setServerMessage(message)

        setTimeout(() => setServerMessage(""), 3000)
    }

    const attGraphs = async () => {
        const save = await SaveGraph(graphOn)
        messgeMenu(save)
        const graphsAtt = await getGaphs()
        graphMethod.attGraphs(graphsAtt)
    }


    return (
        <S.Container>
            {/* {console.log(graphOn)} */}
            <GraphHeader />
            {
                labelsLength > 0 ?
                    <Labels /> :
                    <Message
                        text="Não há rótulos"
                        confirm={{ txt: "Adicionar", event: () => graphMethod.addLabel() }} />
            }


            {
                datasetsLength > 0
                    ? <Dataset />
                    : <Message text="Você ainda não adicionou nenhuma categoria"
                        confirm={{ txt: "Adicionar", event: () => graphMethod.modifyDatasets() }} />
            }

            <SaveButton text="Salvar conteúdo" onClick={() => attGraphs()}/>
            {serverMessage && <Message text={serverMessage} />}
            <Message text="Antes de trocar  de gráfico, lembre-se de salvar as alterações" />
        </S.Container>
    )
}