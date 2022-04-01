import styled from 'styled-components'

export default function InputPost() {
  return (
    <SectionInput>
      <DivForm>
        <FormPost className="X7cDz" method="POST">
          <ButtonPost className="wpO6b  " type="button">
            <div className="QBdPU ">
              <svg
                aria-label="Emoji"
                className="_8-yf6 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
                <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
              </svg>
            </div>
          </ButtonPost>
          <div className="" style={{ right: '53px', bottom: '355px' }}></div>
          <TextAreaPost
            aria-label="Add a comment…"
            data-testid="post-comment-text-area"
            placeholder="Add a comment…"
            autoComplete="off"
            autoCorrect="off"
          ></TextAreaPost>
          <ButtonSubmitPost
            className="sqdOP yWX7d    y3zKF     "
            data-testid="post-comment-input-button"
            disabled=""
            type="submit"
          >
            Post
          </ButtonSubmitPost>
        </FormPost>
      </DivForm>
    </SectionInput>
  )
}

const SectionInput = styled.section`
  width: 100%;
  border-top: 1px solid #efefef;
  border-top: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
  color: var(--border-color-second);
  flex-shrink: 0;
  font-size: 14px;
  display: flex;
  line-height: 18px;
  padding-left: 16px;
  padding-right: 16px;
`
const DivForm = styled.div`
  width: 100%;
`
const FormPost = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
  padding: 4px 8px 4px 0;
`
const ButtonPost = styled.button`
  align-items: center;
  background: 0 0;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 8px 16px 8px 0;
`
const TextAreaPost = styled.textarea`
  background: 0 0;
  border: 0;
  color: #262626;
  color: rgba(var(--i1d, 38, 38, 38), 1);
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  font-size: inherit;
  height: 18px;
  max-height: 80px;
  outline: 0;
  padding: 0;
  resize: none;
`
const ButtonSubmitPost = styled.button`
  appearance: none;
  background: 0 0;
  border: 0;
  cursor: pointer;
  display: block;
  font-weight: 600;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  user-select: none;
  width: auto;
  /* color: var(--first-color-alt); */
  color: var(--second-color-alt);
  position: absolute;
  right: 0;
`
