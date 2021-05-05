import { useState } from 'react';

import AddEntryForm from '../../forms/AddEntryForm';

import { Button } from '../../../common/buttons';
import { ItemSection } from '../../../common/containers';

import { visuallyHiddenElementInlineStyle } from '../../../common/accesibility';
import { EntryProps } from '../../../../common/types';

const EditForm: React.FC<EntryProps> = ({
  _id,
  operation,
  name,
  category,
  price,
  amount,
  date,
  description,
}) => {
  const [isFormVisible, toggleFormVisibility] = useState(false);

  return (
    <ItemSection as="footer" style={{ paddingTop: '0' }}>
      <Button as="button" onClick={() => toggleFormVisibility(!isFormVisible)}>
        {isFormVisible ? 'Stop editing' : 'Edit entry'}
      </Button>
      <AddEntryForm
        _id={_id}
        operation={operation}
        name={name}
        category={category}
        price={price}
        amount={amount}
        date={date}
        description={description}
        formStyle={
          isFormVisible
            ? { paddingTop: '1.5rem' }
            : visuallyHiddenElementInlineStyle
        }
        buttonLabel="Apply"
      />
    </ItemSection>
  );
};

export default EditForm;
