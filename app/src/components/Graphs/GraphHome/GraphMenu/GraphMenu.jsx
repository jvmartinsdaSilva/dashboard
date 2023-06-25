import { useContext, useState } from "react"
import { GraphContext } from "@/context/GraphContext/GraphContext"


import { GraphHeader } from "./GraphHeader/GraphHeader"
import { Dataset } from "./Dataset/Dataset"


import * as S from "./style"
import { Labels } from "./Labels/Labels"


export const GraphMenu = () => {
    const graphMenu = useContext(GraphContext)
    const graphInfos = graphMenu.graphOn
    const datasetsLength = graphInfos.datas.datasets.length

    return (
        <S.Container>
            <GraphHeader />
            <Labels />
            {datasetsLength > 0 ? <Dataset /> : "Adicione dados agora mesmo" }
        </S.Container>
    )
}