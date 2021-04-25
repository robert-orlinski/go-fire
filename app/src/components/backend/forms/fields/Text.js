import { ErrorMessage } from 'formik';
import React from 'react';

import { VisuallyHiddenElement } from '../../../common/accesibility';
import { ErrorContainer, FormLine, TextInput } from '../../../common/fields';

const TextField = ({ name, placeholder, error, style, ...props }) => {
  return (
    <FormLine style={style}>
      <VisuallyHiddenElement as="label" htmlFor={name}>
        {placeholder}
      </VisuallyHiddenElement>
      <TextInput name={name} id={name} placeholder={placeholder} {...props} />
      <ErrorContainer>
        <ErrorMessage name={name}></ErrorMessage>
      </ErrorContainer>
    </FormLine>
  );
};

export default TextField;
