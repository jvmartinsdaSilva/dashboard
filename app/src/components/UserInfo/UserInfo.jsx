import { useContext, React } from "react"
import { UserContext } from "../../context/User/UserContext"

import { BtnEdit } from "../Buttons/ButtonsSVG/Buttons"

import * as S from "./Style"

export const UserInfo = () => {
    const { user } = useContext(UserContext)

    return(
        <S.Container>
            <S.UserPhoto image={`http://localhost:8080/files/${user.img}`}/>
            <S.UserName>
                {user.name}
                <BtnEdit />
            </S.UserName>
        </S.Container>
    )
}