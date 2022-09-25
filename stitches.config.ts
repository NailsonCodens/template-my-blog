import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)'
  },
  theme: {
    fonts: {
      system: 'system-ui'
    },
    colors: {
      white: '#fff',
      grey: '#2E2E2E',
      blue: '#0080FF',
      borderpost: '#F5F5F5'
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px'
    },
    radii: {
      borderTLR: '10px',
      borderTRR: '10px'
    }
  }
})
