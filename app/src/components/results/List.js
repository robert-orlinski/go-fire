import React, { useState, useEffect } from 'react';

const ResultsList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/get-all-entries`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      response.json().then((data) => setResults(Object.values(data)));
    });
  }, []);

  return results && results.map((result) => result.name);
};

export default ResultsList;
