import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

import { addEntry, getCategories } from '../../../common/api/requests';
import { CustomForm, Checkboxes } from '../../common/fields';
import { SpacedButton } from '../../common/buttons';

import TextField from './fields/Text';
import Checkbox from './fields/Checkbox';

const EditEntryForm = () => {
  return (
    <Formik
      initialValues={{
        account: 'standard',
        name: '',
        type: '',
        initialPrice: '',
        initialDate: '',
        message: '',
      }}
      onSubmit={(values, { resetForm }) => {
        values.values = [
          {
            price: values.initialPrice,
            date: values.initialDate,
          },
        ];

        // editEntry(values);
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
        <CustomForm style={{ 'padding-top': '3rem' }}>
          <TextField
            name="price"
            placeholder="Price (in PLN)"
            type="number"
            step="0.01"
            min="0.01"
          />
          <TextField name="date" placeholder="Date" type="date" />
          <SpacedButton type="submit">Add entry</SpacedButton>
        </CustomForm>
      )}
    </Formik>
  );
};

export default EditEntryForm;
