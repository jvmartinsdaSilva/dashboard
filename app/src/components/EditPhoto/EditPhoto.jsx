import { useState, React } from "react"

import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { UploadPhoto } from "../../Functions/EditUser/UpLoadPhoto"

import Form from "@/components/Form/Form"
import { Button } from "@/components/Buttons/DefaultButton/Button"
import { BtnClose } from "@/components/Buttons/ButtonsSVG/Buttons"

import * as S from "./style"
import { Message } from "@/components/Message/Message"

const schema = Yup.object().shape({
    avatar: Yup.mixed().required("Selecione uma nova foto para enviar")

})

export const EditPhoto = ({ photoName }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema)
    })

    const [photoPreview, setPhotoPreview] = useState()
    const [newPhoto, setNewPhoto] = useState()
    const [edit, setEdit] = useState(false)
    const nowPhoto = `http://localhost:8080/files/${photoName}`

    const previewPhoto = inputInfos => {
        const reader = new FileReader()
        reader.onload = () => setPhotoPreview(reader.result)
        // console.log(inputInfo.target.files[0])
        reader.readAsDataURL(inputInfos.target.files[0])
        setNewPhoto(inputInfos.target.files[0])
    }

    const handleSubmitData =async () => {
        const res = await UploadPhoto(newPhoto)
        
        if(res.sucess) return window.location.reload()
    }

    return (
        <Form 
        title="Editando usuário" 
        link={{ toGo: "/dashboard", info: "Home" }}
        onSubmit={handleSubmit(handleSubmitData)}>

            {edit &&
                <S.Modal>
                    <S.Card>
                        <S.Header>
                            Escolha uma nova foto
                            <BtnClose onClick={() => setEdit(!edit)} />
                        </S.Header>
                        <S.PreviewPhoto image={photoPreview ?? nowPhoto} htmlFor="iIMG" />
                        <S.InputFileContainer htmlFor="iIMG" text="Escolha sua foto" />
                        <input
                            {...register("avatar")}
                            type="file"
                            onChange={inputInfos => previewPhoto(inputInfos)}
                            id="iIMG"
                        />
                        {errors.avatar && <Message text={errors.avatar.message} />}
                        <Button text="Confirmar" />
                    </S.Card>
                </S.Modal>
            }

            <S.PreviewPhoto image={nowPhoto} onClick={() => setEdit(!edit)} />
        </Form>
    )
}