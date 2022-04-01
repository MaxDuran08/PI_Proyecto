import React from 'react'
import styled, { css } from 'styled-components'

export default function Input(props) {
  const onChange = e => {
    if (props.setValue) props.setValue(e.target.value)
    if (props.validate) props.validate()
  }

  const onInvalid = e => {
    e.preventDefault()
    if (props.setError)
      props.setError({ hasError: true, message: 'Enter a valid email' })
  }

  return (
    <>
      <InputDefault
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        name={props.name}
        ref={props.references}
        onChange={onChange}
        onInvalid={onInvalid}
      />
    </>
  )
}

export const InputDefault = styled.input`
  height: 36px;
  width: 100%;
  margin: 3px 0;
  padding: 9px 0 7px 8px;
  border-radius: 3px;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => css`
    font-family: ${theme.fonts.default}, sans-serif;
    font-size: ${theme.fontSizes.small};
    border: 1px solid ${theme.colors.border};
    background-color: ${theme.colors.background};
    font-size: ${theme.fontSizes.smaller};
  `}
`
