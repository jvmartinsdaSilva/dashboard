import { GraphTest } from "../../GraphTypes/GraphTest"

import * as S from "./Style"

export const ShowGraph = ({ graphInfos }) => {
    return (
        <S.Container>
            <S.Header>
                <S.Title>{graphInfos?.header.title}</S.Title>
                <S.Description>{graphInfos?.header.description}</S.Description>
            </S.Header>
            <GraphTest datas={graphInfos?.datas} type={graphInfos?.header.type} />
        </S.Container>
    )
}