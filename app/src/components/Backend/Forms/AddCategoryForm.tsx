import { useState } from 'react';
import { Formik } from 'formik';

import { addCategory } from '../../../common/api/requests';

import handleCategoryAddingValidation from './Helpers/categoryAddingValidation';
import handleFieldHighlightIfErrorWillOccur from './Helpers/fieldHighlight';

import { CustomForm, Checkboxes } from '../../Common/fields';
import { ButtonWithSpace } from '../../Common/buttons';

import TextField from './Atoms/Text';
import Checkbox from './Atoms/Checkbox';
import FinalMessage from './Atoms/FinalMessage';

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
              value="type"
              id="type"
              placeholder="Investment type"
              type="radio"
            />
          </Checkboxes>
          <ButtonWithSpace type="submit" as="button">
            Add category
          </ButtonWithSpace>
          {finalMessage && <FinalMessage message={finalMessage} />}
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddCategoryForm;
