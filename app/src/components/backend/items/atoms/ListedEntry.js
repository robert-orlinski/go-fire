import React, { useEffect, useState } from 'react';

import ResultContainer from './Container';
import ResultContent from './Content';
import ResultCategories from './ItemCategories';
import ResultDescription from './Description';
import ResultHeader from './Header';
import ResultData from './Data';

import { returnNiceWholePrice } from '../../../../common/helpers/mixins';

const ListedEntry = ({
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
  }, [amount, date, price]);

  return (
    <ResultContainer>
      <ResultHeader
        _id={_id}
        name={name}
        wholePrice={wholePrice}
        isContainerVisible={isContainerVisible}
        handleButtonClick={toggleContainerVisibility}
        buttonLabel="More info"
        deleteButtonLabel="Delete entry"
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

export default ListedEntry;
