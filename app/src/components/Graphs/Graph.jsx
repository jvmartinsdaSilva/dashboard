import { useContext } from "react"
import { GraphContext } from "@/context/GraphContext/GraphContext"

import { GraphHome } from "./GraphHome/GrapHome"

import * as S from "./Style"
import { WelcomeMessage } from "../WelcomeMessage/WelcomeMessage"

export const Graph = () => {
    const graphMenu = useContext(GraphContext)
    const graph = graphMenu.graphOn

    return(
        <S.Container>
            {graph && <GraphHome graphInfos={graph}/>}
            {!graph && <WelcomeMessage />}
        </S.Container>
    )
}