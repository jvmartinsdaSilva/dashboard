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

    const toggleLabel = (id) => {
        const select = labels.filter(label => label.id === id )[0]
        setLabelSelect(select)
    }

    const add = () => {
        graphMethod.addLabel()
        const lastLabel = labels.length - 1
        setLabelSelect(labels[lastLabel])

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
        setLabelSelect(labels[0])
    }
    
    return (
        <S.Container>
            {console.log(labels)}
            {console.log(labelSelect)}
            <InputSelect
                datas={labels}
                dataSelect={labelSelect}
                title="Legendas"
                getSelect={e => toggleLabel(e)}
                addSelect={() => add()}
                removeSelect={() => remove()}
            />
            {labels.length > 0 ?
            <Input
                width="50%"
                value={labelSelect.label}
                onChange={e => modify(e.target.value)}
            />
            : <h2>Não há dados</h2>
            }
        </S.Container>
    )
}