import styled from 'styled-components';

import { ReactComponent as Arrow } from './../../../../static/icons/arrow-down.svg';
import ItemContainer from './Container';

const MoreArrow = styled(Arrow)`
  display: flex;
  align-items: center;
  position: absolute;

  width: var(--item-more-button-size);
  height: 100%;

  right: var(--item-horizontal-padding);
  top: 0;

  fill: var(--primary-green);

  ${ItemContainer}[open] & {
    transform: rotate(180deg);
  }
`;

export default MoreArrow;
