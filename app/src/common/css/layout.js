import { createGlobalStyle } from 'styled-components';

import { ornament } from '../helpers/mixins';
import cssVariables from './variables';

import '@fontsource/montserrat/700.css';

const GlobalStyles = createGlobalStyle`
  ${cssVariables}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    font-weight: 700;
    font-size: 14px;
  }

  *::selection {
    background-color: var(--primary-green);
    color: #fff;

    -webkit-text-fill-color: initial;
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
    padding: 0 0 1.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    position: relative;
    z-index: 9;

    &::after {
      ${ornament}

      width: 100%;
      height: 50%;
      
      right: -0.6em;
      bottom: 0;
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
    line-height: 1.20;
    font-weight: 700;

    &::after {
      bottom: 0.3em;
      background-color: var(--secondary-green);
    }
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  a {
    color: #000;
    text-decoration: none;
    transition: opacity var(--short-transition-duration);

    &::after {
      bottom: 0;
      background-color: var(--transparent-green-max);  
    }

    &:hover {
      opacity: var(--brightened-opacity);

      &::after {
        transform: scaleY(0.3);
      }
    }

    &:focus {
      outline: 3px solid var(--primary-green);
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
    }
  }

  fieldset {
    padding: 0;
    border: 0;
  }
    
  button {
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
  }
`;

export default GlobalStyles;
