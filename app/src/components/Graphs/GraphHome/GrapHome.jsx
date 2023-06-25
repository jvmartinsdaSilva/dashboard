import { GraphMenu } from "./GraphMenu/GraphMenu"
import { ShowGraph } from "./ShowGrap/ShowGraph"


export const GraphHome = ({ graphInfos }) => {

    return (
        <>
            <ShowGraph graphInfos={graphInfos}/>
            <GraphMenu />
        </>

    )
}