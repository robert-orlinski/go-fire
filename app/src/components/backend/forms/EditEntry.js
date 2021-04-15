import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

import { editEntry } from '../../../common/api/requests';
import { CustomForm } from '../../common/fields';
import { Button } from '../../common/buttons';

import TextField from './fields/Text';

const EditEntryForm = ({ id, style }) => {
  return (
    <Formik
      initialValues={{
        price: '',
        amount: '',
        date: '',
      }}
      onSubmit={(values, { resetForm }) => {
        editEntry({ id, values });
        // resetForm();
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
        <CustomForm style={style}>
          <TextField
            name="price"
            placeholder="Price per paper (in PLN)"
            type="number"
            step="0.01"
            min="0.01"
          />
          <TextField
            name="amount"
            placeholder="Amount of papers"
            type="number"
          />
          <TextField name="date" placeholder="Date" type="date" />
          <Button type="submit" as="button">
            Apply
          </Button>
        </CustomForm>
      )}
    </Formik>
  );
};

export default EditEntryForm;
