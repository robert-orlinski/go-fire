import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ResultCategories from './list/Categories';
import ResultDescription from './list/Description';
import ResultHeader from './list/Header';
import ResultData from './list/Data';

import { returnNiceWholePrice } from '../../../../common/helpers/mixins';
import { ButtonWithSpace } from '../../../common/buttons';

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
  handleEntryDelete,
  _id,
  operation,
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

    setWholePrice(returnNiceWholePrice(price, amount));
  }, []);

  return (
    <ResultContainer>
      <ResultHeader
        _id={_id}
        name={name}
        buttonTitle="More info"
        wholePrice={wholePrice}
        isContainerVisible={isContainerVisible}
        handleButtonClick={toggleContainerVisibility}
        handleEntryDelete={handleEntryDelete}
      />
      <ResultContent style={isContainerVisible || { display: 'none' }}>
        {message && (
          <ResultDescription title="Description:" description={message} />
        )}
        <ResultCategories
          title="Categories:"
          operation={operation}
          category={type}
        />
        <ResultData
          price={price}
          amount={amount}
          date={formattedDate}
          wholePrice={wholePrice}
        />
      </ResultContent>
    </ResultContainer>
  );
};

export default ListedResult;
