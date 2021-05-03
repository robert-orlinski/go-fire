import React, { useContext } from 'react';
import styled from 'styled-components';

import { ReactComponent as Arrow } from './../../../../static/icons/arrow-down.svg';

import { overlay } from '../../../../common/helpers/mixins';

const ButtonContainer = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${overlay}
  padding: var(--item-vertical-padding) var(--item-horizontal-padding);
`;

const StyledArrow = styled(Arrow)`
  width: var(--item-more-button-size);
  height: var(--item-more-button-size);

  fill: var(--primary-green);
`;

const MoreButton = ({ label, onClick, style }) => (
  <ButtonContainer aria-label={label} onClick={onClick}>
    <StyledArrow style={style} />
  </ButtonContainer>
);

export default MoreButton;
