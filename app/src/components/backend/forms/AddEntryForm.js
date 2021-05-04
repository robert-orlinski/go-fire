import { useState, useEffect } from 'react';
import { Formik } from 'formik';

import TextField from './Atoms/Text';
import Checkbox from './Atoms/Checkbox';
import FinalMessage from './Atoms/FinalMessage';

import { returnSlug } from '../../../common/helpers/mixins';
import {
  addEntry,
  editEntry,
  getCategories,
} from '../../../common/api/requests';
import {
  handleEntryAddValidation,
  highlightFieldIfErrorWillOccur,
} from './Helpers/validation';

import { CustomForm, Checkboxes } from '../../Common/fields';
import { Button } from '../../Common/buttons';

const AddEntryForm = ({
  _id,
  operation,
  name,
  type,
  price,
  amount,
  date,
  message,
  formStyle,
  buttonStyle,
  buttonLabel = 'Add entry',
}) => {
  const [categories, setCategories] = useState([]);
  const [finalMessage, setFinalMessage] = useState(null);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <Formik
      initialValues={{
        _id: _id || null,
        operation: operation || 'purchase',
        name: name || '',
        type: type || 'stock',
        price: price || '',
        amount: amount || '',
        date: date || '',
        message: message || '',
      }}
      validate={handleEntryAddValidation}
      onSubmit={(values, { resetForm }) => {
        const isNewEntry = values._id ? false : true;

        if (isNewEntry) {
          delete values._id;

          addEntry(values).then((message) => {
            setFinalMessage(message);
          });

          resetForm();
        } else {
          editEntry(values).then((message) => {
            setFinalMessage(message);
          });
        }
      }}
    >
      {({ touched, errors }) => (
        <CustomForm style={formStyle}>
          <Checkboxes>
            {categories.map(({ type, name }, i) => {
              const slug = returnSlug(name);

              return (
                type === 'operation' && (
                  <Checkbox
                    name="operation"
                    value={slug}
                    id={_id ? `${_id}-${slug}` : slug}
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
            {categories.map(({ type, name }, i) => {
              const slug = returnSlug(name);

              return (
                type === 'type' && (
                  <Checkbox
                    name="type"
                    value={slug}
                    id={_id ? `${_id}-${slug}` : slug}
                    placeholder={name}
                    key={`type-${name}-${i}`}
                  />
                )
              );
            })}
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
          <Button type="submit" as="button" style={buttonStyle}>
            {buttonLabel}
          </Button>
          <FinalMessage message={finalMessage} />
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddEntryForm;
