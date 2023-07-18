import { useId } from "react"
import * as S from "./style.js"


export const Input = (
    {
        label = '',
        type = 'text',
        innerRef = '',
        color,
        width = "100%",
        ...rest
    }) => {

    const labelId = useId()
    return (
        <>
            <S.Container color={color} width={width}>
                {<S.Label htmlFor={labelId}>{label}</S.Label>}
                <S.Input {...innerRef}  type={type} id={labelId} {...rest}/>
            </S.Container>

        </>
    )
}
