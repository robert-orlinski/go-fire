import React from 'react';

import { Button } from '../../../common/buttons';
import { ItemSection } from '../../../common/containers';
import EditEntryForm from '../../forms/EditEntry';

const EditForm = ({ buttonTitle, onButtonClick, id, formStyle }) => (
  <ItemSection as="footer">
    <Button as="button" onClick={onButtonClick}>
      {buttonTitle}
    </Button>
    <EditEntryForm id={id} style={formStyle} />
  </ItemSection>
);

export default EditForm;
