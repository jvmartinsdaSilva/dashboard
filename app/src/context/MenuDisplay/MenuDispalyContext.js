import { createContext, useState } from "react";

export const MenuDisplayContext = createContext({
    display: true,
    toggleDisplay: () => {}
})

export const MenuDisplayProvider = ({children}) => {
    const [display, setDisplay] = useState(true)

    const toggleDisplay = () => setDisplay(!display)

    return(
        <>
            <MenuDisplayContext.Provider value={{display, toggleDisplay}}>
                {children}
            </MenuDisplayContext.Provider>
        </>
    )
}