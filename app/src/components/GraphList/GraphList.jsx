import * as S from "./Style"
import { Message } from "../Message/Message"


export const GraphList = () => {
    const graphs = []

    return(
        <S.Container>
                <h2>Seus Gráficos</h2>
            <S.List>
                {graphs.length <= 0 && <Message text="Não há graficos" />}
                {graphs.map((graph => (
                    <S.Item>{graph}</S.Item>
                )))}
            </S.List>
        </S.Container>
    )
}