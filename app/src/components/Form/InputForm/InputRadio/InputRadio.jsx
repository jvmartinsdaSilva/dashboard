import * as S from "./style"


import { useId } from "react"

export const InputRadio = ({label, name}) => {
    const labelId = useId()
    return(
        <S.Label htmlFor={labelId}>
            <input type="radio" id={labelId} name={name} />
            <span>{label}</span>
        </S.Label>
    )
}