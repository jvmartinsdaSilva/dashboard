"use client"

import { GraphProvider } from "@/context/GraphContext/GraphContext"
import { MenuDisplayProvider } from "@/context/MenuDisplay/MenuDispalyContext"

import { DashContainer } from "@/components/DashBoardContainer/DashContainer"
import { Menu } from "@/components/Menu/Menu"
import { Graph } from "@/components/Graphs/Graph"

const DashBoard = () => {
    return (
        <GraphProvider>
            <MenuDisplayProvider>
                <DashContainer>
                    <Menu />
                    <Graph />
                </DashContainer>
            </MenuDisplayProvider>
        </GraphProvider>
    )
}

export default DashBoard