"use client"

import { useContext } from "react"
import { UserContext } from "@/context/User/UserContext"
import { useRouter } from "next/navigation"

import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { NewName } from "@/components/Form/Hooks/NewName"

import { EditPhoto } from "@/components/Form/EditPhoto/EditPhoto"
import Form from "@/components/Form/Form"
import { Input } from "@/components/Form/InputForm/Input"
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

    const {push} = useRouter()

    const { user } = useContext(UserContext)
    const photo = user.img
    const photoName = photo.split("\\")[1]

    const handleSubmitData = async datas => {
        const res = await NewName(datas)
        if (res.sucess) return window.location.reload()
    }

    return (
        <>
            <EditPhoto photoName={photoName} userId={user.id} />

            <Form onSubmit={handleSubmit(handleSubmitData)}>
                <Input label="Novo Nome" type="text" placeholdeer="Digite o novo nome" innerRef={register("newName")}/>
                {errors.newName && <Message text={errors.newName.message} />}
                <Button text="Confirmar" />
            </Form>
        </>
    )
}

export default EditUser