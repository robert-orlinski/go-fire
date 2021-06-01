import { CheckboxType } from '../../../../common/types';
import { VisuallyHiddenElement } from '../../../common/accesibility';
import { CheckboxContainer, CheckboxLabel } from '../../../common/fields';

const Checkbox: React.FC<CheckboxType> = ({
  name,
  value,
  id,
  placeholder,
  type = 'radio',
}) => {
  return (
    <CheckboxContainer>
      <VisuallyHiddenElement name={name} value={value} id={id} type={type} />
      <CheckboxLabel htmlFor={id}>{placeholder}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
