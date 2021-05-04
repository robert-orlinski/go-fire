import { VisuallyHiddenElement } from '../../../Common/accesibility';
import { CheckboxContainer, CheckboxLabel } from '../../../Common/fields';

const Checkbox = ({ name, value, id, placeholder, type = 'radio' }) => {
  return (
    <CheckboxContainer>
      <VisuallyHiddenElement name={name} value={value} id={id} type={type} />
      <CheckboxLabel htmlFor={id}>{placeholder}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
