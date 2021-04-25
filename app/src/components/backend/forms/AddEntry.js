import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

import { addEntry, getCategories } from '../../../common/api/requests';
import { CustomForm, Checkboxes } from '../../common/fields';
import { ButtonWithSpace } from '../../common/buttons';

import TextField from './fields/Text';
import Checkbox from './fields/Checkbox';

const AddEntryForm = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <Formik
      initialValues={{
        operation: '',
        name: '',
        type: '',
        price: '',
        amount: '',
        date: '',
        message: '',
      }}
      onSubmit={(values, { resetForm }) => {
        addEntry(values);
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
          <Checkboxes>
            {categories.map(
              ({ type, name }) =>
                type === 'operation' && (
                  <Checkbox name="operation" value={name} placeholder={name} />
                )
            )}
          </Checkboxes>
          <TextField name="name" placeholder="Title" type="text" />
          <Checkboxes>
            {categories.map(
              ({ type, name }) =>
                type === 'type' && (
                  <Checkbox name="type" value={name} placeholder={name} />
                )
            )}
          </Checkboxes>
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
          <TextField
            name="message"
            placeholder="Additional info"
            component="textarea"
          />
          <ButtonWithSpace type="submit" as="button">
            Add entry
          </ButtonWithSpace>
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddEntryForm;
