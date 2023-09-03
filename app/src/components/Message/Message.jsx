import React from "react"

import { Button } from "../Buttons/ButtonsMenu/Button"

import * as S from "./style"

export const Message = ({text, confirm}) => {
    return(
        <S.Container>
            <p>{text}</p>
            {confirm && <Button text={confirm.txt} onClick={confirm.event} /> }
        </S.Container>
    )
}