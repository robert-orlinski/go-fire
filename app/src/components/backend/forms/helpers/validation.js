import { getIn } from 'formik';

export const handleEntryAddValidation = ({ name, price, amount, date }) => {
  let errors = {};

  if (!name) {
    errors.name = "What's the name of your entry?";
  }

  if (!price) {
    errors.price = 'Price is required';
  } else if (Number(price) !== price) {
    errors.price = 'Price has to be a number';
  }

  if (!amount) {
    errors.amount = 'Amount is required';
  } else if (Number(amount) !== amount) {
    errors.amount = 'Amount has to be a number';
  }

  if (!date) {
    errors.date = 'You need to fill in the date';
  }

  return errors;
};

export const handleCategoryAddValidation = ({ name }) => {
  let errors = {};

  if (!name) {
    errors.name = 'This field is required';
  }

  return errors;
};

export const highlightFieldIfErrorWillOccur = (
  error,
  fieldName,
  elementTouched
) => {
  if (getIn(error, fieldName) && elementTouched)
    return {
      '--input-theme': 'var(--primary-red)',
    };
};
