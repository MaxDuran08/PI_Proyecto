import React, { useEffect, useState, useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import styled, { css } from 'styled-components'
import {
  DivFlexJACenter,
  DivWidthHeight100VH,
  DivFlexColumCenter,
} from '../../styles/style'
import Input from '../../components/Inputs/Input/Input'
import InputPassword from '../../components/Inputs/InputPassword/InputPassword'
import Button from '../../components/Buttons/Button/Button'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ hasError: false, message: '' })
  const [enableBtn, setEnableBtn] = useState(false)
  const history = useHistory()
  const { isLogged, isLoading, hasError, resMessage, login } = useUser()
  const textInputEmail = useRef()
  const textInputPass = useRef()

  useEffect(() => {
    if (isLogged) history.push('/')
  }, [isLogged])

  useEffect(() => {
    setError({ hasError: hasError, message: resMessage })
  }, [hasError])

  const handleSubmit = e => {
    e.preventDefault()
    login(email, password)
  }

  const validateEnableBtn = () => {
    if (
      textInputEmail.current.value.length > 0 &&
      textInputPass.current.value.length > 5
    ) {
      setEnableBtn(true)
    } else {
      setEnableBtn(false)
    }
  }

  return (
    <>
      <DivMain>
        <DivBoxContainer>
          <DivBoxLogin>
            <DivBoxLogo>
              <LinkLogo to="/login">USAC</LinkLogo>
            </DivBoxLogo>
            <Form onSubmit={handleSubmit}>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                references={textInputEmail}
                validate={validateEnableBtn}
                setValue={setEmail}
                setError={setError}
              />
              <InputPassword
                name="password"
                id="password"
                placeholder="Password"
                references={textInputPass}
                validate={validateEnableBtn}
                setValue={setPassword}
              />
              <Button
                isLoading={isLoading}
                enableBtn={enableBtn}
                text="Log In"
              ></Button>
              {error.hasError && <DivMsgError>{error.message}</DivMsgError>}
              <LinkForgPass to="/reset/password">Forgot password?</LinkForgPass>
            </Form>
          </DivBoxLogin>
          <DivBoxIsReg>
            <PIsReg>
              Dont have an account?
              <LinkIsReg to="/register">&nbsp;Sign up</LinkIsReg>
            </PIsReg>
          </DivBoxIsReg>
          <DivBoxContainerApp>
            
            <DivBoxApps>
              <AApp
                right
                href="https://portal.ingenieria.usac.edu.gt"
              >
                <ImgApp src="https://portal.ingenieria.usac.edu.gt/images/logo_facultad/logo_azul.png" />
              </AApp>
            </DivBoxApps>
          </DivBoxContainerApp>
        </DivBoxContainer>
      </DivMain>
    </>
  )
}

export const DivMain = styled.div`
  ${DivFlexJACenter}
  ${DivWidthHeight100VH}
  ${({ theme }) => css`
    background: ${theme.colors.background};
  `}
`

export const DivBoxContainer = styled.div`
  width: 350px;
  margin-top: 12px;
`

export const DivBoxLogin = styled.div`
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
  width: 100%;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};

    background: ${theme.colors.first};
  `}
`

export const DivBoxLogo = styled.div`
  ${DivFlexJACenter}
  margin: 14.45px auto 12px;
  height: 75px;
`
export const LinkLogo = styled(Link)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.arial}, sans-serif;
    font-size: ${theme.fontSizes.logo};
  `}
`

export const Form = styled.form`
  ${DivFlexColumCenter}
  padding: 0 40px;
  margin-bottom: 10px;
`

export const DivMsgError = styled.div`
  display: block;
  width: 80%;
  margin: auto;
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.error};
  `}
`
export const LinkForgPass = styled(Link)`
  margin-top: 12px;
  text-align: center;
  line-height: 14px;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.smaller};
  `}
`
export const DivBoxIsReg = styled.div`
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
  width: 100%;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};

    background: ${theme.colors.first};
  `}
`

export const PIsReg = styled.p`
  text-align: center;
  margin: 15px;
  margin-left: 3px;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};
  `}
`
export const LinkIsReg = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.firstAlt};
  `}
`

export const DivBoxContainerApp = styled.div`
  ${DivFlexJACenter}
  flex-direction: column;
  width: 100%;
`
export const PBoxApps = styled.div`
  line-height: 18px;
  text-align: center;
  margin: 8px 0;
  padding: 10px 0;
`
export const DivBoxApps = styled.div`
  ${DivFlexJACenter}
  width: 100%;
  margin: 10px 0;
`

export const AApp = styled.a`
  height: 38px;
  ${props => (props.right ? 'margin-right: 8px;' : '')}
`

export const ImgApp = styled.img`
  height: 150px;
  width: 600px;
`
