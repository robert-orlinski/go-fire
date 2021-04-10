import React from 'react';
import styled from 'styled-components';

import { ResultBox, ResultSection } from '../../../../common/containers';
import { UnstyledTitle } from '../../../../common/texts';

const ResultDate = styled.span`
  &::after {
    display: inline-block;
    position: relative;
    content: '';

    width: 80px;
    height: 2px;

    top: -4px;
    margin: 0 20px;

    background-color: var(--primary-green);
  }
`;

const ResultHistoricalEntry = styled(ResultBox)`
  &:not(:last-of-type) {
    padding-bottom: 1rem;
  }
`;

const ResultHistory = ({ title, values }) => (
  <ResultSection>
    <UnstyledTitle>{title}</UnstyledTitle>
    {values.map(({ price, date }) => {
      const dateArray = date.split('-');
      const formattedDate = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]} `;

      return (
        <ResultHistoricalEntry>
          <ResultDate>{formattedDate}</ResultDate>
          <span>{price} zł</span>
        </ResultHistoricalEntry>
      );
    })}
  </ResultSection>
);

export default ResultHistory;
