import React, { useState } from 'react';
import { Formik } from 'formik';

import { addCategory } from '../../../common/api/requests';

import {
  handleCategoryValidation,
  highlightFieldIfErrorWillOccur,
} from './helpers/validation';

import { CustomForm, Checkboxes } from '../../common/fields';
import { ButtonWithSpace } from '../../common/buttons';
import { CenteredText } from '../../common/texts';

import TextField from './fields/Text';
import Checkbox from './fields/Checkbox';

const AddCategoryForm = () => {
  const [finalMessage, setFinalMessage] = useState(null);

  return (
    <Formik
      initialValues={{
        name: '',
        type: 'transaction',
      }}
      validate={handleCategoryValidation}
      onSubmit={(values, { resetForm }) => {
        addCategory(values).then((message) => {
          setFinalMessage(message);
        });

        resetForm();
      }}
    >
      {({ errors }) => (
        <CustomForm>
          <TextField
            name="name"
            placeholder="Category name (singular)"
            error={errors.name}
            style={highlightFieldIfErrorWillOccur(errors, 'name')}
          />
          <Checkboxes>
            <Checkbox
              name="type"
              value="operation"
              placeholder="Operation type"
              type="radio"
            />
            <Checkbox
              name="type"
              value="type"
              placeholder="Investment type"
              type="radio"
            />
          </Checkboxes>
          <ButtonWithSpace type="submit" as="button">
            Add category
          </ButtonWithSpace>
          <CenteredText style={{ marginTop: '2rem' }}>
            {finalMessage}
          </CenteredText>
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddCategoryForm;
