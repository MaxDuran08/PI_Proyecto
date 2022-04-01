import styled from 'styled-components'
import Img from '../../../../assets/img.jpg'

export default function Photo() {
  return (
    <DivPhoto>
      <DivBoxPhoto>
        <ImgPhoto src={Img} />
      </DivBoxPhoto>
    </DivPhoto>
  )
}

const DivPhoto = styled.div`
  width: 100%;
  pointer-events: auto;
`
const DivBoxPhoto = styled.div`
  touch-action: manipulation;
  position: relative;
  display: block;
  overflow: hidden;
`
const ImgPhoto = styled.img`
  height: 100%;
  user-select: none;
  width: 100%;
`
