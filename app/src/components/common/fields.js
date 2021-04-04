import styled, { css } from 'styled-components';
import { Field, Form } from 'formik';

import { VisuallyHiddenElement, pointer } from '../../common/helpers/mixins';

const shagreenInputStyles = css`
  border: 0;
  border-bottom: 3px solid var(--primary-blue);
  background-color: var(--secondary-gray);
`;

export const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1.5rem auto 0;

  --input-height: 50px;
`;

export const FormLine = styled.p`
  width: 100%;
`;

export const TextInput = styled(Field)`
  ${shagreenInputStyles}

  width: 100%;
  height: 54px;

  padding: 1.2rem 1rem;
  font-size: 1rem;

  &:focus {
    border-bottom-width: 5px;
    outline: none;
  }

  &:is(textarea) {
    height: 200px;
  }
`;

export const Checkboxes = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CheckboxLabel = styled.label`
  ${shagreenInputStyles}

  display: flex;
  align-items: center;
  height: var(--input-height);

  padding: 0 1.3rem;
  margin: 0 7px 1.5rem;

  ${pointer}

  ${VisuallyHiddenElement}:checked + & {
    background-color: var(--secondary-blue);
  }

  ${VisuallyHiddenElement}:focus + & {
    border-bottom-width: 5px;
  }
`;

export const FormSubmit = styled.button`
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
