import { useContext, React } from "react"

import { GraphContext } from "@/context/GraphContext/GraphContext"
import { MenuDisplayContext } from "@/context/MenuDisplay/MenuDispalyContext"

import { BurgerButton } from "../Buttons/BurgerButton/BurgerButon"
import { Button } from "../Buttons/DefaultButton/Button"
import * as S from "./style"

export const WelcomeMessage = () => {
    const graphMenu = useContext(GraphContext)
    const {display, toggleDisplay} = useContext(MenuDisplayContext)

    const graphMethods = new graphMenu.graphMethods

    const showGraph = () => {
        graphMethods.newGraph()
    }

    return(
        <S.Container>
            <BurgerButton/>
            <S.MessageContainer>
                <h2>COMEÇE A CRIAR AGORA MESMO!</h2>
                <Button text="Novo gráfico" onClick={() => showGraph()}/>
            </S.MessageContainer>
        </S.Container>
    )
}