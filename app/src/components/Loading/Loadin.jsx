import * as S from "./style"

import React from "react"

export const Loading = ({loadinStatus}) => {
    return(
        <S.Container isLoading={loadinStatus} >
                <S.LoadInside />
        </S.Container>
    )
}