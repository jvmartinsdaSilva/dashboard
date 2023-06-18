"use client"
import { DashContainer } from "@/components/DashBoardContainer/DashContainer"
import { useContext } from "react"
import { UserContext } from "../../context/User/UserContext"
import { Menu } from "@/components/Menu/Menu"
import { UserInfo } from "@/components/UserInfo/UserInfo"




const DashBoard = () => {
    const { user } = useContext(UserContext)

    return (
        <DashContainer>
            <Menu>
                <UserInfo />
            </Menu>
            
        </DashContainer>
    )
}

export default DashBoard