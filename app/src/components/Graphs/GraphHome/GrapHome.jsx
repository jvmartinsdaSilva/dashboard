import { GraphTest } from "../GraphTypes/GraphTest"
import * as S from "./Style"

export const GraphHome = () => {
    return (
        <S.Container>
            <S.Header>
                <S.Title>Exemple</S.Title>
                <S.Description>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</S.Description>
            </S.Header>
            <GraphTest />
        </S.Container>
    )
}