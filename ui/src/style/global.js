import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * { box-sizing: border-box; }

  html {
    background: #e0e0e0;
  }

  body {
    background: white;
    padding: 30px;
    width: 1400px;
    margin: 0 auto;
    height: 100vh;
  }

`;

export default GlobalStyle;
