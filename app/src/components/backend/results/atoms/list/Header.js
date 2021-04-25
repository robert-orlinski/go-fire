import React from 'react';
import styled from 'styled-components';

import DeleteButton from './DeleteButton';

import { Button } from '../../../../common/buttons';
import { ResultBox } from '../../../../common/containers';
import { UnstyledTitle, ElementWithoutSpace } from '../../../../common/texts';

const ResultHeaderContainer = styled(ResultBox)`
  position: relative;

  padding: var(--vertical-padding) var(--horizontal-padding);
  justify-content: space-between;
`;

const ResultsHeader = styled.div`
  max-width: calc(100% - 200px);
`;

const ResultHeader = ({
  _id,
  name,
  buttonTitle,
  wholePrice,
  isContainerVisible,
  handleButtonClick,
  handleEntryDelete,
}) => {
  return (
    <ResultHeaderContainer>
      <ResultsHeader>
        <UnstyledTitle style={{ paddingBottom: '0.3rem' }}>
          {name}
        </UnstyledTitle>
        <ElementWithoutSpace>{wholePrice}</ElementWithoutSpace>
      </ResultsHeader>
      <Button
        as="button"
        onClick={() => handleButtonClick(!isContainerVisible)}
      >
        {buttonTitle}
      </Button>
      <DeleteButton
        _id={_id}
        handleEntryDelete={handleEntryDelete}
        label="Delete entry"
      />
    </ResultHeaderContainer>
  );
};

export default ResultHeader;
