import { FormikErrors } from 'formik';

export interface InlineStyledElementProps {
  style?: object;
}

export interface EntryDataProps {
  price: number;
  amount: number;
  date: Date;
}

export interface EntryDescriptionProps {
  description: string;
}

export interface EntryCategoriesProps {
  operation: string;
  category: string;
}

export interface EntryProps
  extends EntryDataProps,
    EntryDescriptionProps,
    EntryCategoriesProps {
  _id?: number;
  name: string;
}

export interface EntryFormProps extends EntryProps {
  formStyle?: object;
  buttonStyle?: object;
  buttonLabel: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
}

export interface TextInputProps extends InputProps {
  error?: string | FormikErrors<Date>;
  style?: object;
  type?: string;
  step?: number;
  min?: number;
  component?: string;
}

export interface CheckboxProps extends InputProps {
  value: string;
  id: string;
  type?: string;
}

export interface ButtonProps extends InlineStyledElementProps {
  onClick: () => void;
  isActive?: boolean;
  label?: string;
}

export interface ToggledElementProps {
  isVisible: boolean;
}

export interface LinkProps {
  to: string;
  title: string;
}
