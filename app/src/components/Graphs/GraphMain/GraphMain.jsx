import { useContext, React } from "react"
import { GraphContext } from "@/context/GraphContext/GraphContext"
import { MenuDisplayContext } from "@/context/MenuDisplay/MenuDispalyContext"

import { WelcomeMessage } from "../../WelcomeMessage/WelcomeMessage"
import { GraphMenu } from "../GraphOptions/GraphMenu/GraphMenu"
import { GraphInfos } from "../ShowGrap/GraphInfos/GraphInfos"
import { BurgerButton } from "@/components/Buttons/BurgerButton/BurgerButon"

import * as S from "./Style"

export const GraphMain = () => {
    const graphMenu = useContext(GraphContext)
    const graph = graphMenu.graphOn
    const {display} = useContext(MenuDisplayContext)

    return (
        <S.Container isOpen={display}>
            <BurgerButton />
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