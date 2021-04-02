import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled, { css } from 'styled-components';

import * as helpers from '../../common/helpers/mixins';

const HiddenLabel = styled.label`
  ${helpers.hideElement}
`;

const CheckboxField = styled(Field)`
  ${helpers.hideElement}
`;

const sharedInputStyles = css`
  border: 0;
  border-bottom: 3px solid var(--primary-blue);
  background-color: var(--secondary-gray);
`;

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;
  margin: 1.5rem auto 0;

  --input-height: 50px;
`;

const FormLine = styled.p`
  width: 100%;
  margin-bottom: 1.5rem;
`;

const TextField = styled(Field)`
  ${sharedInputStyles}

  width: 100%;
  height: 54px;

  padding: 1.2rem 1rem;
  font-size: 1rem;

  &:focus {
    border-bottom-width: 5px;
    outline: none;
  }
`;

const TextArea = styled(TextField)`
  height: 200px;
`;

const Checkboxes = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CheckboxLabel = styled.label`
  ${sharedInputStyles}

  display: flex;
  align-items: center;
  height: var(--input-height);

  padding: 0 1.3rem;
  margin: 0 7px 1.5rem;

  ${helpers.pointer}

  ${CheckboxField}:checked + & {
    background-color: var(--secondary-blue);
  }

  ${CheckboxField}:focus + & {
    border-bottom-width: 5px;
  }
`;

const FormSubmit = styled.button`
  margin: 25px auto 0;
  padding: 15px 50px;

  border: none;
  background-color: var(--primary-blue);
  color: #fff;
  font-weight: 700;

  &:focus,
  &:active {
    outline: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const AddingForm = () => {
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
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));

          fetch(`${process.env.REACT_APP_API_URL}/add-entry`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values, null, 2),
          });

          resetForm();

          setSubmitting(false);
        }, 400);
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
            <div>
              <CheckboxField
                type="radio"
                name="account"
                value="standard"
                id="standard"
              />
              <CheckboxLabel htmlFor="standard">Standard</CheckboxLabel>
            </div>
            <div>
              <CheckboxField type="radio" name="account" value="ike" id="ike" />
              <CheckboxLabel htmlFor="ike">IKE</CheckboxLabel>
            </div>
            <div>
              <CheckboxField
                type="radio"
                name="account"
                value="ikze"
                id="ikze"
              />
              <CheckboxLabel htmlFor="ikze">IKZE</CheckboxLabel>
            </div>
          </Checkboxes>
          <FormLine>
            <HiddenLabel htmlFor="name">Tytuł</HiddenLabel>
            <TextField type="text" name="name" id="name" placeholder="Tytuł" />
          </FormLine>
          <Checkboxes>
            <div>
              <CheckboxField
                type="checkbox"
                name="categories"
                value="speculations"
                id="speculations"
              />
              <CheckboxLabel htmlFor="speculations">Spekulacje</CheckboxLabel>
            </div>
            <div>
              <CheckboxField
                type="checkbox"
                name="categories"
                value="investments"
                id="investments"
              />
              <CheckboxLabel htmlFor="investments">Inwestycje</CheckboxLabel>
            </div>
            <div>
              <CheckboxField
                type="checkbox"
                name="categories"
                value="stocks"
                id="stocks"
              />
              <CheckboxLabel htmlFor="stocks">Akcje</CheckboxLabel>
            </div>
            <div>
              <CheckboxField
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
              <CheckboxField
                type="checkbox"
                name="categories"
                value="etfs"
                id="etfs"
              />
              <CheckboxLabel htmlFor="etfs">ETFy</CheckboxLabel>
            </div>
          </Checkboxes>
          <FormLine>
            <HiddenLabel htmlFor="price">Wartość całości (w zł)</HiddenLabel>
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
            <HiddenLabel htmlFor="month">Data operacji</HiddenLabel>
            <TextField type="month" name="month" />
          </FormLine>
          <FormLine>
            <HiddenLabel htmlFor="message">Dodatkowe informacje</HiddenLabel>
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

export default AddingForm;
