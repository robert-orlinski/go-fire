import React from 'react';
import styled from 'styled-components';
import { returnNiceProduct } from '../../../../../common/helpers/mixins';

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

        const totalWithThousandsSeparator = returnNiceProduct(price, amount);

        return (
          <ResultHistoricalEntry key={`${price}-${amount}-${date}`} as="li">
            <ElementWithoutSpace>
              <ResultDate>{formattedDate}</ResultDate>
              <ResultAmount>{amount} papers</ResultAmount>
              <span>{price} zł</span>
            </ElementWithoutSpace>
            <ElementWithoutSpace>
              Total: {totalWithThousandsSeparator}
              {/* <DeleteButton /> */}
            </ElementWithoutSpace>
          </ResultHistoricalEntry>
        );
      })}
    </ListWithoutSpace>
  </ResultSection>
);

export default ResultHistory;
