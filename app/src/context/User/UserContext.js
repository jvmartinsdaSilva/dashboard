import { cleanStorage } from "@/Functions/LocalStorage";

import { createContext, useState } from "react";
import { useRouter } from "next/navigation"

import { APP_ROUTES } from "@/constants/appRoutes"


const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const {push} = useRouter()
    const [user, setUser] = useState({})

    const login = user => {
        setUser(user)
    }

    const logout = () => {
        cleanStorage()
        push(APP_ROUTES.public.login)
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            <>
                {children}
            </>
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }