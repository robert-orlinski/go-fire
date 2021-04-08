export const addEntry = (values) => {
  fetch(`${process.env.REACT_APP_API_URL}/add-entry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values, null, 2),
  });
};

export const addCategory = (values) => {
  fetch(`${process.env.REACT_APP_API_URL}/add-category`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values, null, 2),
  });
};

export const getCategories = (setCategories) => {
  fetch(`${process.env.REACT_APP_API_URL}/get-categories`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    response.json().then((data) => setCategories(data));
  });
};

export const getEntries = (setResults) => {
  fetch(`${process.env.REACT_APP_API_URL}/get-all-entries`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    response.json().then((data) => setResults(Object.values(data)));
  });
};
