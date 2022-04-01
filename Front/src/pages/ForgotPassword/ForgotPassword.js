import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import styled, { css } from 'styled-components'
import { DivMain, DivBoxContainer, DivMsgError } from '../Login/Login'
import { DivFlexJACenter } from '../../styles/style'
import { DivOrContiner, DivLine, DivMsgOr } from '../Register/Register'
import Input from '../../components/Inputs/Input/Input'
import Button from '../../components/Buttons/Button/Button'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState({ hasError: false, message: '' })
  const [enableBtn, setEnableBtn] = useState(false)
  const { isLoading, hasError, resMessage, isComplete, reset } = useUser()
  const textInputEmail = useRef()

  useEffect(() => {
    setError({ hasError: hasError, message: resMessage })
  }, [hasError])

  const handleSubmit = e => {
    e.preventDefault()
    reset(email)
  }

  const validateEnableBtn = () => {
    if (textInputEmail.current.value.length > 0) {
      setEnableBtn(true)
    } else {
      setEnableBtn(false)
    }
  }

  return (
    <DivMain>
      <DivMainBorder>
        <DivContainer>
          <DivInfo>
            <DivImagesBlock></DivImagesBlock>
            <H2Style>Trouble Logging In?</H2Style>
            <PDescription>
              Enter your email, phone, or username and well send you a link to
              get back into your account.
            </PDescription>
          </DivInfo>
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
            <Button
              isLoading={isLoading}
              enableBtn={enableBtn}
              text="Send Login Link"
            ></Button>
          </Form>
          <DivOR>
            <DivLine></DivLine>
            <DivMsgOr>OR</DivMsgOr>
            <DivLine></DivLine>
          </DivOR>
          <DivLRegister>
            <LinkRegister to="/register">Create New Account</LinkRegister>
          </DivLRegister>
          {error.hasError && <DivMsgError>{error.message}</DivMsgError>}
          {isComplete && (
            <DivMsgError>
              A link was sent to your email that allows you to change your
              password
            </DivMsgError>
          )}
        </DivContainer>
        <LinkBtnLogin to="/login">Back To Login</LinkBtnLogin>
      </DivMainBorder>
    </DivMain>
  )
}

export const DivMainBorder = styled(DivBoxContainer)`
  width: 375px;
  height: 450px;
  position: relative;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    background: ${theme.colors.first};
  `}
`
export const DivContainer = styled.div`
  padding: 20px 40px;
`
export const DivInfo = styled.div`
  ${DivFlexJACenter}
  flex-direction: column;
`

export const H2Style = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h3};
  `}
  margin-bottom: 10px;
`

export const PDescription = styled.p`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.colors.third};
  `}
  margin-bottom: 10px;
`

export const Form = styled.form``

export const DivImagesBlock = styled.div`
  background-position: -130px 0;
  height: 96px;
  width: 96px;
  background-image: url('https://www.instagram.com/static/bundles/es6/sprite_core_32f0a4f27407.png/32f0a4f27407.png');
  margin-bottom: 10px;
`

export const LinkBtnLogin = styled(Link)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 13px;
  text-align: center;
  font-weight: 700;
  ${({ theme }) => css`
    background: ${theme.colors.background};
    border-top: 1px solid ${theme.colors.border};
  `}
`

export const DivOR = styled(DivOrContiner)`
  margin-top: 25px;
  margin-bottom: 15px;
`
export const DivLRegister = styled.div`
  text-align: center;
`
export const LinkRegister = styled(Link)`
  text-align: center;
  font-weight: 700;
`
