import SvgLike from '../../../../assets/svg/SvgLike'
import SvgComment from '../../../../assets/svg/SvgComment'
import SvgSend from '../../../../assets/svg/SvgSend'
import styled from 'styled-components'

export default function Interactions() {
  return (
    <SectionInteractions>
      <div>
        <SpanInteraction>
          <ButtonInteraction type="button">
            <DivInteraction>
              <SvgLike></SvgLike>
            </DivInteraction>
          </ButtonInteraction>
        </SpanInteraction>
        <SpanInteraction>
          <ButtonInteraction type="button">
            <DivInteraction>
              <SvgComment></SvgComment>
            </DivInteraction>
          </ButtonInteraction>
        </SpanInteraction>
        <SpanInteraction>
          <ButtonInteraction type="button">
            <DivInteraction>
              <SvgSend></SvgSend>
            </DivInteraction>
          </ButtonInteraction>
        </SpanInteraction>
      </div>
    </SectionInteractions>
  )
}

const SectionInteractions = styled.section`
  flex-direction: row;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
`
const SpanInteraction = styled.span`
  display: inline-block;
`
const ButtonInteraction = styled.button`
  align-items: center;
  background: 0 0;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 15px 8px;
`
const DivInteraction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
