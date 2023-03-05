import { createGlobalStyle } from 'styled-components';
import { Noto_Sans_TC, Noto_Serif_TC } from '@next/font/google';

const notosansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['500', '400'],
});
const notoserifTC = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['500', '400'],
});

export const GlobalStyles = createGlobalStyle`

:root{
  --notosansTC-font : ${notosansTC.style.fontFamily};
  --notoserifTC-font : ${notoserifTC.style.fontFamily};
}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    font-family: PingFang TC, ${notosansTC.style.fontFamily}, ${notoserifTC.style.fontFamily};
    font-size: 16px;
    margin: 0;
    background-image: url('/images/Group 212.svg');
    background-attachment: fixed;
    background-color:	#98413A;
    scroll-behavior: smooth;
  }
  a {
    color: inherit;
    text-decoration: none;
  }  
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;  
  }
`;
