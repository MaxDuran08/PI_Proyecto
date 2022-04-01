import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Select from './Select/Select'

export default function Page() {
  return (
    <>
      <Div>
        <BrowserRouter>
          <Switch>
            <Route path="/create/select" exact component={Select} />
          </Switch>
        </BrowserRouter>
      </Div>
    </>
  )
}

const Div = styled.div`
  margin-top: 50px;
`
