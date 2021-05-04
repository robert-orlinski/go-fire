import { VisuallyHiddenElement } from '../../../Common/accesibility';
import { CheckboxContainer, CheckboxLabel } from '../../../Common/fields';

interface Props {
  name: string;
  value: string;
  id: string;
  placeholder: string;
  type?: string;
}

const Checkbox: React.FC<Props> = ({
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
