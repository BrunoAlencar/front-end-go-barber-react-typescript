import React from 'react'

import { FiLogIn } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles'

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form action="">
        <h1>Faça seu logon</h1>

        <Input name="email" type="text" placeholder="E-mail" />

        <Input name="password" type="password" placeholder="Senha" />

        <Button type="button"> Entrar</Button>

        <a href="#">Esqueci minha senha</a>

      </form>
      <a href="#">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
)

export default SignIn;
