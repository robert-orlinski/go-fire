import React from 'react';
import styled from 'styled-components';

import { ResultBox, ResultSection } from '../../../common/containers';
import { UnstyledTitle } from '../../../common/texts';

const ResultStyledEntry = styled.span`
  &::after {
    display: inline-block;
    position: relative;
    content: '';

    height: 2px;

    top: -4px;
    margin: 0 20px;

    background-color: var(--primary-green);
  }
`;

const ResultDate = styled(ResultStyledEntry)`
  &::after {
    width: 60px;
  }
`;

const ResultAmount = styled(ResultStyledEntry)`
  &::after {
    width: 30px;
  }
`;

const ResultDataLine = styled(ResultBox)`
  justify-content: space-between;

  &:not(:last-of-type) {
    padding-bottom: 0.7rem;
  }
`;

const ResultData = ({ price, amount, date, wholePrice }) => {
  return (
    <ResultSection>
      <UnstyledTitle>Data:</UnstyledTitle>
      <ResultDataLine as="p">
        <span>
          <ResultDate>{date}</ResultDate>
          <ResultAmount>{amount} papers</ResultAmount>
          <span>{price} zł</span>
        </span>
        <span>Total: {wholePrice}</span>
      </ResultDataLine>
    </ResultSection>
  );
};

export default ResultData;
