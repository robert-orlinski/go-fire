import React from 'react';
import styled from 'styled-components';

import { HeaderWithoutSpace, TextWithoutSpace } from '../../../common/texts';

import DeleteButton from './DeleteButton';
import MoreButton from './MoreButton';

const ItemHeaderContainer = styled.header`
  position: relative;
`;

const ItemHeaderContent = styled.div`
  width: 100%;
  padding: var(--item-vertical-padding) var(--item-horizontal-padding);

  transition: background-color var(--short-transition-duration);

  &:hover {
    background-color: var(--transparent-green-med);
  }
`;

const ItemHeaderInner = styled.div`
  padding-right: calc(var(--item-more-button-size) + 1rem);
`;

const ItemHeader = ({
  _id,
  name,
  date,
  isContainerVisible,
  handleButtonClick,
  as,
  headerLevel,
  buttonLabel,
  deleteButtonLabel,
}) => {
  return (
    <ItemHeaderContainer as={as}>
      <ItemHeaderContent>
        <ItemHeaderInner>
          <HeaderWithoutSpace as={headerLevel}>{name}</HeaderWithoutSpace>
          {date && (
            <TextWithoutSpace style={{ padding: '0.4rem 0 0' }}>
              {date}
            </TextWithoutSpace>
          )}
        </ItemHeaderInner>
        {buttonLabel && (
          <MoreButton
            label={buttonLabel}
            onClick={() => handleButtonClick(!isContainerVisible)}
          />
        )}
      </ItemHeaderContent>
      <DeleteButton _id={_id} label={deleteButtonLabel} />
    </ItemHeaderContainer>
  );
};

export default ItemHeader;
