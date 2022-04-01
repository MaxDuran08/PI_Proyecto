import React, { useEffect, useState, useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import styled, { css } from 'styled-components'
import {
  DivMain,
  DivBoxContainer,
  DivBoxLogin,
  DivBoxLogo,
  LinkLogo,
  Form,
  DivBoxIsReg,
  DivMsgError,
  PIsReg,
  LinkIsReg,
  DivBoxContainerApp,
  PBoxApps,
  DivBoxApps,
  AApp,
  ImgApp,
} from '../Login/Login'
import Input from '../../components/Inputs/Input/Input'
import InputPassword from '../../components/Inputs/InputPassword/InputPassword'
import Button from '../../components/Buttons/Button/Button'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState({ hasError: false, message: '' })
  const history = useHistory()
  const { isLogged, isLoading, hasError, resMessage, isComplete, register } =
    useUser()
  const [enableBtn, setEnableBtn] = useState(false)
  const textInputEmail = useRef()
  const textInputFirst = useRef()
  const textInputLast = useRef()
  const textInputUser = useRef()
  const textInputPass = useRef()

  useEffect(() => {
    if (isLogged) history.push('/')
  }, [isLogged])

  useEffect(() => {
    setError({ hasError: hasError, message: resMessage })
  }, [hasError])

  const handleSubmit = e => {
    e.preventDefault()
    console.log(email + password + firstName)
    register(firstName, lastName, username, email, password)
  }

  const validateEnableBtn = () => {
    if (
      textInputEmail.current.value.length > 0 &&
      textInputFirst.current.value.length > 0 &&
      textInputLast.current.value.length > 0 &&
      textInputUser.current.value.length > 0 &&
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
              <LinkLogo to="/">USAC</LinkLogo>
            </DivBoxLogo>
            <div>
              <Form onSubmit={handleSubmit}>
                <InfoRegisterH2>
                  Sign up to see photos and videos from your friends.
                </InfoRegisterH2>
                <DivOrContiner>
                  <DivLine></DivLine>
                  <DivMsgOr>OR</DivMsgOr>
                  <DivLine></DivLine>
                </DivOrContiner>
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
                <Input
                  type="text"
                  id="id-inp-firstname"
                  placeholder="First name"
                  name="inp-firstname"
                  references={textInputFirst}
                  validate={validateEnableBtn}
                  setValue={setFirstName}
                  setError={setError}
                />
                <Input
                  type="text"
                  id="id-inp-lastname"
                  placeholder="Last name"
                  name="inp-lastname"
                  references={textInputLast}
                  validate={validateEnableBtn}
                  setValue={setLastName}
                  setError={setError}
                />
                <Input
                  type="text"
                  id="id-inp-username"
                  placeholder="Username"
                  name="inp-username"
                  references={textInputUser}
                  validate={validateEnableBtn}
                  setValue={setUsername}
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
                  text="Sign up"
                ></Button>
                {error.hasError && <DivMsgError>{error.message}</DivMsgError>}
                <DivTerms>
                  By signing up, you agree to our
                  <Link to="/register"> Terms</Link>,
                  <Link to="/register"> Data Policy</Link>, and
                  <Link to="/register"> Cookies Policy</Link>
                </DivTerms>
              </Form>
            </div>
          </DivBoxLogin>

          <DivBoxIsReg>
            <PIsReg>
              Have an account?
              <LinkIsReg to="/login"> Log in</LinkIsReg>
            </PIsReg>
          </DivBoxIsReg>

          <DivBoxContainerApp>
            <PBoxApps>Get the app.</PBoxApps>
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

const InfoRegisterH2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: ${theme.fontSizes.h3};
  `}
  font-weight: 600;
  line-height: 20px;
  margin: 0 0 10px;
  text-align: center;
`

export const DivOrContiner = styled.div`
  margin: 10px 0 18px;
  display: flex;
  flex-direction: row;
`

export const DivLine = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.border};
  `}
  flex-grow: 1;
  height: 1px;
  position: relative;
  top: 0.45em;
`

export const DivMsgOr = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: ${theme.fontSizes.smaller};
  `}
  flex-grow: 0;
  flex-shrink: 0;
  font-weight: 600;
  line-height: 15px;
  margin: 0 18px;
`

const DivTerms = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: ${theme.fontSizes.smaller};
  `}
  line-height: 16px;
  margin: 10px 0;
  text-align: center;

  & > a,
  & > a:visited {
    ${({ theme }) => css`
      color: ${theme.colors.third};\
      font-size: ${theme.fontSizes.smaller};
    `}
    font-weight: 600;
  }
`
