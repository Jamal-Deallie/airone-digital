import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#A682FA',
    secondary: '#1A1B1D',
    tertiary: '#FBEBDC',
  },
  view: {
    mobile: `(max-width: 767px)`,
    tablet: `(max-width: 1024px)`,
    desktop: `(min-width: 1025px)`,
  },
  flex: {
    column:
      'display: flex; flex-direction:column; align-items: center; justify-content: space-between; ',
    row: 'display: flex; align-items: center; justify-content: space-between;',
  },
  fontFamily: {
    heading: 'font-family: Headline, sans-serif',
    body: 'font-family: Open Sans, sans-serif',
  },
} as const;

export default theme;
