import React from 'react';
import styled from 'styled-components';

import DeleteButton from './DeleteButton';

import { Button } from '../../../common/buttons';
import { ItemBox } from '../../../common/containers';
import { HeaderWithoutSpace, TextWithoutSpace } from '../../../common/texts';

const ItemHeaderContainer = styled(ItemBox)`
  position: relative;

  padding: var(--vertical-padding) var(--horizontal-padding);
  justify-content: space-between;
`;

const ItemHeaderInner = styled.div`
  max-width: calc(100% - 200px);
`;

const ItemHeader = ({
  _id,
  name,
  wholePrice,
  isContainerVisible,
  handleButtonClick,
  as,
  headerLevel,
  buttonLabel,
  deleteButtonLabel,
}) => {
  return (
    <ItemHeaderContainer as={as}>
      <ItemHeaderInner>
        <HeaderWithoutSpace as={headerLevel}>{name}</HeaderWithoutSpace>
        {wholePrice && (
          <TextWithoutSpace style={{ padding: '0.3rem 0 0' }}>
            {wholePrice}
          </TextWithoutSpace>
        )}
      </ItemHeaderInner>
      {buttonLabel && (
        <Button
          as="button"
          onClick={() => handleButtonClick(!isContainerVisible)}
        >
          {buttonLabel}
        </Button>
      )}
      <DeleteButton _id={_id} label={deleteButtonLabel} />
    </ItemHeaderContainer>
  );
};

export default ItemHeader;
