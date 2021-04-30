import React, { useEffect, useState } from 'react';

import ItemContainer from './Container';
import ItemContent from './Content';
import ItemCategories from './ItemCategories';
import ItemDescription from './Description';
import ItemHeader from './Header';
import ItemData from './Data';

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
    <ItemContainer>
      <ItemHeader
        _id={_id}
        name={name}
        wholePrice={wholePrice}
        isContainerVisible={isContainerVisible}
        handleButtonClick={toggleContainerVisibility}
        buttonLabel="More info"
        deleteButtonLabel="Delete entry"
      />
      <ItemContent style={isContainerVisible || { display: 'none' }}>
        {message && (
          <ItemDescription title="Description:" description={message} />
        )}
        <ItemCategories
          title="Categories:"
          operation={operation}
          category={type}
        />
        <ItemData
          price={price}
          amount={amount}
          date={formattedDate}
          wholePrice={wholePrice}
        />
      </ItemContent>
    </ItemContainer>
  );
};

export default ListedEntry;
