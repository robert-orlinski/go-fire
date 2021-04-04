import React from 'react';

import { VisuallyHiddenElement } from '../../../../common/helpers/mixins';
import { CheckboxLabel } from '../../../common/fields';

const Checkbox = ({ name, value, placeholder, type = 'checkbox' }) => (
  <div>
    <VisuallyHiddenElement name={name} value={value} id={value} type={type} />
    <CheckboxLabel htmlFor={value}>{placeholder}</CheckboxLabel>
  </div>
);

export default Checkbox;
