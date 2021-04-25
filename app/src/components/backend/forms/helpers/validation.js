import { getIn } from 'formik';

export const handleCategoryValidation = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'This field is required';
  }

  if (!values.type) {
    errors.type = 'This field is required';
  }

  return errors;
};

export const highlightFieldIfErrorWillOccur = (error, fieldName) => {
  if (getIn(error, fieldName))
    return {
      '--input-theme': 'var(--primary-red)',
    };
};
