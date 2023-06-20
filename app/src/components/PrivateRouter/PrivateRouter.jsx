import { useRouter } from "next/navigation"
import { useEffect, useState, useContext } from "react"
import { APP_ROUTES } from "@/constants/appRoutes"

import { checkAuthenticate } from "@/Functions/Authenticate/checkIsAuthenticate"
import { UserContext } from "@/context/User/UserContext"

export const PrivateRouter = ({children}) => {
    const {login} = useContext(UserContext)
    const {push} = useRouter()
    
    const [isAuthenticate, setIsAuthenticate] = useState()

    useEffect(() => {
        const check = async () => {
            const data = await checkAuthenticate()
            setIsAuthenticate(data.authenticate)

            data.authenticate && login(data.user)
        }

        check()
        if(isAuthenticate === false) {
            alert("Toekn invalido")
            push(APP_ROUTES.public.login)
        }
    }, [isAuthenticate, push])

    return(
        <>
            {!isAuthenticate && null}
            {isAuthenticate && children}
        </>
    )
}