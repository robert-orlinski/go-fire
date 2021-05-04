import { ErrorMessage, FormikErrors } from 'formik';

import { VisuallyHiddenElement } from '../../../Common/accesibility';
import { ErrorContainer, FormLine, TextInput } from '../../../Common/fields';

interface Props {
  name: string;
  placeholder: string;
  error?: string | FormikErrors<Date>;
  style?: object;
  type?: string;
  step?: number;
  min?: number;
  component?: string;
}

const TextField: React.FC<Props> = ({
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
