import React from 'react';

import { VisuallyHiddenElement } from '../../../common/accesibility';
import { CheckboxContainer, CheckboxLabel } from '../../../common/fields';

const Checkbox = ({ name, value, placeholder, type = 'radio' }) => (
  <CheckboxContainer>
    <VisuallyHiddenElement name={name} value={value} id={name} type={type} />
    <CheckboxLabel htmlFor={name}>{placeholder}</CheckboxLabel>
  </CheckboxContainer>
);

export default Checkbox;
