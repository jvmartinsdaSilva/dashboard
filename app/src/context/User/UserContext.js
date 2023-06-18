import { createContext, useState } from "react";

const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const login = user => {
        setUser(user)
    }

    return (
        <UserContext.Provider value={{ user, login }}>
            <>
                {children}
            </>
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }