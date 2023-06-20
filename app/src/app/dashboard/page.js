"use client"

import { DashContainer } from "@/components/DashBoardContainer/DashContainer"
import { Menu } from "@/components/Menu/Menu"
import { Graph } from "@/components/Graphs/Graph"

const DashBoard = () => {
    return (
        <DashContainer>
            <Menu />
            <Graph />
        </DashContainer>
    )
}

export default DashBoard