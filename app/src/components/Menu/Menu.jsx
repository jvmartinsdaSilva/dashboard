import { UserInfo } from "@/components/UserInfo/UserInfo"
import { GraphList } from "@/components/GraphList/GraphList"
import { Button } from "@/components/Buttons/DefaultButton/Button"


import * as S from "./Style"
import { MenuOptions } from "../MenuOptions/MenuOptions"

export const Menu = () => {
    return (
        <S.Container>
            <MenuOptions />
            <UserInfo />
            <GraphList />
            <Button text="Novo gráfico" />
        </S.Container>
    )
}