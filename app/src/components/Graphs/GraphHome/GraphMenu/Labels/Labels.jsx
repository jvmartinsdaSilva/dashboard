import { useContext, useEffect, useId, useState } from "react"
import { GraphContext } from "@/context/GraphContext/GraphContext"

import { InputSelect } from "@/components/Form/InputForm/InputSelect/InputSelect"
import { Input } from "@/components/Form/InputForm/Input"

import * as S from "./style"

export const Labels = () => {
    const { graphOn, graphMethods } = useContext(GraphContext)
    const graphMethod = new graphMethods

    const labels = graphOn.datas.labels
    const [labelSelect, setLabelSelect] = useState(labels[0])

    useEffect(() => {
        const lastLabel = labels.length - 1
        setLabelSelect(labels[lastLabel])

    }, [labels.length])

    const toggleLabel = (id) => {
        const select = labels.filter(label => label.id === id )[0]
        setLabelSelect(select)
    }

    const modify = (e) => {
        const newLabel = {
            id: labelSelect.id,
            label: e
        }

        graphMethod.modifyLabels(newLabel)
    }

    const remove = () => {
        const labelId = labelSelect.id
        if(labels.length <= 0) {
            return
        }
        graphMethod.removeLabel(labelId)

    }
    
    return (
        <S.Container>
            <InputSelect
                datas={labels}
                dataSelect={labelSelect}
                title="Rótulos:"
                getSelect={e => toggleLabel(e)}
                addSelect={() => graphMethod.addLabel()}
                removeSelect={() => remove()}
            />
            <Input
                width="100%"
                value={labelSelect.label}
                onChange={e => modify(e.target.value)}
            />
        </S.Container>
    )
}