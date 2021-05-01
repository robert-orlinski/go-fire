import React, { useState } from 'react';

import AddEntryForm from '../../forms/AddEntryForm';

import { Button } from '../../../common/buttons';
import { ItemSection } from '../../../common/containers';

import { visuallyHiddenElementInlineStyle } from '../../../common/accesibility';

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
    <ItemSection as="footer" style={{ paddingTop: '1.5rem' }}>
      <Button as="button" onClick={() => toggleFormVisibility(!isFormVisible)}>
        Edit entry
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
