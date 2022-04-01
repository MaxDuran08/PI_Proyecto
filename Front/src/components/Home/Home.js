import React from 'react'
import styled from 'styled-components'
import Post from './Post/Post'

export default function Home() {
  return (
    <>
      <DivBoxHome>
        <DivColumns>
          <DivBoxLeft>
          </DivBoxLeft>
          <DivBoxRight></DivBoxRight>
        </DivColumns>
      </DivBoxHome>
    </>
  )
}

const DivBoxHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: blue;
`

const DivColumns = styled.div`
  width: 975px;
  height: 100%;
  display: grid;
  grid-template-columns: 614px 325px;
  justify-content: space-between;
  background: red;
`

const DivBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  background: yellow;
`

const DivBoxRight = styled.div`
  background: green;
`

const DivBoxPosts = styled.div`
  margin-top: 30px;
`
