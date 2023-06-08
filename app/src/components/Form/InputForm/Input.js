import { useId } from "react"
import * as S from "./style.js"


export const Input = (
    {
        label = '',
        type = 'text',
        innerRef = '',
        ...rest
    }) => {

    const labelId = useId()
    return (
        <>
            <S.Container>
                {<S.Label htmlFor={labelId}>{label}</S.Label>}
                <S.Input {...innerRef} type={type} id={labelId} {...rest}/>
            </S.Container>

        </>
    )
}
