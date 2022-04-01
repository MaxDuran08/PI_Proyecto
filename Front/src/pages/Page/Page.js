import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import NavBar from '../../components/NavBar/NavBar'
import Home from '../../components/Home/Home'
import Explore from '../../components/Explore/Explore'
import Create from '../../components/Create/Create'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import styled, { css } from 'styled-components'
import Message from '../../components/Messages/Messages'

export default function Page() {
  const { isLogged } = useUser()

  return (
    <>
      <div>{isLogged || <Redirect to="/login" />}</div>
      <Div>
        <BrowserRouter>
          <NavBar></NavBar>
          <DivNv></DivNv>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/message" exact component={Message} />
            <Route path="/create/select" exact component={Create} />
            <Route path="/explore" exact component={Explore} />
          </Switch>
        </BrowserRouter>
      </Div>
    </>
  )
}

const Div = styled.div`
  width: 100wv;
  height: 100%;
  ${({ theme }) => css`
    background: ${theme.colors.background};
  `}
`
const DivNv = styled.div`
  margin-top: 50px;
`
