"use client"

import { GraphProvider } from "@/context/GraphContext/GraphContext"

import { DashContainer } from "@/components/DashBoardContainer/DashContainer"
import { Menu } from "@/components/Menu/Menu"
import { Graph } from "@/components/Graphs/Graph"

const DashBoard = () => {
    return (
        <GraphProvider>
            <DashContainer>
                <Menu />
                <Graph />
            </DashContainer>
        </GraphProvider>
    )
}

export default DashBoard