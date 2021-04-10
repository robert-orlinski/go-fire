import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../common/buttons';

import { ResultBox } from '../../../../common/containers';
import { UnstyledTitle } from '../../../../common/texts';

const ResultHeaderContainer = styled(ResultBox)`
  padding: var(--vertical-padding) var(--horizontal-padding);
  justify-content: space-between;
`;

const ResultsTitle = styled(UnstyledTitle)`
  max-width: calc(100% - 200px);
`;

const ResultHeader = ({
  name,
  buttonTitle,
  isContainerVisible,
  handleButtonClick,
}) => (
  <ResultHeaderContainer>
    <ResultsTitle style={{ 'padding-bottom': '0' }}>{name}</ResultsTitle>
    <Button onClick={() => handleButtonClick(!isContainerVisible)}>
      {buttonTitle}
    </Button>
  </ResultHeaderContainer>
);

export default ResultHeader;
