import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    font-family: PingFang TC;
    font-size: 16px;
    margin: 0;
    background-image: url('https://res.cloudinary.com/di1olybhs/image/upload/v1678763757/Group_212_b76cpl.svg');
    background-attachment: fixed;
    background-color:	#98413A;
    scroll-behavior: smooth;
    overflow-x: hidden;
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
