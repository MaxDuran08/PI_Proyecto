import React from 'react'
import styled, { css } from 'styled-components'

export default function Select({ enableBtn, isLoading, text }) {
  return (
    <SpanBoxBtn>
      <BtnLogin
        enableBtn={enableBtn}
        type="submit"
        name="submit"
        disabled={!enableBtn}
      >
        {isLoading && <Icharging className="fa fa-spinner fa-spin"></Icharging>}
        {!isLoading && `${text}`}
      </BtnLogin>
    </SpanBoxBtn>
  )
}

export const SpanBoxBtn = styled.span`
  display: block;
  position: relative;
  margin: 8px 0;
`

export const BtnLogin = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 0 8px;
  border-radius: 3px;
  font-weight: 600;
  height: 28px;
  line-height: 26px;
  outline: none;
  white-space: nowrap;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.first};
    ${props =>
      props.enableBtn
        ? `background: ${theme.colors.firstAlt}; border: 1px solid ${theme.colors.firstAlt};`
        : `background: ${theme.colors.secondAlt}; border: 1px solid ${theme.colors.secondAlt};`};
  `}
`

export const Icharging = styled.i`
  ${({ theme }) => css`
    color: ${theme.colors.first};
  `}
`
