type EntriesFormValidationData = {
  name: string;
  price: number | string;
  amount: number | string;
  date: Date;
};

type EntriesFormErrorsData = {
  name?: string;
  price?: string;
  amount?: string;
  date?: string;
};

const handleEntryAddingValidation = ({
  name,
  price,
  amount,
  date,
}: EntriesFormValidationData) => {
  let errors: EntriesFormErrorsData = {};

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

export default handleEntryAddingValidation;
