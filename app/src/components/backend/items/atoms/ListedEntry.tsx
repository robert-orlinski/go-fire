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
import { ExistingEntryType } from '../../../../common/types';

const ListedEntry: React.FC<ExistingEntryType> = ({
  _id,
  operation,
  name,
  category,
  price,
  amount,
  date,
  description,
}) => {
  const [isMoreContentVisible, toggleContainerVisibility] = useState(false);
  const [wholePrice, setWholePrice] = useState('');
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const dateArray = date.split('-');
    setFormattedDate(`${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`);

    setWholePrice(returnNiceWholePrice(price as number, amount as number));
  }, [amount, date, price]);

  return (
    <ItemContainer>
      <ItemHeader
        _id={_id}
        name={name}
        date={formattedDate}
        isMoreContentVisible={isMoreContentVisible}
        handleButtonClick={toggleContainerVisibility}
        buttonLabel={isMoreContentVisible ? 'Show less' : 'Show more'}
        deleteButtonLabel="Delete entry"
      />
      <ItemContent
        style={
          isMoreContentVisible ? undefined : visuallyHiddenElementInlineStyle
        }
      >
        {description && <ItemDescription description={description} />}
        <ItemCategories operation={operation} category={category} />
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
