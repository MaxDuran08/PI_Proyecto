import React from 'react'
import styled from 'styled-components'
import HeaderPost from './Header/Header'
import Photo from './Photo/Photo'
import Interactions from './Interactions/Interactions.js'
import Comments from './Comments/Comments'
import InputPost from './Input/Input'

export default function Post() {
  return (
    <ArticlePost>
      <DivPost>
        <HeaderPost></HeaderPost>
        <Photo></Photo>
        <Interactions></Interactions>
        <Comments></Comments>
        <DivHour>
          <LinkHour to="/">
            <TimeHour
              className="_1o9PC Nzb55"
              dateTime="2021-11-29T17:28:51.000Z"
              title="Nov 29, 2021"
            >
              13 HOURS AGO
            </TimeHour>
          </LinkHour>
        </DivHour>
        <InputPost></InputPost>
      </DivPost>
    </ArticlePost>
  )
}

const ArticlePost = styled.article`
  width: 100%;
  background: var(--first-color);
  margin-bottom: 24px;
  border-radius: 3px 3px 0 0;
  border: 1px solid var(--border-color);
`

const DivPost = styled.div`
  display: flex;
  flex-direction: column;
`

const DivHour = styled.div`
  display: block;
  padding-left: 16px;
  margin-bottom: 20px;
`
const LinkHour = styled.div`
  color: var(--text-color-thrid);
`
const TimeHour = styled.time`
  font-size: 10px;
  letter-spacing: 0.2px;
`
