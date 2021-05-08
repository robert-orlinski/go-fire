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
import { CategoryType, EditEntryFormType } from '../../../common/types';

const EditEntryForm: React.FC<EditEntryFormType> = ({
  _id,
  operation,
  name,
  category,
  price,
  amount,
  date,
  description,
  formStyle,
}) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [finalMessage, setFinalMessage] = useState<string | null>(null);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <Formik
      initialValues={{
        _id: _id,
        operation: operation,
        name: name,
        category: category,
        price: price,
        amount: amount,
        date: date,
        description: description,
      }}
      validate={handleEntryAddingValidation}
      onSubmit={(values, { resetForm }) => {
        editEntry(values).then((message) => {
          setFinalMessage(message);
        });
      }}
    >
      {({ touched, errors }) => (
        <CustomForm style={formStyle}>
          <Checkboxes>
            {categories.map(({ type, name }: CategoryType, i) => {
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
            {categories.map(({ name, type }: CategoryType, i) => {
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
          <Button type="submit" as="button">
            Apply
          </Button>
          {finalMessage && <FinalMessage>{finalMessage}</FinalMessage>}
        </CustomForm>
      )}
    </Formik>
  );
};

export default EditEntryForm;
