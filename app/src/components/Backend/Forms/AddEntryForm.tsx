import { useState, useEffect } from 'react';
import { Formik } from 'formik';

import TextField from './atoms/Text';
import Checkbox from './atoms/Checkbox';
import FinalMessage from './atoms/FinalMessage';

import { returnSlug } from '../../../common/helpers/mixins';
import {
  addEntry,
  editEntry,
  getCategories,
} from '../../../common/api/requests';

import handleEntryAddingValidation from './helpers/entryAddingValidation';
import handleFieldHighlightIfErrorWillOccur from './helpers/fieldHighlight';

import { CustomForm, Checkboxes } from '../../common/fields';
import { Button } from '../../common/buttons';
import { EntryFormProps } from '../../../common/types';

const AddEntryForm: React.FC<EntryFormProps> = ({
  _id,
  operation,
  name,
  category,
  price,
  amount,
  date,
  description,
  formStyle,
  buttonStyle,
  buttonLabel = 'Add entry',
}) => {
  const [categories, setCategories] = useState([]);
  const [finalMessage, setFinalMessage] = useState<string | null>(null);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <Formik
      initialValues={{
        _id: _id,
        operation: operation || 'purchase',
        name: name || '',
        category: category || 'stock',
        price: price || '',
        amount: amount || '',
        date: date || '',
        description: description || '',
      }}
      validate={handleEntryAddingValidation}
      onSubmit={(values, { resetForm }) => {
        const isNewEntry = values._id ? false : true;

        if (isNewEntry) {
          delete values._id;

          addEntry(values).then((message) => {
            setFinalMessage(message);
            resetForm();
          });
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
            style={handleFieldHighlightIfErrorWillOccur(
              errors,
              'name',
              touched.name
            )}
          />
          <Checkboxes>
            {categories.map(({ type, name }, i) => {
              const slug = returnSlug(name);

              return (
                type === 'category' && (
                  <Checkbox
                    name="category"
                    value={slug}
                    id={_id ? `${_id}-${slug}` : slug}
                    placeholder={name}
                    key={`category-${name}-${i}`}
                  />
                )
              );
            })}
          </Checkboxes>
          <TextField
            name="price"
            placeholder="Price per paper (in PLN)"
            type="number"
            step={0.01}
            min={0.01}
            error={errors.price}
            style={handleFieldHighlightIfErrorWillOccur(
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
            style={handleFieldHighlightIfErrorWillOccur(
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
            style={handleFieldHighlightIfErrorWillOccur(
              errors,
              'date',
              touched.date
            )}
          />
          <TextField
            name="description"
            placeholder="Additional info"
            component="textarea"
          />
          <Button type="submit" as="button" style={buttonStyle}>
            {buttonLabel}
          </Button>
          {finalMessage && <FinalMessage>{finalMessage}</FinalMessage>}
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddEntryForm;
