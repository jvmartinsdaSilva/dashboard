import { useContext } from "react"

import { UserContext } from "../../context/User/UserContext"

import * as S from "./Style"

export const UserInfo = () => {
    const { user } = useContext(UserContext)

    return(
        <S.Container>
            {console.log(user)}
            <S.UserPhoto src={`http://localhost:8080/files/${user.img}.jpg`}/>
            <h2>{user.name}</h2>
        </S.Container>
    )
}