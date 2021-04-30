import React from 'react';
import styled from 'styled-components';

import DeleteButton from './DeleteButton';

import { Button } from '../../../common/buttons';
import { ResultBox } from '../../../common/containers';
import { HeaderWithoutSpace, TextWithoutSpace } from '../../../common/texts';

const ResultHeaderContainer = styled(ResultBox)`
  position: relative;

  padding: var(--vertical-padding) var(--horizontal-padding);
  justify-content: space-between;
`;

const ResultHeaderInner = styled.div`
  max-width: calc(100% - 200px);
`;

const ResultHeader = ({
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
    <ResultHeaderContainer as={as}>
      <ResultHeaderInner>
        <HeaderWithoutSpace as={headerLevel}>{name}</HeaderWithoutSpace>
        {wholePrice && (
          <TextWithoutSpace style={{ padding: '0.3rem 0 0' }}>
            {wholePrice}
          </TextWithoutSpace>
        )}
      </ResultHeaderInner>
      {buttonLabel && (
        <Button
          as="button"
          onClick={() => handleButtonClick(!isContainerVisible)}
        >
          {buttonLabel}
        </Button>
      )}
      <DeleteButton _id={_id} label={deleteButtonLabel} />
    </ResultHeaderContainer>
  );
};

export default ResultHeader;
