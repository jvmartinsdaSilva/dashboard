import { getLocalStorage, setLocalStorage } from "./LocalStorage/LocalStorage";

export const toggleTheme = () => {
    const theme = getLocalStorage('theme')
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setLocalStorage('theme', newTheme)
}