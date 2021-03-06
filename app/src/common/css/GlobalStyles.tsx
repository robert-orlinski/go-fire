import { createGlobalStyle } from 'styled-components';

import { maxD } from '../helpers/devices';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    font-weight: 700;
    font-size: 14px;

    @media ${maxD.mobileS} {
      font-size: 12.5px;
    }
  }

  *::selection {
    background-color: var(--primary-green);
    color: #fff;

    -webkit-text-fill-color: initial;
  }

  html {
    width: 100vw;

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    touch-action: manipulation;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    scroll-behavior: smooth;
    overflow-x: hidden;
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
    padding: 0 0 1.8rem;

    @media ${maxD.mobileM} {
    padding: 0 0 1.5rem;

    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  .link-text {
    position: relative;
    z-index: 9;

    &::after {
      display: block;
      position: absolute;

      width: 100%;
      height: 50%;
      
      right: -0.6em;
      top: 0.8em;
      z-index: -1;

      transform-origin: bottom;
      transition: transform var(--short-transition-duration);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: inline-block;
    
    line-height: 1.20;
    font-weight: 700;

    &::after {
      background-color: var(--secondary-green);
    }
  }

  h1,
  h2 {
    &::after {
      top: 0.7em;
    }
  }

  h3,
  h4,
  h5,
  h6 {
    &::after {
      height: 0.3em;
      top: 1.2em;
    }
  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.7rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  a,
  summary,
  button,
  .link-text {
    &:focus-visible {
      outline: 3px solid var(--primary-green);
    }
  }

  a,
  .link-text {
    color: #000;
    text-decoration: none;
    transition: opacity var(--short-transition-duration);

    &::after {
      content: '';

      bottom: 0;
      background-color: var(--transparent-green-max);  
    }

    &:hover {
      opacity: var(--brightened-opacity);

      &::after {
        transform: scaleY(0.3);
      }
    }
  }

  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }

  svg {
    display: block;
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
      opacity: 1;
    }
  }

  fieldset {
    padding: 0;
    border: 0;
  }

  button, summary {
    &:hover {
      cursor: pointer;
    }
  }
    
  button {
    border: none;
    padding: 0;
    background-color: transparent;
  }

  summary {
    list-style-type: none;
  }
`;

export default GlobalStyles;
