import * as S from "./syle"

import {useId } from "react"
import { Button } from "@/components/Buttons/ButtonsMenu/Button"


const Option = ({ id, label }) => {
    return <S.Option value={id}>{label}</S.Option>
}

export const InputSelect = (
    {
        title,
        datas,
        getSelect,
        addSelect,
        removeSelect,
        dataSelect
    }) => {

    const labelId = useId()
    const datas2 = datas?.filter(data => data?.id !== dataSelect?.id)


    return (
        <S.Container>
            <label htmlFor={labelId}>{title}</label> <br/>
            <S.SelectContainer id={labelId}  onChange={e => getSelect(e.target.value)}>
                <Option id={dataSelect?.id} label={dataSelect?.label} selected/>
                {datas2?.map(data => <Option key={data?.id} id={data?.id} label={data?.label} />)}
            </S.SelectContainer>
            <Button onClick={() => addSelect() } text="+"/>
            <Button onClick={() => removeSelect()} text="-" type="negative" />
        </S.Container>
    )
}