import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeProvider"

import * as S from "./style"


export const Button = ({ type, text, ...rest }) => {
    const { themeInfos } = useContext(ThemeContext)

    const colorsButton = type === "negative" ? themeInfos.menuColors.negative : themeInfos.menuColors.positive

    return (
        <S.Button {...rest} color={colorsButton}>{text}</S.Button>
    )
}