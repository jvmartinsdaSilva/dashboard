import * as S from "./style"

import React from "react"

export const Loading = () => {
    return(
        <S.Container>
            <S.LoadOutside>
                <S.LoadInside />
            </S.LoadOutside>
        </S.Container>
    )
}