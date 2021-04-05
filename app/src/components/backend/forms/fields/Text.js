import React from 'react';

import { VisuallyHiddenElement } from '../../../common/accesibility';
import { Label, FormLine, TextInput } from '../../../common/fields';

const TextField = ({ name, placeholder, ...props }) => (
  <FormLine>
    <VisuallyHiddenElement as="label" htmlFor={name}>
      {placeholder}
    </VisuallyHiddenElement>
    <TextInput name={name} id={name} placeholder={placeholder} {...props} />
  </FormLine>
);

export default TextField;
