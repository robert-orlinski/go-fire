export const addEntry = (values) => {
  fetch(`${process.env.REACT_APP_API_URL}/add-entry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values, null, 2),
  });
};

export const getEntries = async (setResultsFunction) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/get-all-entries`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );

  response.json().then((data) => setResultsFunction(Object.values(data)));
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

export const getCategories = async (setCategories) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/get-categories`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );

  response.json().then((data) => setCategories(data));
};

export const editEntry = (values) => {
  fetch(`${process.env.REACT_APP_API_URL}/edit-entry`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values, null, 2),
  });
};

export const deleteEntry = (id) => {
  fetch(`${process.env.REACT_APP_API_URL}/delete-entry`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }, null, 2),
  });
};
