import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';

import { VisuallyHiddenElement } from '../../common/helpers/mixins';

import {
  CustomForm,
  FormLine,
  TextField,
  TextArea,
  Checkboxes,
  CheckboxLabel,
  FormSubmit,
} from '../../components/common/fields';

const AddCategoryForm = () => {
  const [categories, setCategories] = useState([]);

  const addNewEntry = (values, resetForm) => {
    fetch(`${process.env.REACT_APP_API_URL}/add-entry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values, null, 2),
    });

    resetForm();
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/get-categories`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      response.json().then((data) => setCategories(data));
    });
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
      onSubmit={(values, { resetForm }) => addNewEntry(values, resetForm)}
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
            <div>
              <VisuallyHiddenElement
                type="radio"
                name="account"
                value="standard"
                id="standard"
              />
              <CheckboxLabel htmlFor="standard">Standard</CheckboxLabel>
            </div>
            <div>
              <VisuallyHiddenElement
                type="radio"
                name="account"
                value="ike"
                id="ike"
              />
              <CheckboxLabel htmlFor="ike">IKE</CheckboxLabel>
            </div>
            <div>
              <VisuallyHiddenElement
                type="radio"
                name="account"
                value="ikze"
                id="ikze"
              />
              <CheckboxLabel htmlFor="ikze">IKZE</CheckboxLabel>
            </div>
          </Checkboxes>
          <FormLine>
            <VisuallyHiddenElement as="label" htmlFor="name">
              Tytuł
            </VisuallyHiddenElement>
            <TextField type="text" name="name" id="name" placeholder="Tytuł" />
          </FormLine>
          <Checkboxes>
            <div>
              <VisuallyHiddenElement
                type="checkbox"
                name="categories"
                value="investments"
                id="investments"
              />
              <CheckboxLabel htmlFor="investments">Inwestycje</CheckboxLabel>
            </div>
            <div>
              <VisuallyHiddenElement
                type="checkbox"
                name="categories"
                value="speculations"
                id="speculations"
              />
              <CheckboxLabel htmlFor="speculations">Spekulacje</CheckboxLabel>
            </div>
            <div>
              <VisuallyHiddenElement
                type="checkbox"
                name="categories"
                value="stocks"
                id="stocks"
              />
              <CheckboxLabel htmlFor="stocks">Akcje</CheckboxLabel>
            </div>
            <div>
              <VisuallyHiddenElement
                type="checkbox"
                name="categories"
                value="treasury-bonds"
                id="treasury-bonds"
              />
              <CheckboxLabel htmlFor="treasury-bonds">
                Obligacje Skarbowe
              </CheckboxLabel>
            </div>
            <div>
              <VisuallyHiddenElement
                type="checkbox"
                name="categories"
                value="etfs"
                id="etfs"
              />
              <CheckboxLabel htmlFor="etfs">ETFy</CheckboxLabel>
            </div>
          </Checkboxes>
          <FormLine>
            <VisuallyHiddenElement as="label" htmlFor="price">
              Wartość całości (w zł)
            </VisuallyHiddenElement>
            <TextField
              type="number"
              step="0.01"
              min="0.01"
              name="price"
              id="price"
              placeholder="Wartość całości (w zł)"
            />
          </FormLine>
          <FormLine>
            <VisuallyHiddenElement as="label" htmlFor="month">
              Data operacji
            </VisuallyHiddenElement>
            <TextField type="month" name="month" />
          </FormLine>
          <FormLine>
            <VisuallyHiddenElement as="label" htmlFor="message">
              Dodatkowe informacje
            </VisuallyHiddenElement>
            <TextArea
              component="textarea"
              id="message"
              name="message"
              placeholder="Dodatkowe informacje"
            ></TextArea>
          </FormLine>
          <FormSubmit type="submit">Dodaj</FormSubmit>
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddCategoryForm;
