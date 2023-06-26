import { useContext, useState } from "react"
import { GraphContext } from "@/context/GraphContext/GraphContext"


import { Message } from "@/components/Message/Message"
import { GraphHeader } from "./GraphHeader/GraphHeader"
import { Dataset } from "./Dataset/Dataset"
import { Labels } from "./Labels/Labels"

import * as S from "./style"


export const GraphMenu = () => {
    const { graphOn, graphMethods } = useContext(GraphContext)
    const graphMethod = new graphMethods

    const labelsLength = graphOn.datas.labels.length
    const datasetsLength = graphOn.datas.datasets.length


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
        </S.Container>
    )
}