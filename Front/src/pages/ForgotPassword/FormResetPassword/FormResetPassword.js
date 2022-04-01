import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import useUser from '../../../hooks/useUser'
import {
  DivMainBorder,
  DivContainer,
  DivInfo,
  H2Style,
  PDescription,
  Form,
  DivImagesBlock,
  LinkBtnLogin,
  DivOR,
  DivLRegister,
  LinkRegister,
} from '../ForgotPassword'
import { DivMain, DivMsgError } from '../../Login/Login'
import { DivLine, DivMsgOr } from '../../Register/Register'
import InputPassword from '../../../components/Inputs/InputPassword/InputPassword'
import Button from '../../../components/Buttons/Button/Button'

export default function FormResetPassword() {
  const [password, setPassword] = useState('')
  const [enableBtn, setEnableBtn] = useState(false)
  const { isLoading, hasError, resMessage, isComplete, validateResetPassword } =
    useUser()
  const textInputPass = useRef()
  const { username, token } = useParams()

  const handleSubmit = e => {
    e.preventDefault()
    validateResetPassword(username, token, password)
  }

  useEffect(() => {
    if (isComplete) setEnableBtn(false)
  }, [isComplete])

  const validateEnableBtn = () => {
    if (textInputPass.current.value.length > 5) {
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
            <H2Style>Do not you remember your password?</H2Style>
            <PDescription>Enter your new password</PDescription>
          </DivInfo>
          <Form onSubmit={handleSubmit}>
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
              text="Update password"
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
          {hasError && <DivMsgError>{resMessage}</DivMsgError>}
          {isComplete && <DivMsgError>Your password was updated</DivMsgError>}
        </DivContainer>
        <LinkBtnLogin to="/login">Back To Login</LinkBtnLogin>
      </DivMainBorder>
    </DivMain>
  )
}
