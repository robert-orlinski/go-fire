import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

import { returnSlug } from '../../../common/helpers/mixins';
import { addEntry, getCategories } from '../../../common/api/requests';

import {
  handleEntryAddValidation,
  highlightFieldIfErrorWillOccur,
} from './helpers/validation';

import { CustomForm, Checkboxes } from '../../common/fields';
import { ButtonWithSpace } from '../../common/buttons';

import TextField from './atoms/Text';
import Checkbox from './atoms/Checkbox';
import FinalMessage from './atoms/FinalMessage';

const AddEntryForm = () => {
  const [categories, setCategories] = useState([]);
  const [finalMessage, setFinalMessage] = useState(null);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <Formik
      initialValues={{
        operation: 'purchase',
        name: '',
        type: 'stock',
        price: '',
        amount: '',
        date: '',
        message: '',
      }}
      validate={handleEntryAddValidation}
      onSubmit={(values, { resetForm }) => {
        addEntry(values).then((message) => {
          setFinalMessage(message);
        });

        resetForm();
      }}
    >
      {({ touched, errors }) => (
        <CustomForm>
          <Checkboxes>
            {categories.map(({ type, name }, i) => {
              const slug = returnSlug(name);

              return (
                type === 'operation' && (
                  <Checkbox
                    name="operation"
                    value={slug}
                    placeholder={name}
                    key={`operation-${name}-${i}`}
                  />
                )
              );
            })}
          </Checkboxes>
          <TextField
            name="name"
            placeholder="Title"
            type="text"
            error={errors.name}
            style={highlightFieldIfErrorWillOccur(errors, 'name', touched.name)}
          />
          <Checkboxes>
            {categories.map(
              ({ type, name }, i) =>
                type === 'type' && (
                  <Checkbox
                    name="type"
                    value={name.toLowerCase()}
                    placeholder={name}
                    key={`type-${name}-${i}`}
                  />
                )
            )}
          </Checkboxes>
          <TextField
            name="price"
            placeholder="Price per paper (in PLN)"
            type="number"
            step="0.01"
            min="0.01"
            error={errors.price}
            style={highlightFieldIfErrorWillOccur(
              errors,
              'price',
              touched.price
            )}
          />
          <TextField
            name="amount"
            placeholder="Amount of papers"
            type="number"
            error={errors.amount}
            style={highlightFieldIfErrorWillOccur(
              errors,
              'amount',
              touched.amount
            )}
          />
          <TextField
            name="date"
            placeholder="Date"
            type="date"
            error={errors.date}
            style={highlightFieldIfErrorWillOccur(errors, 'date', touched.date)}
          />
          <TextField
            name="message"
            placeholder="Additional info"
            component="textarea"
          />
          <ButtonWithSpace type="submit" as="button">
            Add entry
          </ButtonWithSpace>
          <FinalMessage message={finalMessage} />
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddEntryForm;
