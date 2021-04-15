import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

import { addCategory } from '../../../common/api/requests';

import { CustomForm, Checkboxes } from '../../common/fields';
import { SpacedButton } from '../../common/buttons';

import TextField from './fields/Text';
import Checkbox from './fields/Checkbox';

const AddCategoryForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        type: '',
      }}
      onSubmit={(values, { resetForm }) => {
        addCategory(values);
        resetForm();
      }}
    >
      {({
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <CustomForm>
          <TextField name="name" placeholder="Category name (singular)" />
          <Checkboxes>
            <Checkbox
              name="type"
              value="account"
              placeholder="Account"
              type="radio"
            />
            <Checkbox
              name="type"
              value="type"
              placeholder="Investment or saving type"
              type="radio"
            />
          </Checkboxes>
          <SpacedButton type="submit" as="button">
            Add category
          </SpacedButton>
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddCategoryForm;
