"use client"

import { useContext, React, useState } from "react"
import { UserContext } from "@/context/User/UserContext"

import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { NewName } from "@/Functions/EditUser/NewName"
import { getUserInfos } from "@/Functions/GetUserInfos/getUser"

import { EditPhoto } from "@/components/EditPhoto/EditPhoto"
import Form from "@/components/Form/Form"
import { Input } from "@/components/Inputs/InputDefault/Input"
import { Button } from "@/components/Buttons/DefaultButton/Button"
import { Message } from "@/components/Message/Message"

const schema = Yup.object().shape({
    newName: Yup.string().min(3, "No mínimo 3 letras").max(30, "No maxímo 30 caracteres").required("Nome obrigatório")
})

const EditUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all",
        resolver: yupResolver(schema)
    })

    const [serverMessage, setServerMessage] = useState()

    const { user, login } = useContext(UserContext)
    const userImg = user.img

    const handleSubmitData = async datas => {
        const res = await NewName(datas)
        setServerMessage(res.msg)
        if (res.sucess) {
            const attUser = await getUserInfos(user.id)
            login(attUser)
        }
    }

    return (
        <>
            <EditPhoto photoName={userImg} userId={user.id} />
            <Form onSubmit={handleSubmit(handleSubmitData)}>
                <Input label="Novo Nome" type="text" placeholdeer="Digite o novo nome" innerRef={register("newName")} placeholder={user.name}/>
                {errors.newName && <Message text={errors.newName.message} />}
                {<Message text={serverMessage} />}
                <Button text="Confirmar" />
            </Form>
        </>
    )
}

export default EditUser