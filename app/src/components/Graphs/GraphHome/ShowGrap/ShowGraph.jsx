import { BurgerButton } from "@/components/Buttons/BurgerButton/BurgerButon"
import { GraphIndex } from "./GraphIndex/GraphIndex"

import * as S from "./Style"

export const ShowGraph = ({ graphInfos }) => {
    const graphType = graphInfos?.header.type
    const datas = graphInfos?.datas

    const datasFormat = {
        labels: datas?.labels.map(item => item?.label),
        datasets: datas.datasets.map(dataset => {
            const dataValues = dataset.data.map(data => data.label)

            return{
                label: dataset.label,
                data: dataValues,
                backgroundColor: dataset.backgroundColor,
                borderColor: dataset.borderColor
            }
        })
    }


    return (
        <S.Container>
            <BurgerButton />
            <S.Header>
                <S.Title>{graphInfos?.header.title}</S.Title>
                <S.Description>{graphInfos?.header.description}</S.Description>
            </S.Header>
            <GraphIndex datas={datasFormat} type={graphType}/>
        </S.Container>
    )
}