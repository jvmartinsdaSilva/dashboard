"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

import * as Yup from "yup"
import {useForm} from  "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { LoginUser } from "@/components/Form/Hooks/Login"
import { setLocalStorage } from "@/Functions/LocalStorage"

import Form from "@/components/Form/Form"
import { Input } from "@/components/Form/InputForm/Input"
import { Button } from "@/components/Buttons/DefaultButton/Button"
import { Message } from "@/components/Message/Message"

const schema = Yup.object().shape({
    email: Yup.string().email("Insira um email valido").required("Campo é obrigatório"),
    password: Yup.string().required("Campo obrigatório")
})

const Login = () => {
    const {push} = useRouter()
    const [serverMessage, setServeMessage] = useState()
 
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema)
    })

    const handleSubmitData = async datas => {
        const login = await  LoginUser(datas)
        setServeMessage(login.msg)

        if(login.token){
            setLocalStorage("token", login.token)
            setLocalStorage("user", login.id)
            push("/dashboard")
        }  
    }

    return(
        <Form 
        title="Login"
        link={{toGo: "/register", info: "Cadastre-se agora"}}
        onSubmit={handleSubmit(handleSubmitData)}
        >
            <Input 
            type="email" 
            label="Email" 
            placeholder="Digite seu email"
            innerRef={register("email")}
            />
            {errors.email && <Message text={errors.email.message}/>}

            <Input 
            type="password"
            label="Senha"
            placeholder="Digte sua senha"
            innerRef={register("password")}
            />
            {errors.password && <Message text={errors.password.message}/>}

            <Button text="Entar" />
            {serverMessage && <Message text={serverMessage} />}

        </Form>
    )
}

export default Login