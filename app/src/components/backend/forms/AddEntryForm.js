import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

import { addEntry, getCategories } from '../../../common/api/requests';
import { CustomForm, Checkboxes, FormSubmit } from '../../common/fields';

import TextField from './fields/Text';
import Checkbox from './fields/Checkbox';

const AddEntryForm = () => {
  const [todayDate, setTodayDate] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, [categories]);

  return (
    <Formik
      initialValues={{
        account: 'standard',
        name: '',
        categories: [],
        price: '',
        month: '',
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
            {categories.map((category) => {
              const { name } = category;
              const value = name.toLowerCase().replace(' ', '-');

              return (
                category.type === 'account' && (
                  <Checkbox name="account" value={value} placeholder={name} />
                )
              );
            })}
          </Checkboxes>
          <TextField name="name" placeholder="Title" type="text" />
          <Checkboxes>
            {categories.map((category) => {
              const { name } = category;
              const value = name.toLowerCase().replace(' ', '-');

              return (
                category.type === 'type' && (
                  <Checkbox name="type" value={value} placeholder={name} />
                )
              );
            })}
          </Checkboxes>
          <TextField
            name="price"
            placeholder="Price (in PLN)"
            type="number"
            step="0.01"
            min="0.01"
          />
          <TextField name="month" placeholder="Date" type="month" />
          <TextField
            name="message"
            placeholder="Additional info"
            component="textarea"
          />
          <FormSubmit type="submit">Add entry</FormSubmit>
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddEntryForm;
