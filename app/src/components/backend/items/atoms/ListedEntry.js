import { useEffect, useState } from 'react';

import ItemContainer from './Container';
import ItemContent from './Content';
import ItemCategories from './EntryCategories';
import ItemDescription from './Description';
import ItemHeader from './Header';
import ItemData from './Data';
import EditForm from './EditForm';

import { returnNiceWholePrice } from '../../../../common/helpers/mixins';
import { visuallyHiddenElementInlineStyle } from '../../../common/accesibility';

const ListedEntry = ({
  _id,
  operation,
  name,
  category,
  price,
  amount,
  date,
  description,
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
        date={formattedDate}
        isContainerVisible={isContainerVisible}
        handleButtonClick={toggleContainerVisibility}
        buttonLabel={isContainerVisible ? 'Show less' : 'Show more'}
        deleteButtonLabel="Delete entry"
      />
      <ItemContent
        style={isContainerVisible || visuallyHiddenElementInlineStyle}
      >
        {description && <ItemDescription description={description} />}
        <ItemCategories
          title="Categories:"
          operation={operation}
          category={category}
        />
        <ItemData
          price={price}
          amount={amount}
          date={formattedDate}
          wholePrice={wholePrice}
        />
        <EditForm
          _id={_id}
          operation={operation}
          name={name}
          category={category}
          price={price}
          amount={amount}
          date={date}
          description={description}
        />
      </ItemContent>
    </ItemContainer>
  );
};

export default ListedEntry;
