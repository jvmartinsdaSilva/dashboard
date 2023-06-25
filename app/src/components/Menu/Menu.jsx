import { UserInfo } from "@/components/UserInfo/UserInfo"
import { GraphList } from "@/components/GraphList/GraphList"
import { Button } from "@/components/Buttons/DefaultButton/Button"


import * as S from "./Style"
import { MenuOptions } from "../MenuOptions/MenuOptions"
import { useContext } from "react"
import { GraphContext } from "@/context/GraphContext/GraphContext"

export const Menu = () => {
    const graphMenu = useContext(GraphContext)

    const graphMethods = new graphMenu.graphMethods
    

    return (
        <S.Container>
            <MenuOptions />
            <UserInfo />
            <GraphList />
            <Button text="Novo gráfico" onClick={() => graphMethods.newGraph()} />
        </S.Container>
    )
}