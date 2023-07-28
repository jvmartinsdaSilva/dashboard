import React from "react"

import * as S from './style.js'


export const Button = ({text, ...rest}) => {
    return(
        <S.Button {...rest}>{text}</S.Button>
    )
}