import React from 'react';
import styled from 'styled-components';

import { ResultBox, ResultSection } from '../../../../common/containers';
import {
  ElementWithoutSpace,
  ListWithoutSpace,
  UnstyledTitle,
} from '../../../../common/texts';

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

const ResultHistoricalEntry = styled(ResultBox)`
  display: flex;
  justify-content: space-between;

  &:not(:last-of-type) {
    padding-bottom: 0.7rem;
  }
`;

const ResultHistory = ({ title, values }) => (
  <ResultSection>
    <UnstyledTitle>{title}</UnstyledTitle>
    <ListWithoutSpace>
      {values.map(({ price, amount, date }) => {
        const dateArray = date.split('-');
        const formattedDate = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]} `;

        const total = price * amount;
        const totalWithThousandsSeparator = total
          .toFixed(2)
          .replace(/(?=(\d{3})+(?!\d))/g, ' ');

        return (
          <ResultHistoricalEntry key={`${price}-${amount}-${date}`} as="li">
            <ElementWithoutSpace>
              <ResultDate>{formattedDate}</ResultDate>
              <ResultAmount>{amount} papers</ResultAmount>
              <span>{price} zł</span>
            </ElementWithoutSpace>
            <ElementWithoutSpace>
              Total: {totalWithThousandsSeparator} zł
            </ElementWithoutSpace>
          </ResultHistoricalEntry>
        );
      })}
    </ListWithoutSpace>
  </ResultSection>
);

export default ResultHistory;
