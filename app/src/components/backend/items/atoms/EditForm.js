import { useState } from 'react';

import AddEntryForm from '../../Forms/AddEntryForm';

import { Button } from '../../../Common/buttons';
import { ItemSection } from '../../../Common/containers';

import { visuallyHiddenElementInlineStyle } from '../../../Common/accesibility';

const EditForm = ({
  _id,
  operation,
  name,
  type,
  price,
  amount,
  date,
  message,
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
        type={type}
        price={price}
        amount={amount}
        date={date}
        message={message}
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
