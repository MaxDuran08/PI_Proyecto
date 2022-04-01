import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useUser from '../../../hooks/useUser'
import styled, { css } from 'styled-components'
import SvgProfile from '../../../assets/svg/SvgProfile'
import SvgSave from '../../../assets/svg/SvgSave'
import SvgSettings from '../../../assets/svg/SvgSettings'
import SvgSwitchAccounts from '../../../assets/svg/SvgSwitchAccounts'

export default function ModalProfile({ setActive, active }) {
  const [state, setState] = useState(true)
  const { logout } = useUser()

  const handleClick = e => {
    logout()
  }

  const onClickBackground = e => {
    window.sessionStorage.setItem('option-active', 1)
    setActive({ active: active.preActive, preActvie: 6 })
    setState(false)
  }

  return (
    <>
      <div>
        <DivBgModal state={state} onClick={onClickBackground}></DivBgModal>
        <DivBoxModal>
          <DivTriangle></DivTriangle>
          <DivBoxOpt>
            <LinkModalOption to="/login">
              <DivBoxModalLg>
                <DivModalImg>
                  <SvgProfile />
                </DivModalImg>
                <DivModalMsg>Profile</DivModalMsg>
              </DivBoxModalLg>
            </LinkModalOption>
            <LinkModalOption to="/login">
              <DivBoxModalLg>
                <DivModalImg>
                  <SvgSave />
                </DivModalImg>
                <DivModalMsg>Save</DivModalMsg>
              </DivBoxModalLg>
            </LinkModalOption>
            <LinkModalOption to="/login">
              <DivBoxModalLg>
                <DivModalImg>
                  <SvgSettings />
                </DivModalImg>
                <DivModalMsg>Settings</DivModalMsg>
              </DivBoxModalLg>
            </LinkModalOption>
            <LinkModalOption to="/login">
              <DivBoxModalLg>
                <DivModalImg>
                  <SvgSwitchAccounts />
                </DivModalImg>
                <DivModalMsg>Switch Accounts</DivModalMsg>
              </DivBoxModalLg>
            </LinkModalOption>
            <hr />
            <DivModalOption>
              <DivBoxModalLg onClick={handleClick}>
                <DivModalMsg>Log out</DivModalMsg>
              </DivBoxModalLg>
            </DivModalOption>
          </DivBoxOpt>
        </DivBoxModal>
      </div>
    </>
  )
}

const DivBgModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: transparent;

  ${props => (props.state ? '' : 'display: none;')}
`

const DivBoxModal = styled.div`
  position: absolute;
  height: 1px;
  width: 100%;
  top: 100%;
`
const DivTriangle = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.first};
    border-top: 1px solid ${theme.colors.border};
    border-left: 1px solid ${theme.colors.border};
  `}
  top: -6.2px;
  right: 15px;
  height: 14px;
  width: 14px;
  position: relative;
  transform: rotate(45deg);
  z-index: 1;
`
const DivBoxOpt = styled.div`
  width: 237px;
  border-radius: 6px;
  overflow-x: hidden;
  overflow-y: auto;
  right: inherit;
  position: relative;
  top: -14px;
  right: 205px;
  ${({ theme }) => css`
    background: ${theme.colors.first};
    border-top: 1px solid ${theme.colors.border};
  `}
`
const LinkModalOption = styled(Link)`
  cursor: pointer;
  outline: 0;
`
const DivModalOption = styled.div`
  cursor: pointer;
  outline: 0;
`

const DivBoxModalLg = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 8px;
  padding-top: 8px;
`
const DivModalImg = styled.div`
  height: 100%;
  margin-right: 12px;
`
const DivModalMsg = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.second};
  `}
`
