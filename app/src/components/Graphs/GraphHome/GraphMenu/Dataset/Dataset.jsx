import { useContext, useEffect, useState } from "react"

import { InputSelect } from "@/components/Form/InputForm/InputSelect/InputSelect"
import { Input } from "@/components/Form/InputForm/Input"
import { GraphContext } from "@/context/GraphContext/GraphContext"

import * as S from "./style"

export const Dataset = () => {
    const { graphOn, graphMethods } = useContext(GraphContext)
    const graphMethod = new graphMethods

    const allDatasets = graphOn.datas.datasets
    const [datasetId, setDatasetId] = useState(allDatasets[0].id)
    const dataseSelect = graphMethod.getDataset(datasetId)
    
    useEffect(() => {
        setDatasetId(allDatasets[0].id)
    }, [graphOn])

    const add = () => {
        graphMethod.modifyDatasets()
        setDatasetId(allDatasets[0].id)
    }

    const modify = (info) => {
        const newDataset = {
            id: datasetId,
            label: Object.keys(info).map(item => item === 'title' ? info[item] : dataseSelect?.label),
            data: dataseSelect?.data,
            backgroundColor: Object.keys(info).map(item => item === 'color' ? info[item] : dataseSelect?.backgroundColor),
            borderColor: Object.keys(info).map(item => item === 'color' ? info[item] : dataseSelect?.borderColor)
        }
        graphMethod.modifyDatasets(datasetId, newDataset)
    }

    const remove = () => {
        graphMethod.removeDataset(datasetId)
        setDatasetId(allDatasets[0].id)
    }

    return (
        <>
            <InputSelect
                title="Datasets"
                datas={allDatasets}
                getSelect={e => setDatasetId(e)}
                addSelect={() => add()}
                removeSelect={() => remove()}
                dataSelect={dataseSelect}
            />
            <S.Conatiner color={dataseSelect?.backgroundColor}>
                {dataseSelect?.label}
                <Input
                    label="Nome"
                    onChange={e => modify({ title: e.target.value })}
                    color={dataseSelect?.backgroundColor}
                    width={"80%"}
                    value={dataseSelect?.label}
                />
                <Input
                    type="color"
                    label="Cor"
                    onBlur={e => modify({ color: e.target.value })}
                    color={dataseSelect?.backgroundColor}
                    width={"10%"}
                />
            </S.Conatiner>
        </>
    )
}