import { createGlobalStyle } from 'styled-components';
import { theme } from './MainTheme';
import { device } from '../devices/Breakpoints';

const GlobalTheme = {
  textColor: theme.colors.brand.text600,
  fontSize: '62.5%'
}

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: ${ GlobalTheme.fontSize };

    @media ${ device.laptopL } {
      overflow: hidden;
    }
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background: '#fff';
    color: ${ GlobalTheme.textColor };

  }
`;

export default GlobalStyle;