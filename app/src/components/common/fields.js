import styled, { css } from 'styled-components';
import { Field, Form } from 'formik';

import { maxD } from '../../common/helpers/devices';

import { pointer } from '../../common/helpers/mixins';
import { VisuallyHiddenElement } from '../common/accesibility';

const sharedInputStyles = css`
  border: 0;
  border-bottom: 3px solid var(--input-theme, var(--primary-green));
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

  width: calc(70% + 1rem);

  @media ${maxD.mobileL} {
    width: calc(80% + 1rem);
  }
`;

export const CheckboxContainer = styled.div`
  width: 50%;

  @media ${maxD.tablet} {
    width: 100%;
  }
`;

export const CheckboxLabel = styled.label`
  ${sharedInputStyles}

  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(var(--input-height) * 0.9);

  padding: 0 1.3rem;
  margin: 0 0.5rem 1.5rem;

  text-align: center;

  ${pointer}

  ${VisuallyHiddenElement}:checked + & {
    background-color: var(--secondary-green);
  }

  ${VisuallyHiddenElement}:focus + & {
    border-bottom-width: 5px;
  }
`;

export const ErrorContainer = styled.span`
  display: block;

  color: var(--primary-red);
  padding-top: 1rem;
`;
