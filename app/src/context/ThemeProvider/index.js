import { createContext, useState } from "react"
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { DarkTheme } from "@/Themes/Dark";
import { LightTheme } from "@/Themes/Light";

export const ThemeContext = createContext({
    theme: "DarkTheme",
    toggleTheme: () => { },
    themeInfos: {},
})

const Themes = {
    DarkTheme: DarkTheme,
    LightTheme: LightTheme
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("DarkTheme");

    const toggleTheme = () => {
        const newTheme = theme === "DarkTheme" ? "LightTheme" : "DarkTheme"
        setTheme(newTheme)
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themeInfos: Themes[theme] }}>
            <ThemeProviderStyled theme={Themes[theme]}>
                {children}
            </ThemeProviderStyled>
        </ThemeContext.Provider>
    )
}