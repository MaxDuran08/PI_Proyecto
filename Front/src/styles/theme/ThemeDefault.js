import React from 'react'
import { ThemeProvider } from 'styled-components'
import fontSizes from './assets/fontSizes'
import mediaQuerys from './assets/mediaQuerys'

import WebFont from 'webfontloader'

export const theme = {
  colors: {
    first: '#ffffff',
    firstAlt: '#3897f0',
    second: '#000000',
    secondAlt: '#b2dffc',
    third: '#8e8e8e',
    thirdAlt: '#262626',
    fourth: '#767676;',
    background: '#fafafa',
    border: '#dbdbdb',
    error: '#ff3c32',
  },
  fonts: {
    default: 'Lato',
    logo: 'Praise',
    header: 'Open Sans',
  },
  lineHeight: {
    small: 1.3,
    normal: 1.6,
  },
  fontSizes,
  mediaQuerys,
}

WebFont.load({
  google: {
    families: [theme.fonts.default, theme.fonts.logo, theme.fonts.header],
  },
})

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
