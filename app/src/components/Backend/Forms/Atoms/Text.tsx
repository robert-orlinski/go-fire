import { ErrorMessage } from 'formik';

import { VisuallyHiddenElement } from '../../../common/accesibility';
import { ErrorContainer, FormLine, TextInput } from '../../../common/fields';
import { TextInputProps } from '../../../../common/types';

const TextField: React.FC<TextInputProps> = ({
  name,
  placeholder,
  error,
  style,
  type,
  step,
  min,
  component,
}) => {
  return (
    <FormLine style={style}>
      <VisuallyHiddenElement as="label" htmlFor={name}>
        {placeholder}
      </VisuallyHiddenElement>
      <TextInput
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
        step={step}
        min={min}
        component={component}
      />
      <ErrorMessage component={ErrorContainer} name={name} />
    </FormLine>
  );
};

export default TextField;
