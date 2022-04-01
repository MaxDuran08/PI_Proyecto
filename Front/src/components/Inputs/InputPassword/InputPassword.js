import React, { useEffect, useState } from 'react'
import { InputDefault } from '../Input/Input'
import styled, { css } from 'styled-components'

export default function InputPassword(props) {
  const [viewPassword, setViewPassword] = useState({
    status: false,
    message: false,
  })

  const onChange = e => {
    if (e.target.value.length > 0) {
      setViewPassword({
        status: true,
        viewPassword: viewPassword.message,
      })
    }
    if (e.target.value.length === 0) {
      setViewPassword({
        status: false,
        viewPassword: viewPassword.message,
      })
    }
    props.setValue(e.target.value)
    if (props.validate) props.validate()
  }

  const onClick = e => {
    viewPassword.message
      ? setViewPassword({
          status: viewPassword.status,
          message: false,
        })
      : setViewPassword({
          status: viewPassword.status,
          message: true,
        })
  }

  return (
    <>
      <DivInputPassword>
        <InputDefault
          type={viewPassword.message ? 'text' : 'password'}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          ref={props.references}
          onChange={onChange}
        />
        {viewPassword.status && (
          <SpanShowPassword onClick={onClick}>
            {viewPassword.message ? 'Hide' : 'Show'}
          </SpanShowPassword>
        )}
      </DivInputPassword>
    </>
  )
}

const DivInputPassword = styled.div`
  position: relative;
`
const SpanShowPassword = styled.span`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 13px;
  font-size: 12px;
  font-weight: 700;
`
