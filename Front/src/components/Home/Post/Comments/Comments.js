import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Img from '../../../../assets/img.jpg'
import Comment from './Comment/Comment'

export default function Comments() {
  return (
    <SectionComment>
      <DivFBox>
        <DivPhotoLike className="qF0y9 Igw0E _56XdI eGOV_ _4EzTm ItkAi">
          <a className="zV_Nj" href="/p/CW3j_W7Lh8N/liked_by/" tabIndex="0">
            <div className="qF0y9 Igw0E rBNOH hLiUi ybXk5 _4EzTm">
              <SpanImgProfile
                role="link"
                tabIndex="-1"
                style={{ width: '20px', height: '20px' }}
              >
                <ImgComment
                  crossOrigin="anonymous"
                  data-testid="user-avatar"
                  draggable="false"
                  src={Img}
                />
              </SpanImgProfile>
            </div>
          </a>
        </DivPhotoLike>
        <DivMsgLike className="Nm9Fw">
          Liked by&nbsp;
          <span className="Jv7Aj mArmR MqpiF">
            <ALikeMsg
              className="FPmhX notranslate cqXBL"
              title="barbara_sofia__"
              href="/barbara_sofia__/"
              tabIndex="0"
            >
              barbara_sofia__&nbsp;
            </ALikeMsg>
          </span>
          and&nbsp;
          <ALikeMsg
            className="zV_Nj"
            href="/p/CW3j_W7Lh8N/liked_by/"
            tabIndex="0"
          >
            <span>57</span> others
          </ALikeMsg>
        </DivMsgLike>
      </DivFBox>
      <DivSectionComments>
        <DivSectionComments2>
          <DivDescription>
            <div data-testid="post-comment-root">
              <SpanName>
                <LinkName title="kuronosekaigt" to="/">
                  kuronosekaigt
                </LinkName>
              </SpanName>
              &nbsp;
              <SpanDescription>
                <span>Peluca Morado Oscuro✨</span>
                <SpanMore>
                  ...&nbsp;<ButtonMore>more</ButtonMore>
                </SpanMore>
              </SpanDescription>
            </div>
          </DivDescription>
          <div>
            <DivViewComments>
              <LinkViewComments to="/" tabIndex="0">
                View all <span>3</span> comments
              </LinkViewComments>
            </DivViewComments>
          </div>
          <Comment></Comment>
          <Comment></Comment>
        </DivSectionComments2>
      </DivSectionComments>
    </SectionComment>
  )
}

const SectionComment = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
`
const DivFBox = styled.div`
  display: flex;
`

const DivPhotoLike = styled.div`
  margin-right: 4px;
`
const DivMsgLike = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 1 auto;
  justify-content: flex-start;
  white-space: pre;
`

const ALikeMsg = styled.a`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 5px;
  margin-left: -5px;
`

const SpanImgProfile = styled.span`
  background-color: var(--thrid-color);
  border-radius: 50%;
  display: block;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
`
const ImgComment = styled.img`
  height: 100%;
  -webkit-touch-callout: none;
  width: 100%;
`

const DivSectionComments = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  margin-bottom: 4px;
  min-height: 0;
  overflow: auto;
`
const DivSectionComments2 = styled.div`
  display: flex;
  flex-direction: column;
`

const DivDescription = styled.div`
  display: flex;
`
const SpanName = styled.div`
  position: relative;
  display: inline;
`
const LinkName = styled(Link)`
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 5px;
  margin-left: -5px;
`
const SpanDescription = styled.span`
  overflow-wrap: break-word;
`
const SpanMore = styled.span`
  white-space: nowrap;
`
const ButtonMore = styled.button`
  background: 0 0;
  border: 0;
  color: var(--text-color-thrid);
  cursor: pointer;
  line-height: inherit;
  margin: 0;
  padding: 0;
`

const DivViewComments = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
`
const LinkViewComments = styled(Link)`
  background: 0 0;
  border: 0;
  color: #8e8e8e;
  line-height: inherit;
  margin: 0;
  padding: 0;
`
