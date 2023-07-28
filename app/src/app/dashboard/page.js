"use client"
import React from "react"

import { GraphProvider } from "@/context/GraphContext/GraphContext"
import { MenuDisplayProvider } from "@/context/MenuDisplay/MenuDispalyContext"

import { DashContainer } from "@/components/DashBoardContainer/DashContainer"
import { Menu } from "@/components/Menu/Menu"
import { GraphMain } from "@/components/Graphs/GraphMain/GraphMain"

const DashBoard = () => {
    return (
        <GraphProvider>
            <MenuDisplayProvider>
                <DashContainer>
                    <Menu />
                    <GraphMain />
                </DashContainer>
            </MenuDisplayProvider>
        </GraphProvider>
    )
}

export default DashBoard