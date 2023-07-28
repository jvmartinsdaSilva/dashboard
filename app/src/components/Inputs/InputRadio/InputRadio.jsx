import { useId, React } from "react"

import * as S from "./style"

export const InputRadio = ({label, name, check, ...rest}) => {
    const labelId = useId()
    return(
        <S.Label htmlFor={labelId}>
            <input type="radio" id={labelId} name={name} checked={check} {...rest}/>
            <span>{label}</span>
        </S.Label>
    )
}