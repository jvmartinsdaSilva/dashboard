import { useContext } from "react"
import { GraphContext } from "@/context/GraphContext/GraphContext"

import { WelcomeMessage } from "../../WelcomeMessage/WelcomeMessage"
import { GraphMenu } from "../GraphOptions/GraphMenu/GraphMenu"
import {GraphInfos } from "../ShowGrap/GraphInfos/GraphInfos"

import * as S from "./Style"

export const GraphMain = () => {
    const graphMenu = useContext(GraphContext)
    const graph = graphMenu.graphOn

    return (
        <S.Container>
            {graph && (
                <>
                    <GraphInfos graphInfos={graph} />
                    <GraphMenu />
                </>
            )}
            {!graph && <WelcomeMessage />}
        </S.Container>
    )
}