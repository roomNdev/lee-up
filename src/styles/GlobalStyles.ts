import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --primary-light-blue: #CAF0F8;
    --primary: #4A46EB;
    --secondary: #753AFF;
    --darkBlue: #070747; 
    --darkPurple: #0E0034;
    --black-1: #0D121F;
    --black-2: #121826;
    --text-1: #002244;
    --white-1: #F1F1F1;
    --light-gray: #BBBBBB;
    --gray: #2B2B2B;
    --grey: var(--gray);
    --white: white;
    --black: black;
  }
  html{
    font-size: 10px;
  }
  
  body{
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    font-family: 'Inter Variable';
    background: var(--white-1);
    color: var(--white);
  }
  a{
    text-decoration: none;
    color: var(--white);
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
  img, svg{
    height: 100%;
    width: 100%;
  }
  li, ul{
    list-style: none;
  }
`;

export default GlobalStyles;
