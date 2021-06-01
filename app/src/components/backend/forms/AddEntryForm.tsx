import { useState, useEffect } from 'react';
import { Formik } from 'formik';

import TextField from './atoms/Text';
import Checkbox from './atoms/Checkbox';
import FinalMessage from './atoms/FinalMessage';

import { returnSlug } from '../../../common/helpers/mixins';
import { addEntry, getCategories } from '../../../common/api/requests';

import handleEntryAddingValidation from './helpers/entryAddingValidation';
import handleFieldHighlightIfErrorWillOccur from './helpers/fieldHighlight';

import { CustomForm, Checkboxes } from '../../common/fields';
import { Button } from '../../common/buttons';
import { CategoryType } from '../../../common/types';

const AddEntryForm = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [finalMessage, setFinalMessage] = useState<string | null>(null);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <Formik
      initialValues={{
        operation: 'purchase',
        name: '',
        category: 'stock',
        price: '',
        amount: '',
        date: '',
        description: '',
      }}
      validate={handleEntryAddingValidation}
      onSubmit={(values, { resetForm }) => {
        addEntry(values).then((message) => {
          setFinalMessage(message);

          resetForm();
        });
      }}
    >
      {({ touched, errors }) => (
        <CustomForm>
          <Checkboxes>
            {categories.map(({ type, name }: CategoryType, i) => {
              const slug = returnSlug(name);

              return (
                type === 'operation' && (
                  <Checkbox
                    name="operation"
                    value={slug}
                    id={slug}
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
            {categories.map(({ name, type }: CategoryType, i) => {
              const slug = returnSlug(name);

              return (
                type === 'category' && (
                  <Checkbox
                    name="category"
                    value={slug}
                    id={slug}
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
          <Button type="submit" as="button" style={{ marginTop: '1rem' }}>
            Add entry
          </Button>
          {finalMessage && <FinalMessage>{finalMessage}</FinalMessage>}
        </CustomForm>
      )}
    </Formik>
  );
};

export default AddEntryForm;
