import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Open Sans',
      styles: ['700'],
    },
    {
      name: 'Montserrat',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Open Sans'],
  bodyFontFamily: ['Montserrat'],
})

export default typography
