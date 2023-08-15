import { useContext,React } from "react"

import { GraphContext } from "@/context/GraphContext/GraphContext"
import { MenuDisplayContext } from "@/context/MenuDisplay/MenuDispalyContext"

import { MenuOptions } from "../MenuOptions/MenuOptions"
import { UserInfo } from "@/components/UserInfo/UserInfo"
import { GraphList } from "@/components/GraphList/GraphList"
import { Button } from "@/components/Buttons/DefaultButton/Button"
import { BurgerButton } from "../Buttons/BurgerButton/BurgerButon"

import * as S from "./Style"

export const Menu = () => {
    const graphMenu = useContext(GraphContext)
    const {display, toggleDisplay} = useContext(MenuDisplayContext)

    const graphMethods = new graphMenu.graphMethods

    const showGraph = () => {
        graphMethods.newGraph()
        toggleDisplay()
    }
    
    return (
        <S.Container isOpen={display}>
            <BurgerButton />
            <MenuOptions />
            <UserInfo />
        <S.BottomContainer>
            <GraphList />
            <Button text="Novo gráfico" onClick={() => showGraph()} />
        </S.BottomContainer>
        </S.Container>
    )
}