import { useContext, React } from "react"
import { UserContext } from "../../context/User/UserContext"

import { BtnEdit } from "../Buttons/ButtonsSVG/Buttons"

import * as S from "./Style"

export const UserInfo = () => {
    const { user } = useContext(UserContext)
    const userImg = user.img
    const apiUrl = "https://dashboardapi-bgpz.onrender.com"
    

    return(
        <S.Container>
            <S.UserPhoto image={`${apiUrl}/files/${userImg}`}/>
            <S.UserName>
                {user.name}
                <BtnEdit />
            </S.UserName>
        </S.Container>
    )
}