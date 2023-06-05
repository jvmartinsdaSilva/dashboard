"use client"

import Form from "@/components/Form/Form"
import { Input } from "@/components/InputForm/Input"


const Home = () => {

  return (
    <Form title="Cadastro" >
      <Input
        placeholder="Informe seu nome"
        label="Nome"
        type="text" />

      <Input
        placeholder="Informe seu email"
        label="Email"
        type="email" />

      <Input
        placeholder="Digite sua senha"
        label="Senha"
        type="password" />

      <Input
        placeholder="Confirme sua senha"
        label="Confirme a senha"
        type="password" />
      
      


    </Form>
  )
}

export default Home