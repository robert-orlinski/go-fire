import React from 'react';
import { Formik, Form, Field, getIn } from 'formik';
import styled, { css } from 'styled-components';

import * as helpers from './../../common/helpers/mixins';

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
  margin: 2.5rem auto 0;
`;

const FormLine = styled.p`
  width: 100%;
`;

const TextField = styled(Field)`
  ${sharedInputStyles}

  width: 100%;
  padding: 1.2rem 1rem;
  font-size: 1rem;

  &:focus {
    background-color: var(--secondary-blue);
    outline: none;
  }
`;

const Checkboxes = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 20px 0 6px;
`;

const CheckboxLabel = styled.label`
  ${sharedInputStyles}

  display: flex;
  padding: 0.8rem 1.3rem;
  margin: 0 7px 14px;

  ${helpers.pointer}

  ${CheckboxField}:checked + & {
    background-color: var(--secondary-blue);
  }
`;

const FormSubmit = styled.button`
  margin: 25px auto 0;
  padding: 15px 50px;

  border: none;
  background-color: var(--primary-blue);
  color: #fff;
  font-weight: 700;
`;

const AddingForm = () => {
  return (
    <Formik
      initialValues={{
        isIncome: true,
        name: '',
        categories: [],
        date: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <CustomForm>
          <FormLine>
            <HiddenLabel htmlFor="name">Tytuł</HiddenLabel>
            <TextField type="text" name="name" placeholder="Tytuł" />
          </FormLine>
          <Checkboxes>
            <div>
              <CheckboxField
                type="checkbox"
                name="category"
                value="speculations"
                id="speculations"
              />
              <CheckboxLabel htmlFor="speculations">Spekulacje</CheckboxLabel>
            </div>
            <div>
              <CheckboxField
                type="checkbox"
                name="category"
                value="investments"
                id="investments"
              />
              <CheckboxLabel htmlFor="investments">Inwestycje</CheckboxLabel>
            </div>
            <div>
              <CheckboxField
                type="checkbox"
                name="category"
                value="stocks"
                id="stocks"
              />
              <CheckboxLabel htmlFor="stocks">Akcje</CheckboxLabel>
            </div>
            <div>
              <CheckboxField
                type="checkbox"
                name="category"
                value="treasury-bonds"
                id="treasury-bonds"
              />
              <CheckboxLabel htmlFor="treasury-bonds">
                Obligacje Skarbowe
              </CheckboxLabel>
            </div>
          </Checkboxes>
          <FormLine>
            <HiddenLabel htmlFor="date">Data operacji</HiddenLabel>
            <TextField type="text" name="date" placeholder="Data operacji" />
          </FormLine>
          <FormSubmit type="submit" disabled={isSubmitting}>
            Dodaj
          </FormSubmit>
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddingForm;
