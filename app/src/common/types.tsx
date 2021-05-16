import { CSSProperties, Dispatch, SetStateAction } from 'react';

export interface InlineStyledElementType {
  style?: CSSProperties;
}

export interface ItemWithIdType {
  _id: number;
}

export interface ItemHeaderType {
  _id: number;
  name: string;
  containerAs?: 'div' | 'figure';
  headerAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  deleteButtonLabel: string;
  date?: string;
  isMoreContentVisible?: boolean;
  buttonLabel?: string;
  handleButtonClick?: (isMoreContentVisible: boolean) => void;
}

export interface CategoryNameType {
  name: string;
}

export interface CategoryType extends CategoryNameType {
  _id: number;
  type: string;
}

export type AddedCategoryType = Omit<CategoryType, '_id'>;

export type ListedCategoryType = Omit<CategoryType, 'type'>;

export interface EntryDataType {
  price: number | string;
  amount: number | string;
  date: string;
}

export interface EntryDescriptionType {
  description: string;
}

export interface EntryCategoriesType {
  operation: string;
  category: string;
}

export interface EntryType
  extends EntryDataType,
    EntryDescriptionType,
    EntryCategoriesType {
  name: string;
}

export interface ExistingEntryType extends EntryType {
  _id: number;
}

export interface EditEntryFormType extends ExistingEntryType {
  formStyle?: object;
}

export interface InputType {
  name: string;
  placeholder: string;
}

export interface TextInputType extends InputType {
  error?: string;
  style?: object;
  type?: string;
  step?: number;
  min?: number;
  component?: string;
}

export interface CheckboxType extends InputType {
  value: string;
  id: string;
  type?: string;
}

export interface ButtonType extends InlineStyledElementType {
  onClick?: () => void;
  isActive?: boolean;
  label?: string;
}

export interface DeleteButtonType extends ButtonType {
  _id: number;
}

export interface ToggledElementType {
  isVisible: boolean;
}

export interface LinkType {
  to: string;
  title: string;
}

export type SettingFunctionType = (values: object) => void;

// TODO: use this type (after modifications) for ItemsContext
export interface ItemsContextType {
  items: ExistingEntryType[] | CategoryType[];
  setItems:
    | Dispatch<SetStateAction<ExistingEntryType[]>>
    | Dispatch<SetStateAction<CategoryType[]>>;
}
