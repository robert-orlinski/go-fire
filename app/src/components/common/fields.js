import styled, { css } from 'styled-components';
import { Field, Form } from 'formik';

import { pointer } from '../../common/helpers/mixins';
import { VisuallyHiddenElement } from '../common/accesibility';

const sharedInputStyles = css`
  border: 0;
  border-bottom: 3px solid var(--primary-green);
  background-color: var(--secondary-gray);
`;

export const Label = styled.label`
  text-align: center;
`;

export const CustomForm = styled(Form)`
  --input-height: 54px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1.5rem auto 0;
`;

export const FormLine = styled.p`
  width: 100%;
`;

export const TextInput = styled(Field)`
  ${sharedInputStyles}

  width: 100%;
  height: var(--input-height);

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

  width: 70%;
`;

export const CheckboxContainer = styled.div`
  width: 50%;
`;

export const CheckboxLabel = styled.label`
  ${sharedInputStyles}

  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(var(--input-height) * 0.9);

  padding: 0 1.3rem;
  margin: 0 7px 1.5rem;

  ${pointer}

  ${VisuallyHiddenElement}:checked + & {
    background-color: var(--secondary-green);
  }

  ${VisuallyHiddenElement}:focus + & {
    border-bottom-width: 5px;
  }
`;
