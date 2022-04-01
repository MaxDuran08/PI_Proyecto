import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { DivFlexJACenter } from '../../styles/style'
import ModalProfile from '../NavBar/ModalProfile/ModalProfile'
import SvgHome from '../../assets/svg/Home'
import SvgMessenger from '../../assets/svg/Message'
import SvgCreate from '../../assets/svg/Create'
import SvgWatch from '../../assets/svg/Watch'
import SvgNotification from '../../assets/svg/Notification'

export default function NavBar() {
  const [active, setActive] = useState({
    active: window.sessionStorage.getItem('option-active'),
    preActive: window.sessionStorage.getItem('option-active'),
  })

  useEffect(() => {
    if (active.active === null) {
      window.sessionStorage.setItem('option-active', 1)
      setActive({ active: 1, preActive: 1 })
    }
    if (typeof active.active === 'string') {
      setActive({
        active: parseInt(active.active),
        preActive: parseInt(active.preActive),
      })
    }
  }, [active])

  const onClick = e => {
    let option
    switch (e.currentTarget.id) {
      case 'home':
        option = 1
        setActive({ active: 1, preActive: active.active })
        break
      case 'messager':
        option = 2
        setActive({ active: 2, preActive: active.active })
        break
      case 'create':
        option = 3
        setActive({ active: 3, preActive: active.active })
        break
      case 'explore':
        option = 4
        setActive({ active: 4, preActive: active.active })
        break
      
      case 'profile':
        option = 6
        setActive({ active: 6, preActive: active.active })
        break
    }
    window.sessionStorage.setItem('option-active', option)
  }

  return (
    <NavContiner>
      <DivWraNav>
        <LinkLogo to="/">USAC</LinkLogo>
        <DivNavOptions>
          <li>
            <LinkOption exact to="/" id="home" onClick={onClick}>
              <SvgHome isActive={active.active === 1} active={active} />
            </LinkOption>
          </li>
          <li>
            <LinkOption exact to="/message" id="messager" onClick={onClick}>
              <SvgMessenger isActive={active.active === 2} />
            </LinkOption>
          </li>
          <li>
            <LinkOption exact to="/create/select" id="create" onClick={onClick}>
              <SvgCreate isActive={active.active === 3} />
            </LinkOption>
          </li>
          <li>
            <LinkOption exact to="/explore" id="explore" onClick={onClick}>
              <SvgWatch isActive={active.active === 4} />
            </LinkOption>
          </li>
          
          <LiStyle>
            <SpanOption exact to="/profile" id="profile" onClick={onClick}>
              <SpanOptionActive active={active.active}>
                <ImgNavProfile
                  src="https://zspecialtyfood.com/wp-content/uploads/2016/07/bad-profile-pic-2.jpeg"
                  alt=""
                />
              </SpanOptionActive>
            </SpanOption>
          </LiStyle>
          {active.active === 6 && (
            <>
              <ModalProfile
                setActive={setActive}
                active={active}
              ></ModalProfile>
            </>
          )}
        </DivNavOptions>
      </DivWraNav>
    </NavContiner>
  )
}

const NavContiner = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 5px 0;
  ${({ theme }) => css`
    background: ${theme.colors.first};
    border-bottom: 1px solid ${theme.colors.border};
  `}
  z-index: 2;
`

const DivWraNav = styled.div`
  width: 975px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LinkLogo = styled(Link)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.arial}, cursive;
  `}
  text-decoration: none;
  font-size: xx-large;
`

const DivNavOptions = styled.ul`
  display: flex;
  height: 22px;
  list-style-type: none;
`
const SpanNotification = styled.span`
  margin: 0 10px;
  &.active svg {
    ${({ theme }) => css`
      color: ${theme.colors.thirdAlt}
      fill:  ${theme.colors.thirdAlt}
    `}
  }

  & svg:active {
    ${({ theme }) => css`
      color: ${theme.colors.fourth}
      fill:  ${theme.colors.fourth}
    `}
  }
`
const LinkOption = styled(NavLink)`
  margin: 0 10px;
  &.active svg {
    ${({ theme }) => css`
      color: ${theme.colors.thirdAlt}
      fill:  ${theme.colors.thirdAlt}
    `}
  }

  & svg:active {
    ${({ theme }) => css`
      color: ${theme.colors.fourth}
      fill:  ${theme.colors.fourth}
    `}
  }
`

const LiStyle = styled.li`
  ${DivFlexJACenter}
  width: 18px;
  margin-left: 8px;
`

const SpanOption = styled.span`
  ${DivFlexJACenter}
  width: 25px;
  height: 25px;
  border-radius: 50%;
`

const SpanOptionActive = styled.span`
  ${DivFlexJACenter}
  width: 25px;
  height: 25px;
  border-radius: 100%;

  ${({ theme }) => css`
    ${props =>
      props.active === 6 ? `border: 1px solid ${theme.colors.second};` : ''};
    background-color: ${theme.colors.first};
  `}
`

const ImgNavProfile = styled.img`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-size: cover;
`
