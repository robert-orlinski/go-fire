import { useState } from 'react';
import { Formik } from 'formik';

import { addCategory } from '../../../common/api/requests';

import handleCategoryAddingValidation from './helpers/categoryAddingValidation';
import handleFieldHighlightIfErrorWillOccur from './helpers/fieldHighlight';

import { CustomForm, Checkboxes } from '../../common/fields';
import { ButtonWithSpace } from '../../common/buttons';

import TextField from './atoms/Text';
import Checkbox from './atoms/Checkbox';
import FinalMessage from './atoms/FinalMessage';

const AddCategoryForm = () => {
  const [finalMessage, setFinalMessage] = useState<string | null>(null);

  return (
    <Formik
      initialValues={{
        name: '',
        type: 'operation',
      }}
      validate={handleCategoryAddingValidation}
      onSubmit={(values, { resetForm }) => {
        addCategory(values).then((message) => {
          setFinalMessage(message);
          resetForm();

          setTimeout(() => setFinalMessage(null), 3000);
        });
      }}
    >
      {({ touched, errors }) => (
        <CustomForm>
          <TextField
            name="name"
            placeholder="Category name (singular)"
            error={errors.name}
            style={handleFieldHighlightIfErrorWillOccur(
              errors,
              'name',
              touched.name
            )}
          />
          <Checkboxes>
            <Checkbox
              name="type"
              value="operation"
              id="operation"
              placeholder="Operation type"
              type="radio"
            />
            <Checkbox
              name="type"
              value="category"
              id="category"
              placeholder="Investment type"
              type="radio"
            />
          </Checkboxes>
          <ButtonWithSpace type="submit" as="button">
            Add category
          </ButtonWithSpace>
          {finalMessage && <FinalMessage>{finalMessage}</FinalMessage>}
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddCategoryForm;
