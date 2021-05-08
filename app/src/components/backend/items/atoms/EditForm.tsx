import { useState } from 'react';

import { Button } from '../../../common/buttons';
import { ItemSection } from '../../../common/containers';

import { visuallyHiddenElementInlineStyle } from '../../../common/accesibility';
import { ExistingEntryType } from '../../../../common/types';

import EditEntryForm from '../../forms/EditEntryForm';

const EditForm: React.FC<ExistingEntryType> = ({
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
      <EditEntryForm
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
      />
    </ItemSection>
  );
};

export default EditForm;
