import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    font-family: PingFang TC;
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
