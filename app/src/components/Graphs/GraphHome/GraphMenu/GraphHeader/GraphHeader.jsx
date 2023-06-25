import { useContext } from "react"
import { GraphContext } from "@/context/GraphContext/GraphContext"

import { Input } from "@/components/Form/InputForm/Input"
import { InputRadio } from "@/components/Form/InputForm/InputRadio/InputRadio"

import * as S from "./style"

export const GraphHeader = () => {
    const {graphMethods, graphOn} = useContext(GraphContext)
    const {header} = graphOn
    const graphMethod =  new graphMethods

    const modify = (info) => {
        const newHeader = {
            id: header?.id,
            title: Object.keys(info).map(item => item === 'title' ? info[item] : header?.title),
            description: Object.keys(info).map(item => item === 'description' ? info[item] : header?.description),
            type: "bar"
        }

        graphMethod.modifyHeader(newHeader)

    }


    return(
        <S.Header>
        <Input type="text" label="Nome" width={"90%"} onChange={e => modify({title: e.target.value})}/>
        <Input type="text" label="Descrição" width={"90%"} onChange={e => modify({description: e.target.value})} />
        <S.SelectTypes>
            Tipo:
            <InputRadio label="Barras" name="GraphType" />
            <InputRadio label="Linhas" name="GraphType" />
        </S.SelectTypes>
    </S.Header>
    )
}