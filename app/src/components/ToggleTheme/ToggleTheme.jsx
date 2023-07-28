import { useContext, React } from "react"
import { ThemeContext } from "@/context/ThemeProvider"

import { LightSvg } from "./icons/LighSvg"
import { DarkSvg } from "./icons/DarkSvg"

import * as S from "./Style"

export const ToggleTheme = () => {
    const Theme = useContext(ThemeContext)
    const themeName = Theme.theme


    return(
        <S.Container onClick={() =>Theme.toggleTheme()}>
            {themeName === "DarkTheme" && <LightSvg />}
            {themeName === "LightTheme" && <DarkSvg />}
        </S.Container>
    )
}