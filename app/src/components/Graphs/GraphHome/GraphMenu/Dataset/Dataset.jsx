import { useContext, useEffect, useState } from "react"

import { GraphContext } from "@/context/GraphContext/GraphContext"
import { randomId } from "@/constants/graphStructure"

import { InputSelect } from "@/components/Form/InputForm/InputSelect/InputSelect"
import { Input } from "@/components/Form/InputForm/Input"

import * as S from "./style"

export const Dataset = () => {
    const { graphOn, graphMethods } = useContext(GraphContext)
    const graphMethod = new graphMethods

    const allDatasets = graphOn.datas.datasets
    const [datasetSelect, setDatasetSelect] = useState(allDatasets[0])

    const allDatas = datasetSelect.data
    const [dataSelect, setDataSelect] = useState(allDatas[0])


    useEffect(() => {
        setDatasetSelect(allDatasets[0])
    }, [graphOn])
    
    useEffect(() => {
        setDataSelect(allDatas[0])
    }, [datasetSelect.id])

    const addDataset = () => {
        graphMethod.modifyDatasets()
        const newDataset = allDatasets[0]
        setDatasetSelect(newDataset)
        
    }

    const toggleDataset = (id) => {
        const dataset = allDatasets.filter(dataset => dataset.id === id)[0]
        setDatasetSelect(dataset)
        setDataSelect(dataset.data[0])
    }

    const modify = (info) => {
        const newDataset = {
            id: datasetSelect.id,
            label: info.title ?? datasetSelect?.label,
            data: info.data ?? datasetSelect?.data,
            backgroundColor: info.color ?? datasetSelect?.backgroundColor,
            borderColor:info.color ??  datasetSelect?.borderColor
        }
        graphMethod.modifyDatasets(datasetSelect.id, newDataset)
    }

    const remove = () => {
        graphMethod.removeDataset(datasetSelect.id)
        setDatasetSelect(allDatasets[0])
    }
    

    const addData = () => {
        const newData = {id: randomId(), label: 0}
        allDatas.push(newData)
        setDataSelect(allDatas[allDatas.length - 1])
    }

    const toggleData = (id) => {
        const data = allDatas.filter(data => data.id === id)[0]
        setDataSelect(data)
    }

    const modifyData = (value) => {
        const datas = allDatas.map(data => {
            if(data.id === dataSelect.id){
                data.label = value
            }
            return data
        })

        modify({data: datas})
    }

    const removeData = () => {
        const dataRemove = dataSelect.id
        const datas = allDatas.filter(data => data.id !== dataRemove)
        console.log(datas)
        modify({data: datas})
        setDataSelect(allDatas[0])
    }
    
    return (
        <>
            <InputSelect
                title="Categorias:"
                datas={allDatasets}
                dataSelect={datasetSelect}
                getSelect={e => toggleDataset(e)}
                addSelect={() => addDataset()}
                removeSelect={() => remove()}
            />

            <S.Conatiner color={datasetSelect?.backgroundColor}>
                <h2>{datasetSelect?.label}</h2>
                <Input
                    label="Nome"
                    onChange={e => modify({ title: e.target.value })}
                    color={datasetSelect?.backgroundColor}
                    value={datasetSelect?.label}
                />

                <br/>

                <InputSelect
                    title="Valores:"
                    datas={allDatas}
                    dataSelect={dataSelect}
                    getSelect={e => toggleData(e)}
                    addSelect={() => addData()}
                    removeSelect={() => removeData()}
                />

                <Input 
                    type="number" 
                    color={datasetSelect?.backgroundColor}
                    value={dataSelect.label}
                    onChange={e => modifyData(e.target.value)}
                />

                <Input
                    type="color"
                    label="Cor"
                    onBlur={e => modify({ color: e.target.value })}
                    color={datasetSelect?.backgroundColor}
                    width={"10%"}
                />
            </S.Conatiner>
        </>
    )
}