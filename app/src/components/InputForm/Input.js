import { useId } from "react"
import * as S from "./style.js"


export const Input = (
    {
        label = '',
        type = 'text',
        name = '',
        ...rest
    }) => {

    const labelId = useId()
    return (
        <>
            <S.Container>
                {<S.Label htmlFor={labelId}>{label}</S.Label>}
                <S.Input type="text" name={name} id={labelId}{...rest} />
            </S.Container>

        </>
    )
}
