import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

import { addEntry, getCategories } from '../../../common/api/requests';
import { CustomForm, Checkboxes } from '../../common/fields';
import { SpacedButton } from '../../common/buttons';

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
        account: 'standard',
        name: '',
        type: '',
        initialPrice: '',
        initialAmount: '',
        initialDate: '',
        message: '',
      }}
      onSubmit={(values, { resetForm }) => {
        values.values = [
          {
            price: values.initialPrice,
            amount: values.initialAmount,
            date: values.initialDate,
          },
        ];

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
                type === 'account' && (
                  <Checkbox name="account" value={name} placeholder={name} />
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
            name="initialPrice"
            placeholder="Price per paper (in PLN)"
            type="number"
            step="0.01"
            min="0.01"
          />
          <TextField
            name="initialAmount"
            placeholder="Amount of papers"
            type="number"
          />
          <TextField name="initialDate" placeholder="Date" type="date" />
          <TextField
            name="message"
            placeholder="Additional info"
            component="textarea"
          />
          <SpacedButton type="submit" as="button">
            Add entry
          </SpacedButton>
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddEntryForm;
