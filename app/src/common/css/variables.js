import { css } from 'styled-components';

const cssVariables = css`
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
    --transparent-green-med: rgba(200, 230, 201, 0.5);
    --transparent-green-max: rgba(200, 230, 201, 0.7);

    --brightened-opacity: 0.7;
    --short-transition-duration: 300ms;

    --nav-width-desktop: min(350px, 20vw);
    --banner-height-desktop: 300px;
  }
`;

export default cssVariables;
