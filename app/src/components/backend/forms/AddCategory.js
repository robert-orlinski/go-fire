import React from 'react';
import { Formik } from 'formik';

import { addCategory } from '../../../common/api/requests';

import {
  handleCategoryValidation,
  highlightFieldIfErrorWillOccur,
} from './helpers/validation';
import { CustomForm, Checkboxes } from '../../common/fields';
import { ButtonWithSpace } from '../../common/buttons';

import TextField from './fields/Text';
import Checkbox from './fields/Checkbox';

const AddCategoryForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        type: 'type',
      }}
      validate={handleCategoryValidation}
      onSubmit={(values, { resetForm }) => {
        addCategory(values);
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
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddCategoryForm;
