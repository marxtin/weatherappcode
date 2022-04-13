import { createGlobalStyle } from 'styled-components';
import codewoff from "./fonts/MPLUS1Code-VariableFont_wght.woff";
import codewoff2 from "./fonts/MPLUS1Code-VariableFont_wght.woff2";
import robotowoff from "./fonts/RobotoSlab-VariableFont_wght.woff";
import robotowoff2 from "./fonts/RobotoSlab-VariableFont_wght.woff2";
import playfairwoff from "./fonts/PlayfairDisplay-VariableFont_wght.woff";
import playfairwoff2 from "./fonts/PlayfairDisplay-VariableFont_wght.woff2";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
   
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }

 .primary {
   background-color: ${({ theme }) => theme.bg};
 }

 @font-face {
  font-family: 'code';
  src: local('code'), local('code'),
  url(${codewoff2}) format('woff2'),
  url(${codewoff}) format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'robotoslab';
  src: local('robotoslab'), local('robotoslab'),
  url(${robotowoff2}) format('woff2'),
  url(${robotowoff}) format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'playfairx';
  src: local('playfairx'), local('playfairx'),
  url(${playfairwoff2}) format('woff2'),
  url(${playfairwoff}) format('woff');
  font-weight: 300;
  font-style: normal;
}

h1, h2 {
  font-family: 'playfairx';
}



li, label, button, p, input, .alert {
  font-family: 'robotoslab';
}

.alert {
  margin-left: 2rem;
  margin-top: 0.5rem;
}
  
 `

