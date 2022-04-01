import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Img from '../../../../assets/img.jpg'
import SvgMore from '../../../../assets/svg/SvgMore'

export default function HeaderPost() {
  return (
    <DivHeaderPost>
      <DivBoxPost>
        <HeaderPhoto>
          <DivBoxPosts>
            <DivBoxPhoto>
              <LinkBoxPhoto to="">
                <ImgHeaderPost src={Img}></ImgHeaderPost>
              </LinkBoxPhoto>
            </DivBoxPhoto>
            <DivNickName>
              <SpanName>
                <LinkName to="">Isra_legend</LinkName>
              </SpanName>
            </DivNickName>
          </DivBoxPosts>
        </HeaderPhoto>
        <DivBoxMore>
          <ButtonMore>
            <DivBoxCMore>
              <DivImgMore>
                <SvgMore></SvgMore>
              </DivImgMore>
            </DivBoxCMore>
          </ButtonMore>
        </DivBoxMore>
      </DivBoxPost>
    </DivHeaderPost>
  )
}

const DivHeaderPost = styled.div`
  width: 100%;
`
const DivBoxPost = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
const DivBoxPosts = styled.div`
  display: flex;
  align-items: center;
`

const DivBoxPhoto = styled.div`
  align-items: center;
  align-self: center;
  display: block;
  flex: none;
  justify-content: center;
`

const LinkBoxPhoto = styled(Link)`
  border-radius: 50%;
  display: block;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 32px;
  height: 32px;
`
const DivNickName = styled.div`
  margin-left: 14px;
`

const HeaderPhoto = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 14px 4px 14px 16px;
`
const ImgHeaderPost = styled.img`
  height: 100%;
  width: 100%;
`
const SpanName = styled.span`
  position: relative;
`

const LinkName = styled(Link)`
  appearance: none;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  user-select: none;
  width: auto;
`
const DivBoxMore = styled.div`
  display: flex
  justify-content: center;
  padding-right: 8px;
`

const ButtonMore = styled.button`
  align-items: center;
  background: 0 0;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 8px;
`
const DivBoxCMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const DivImgMore = styled.div`
  height: 24px;
  width: 24px;
`
