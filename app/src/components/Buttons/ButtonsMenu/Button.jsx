import { useContext, React } from "react"
import { ThemeContext } from "@/context/ThemeProvider"

import * as S from "./style"


export const Button = ({ type, text, ...rest }) => {
    const { themeInfos } = useContext(ThemeContext)

    const colorsButton = type === "negative" ? themeInfos.redColors :  themeInfos.greenColors

    return (
        <S.Button {...rest} color={colorsButton}>{text}</S.Button>
    )
}