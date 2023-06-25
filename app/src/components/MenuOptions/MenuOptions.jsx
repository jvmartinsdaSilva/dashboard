import { useContext } from "react"
import { UserContext } from "@/context/User/UserContext"

import { BtnLogout } from "../Buttons/ButtonsSVG/Buttons"
import * as S from "./Style"
import { ToggleTheme } from "../ToggleTheme/ToggleTheme"


export const MenuOptions = () => {
    const {logout} = useContext(UserContext)



    return(
        <S.Container>
            <BtnLogout onClick={() => logout()}/>
            <ToggleTheme />
        </S.Container>
    )
}