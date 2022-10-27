import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #f5f5f5;
    font-size: 14px;
    font-family: "Mukta", sans-serif;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a{
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
  }

  a, h1, h2, h3, h4, h5, h6, p, span, strong, li, ul {
    font-family: "Rubik", sans-serif;
  }
`;
