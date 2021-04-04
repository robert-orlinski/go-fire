const ResultsList = ({ results }) => {
  return results && results.map((result) => result.name);
};

export default ResultsList;
