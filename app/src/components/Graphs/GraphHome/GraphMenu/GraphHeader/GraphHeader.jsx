import { useContext } from "react"
import { GraphContext } from "@/context/GraphContext/GraphContext"

import { Input } from "@/components/Form/InputForm/Input"
import { InputRadio } from "@/components/Form/InputForm/InputRadio/InputRadio"

import * as S from "./style"

export const GraphHeader = () => {
    const { graphMethods, graphOn } = useContext(GraphContext)
    const { header } = graphOn
    const graphMethod = new graphMethods

    const modify = (info) => {
        const newHeader = {
            id: header?.id,
            title: info.title ?? header?.title,
            description: info.description ?? header?.description,
            type: info.type ?? header?.type
        }
        graphMethod.modifyHeader(newHeader)
    }


    return (
        <S.Header>
            <Input 
                type="text" 
                label="Nome" width={"90%"} 
                onChange={e => modify({ title: e.target.value })} 
                value={header?.title}
                />
            <Input 
                type="text" 
                label="Descrição" 
                width={"90%"} 
                onChange={e => modify({ description: e.target.value })} 
                value={header?.description}
                />
            <S.SelectTypes>
                Tipo:
                <InputRadio
                    label="Barras"
                    name="GraphType"
                    check={header.type === "Bar" && true}
                    onChange={() => modify({ type: "Bar" })}
                />

                <InputRadio
                    label="Linhas"
                    name="GraphType"
                    check={header.type === "Line" && true}
                    onChange={() => modify({ type: "Line" })}
                />
            </S.SelectTypes>
        </S.Header>
    )
}