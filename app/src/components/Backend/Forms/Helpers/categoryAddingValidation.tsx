type CategoriesFormValidationData = {
  name: string;
};

type CategoriesFormErrorsData = {
  name?: string;
};

const handleCategoryAddingValidation = ({
  name,
}: CategoriesFormValidationData) => {
  let errors: CategoriesFormErrorsData = {};

  if (!name) {
    errors.name = 'This field is required';
  }

  return errors;
};

export default handleCategoryAddingValidation;
