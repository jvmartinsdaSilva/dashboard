"use client"

import { useState, React } from 'react'
import { useRouter } from "next/navigation"

import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"  

import { RegisterUser } from "@/Functions/Register/Register"

import Form from "@/components/Form/Form"
import { Input } from "@/components/Inputs/InputDefault/Input"
import { Button } from "@/components/Buttons/DefaultButton/Button"
import { Message } from '@/components/Message/Message'
import { Loading } from '@/components/Loading/Loadin'

const schema = Yup.object().shape({
  name: Yup.string().min(3, "No mínimo 3 letras").max(30, "No maxímo 30 caracteres").required("Nome obrigatório"),
  email: Yup.string().email("Informe um email válido").required("O campo email é obrigatório"),
  password: Yup.string().min(6, "No mínimo 6 caractéres" ).required("A senha é obrigatória"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], 'As senhas não conferem').required("Campo obrigatório"),
})

const FormRegister = () => {
  const {push} = useRouter()
  const [serverMessage, setServerMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "all",
    resolver: yupResolver(schema)
  })

  const serverResponse = msg => {
    setIsLoading(false)
    setServerMessage(msg)
    setTimeout(() => setServerMessage(""), 5000)
  }

  const handleSubmitData = async datas => {
    setIsLoading(true)
    const register = await RegisterUser(datas)
    console.log(register)
    serverResponse(register.msg ?? "Erro ao conectar")
    if(register.sucess) push("/dashboard")
  }

  return (
    <Form title="Cadastro de usuário"
      link={{ toGo: "/", info: "Login" }}
      onSubmit={handleSubmit(handleSubmitData)}
    >

      <Input
        placeholder="Informe seu nome"
        label="Nome"
        type="text"
        innerRef={register("name")}
      />
      {errors.name && <Message text={errors.name.message} />}

      <Input
        placeholder="Informe seu email"
        label="Email"
        type="email"
        innerRef={register("email")}
      />
      {errors.email && <Message text={errors.email.message} />}

      <Input
        placeholder="Digite sua senha"
        label="Senha"
        type="password"
        innerRef={register("password")}
      />
      {errors.password && <Message text={errors.password.message} />}

      <Input
        placeholder="Confirme sua senha"
        label="Confirme a senha"
        type="password"
        innerRef={register("confirmPassword")}
      />
      {errors.confirmPassword && <Message text={errors.confirmPassword.message} />}


      <Button text="Cadastrar" />
      {serverMessage && <Message text={serverMessage} />}
      <Loading loadinStatus={isLoading} />
    </Form>
  )
}

export default FormRegister