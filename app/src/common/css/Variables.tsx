import { createGlobalStyle } from 'styled-components';

import { maxD } from '../helpers/devices';

const StyleVariables = createGlobalStyle`
  :root {
    --flex: display: flex;
    --sans-serif: 'Montserrat', sans-serif;

    --primary-green: #43A047;
    --secondary-green: #66BB6A;

    --primary-blue: #206BF9;
    --secondary-blue: #BBDEFB;

    --primary-gray: #333;
    --secondary-gray: #ecf0f3;

    --primary-red: #D32F2F;
    --secondary-red: #FFCDD2;
    
    --transparent-green-min: rgba(200, 230, 201, 0.1);
    --transparent-green-med: rgba(200, 230, 201, 0.35);
    --transparent-green-max: rgba(200, 230, 201, 0.7);

    --brightened-opacity: 0.7;
    --short-transition-duration: 200ms;

    --max-z-index: 999;

    --nav-width: max(270px, 20vw);
    --nav-height: 100vh;
    --banner-height: 300px;

    @media ${maxD.tabletL} {
      --nav-width: 100%;
      --nav-height: calc(6.3rem);
    }

    @media ${maxD.mobileL} {
      --nav-height: calc(5.4rem);
    }

    @media ${maxD.mobileS} {
      --banner-height: 250px;
    }
  }
`;

export default StyleVariables;
