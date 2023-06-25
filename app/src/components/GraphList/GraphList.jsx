import { useContext } from "react"

import { GraphContext } from "@/context/GraphContext/GraphContext"

import { Message } from "../Message/Message"

import * as S from "./Style"

export const GraphList = () => {
    const graphInfos = useContext(GraphContext)

    const graphs = graphInfos.allGraphs

    return(
        <S.Container>
                <h2>Seus Gráficos</h2>
            <S.List>
                {graphs.length <= 0 && <Message text="Não há graficos" />}
                {graphs.map((graph => (
                    <S.Item key={graph.id}>{graph.title}</S.Item>
                )))}
            </S.List>
        </S.Container>
    )
}