import React from "react"

import Link from "next/link"
import * as S from "./style"

export const LinkComponent = ({link, info, children}) => {
    return(
        <S.Container>
            <Link href={link}>{info || children}</Link>
        </S.Container>
    )
}