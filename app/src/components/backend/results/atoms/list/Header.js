import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../../../common/buttons';
import { ResultBox } from '../../../../common/containers';
import { UnstyledTitle, ElementWithoutSpace } from '../../../../common/texts';

const ResultHeaderContainer = styled(ResultBox)`
  padding: var(--vertical-padding) var(--horizontal-padding);
  justify-content: space-between;
`;

const ResultsHeader = styled.div`
  max-width: calc(100% - 200px);
`;

const ResultHeader = ({
  name,
  buttonTitle,
  values,
  isContainerVisible,
  handleButtonClick,
}) => {
  const [lastValue, setLastValue] = useState(0);

  useEffect(() => {
    const lastEntryInSingleResult = values[values.length - 1];
    const lastAmount = lastEntryInSingleResult.amount;
    const lastPrice = lastEntryInSingleResult.price;

    setLastValue(lastAmount * lastPrice);
  }, []);

  return (
    <ResultHeaderContainer>
      <ResultsHeader>
        <UnstyledTitle style={{ paddingBottom: '0.3rem' }}>
          {name}
        </UnstyledTitle>
        <ElementWithoutSpace>{lastValue} zł</ElementWithoutSpace>
      </ResultsHeader>
      <Button
        as="button"
        onClick={() => handleButtonClick(!isContainerVisible)}
      >
        {buttonTitle}
      </Button>
    </ResultHeaderContainer>
  );
};

export default ResultHeader;