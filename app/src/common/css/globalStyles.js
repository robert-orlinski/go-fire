import { createGlobalStyle } from 'styled-components';

import globalCssVariables from './variables';

const GlobalStyles = createGlobalStyle`
  ${globalCssVariables}

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;1,500;1,700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    font-weight: 500;
    font-size: 14px;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation;
    font-size: 80%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    overflow-x: hidden;

    width: 100vw;

    &.disabled-scroll {
        overflow: hidden;
    }
  }

  body {
    margin: 0;
    line-height: 1.56;
  }

  body,
  button,
  input,
  textarea,
  select {
    font-family: var(--sans-serif);
    font-weight: 500;
  }

  input,
  textarea,
  select {
    min-width: 0;
    appearance: none;
  }

  input,
  textarea {
    &::placeholder { 
      color: #000;
    }
  }

  fieldset {
    padding: 0;
    border: 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  *::selection {
    background-color: var(--primary-blue);
    color: #fff;

    -webkit-text-fill-color: initial;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.20;
    font-weight: 700;
  }

  p,
  ol,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding-bottom: 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }

  svg {
    display: block;
  }

  button {
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
  }

  blockquote {
    margin: 0;
  }

  cite,
  address {
    font-style: normal;
  }

  strong,
  b {
    font-weight: 700;
  }
`;

export default GlobalStyles;
