import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globals';
import { ThemeContext } from 'context/ThemeStore';

const color = {
  black: '#000',
  gray: '#121619',
  green: '#99C24D',
  darkGreen: '#09814A',
  primary: '#048BA8',
  purple: '52489C',
  secondary: '#F18F01',
  white: '#fff',
  yellow: '#F6F740',
};
const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
};

const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
};

const fontWeights = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};

const themes = {
  dark: {
    background: {
      primary: '#2F2D2E',
      secondary: '#2E4057',
    },
    fontColor: { basic: '#fff' },

    color,
    breakpoints,
    fontSizes,
    fontWeights,
  },
  light: {
    background: {
      primary: '#fff',
      secondary: '#EBEBEB',
    },
    fontColor: { basic: '#000' },

    color,
    breakpoints,
    fontSizes,
    fontWeights,
  },
};

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext); // get the current theme ('light' or 'dark')
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
