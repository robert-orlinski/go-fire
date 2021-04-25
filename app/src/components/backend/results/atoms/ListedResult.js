import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ResultCategories from './list/Categories';
import ResultDescription from './list/Description';
import ResultHeader from './list/Header';
import ResultData from './list/Data';

import { returnNiceProduct } from '../../../../common/helpers/mixins';
import { SpacedButton } from '../../../common/buttons';

const ResultContainer = styled.section`
  --vertical-padding: 2rem;
  --horizontal-padding: 3.5rem;
  --border-style: 3px solid var(--transparent-green-max);

  border: var(--border-style);

  &:not(:last-of-type) {
    margin-bottom: 3rem;
  }
`;

const ResultContent = styled.article`
  padding: calc(var(--vertical-padding) * 1.6) var(--horizontal-padding);
  border-top: var(--border-style);
`;

const ListedResult = ({
  transaction,
  name,
  type,
  price,
  amount,
  date,
  message,
}) => {
  const [isContainerVisible, toggleContainerVisibility] = useState(false);
  const [wholePrice, setWholePrice] = useState(0);
  const [formattedDate, setFormattedDate] = useState(0);

  useEffect(() => {
    const dateArray = date.split('-');
    setFormattedDate(`${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`);

    setWholePrice(returnNiceProduct(price, amount));
  }, []);

  return (
    <ResultContainer>
      <ResultHeader
        name={name}
        buttonTitle="More info"
        wholePrice={wholePrice}
        isContainerVisible={isContainerVisible}
        handleButtonClick={toggleContainerVisibility}
      />
      <ResultContent style={isContainerVisible || { display: 'none' }}>
        {message && (
          <ResultDescription title="Description:" description={message} />
        )}
        <ResultCategories
          title="Categories:"
          transaction={transaction}
          category={type}
        />
        <ResultData
          price={price}
          amount={amount}
          date={formattedDate}
          wholePrice={wholePrice}
        />
        <SpacedButton as="button">Remove entry</SpacedButton>
      </ResultContent>
    </ResultContainer>
  );
};

export default ListedResult;
