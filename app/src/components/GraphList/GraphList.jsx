import { useContext} from "react"

import { GraphContext } from "@/context/GraphContext/GraphContext"
import { MenuDisplayContext } from "@/context/MenuDisplay/MenuDispalyContext"

import { Message } from "../Message/Message"

import * as S from "./Style"

export const GraphList = () => {
    const { allGraphs: graphs, graphMethods } = useContext(GraphContext)
    const {toggleDisplay} = useContext(MenuDisplayContext)

    const graphMethod = new graphMethods()

    const showGraph = graph => {
        graphMethod.toggleGraph(graph)
        toggleDisplay()
    }

    return (
        <S.Container>
            <h2>Seus Gráficos</h2>
            <S.List>
                {graphs?.length <= 0 && <Message text="Não há graficos" />}
                {console.log(graphs)}
                {graphs?.map((graph => (
                    <S.Item
                        key={graph.header.id}
                        onClick={() => showGraph(graph)}>
                        {graph.header.title}
                    </S.Item>
                )))}
            </S.List>
        </S.Container>
    )
}