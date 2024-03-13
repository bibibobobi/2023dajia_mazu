import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    font-size: 16px;
    margin: 0;
    background-color:	#9E003F;
    scroll-behavior: smooth;
    overflow-x: hidden;
    font-family:var(--notoSerifTC-font);
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
