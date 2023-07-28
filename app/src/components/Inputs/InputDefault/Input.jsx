import { useId, React } from "react"
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
            <S.Container  color={color} width={width}>
                {<S.Label htmlFor={labelId}>{label}</S.Label>}
                <S.Input  autoComplete="off"  type={type} id={labelId} {...innerRef}  {...rest}/>
            </S.Container>

        </>
    )
}
