import React from 'react';
import { css } from 'styled-components';

const cssVariables = css`
  :root {
    --flex: display: flex;
    --sans-serif: 'Montserrat', sans-serif;

    --primary-blue: #206BF9;
    --secondary-blue: #BBDEFB;

    --primary-gray: #333;
    --secondary-gray: #ecf0f3;

    --primary-red: #D32F2F;
    --secondary-red: #FFCDD2;
    --transparent-red-min: rgba(255, 205, 210, 0.1);
    --transparent-red-med: rgba(255, 205, 210, 0.5);
    --transparent-red-max: rgba(255, 205, 210, 0.7);

    --primary-green: #43A047;
    --secondary-green: #66BB6A;
    --transparent-green-min: rgba(200, 230, 201, 0.1);
    --transparent-green-med: rgba(200, 230, 201, 0.5);
    --transparent-green-max: rgba(200, 230, 201, 0.7);

    --brightened-opacity: 0.7;
    --short-transition-duration: 300ms;

    --nav-width-desktop: min(350px, 20vw);
    --banner-height-desktop: 300px;
  }
`;

export default cssVariables;
