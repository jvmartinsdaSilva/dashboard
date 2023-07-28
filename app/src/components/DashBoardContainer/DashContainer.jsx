import React from "react"

import * as S from "./Style"


export const DashContainer = ({children, ...rest}) => {
    return(
        <S.Container infos={...rest}>
            {children}
        </S.Container>
    )
}