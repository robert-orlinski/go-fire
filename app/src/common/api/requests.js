export const addEntry = async (values) => {
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

export const editEntry = async (values) => {
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

export const getEntries = async (setEntriesHandler) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/get-entries`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  response.json().then((data) => setEntriesHandler(Object.values(data)));
};

export const addCategory = async (values) => {
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

export const getCategories = async (setCategoriesHandler) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/get-categories`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );

  response.json().then((data) => setCategoriesHandler(Object.values(data)));
};

export const deleteItem = async (_id) => {
  await fetch(`${process.env.REACT_APP_API_URL}/delete-item`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id }, null, 2),
  });
};
