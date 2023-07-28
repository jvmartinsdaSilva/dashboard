import React from "react"
import * as S from "./style"


export const SaveButton = ({text, ...rest}) => {
    return(
        <S.Container>
            <S.Button {...rest}>{text}</S.Button>
        </S.Container>
    )

}