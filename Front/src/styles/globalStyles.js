import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    ${({ theme }) => css`
      font-family: ${theme.fonts.default}, sans-serif;
      font-size: ${theme.fontSizes.small};
    `}
  }

  a {
    text-decoration: none;
    color: var(--text-color);
  }
`

export default GlobalStyle
