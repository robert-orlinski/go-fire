import { Dispatch, SetStateAction } from 'react';
import {
  AddedCategoryType,
  CategoryType,
  EntryType,
  ExistingEntryType,
} from '../types';

export const addEntry = async (values: EntryType) => {
  try {
    await fetch(`${process.env.REACT_APP_API_URL}/add-entry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values, null, 2),
    });

    return 'Entry has been added! 🌷';
  } catch (error) {
    return `There is an error: ${error} 🙈 `;
  }
};

export const editEntry = async (values: ExistingEntryType) => {
  try {
    await fetch(`${process.env.REACT_APP_API_URL}/edit-entry`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values, null, 2),
    });

    return 'Entry has been edited 😌';
  } catch (error) {
    return `There is an error: ${error} 🙈 `;
  }
};

export const getEntries = async (
  setEntriesHandler: Dispatch<SetStateAction<ExistingEntryType[]>>
) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/get-entries`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  response.json().then((data) => setEntriesHandler(data));
};

export const addCategory = async (values: AddedCategoryType) => {
  try {
    await fetch(`${process.env.REACT_APP_API_URL}/add-category`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values, null, 2),
    });

    return 'Category has been added! 🌷';
  } catch (error) {
    return `There is an error: ${error} 🙈 `;
  }
};

export const getCategories = async (
  setCategoriesHandler: Dispatch<SetStateAction<CategoryType[]>>
) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/get-categories`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );

  response.json().then((data) => {
    setCategoriesHandler(data);
  });
};

export const deleteItem = async (_id: number) => {
  await fetch(`${process.env.REACT_APP_API_URL}/delete-item`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id }, null, 2),
  });
};
