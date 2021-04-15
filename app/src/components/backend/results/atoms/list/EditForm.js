import React from 'react';

import { Button } from '../../../../common/buttons';
import { ResultSection } from '../../../../common/containers';
import EditEntryForm from '../../../forms/EditEntry';

const EditForm = ({ buttonTitle, onButtonClick, id, formStyle }) => (
  <ResultSection as="footer">
    <Button as="button" onClick={onButtonClick}>
      {buttonTitle}
    </Button>
    <EditEntryForm id={id} style={formStyle} />
  </ResultSection>
);

export default EditForm;
